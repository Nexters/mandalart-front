import roundRect from './RoundRect';
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
    const { color } = data;
    ctx.strokeStyle = 'transparent';
    ctx.fillStyle = color;
    roundRect(ctx, x, y, (length * 9) / 10, (length * 9) / 10, 5);
  }

  _drawText(ctx, x, y, data) {
    const { text } = data;
    ctx.font = '16px';
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.fillText(text, x, y);
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
    )
      onClickHandler(this.depth, this.number);
  };

  draw(ctx, x, y, length, data, mousePos, centerX, centerY, dataPos) {
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
    this._drawText(ctx, x, y, data);
  }
}

export default MandalArtFragment;
