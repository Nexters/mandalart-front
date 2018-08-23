import roundRect from './RoundRect';
import renderText from './renderText';
import { isPointInsideMandal } from './utils';

const HOVER_MAX_LEVEL = 1.08;

class MandalArtFragment {
  // hover Zoom
  hoverLevel = 1;

  _setHover(isHover, length) {
    if (isHover) {
      this.hoverLevel =
        this.hoverLevel < HOVER_MAX_LEVEL
          ? this.hoverLevel + 0.01
          : HOVER_MAX_LEVEL;
      return length * this.hoverLevel;
    }
    this.hoverLevel = 1;
    return length;
  }

  _drawRect(ctx, x, y, length, data) {
    ctx.strokeStyle = 'transparent';
    ctx.fillStyle = this.selected ? '#FFFFFF' : data.color;
    roundRect(ctx, x, y, (length * 9) / 10, (length * 9) / 10, 5);
  }

  _drawText(ctx, x, y, data, length) {
    const { text } = data;
    ctx.font = '2rem Arial';
    ctx.fillStyle = this.selected ? data.color : '#FFFFFF';
    ctx.textAlign = 'left';
    renderText(ctx, text, x - length / 2 + 20, y - length / 2 + 20, length);
  }

  onClick = (mouseX, mouseY, centerX, centerY, length, onClickHandler) => {
    if (
      isPointInsideMandal(
        this.x,
        this.y,
        length,
        mouseX,
        mouseY,
        centerX,
        centerY,
      )
    ) {
      onClickHandler(this.depth, this.number, this.x, this.y, length);
      this.selected = true;
      return;
    }
    this.selected = false;
  };

  draw(
    ctx,
    x,
    y,
    length,
    data,
    mousePos,
    centerX,
    centerY,
    dataPos,
    zoomStatus,
  ) {
    if (!this.depth) {
      this.number = dataPos.number;
      this.depth = dataPos.depth;
    }
    this.x = x;
    this.y = y;
    const drawLength = this._setHover(
      isPointInsideMandal(
        x,
        y,
        length,
        mousePos[0],
        mousePos[1],
        centerX,
        centerY,
      ),
      length,
    );
    this._drawRect(ctx, x, y, drawLength, data);
    zoomStatus.isZoomed && this._drawText(ctx, x, y, data, length);
  }
}

export default MandalArtFragment;
