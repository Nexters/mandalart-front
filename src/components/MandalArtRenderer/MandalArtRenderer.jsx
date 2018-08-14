import React, { Component } from 'react';
import { drawMandalArt, MandalArtFragment } from './Canvas';

const HEIGHT_OFFSET = 64;

class MandalArtRenderer extends Component {
  mounted = false;

  canvas = React.createRef();
  mandalFragArray = [...new Array(9)].map(() =>
    [...new Array(9)].map(() => new MandalArtFragment()),
  );

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
  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this.checkWidowSize(this.props, this.state);
    window.addEventListener('resize', this.checkWidowSize);
    this.mounted = true;
    this.canvasFrameEvent();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkWidowSize);
    this.mounted = false;
  }

  handleMouseHover = e => {
    this.setState({
      mouseX: e.clientX,
      mouseY: e.clientY,
    });
  };

  handleMouseClick = (x, y, length) => e => {
    console.log(e.clientX, e.clientY);
  };

  checkWidowSize = () => {
    this.setState({
      wWidth: window.innerWidth,
      wHeight: window.innerHeight,
    });
  };

  /*
    TODO: 캔버스 기능구현
    1. 캔버스 확대
      * 화면상 ui에 맞춰서 옆에 3*3으로 확대되도록!
      * 선택된  만달아트 조각이 3 * 3에 맞춰서 확대되도록...
    4. 살려줘....
  */
  canvasFrameEvent = () => {
    if (this.mounted) {
      requestAnimationFrame(this.canvasFrameEvent);
      const { mandalFragArray } = this;
      const { data } = this.props;
      const { wWidth, wHeight, mouseX, mouseY } = this.state;
      const ctx = this.canvas.current.getContext('2d');
      const x = wWidth / 2;
      const y = (wHeight + HEIGHT_OFFSET) / 2;

      // 화면에 맞춰서 랜더하기 위함
      const lengthOffset = wWidth > 850 ? 850 : (wWidth * 10) / 12;

      // 전체 확대용 만다라트 로직
      ctx.clearRect(0, 0, wWidth, wHeight);
      drawMandalArt(
        ctx,
        x,
        y,
        lengthOffset / 9,
        data,
        [mouseX, mouseY],
        mandalFragArray,
      );
      // 만다라트 업데이트 로직
    }
  };

  render() {
    const { wWidth, wHeight } = this.state;
    const { handleMouseHover } = this;
    return (
      <canvas
        onMouseMove={handleMouseHover}
        style={{ position: 'fixed' }}
        ref={this.canvas}
        width={wWidth}
        height={wHeight}
      />
    );
  }
}

export default MandalArtRenderer;
