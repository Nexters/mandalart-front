export const mandalArtFragment = (ctx, x, y, length, text) => {
  ctx.fillRect(x, y, length, length);
};

export const drawMandalGroup = (ctx, x, y, length) => {
  let startX = x - length / 2 - length;
  let startY = y - length / 2 - length;
  for (let j = 0; j < 3; j += 1) {
    for (let k = 0; k < 3; k += 1) {
      mandalArtFragment(ctx, startX, startY, length);
      startX += length;
    }
    startX = x - length / 2 - length;
    startY += length;
  }
};

export const drawMandalArt = (ctx, x, y, length) => {
  let startX = x - length * 3;
  let startY = y - length * 3;
  for (let j = 0; j < 3; j += 1) {
    for (let k = 0; k < 3; k += 1) {
      drawMandalGroup(ctx, startX, startY, length);
      startX += length * 3;
    }
    startX = x - length * 3;
    startY += length * 3;
  }
};
