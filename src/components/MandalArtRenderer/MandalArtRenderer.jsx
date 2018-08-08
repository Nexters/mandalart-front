import React, { Component } from 'react';
import isEqual from 'lodash.isequal';
import { drawMandalArt } from './Canvas/MandalObjects';

class MandalArtRenderer extends Component {
  canvas = React.createRef();

  // render variables
  state = {
    wWidth: window.innerWidth,
    wHeight: window.innerHeight,
    zoomStatus: {
      isZoomed: false,
      isZoomFinished: false,
      target: { x: 0, y: 0 },
    },
    mouseX: 0,
    mouseY: 0,
  };

  // 온전히 캔버스로 동작하기 위함
  // 리액트 랜더를 막고, 캔버스 랜더를 돌림
  shouldComponentUpdate(nextProps, nextState) {
    if (!(isEqual(nextProps, this.props) && isEqual(nextState, this.state))) {
      this.canvasFrameEvent();
    }
    return false;
  }

  componentDidMount() {
    this.checkWidowSize();
    window.addEventListener('resize', this.checkWidowSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkWidowSize);
  }

  handleMouseClick = e => {
    this.setState({
      mouseX: e.clientX,
      mouseY: e.clientY,
    });
  };

  checkWidowSize = () => {
    this.setState({
      wWidth: window.innerWidth,
      wHeight: window.innerHeight * 0.93,
    });
  };

  /*
    TODO: 캔버스 기능구현
    1. 캔버스 확대
      * 화면상 ui에 맞춰서 옆에 3*3으로 확대되도록!
      * 선택된  만달아트 조각이 3 * 3에 맞춰서 확대되도록...
    2. 작성중인 캔버스 반짝거리게
    3. 커서...?
    4. 살려줘....
  */
  canvasFrameEvent = () => {
    const ctx = this.canvas.current.getContext('2d');
    const { wWidth, wHeight } = this.state;
    let x = wWidth / 2;
    let y = wHeight / 2;

    // 화면에 맞춰서 랜더하기 위함
    const lengthOffset = wWidth > 850 ? 850 : (wWidth * 10) / 12;

    // 전체 확대용 만다라트 로직
    ctx.clearRect(0, 0, wWidth, wHeight);
    drawMandalArt(ctx, x, y, lengthOffset / 9, this.props.data, [
      this.state.mouseX,
      this.state.mouseY,
    ]);
    // 만다라트 업데이트 로직
  };

  render() {
    const { wWidth, wHeight } = this.state;
    const { handleMouseMove } = this;
    return (
      <canvas
        onMouseDown={handleMouseMove}
        style={{ position: 'fixed' }}
        ref={this.canvas}
        width={wWidth}
        height={wHeight}
      />
    );
  }
}

export default MandalArtRenderer;
