import React, { Component } from 'react';
import { drawMandalArt, MandalArtFragment, utils } from './Canvas';

const MIN_SIZE = 550;
const ZOOM_LEVEL = 4;

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
  wWidth = window.innerWidth;
  wHeight = window.innerHeight;
  zoomStatus = {
    isZoomed: false,
    zoomLevel: 1,
    zoomCorrect: 1,
    selectedArea: {
      xCoord: 0,
      yCoord: 0,
    },
  };
  mouseX = 0;
  mouseY = 0;

  // 온전히 캔버스로 동작하기 위함
  // 리액트 랜더를 막고, 캔버스 랜더를 돌림
  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this.checkWidowSize();
    window.addEventListener('resize', this.checkWidowSize);
    this.mounted = true;
    this.canvasFrameEvent();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkWidowSize);
    this.mounted = false;
  }

  handleMouseHover = e => {
    const { canvas } = this;
    const {
      zoomStatus: { selectedArea },
    } = this;
    const { canvasX, canvasY } = this.mapMousePos(canvas.current, e);
    const translateValue = Math.sqrt(this.init * 9 * Math.sqrt(2));
    const zoomLevel = this.zoomStatus.isZoomed ? ZOOM_LEVEL : 1;
    this.mouseX =
      (this.x + translateValue * selectedArea.xCoord - canvasX) /
      (this.init * 4.5 * zoomLevel);
    this.mouseY =
      (this.y + translateValue * selectedArea.yCoord - canvasY) /
      (this.init * 4.5 * zoomLevel);
  };

  // 마우스가 클릭한 구역을 리턴
  handleMouseClick = () => {
    const { x, y, lengthOffset: length, mouseX, mouseY } = this;
    const xCoord = utils.calPointedArea(mouseX, length, x);
    const yCoord = utils.calPointedArea(mouseY, length, y);
    if (!this.zoomStatus.isZoomed) {
      this.zoomStatus = {
        isZoomed: true,
        selectedArea: {
          xCoord,
          yCoord,
        },
      };
      const transValue = Math.floor(this.init * 9 * Math.sqrt(2));
      this.x = x - transValue * this.zoomStatus.selectedArea.xCoord;
      this.y = y - transValue * this.zoomStatus.selectedArea.yCoord;
    }
  };

  mapMousePos = (canvas, event) => {
    const position = canvas.getBoundingClientRect();
    return {
      canvasX: event.clientX - position.left,
      canvasY: event.clientY - position.top,
    };
  };

  checkWidowSize = () => {
    // 화면에 맞춰서 랜더하기 위함
    this.wWidth = window.innerWidth;
    this.wHeight = window.innerHeight;
    this.init = Math.floor(
      (this.wWidth > MIN_SIZE ? 550 : (this.wWidth * 10) / 12) / 9,
    );
    this.lengthOffset = this.init;
    this.x = this.wWidth / 2;
    this.y = this.wHeight / 2;
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
      const { wWidth, wHeight, mouseX, mouseY } = this;
      const ctx = this.canvas.current.getContext('2d');

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
      this.zoomCanvas(ctx);
    }
  };

  zoomCanvas = ctx => {
    if (this.zoomStatus.isZoomed) {
      if (this.lengthOffset < this.init * ZOOM_LEVEL) {
        this.lengthOffset += Math.floor((this.init * ZOOM_LEVEL) / 10);
      } else {
        this.lengthOffset = this.init * ZOOM_LEVEL;
      }
    } else {
      this.resetCanvas(ctx);
    }
  };

  resetCanvas = ctx => {
    ctx.restore();
    this.zoomStatus = {
      isZoomed: false,
      selectedArea: {
        xCoord: 0,
        yCoord: 0,
      },
    };
  };

  render() {
    const { wWidth, wHeight } = this;
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
