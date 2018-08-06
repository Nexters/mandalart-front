import React, { Component } from 'react';
import { drawMandalArt } from './CanvasObjects';

class MandalArtRenderer extends Component {
  canvas = React.createRef();

  // render variables
  wWidth = window.innerWidth;
  wHeight = window.innerHeight;
  zoomStatus = {
    isZoomed: false,
    isZoomFinished: false,
    target: { x: 0, y: 0 },
  };

  // 온전히 캔버스로 동작하기 위함
  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this.checkWidowSize();
    window.addEventListener('resize', this.checkWidowSize);
    this.renderer = setInterval(this.canvasFrameEvent, 1000 / 30);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkWidowSize);
    clearInterval(this.renderer);
  }

  checkWidowSize = () => {
    this.wWidth = window.innerWidth;
    this.wHeight = window.innerHeight * 0.93;
  };

  /*
    TODO: 캔버스 기능구현
    1. 캔버스 확대
      * 화면상 ui에 맞춰서 옆에 3*3으로 확대되도록!
    2. 작성중인 캔버스 반짝거리게
    3. 커서...?
  */
  canvasFrameEvent = () => {
    const ctx = this.canvas.current.getContext('2d');
    const { wWidth, wHeight } = this;
    let x = wWidth / 2;
    let y = wHeight / 2;
    ctx.clearRect(0, 0, wWidth, wHeight);

    // 화면에 맞춰서 랜더하기 위함
    const lengthOffset = wWidth > 850 ? 850 : (wWidth * 10) / 12;

    // 전체 확대용 만다라트 로직
    drawMandalArt(ctx, x, y, lengthOffset / 9, this.props.data);
    // 만다라트 업데이트 로직
  };

  render() {
    const { wWidth, wHeight } = this;
    return (
      <canvas
        style={{ position: 'fixed', zIndex: -1 }}
        ref={this.canvas}
        width={wWidth}
        height={wHeight}
      />
    );
  }
}

export default MandalArtRenderer;
