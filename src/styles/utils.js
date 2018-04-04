export const rem = (val) => `${val / 10}rem`;

export const closestMultiple = (val, unit) => Math.round(val / unit) * unit;

export const closestLineHeight = (fontSize, lineHeightRatio, unit) =>
  closestMultiple(fontSize * lineHeightRatio, unit) / fontSize;
