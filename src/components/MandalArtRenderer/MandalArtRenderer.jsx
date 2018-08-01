import React, { Component } from 'react';
import { drawMandalArt } from './CanvasObjects';

class MandalArtRenderer extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  state = {
    wWidth: window.innerWidth,
    wHeight: window.innerHeight,
  };

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
    drawMandalArt(ctx, wWidth / 2, wHeight / 2, wHeight / 10);
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
