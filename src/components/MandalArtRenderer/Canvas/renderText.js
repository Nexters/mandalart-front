export default function renderText(ctx, text, x, y, length) {
  const breakedText = text.split('');
  let yPos = y;
  let tmp = '';
  for (let i = 0; i < breakedText.length; i++) {
    tmp = tmp + breakedText[i];
    if (ctx.measureText(tmp).width >= length - 60) {
      yPos += 32;
      ctx.fillText(tmp, x, yPos);
      tmp = '';
    }
    if (yPos >= y + length - 60) {
      return;
    }
  }
  if (tmp !== '') {
    yPos += 32;
    ctx.fillText(tmp, x, yPos);
  }
}
