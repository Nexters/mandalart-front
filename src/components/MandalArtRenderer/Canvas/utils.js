export const logicDivByCenter = (counter, centerValue, left, center, right) => {
  if (counter < centerValue) {
    return left;
  }
  return counter === centerValue ? center : right;
};
// 랜더 카운터에 맞춰서 현재 랜더할 만다라트 데이터를 뽑음
export const getCurrentMandalArt = (mandalArtData, counter) => {
  return logicDivByCenter(
    counter,
    4,
    mandalArtData.objective[counter],
    mandalArtData,
    mandalArtData.objective[counter - 1],
  );
};

export const getMandalArtFragmentCenter = (row, column, x, y, length) => {
  const returnX = logicDivByCenter(
    column,
    5,
    x - length * column,
    x,
    x + length * (column - 5),
  );
  const returnY = logicDivByCenter(
    row,
    5,
    y - length * row,
    y,
    y + length * (row - 5),
  );
  return { x: returnX, y: returnY };
};

export const isMouseInside = (x, y, length, mouseX, mouseY) => {
  if (
    x + length > mouseX &&
    x < mouseX &&
    y + (length * 3) / 2 > mouseY &&
    y + length / 2 < mouseY
  ) {
    return true;
  }
  return false;
};
