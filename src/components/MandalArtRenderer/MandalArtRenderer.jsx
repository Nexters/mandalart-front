import React, { Component } from 'react';
import flatten from 'lodash/flatten';
import { drawMandalArt, MandalArtFragment, utils } from './Canvas';

const MIN_SIZE = 550;
const ZOOM_LEVEL = 4;
const FPS = 60;

class MandalArtRenderer extends Component {
  mounted = false;

  // for modify fps
  frameCount = 0;
  fpsInterval = 1000 / FPS;
  then = window.performance.now();

  // canvas
  canvas = React.createRef();
  offScreenCvs = document.createElement('canvas');
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
    // 윈도우 사이즈에 맞게 조정
    this.checkWidowSize();
    // 윈도우 사이즈 조정되면 그에 맞게 변화
    window.addEventListener('resize', this.checkWidowSize);
    this.mounted = true;
    // 프레임 조절을 위함
    this.startTime = this.then;
    this.now = this.then;
    // 그리기 시작
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
    // 마우스 포지션을 캔버스에 맞게 조정
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
    // 줌 되지 않았을때는 줌을 위한 변화
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
      return;
    }
    flatten(this.mandalFragArray).forEach(mandal =>
      mandal.onClick(mouseX, mouseY, this.x, this.y, this.lengthOffset, this.props.selectMandal),
    );
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
    this.offScreenCvs.width = this.wWidth;
    this.offScreenCvs.height = this.wHeight;
    this.init = Math.floor(
      (this.wWidth > MIN_SIZE ? 550 : (this.wWidth * 10) / 12) / 9,
    );
    this.lengthOffset = this.init;
    this.x = this.wWidth / 2;
    this.y = this.wHeight / 2 - 100;
  };

  /*
    TODO: 캔버스 기능구현
    1. 캔버스 확대
      * 화면상 ui에 맞춰서 옆에 3*3으로 확대되도록!
      * 선택된  만달아트 조각이 3 * 3에 맞춰서 확대되도록...
    4. 살려줘....
  */
  canvasFrameEvent = newtime => {
    if (!this.mounted) return;

    requestAnimationFrame(this.canvasFrameEvent);

    this.now = newtime;
    this.elapsed = this.now - this.then;
    if (this.elapsed > this.fpsInterval) {
      this.then = this.now - (this.elapsed % this.fpsInterval);
      const { mandalFragArray } = this;
      const { data } = this.props;
      const { wWidth, wHeight, mouseX, mouseY } = this;
      const ctx = this.canvas.current.getContext('2d');
      // 전체 확대용 만다라트 로직
      ctx.clearRect(0, 0, wWidth, wHeight);
      this.offScreenCvs.getContext('2d').clearRect(0, 0, wWidth, wHeight);
      drawMandalArt(
        ctx,
        this.x,
        this.y,
        this.lengthOffset,
        data,
        [mouseX, mouseY],
        mandalFragArray,
        this.offScreenCvs,
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
