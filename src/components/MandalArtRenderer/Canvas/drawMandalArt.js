import { getCurrentMandalArt } from './utils';

// 3x3랜더
const drawMandalGroup = (ctx, x, y, length, data, mousePos, mandalFragment) => {
  let startX = x - length;
  let startY = y - length;
  let drawCounter = 0;
  let drawData;
  for (let j = 0; j < 3; j += 1) {
    for (let k = 0; k < 3; k += 1) {
      drawData = getCurrentMandalArt(data, drawCounter);
      mandalFragment[drawCounter].draw(
        ctx,
        startX,
        startY,
        length,
        drawData,
        mousePos,
      );
      startX += length;
      drawCounter += 1;
    }
    startX = x - length;
    startY += length;
  }
};

// 9x9 랜더
const drawMandalArt = (ctx, x, y, length, data, mousePos, mandalFragArray) => {
  let startX = x - length * 3;
  let startY = y - length * 3;
  let drawCounter = 0;
  let drawData;
  for (let j = 0; j < 3; j += 1) {
    for (let k = 0; k < 3; k += 1) {
      drawData = getCurrentMandalArt(data, drawCounter);
      drawMandalGroup(
        ctx,
        startX,
        startY,
        length,
        drawData,
        mousePos,
        mandalFragArray[drawCounter],
      );
      startX += length * 3;
      drawCounter += 1;
    }
    startX = x - length * 3;
    startY += length * 3;
  }
};

export default drawMandalArt;
