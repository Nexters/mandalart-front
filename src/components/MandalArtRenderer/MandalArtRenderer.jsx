import React, { Component } from 'react';
import { drawMandalArt } from './CanvasObjects';

class MandalArtRenderer extends Component {
  canvas = React.createRef();

  state = {
    wWidth: window.innerWidth,
    wHeight: window.innerHeight,
  };

  // 온전히 캔버스로 동작하기 위함
  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    window.addEventListener('resize', this.checkWidowSize);
    this.renderer = setInterval(this.canvasFrameEvent, 1000 / 30);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkWidowSize);
    clearInterval(this.renderer);
  }

  checkWidowSize = () => {
    this.setState({
      wWidth: window.innerWidth,
      wHeight: window.innerHeight,
    });
  };

  canvasFrameEvent = () => {
    const ctx = this.canvas.current.getContext('2d');
    const { wWidth, wHeight } = this.state;
    ctx.clearRect(0, 0, wWidth, wHeight);

    // sjq
    const lengthOffset = wWidth > 850 ? 850 : (wWidth * 10) / 12;
    // 만다라트 업데이트 로직

    drawMandalArt(
      ctx,
      wWidth / 2,
      wHeight / 2,
      lengthOffset / 9,
      this.props.data,
    );
  };

  render() {
    const { wWidth, wHeight } = this.state;
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
