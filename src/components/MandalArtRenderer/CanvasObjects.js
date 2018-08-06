// 랜더 카운터에 맞춰서 현재 랜더할 만다라트 데이터를 뽑음
const getCurrentMandalArt = (mandalArtData, counter) => {
  if (counter < 4) {
    return mandalArtData.objective[counter];
  }
  return counter === 4 ? mandalArtData : mandalArtData.objective[counter - 1];
};

// 한 칸랜더
const mandalArtFragment = (ctx, x, y, length, data) => {
  const { color, text } = data;
  ctx.fillStyle = color;
  ctx.strokeRect(x, y, length, length);
  ctx.textAlign = 'center';
  ctx.fillText(text, x + length / 2, y + length / 2);
};

// 3x3랜더
const drawMandalGroup = (ctx, x, y, length, data) => {
  let startX = x - length / 2 - length;
  let startY = y - length / 2 - length;
  let drawCounter = 0;
  let drawData;
  for (let j = 0; j < 3; j += 1) {
    for (let k = 0; k < 3; k += 1) {
      drawData = getCurrentMandalArt(data, drawCounter);
      mandalArtFragment(ctx, startX, startY, length, drawData);
      startX += length;
      drawCounter += 1;
    }
    startX = x - length / 2 - length;
    startY += length;
  }
};

// 9x9 랜더
export const drawMandalArt = (ctx, x, y, length, data) => {
  let startX = x - length * 3;
  let startY = y - length * 3;
  let drawCounter = 0;
  let drawData;
  for (let j = 0; j < 3; j += 1) {
    for (let k = 0; k < 3; k += 1) {
      drawData = getCurrentMandalArt(data, drawCounter);
      drawMandalGroup(ctx, startX, startY, length, drawData);
      startX += length * 3;
      drawCounter += 1;
    }
    startX = x - length * 3;
    startY += length * 3;
  }
};
