import { getCurrentMandalArt, isMouseInside } from './utils';
import roundRect from './RoundRect';

// 한 칸랜더
const mandalArtFragment = (ctx, x, y, length, data, mousePos) => {
  const { color, text } = data;
  ctx.strokeStyle = 'transparent';
  if (isMouseInside(x, y, length, mousePos[0], mousePos[1])) {
    ctx.fillStyle = '#FFFFFF';
    roundRect(ctx, x, y, (length * 19) / 20, (length * 19) / 20, 5, true);
  }
  ctx.fillStyle = color;
  roundRect(ctx, x, y, (length * 9) / 10, (length * 9) / 10, 5, true);
  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = 'center';
  ctx.fillText(text, x + length / 2, y + length / 2);
};

// 3x3랜더
const drawMandalGroup = (ctx, x, y, length, data, mousePos) => {
  let startX = x - length / 2 - length;
  let startY = y - length / 2 - length;
  let drawCounter = 0;
  let drawData;
  for (let j = 0; j < 3; j += 1) {
    for (let k = 0; k < 3; k += 1) {
      drawData = getCurrentMandalArt(data, drawCounter);
      mandalArtFragment(ctx, startX, startY, length, drawData, mousePos);
      startX += length;
      drawCounter += 1;
    }
    startX = x - length / 2 - length;
    startY += length;
  }
};

// 9x9 랜더
export const drawMandalArt = (ctx, x, y, length, data, mousePos) => {
  let startX = x - length * 3;
  let startY = y - length * 3;
  let drawCounter = 0;
  let drawData;
  for (let j = 0; j < 3; j += 1) {
    for (let k = 0; k < 3; k += 1) {
      drawData = getCurrentMandalArt(data, drawCounter);
      drawMandalGroup(ctx, startX, startY, length, drawData, mousePos);
      startX += length * 3;
      drawCounter += 1;
    }
    startX = x - length * 3;
    startY += length * 3;
  }
};
