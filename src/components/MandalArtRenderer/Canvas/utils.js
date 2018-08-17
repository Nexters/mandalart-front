// 중앙 기준으로 나뉘는 값을 계산
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

// 만다라트 프래그먼트의 중간값을 계산
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

// 마우스가 만다라트 안에 있나 체크
export const isPointInsideMandal = (
  x,
  y,
  length,
  mouseX,
  mouseY,
  centerX,
  centerY,
) => {
  const xPos = (centerX - x) / (length * 4.5);
  const yPos = (centerY - y) / (length * 4.5);
  const width = 1 / 9;
  if (
    xPos + width > mouseX &&
    xPos - width < mouseX &&
    yPos + width > mouseY &&
    yPos - width < mouseY
  ) {
    return true;
  }
  return false;
};

export const calPointedArea = point => {
  let coord = 0;
  if (1 > point && 1 / 3 < point) {
    coord = -1;
  } else if (-(1 / 3) > point && -1 < point) {
    coord = 1;
  }
  return coord;
};
