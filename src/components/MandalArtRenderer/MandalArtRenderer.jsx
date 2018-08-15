import React, { Component } from 'react';
import throttle from 'lodash/throttle';
import { drawMandalArt, MandalArtFragment, utils } from './Canvas';

const HEIGHT_OFFSET = 64;

class MandalArtRenderer extends Component {
  mounted = false;

  canvas = React.createRef();
  mandalFragArray = [...new Array(9)].map(() =>
    [...new Array(9)].map(() => new MandalArtFragment()),
  );

  x = 0;
  y = 0;
  lengthOffset = 0;

  // render variables
  state = {
    wWidth: window.innerWidth,
    wHeight: window.innerHeight,
    zoomStatus: {
      isZoomed: false,
      zoomLevel: 1,
      selectedArea: {
        xCoord: 0,
        yCoord: 0,
      },
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
    const {
      zoomStatus: { zoomLevel, selectedArea },
    } = this.state;
    const translateValue = this.lengthOffset * 4.5 * Math.sqrt(2);
    const { x, y } = utils.translatedMousePosition(
      e.clientX,
      e.clientY,
      zoomLevel,
      selectedArea.xCoord * translateValue,
      selectedArea.yCoord * translateValue,
    );
    this.setState({
      mouseX: x,
      mouseY: y,
    });
  };

  // 마우스가 클릭한 구역을 리턴
  handleMouseClick = () => {
    const { x, y, lengthOffset: length } = this;
    const { mouseX, mouseY, zoomStatus } = this.state;
    const xCoord = utils.calPointedArea(mouseX, length, x);
    const yCoord = utils.calPointedArea(mouseY, length, y);
    if (!zoomStatus.isZoomed) {
      this.setState({
        zoomStatus: {
          isZoomed: true,
          zoomLevel: 2,
          selectedArea: {
            xCoord,
            yCoord,
          },
        },
      });
    }
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
      this.x = wWidth / 2;
      this.y = (wHeight + HEIGHT_OFFSET) / 2;

      // 화면에 맞춰서 랜더하기 위함
      this.lengthOffset = (wWidth > 850 ? 850 : (wWidth * 10) / 12) / 9;

      // 전체 확대용 만다라트 로직
      ctx.clearRect(0, 0, wWidth, wHeight);
      drawMandalArt(
        ctx,
        this.x,
        this.y,
        this.lengthOffset,
        data,
        [mouseX, mouseY],
        mandalFragArray,
      );
    }
  };

  render() {
    const { wWidth, wHeight } = this.state;
    const { handleMouseHover, handleMouseClick } = this;
    return (
      <canvas
        onClick={handleMouseClick}
        onMouseMove={handleMouseHover}
        ref={this.canvas}
        width={wWidth}
        height={wHeight}
      />
    );
  }
}

export default MandalArtRenderer;
