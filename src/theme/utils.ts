const darken = (hex: string, percent: number): string => {
  const color = hex.replace(/^#/, '');

  let r = parseInt(color.substring(0, 2), 16);
  let g = parseInt(color.substring(2, 4), 16);
  let b = parseInt(color.substring(4, 6), 16);

  r = Math.floor(r * (1 - percent / 100));
  g = Math.floor(g * (1 - percent / 100));
  b = Math.floor(b * (1 - percent / 100));

  const newHex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

  return newHex;
};

export const lighten = (hex: string, percent: number): string => {
  const color = hex.replace(/^#/, '');

  let r = parseInt(color.substring(0, 2), 16);
  let g = parseInt(color.substring(2, 4), 16);
  let b = parseInt(color.substring(4, 6), 16);

  r = Math.min(Math.floor(r + (255 - r) * (percent / 100)), 255);
  g = Math.min(Math.floor(g + (255 - g) * (percent / 100)), 255);
  b = Math.min(Math.floor(b + (255 - b) * (percent / 100)), 255);

  const newHex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

  return newHex;
};

export default darken;
