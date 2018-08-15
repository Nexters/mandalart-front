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
export const isPointInsideMandal = (x, y, length, mouseX, mouseY) => {
  if (
    x + length / 2 > mouseX &&
    x - length / 2 < mouseX &&
    y + length / 2 > mouseY &&
    y - length / 2 < mouseY
  ) {
    return true;
  }
  return false;
};

export const calPointedArea = (point, length, center) => {
  let coord = 0;
  if (center - length * 4.5 < point && center - length * 1.5 > point) {
    coord = -1;
  } else if (center + length * 4.5 > point && center + length * 1.5 < point) {
    coord = 1;
  }
  return coord;
};

export const translatedMousePosition = (
  x,
  y,
  zoomLevel,
  translateX,
  translateY,
) => {
  const transX = zoomLevel === 1 ? x : Math.floor(x / zoomLevel);
  const transY = zoomLevel === 1 ? y : Math.floor(y / zoomLevel);
  return { x: transX, y: transY };
};
