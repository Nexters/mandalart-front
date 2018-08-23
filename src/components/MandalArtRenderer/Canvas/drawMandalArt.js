import { getCurrentMandalArt, logicDivByCenter } from './utils';

// 3x3랜더
const drawMandalGroup = (
  ctx,
  x,
  y,
  length,
  data,
  mousePos,
  mandalFragment,
  centerX,
  centerY,
  depth,
  zoomStatus,
) => {
  let startX = x - length;
  let startY = y - length;
  let drawCounter = 0;
  let drawData;
  let number = 0;
  for (let j = 0; j < 3; j += 1) {
    for (let k = 0; k < 3; k += 1) {
      drawData = getCurrentMandalArt(data, drawCounter);
      number = logicDivByCenter(
        drawCounter,
        4,
        drawCounter + 1,
        0,
        drawCounter,
      );
      mandalFragment[drawCounter].draw(
        ctx,
        startX,
        startY,
        length,
        drawData,
        mousePos,
        centerX,
        centerY,
        { depth, number },
        zoomStatus,
      );
      startX += length;
      drawCounter += 1;
    }
    startX = x - length;
    startY += length;
  }
};

// 9x9 랜더
const drawMandalArt = (
  ctx,
  x,
  y,
  length,
  data,
  mousePos,
  mandalFragArray,
  ctxOff,
  zoomStatus,
) => {
  let startX = x - length * 3;
  let startY = y - length * 3;
  let drawCounter = 0;
  let drawData;
  let depth;
  for (let j = 0; j < 3; j += 1) {
    for (let k = 0; k < 3; k += 1) {
      drawData = getCurrentMandalArt(data, drawCounter);
      depth = logicDivByCenter(drawCounter, 4, drawCounter + 1, 0, drawCounter);
      drawMandalGroup(
        ctxOff.getContext('2d'),
        startX,
        startY,
        length,
        drawData,
        mousePos,
        mandalFragArray[drawCounter],
        x,
        y,
        depth,
        zoomStatus,
      );
      startX += length * 3;
      drawCounter += 1;
    }
    startX = x - length * 3;
    startY += length * 3;
  }
  ctx.drawImage(ctxOff, 0, 0);
};

export default drawMandalArt;
