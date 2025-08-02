const spacing = {
  0: '0rem',
  1: '0.25rem',
  2: '0.5rem',
  3: '1rem',
  4: '1.5rem',
  5: '2rem',
  6: '2.5rem',
  7: '3rem',
  8: '4rem',
  9: '5rem',
};

const margin = {
  0: '0rem',
  1: '1rem',
  2: '1.5rem',
  3: '2rem',
  4: '4rem',
  5: '5rem',
  6: '6rem',
  7: '7rem',
  8: '8rem',
  9: '9rem',
};

const padding = {
  0: '0rem',
  1: '1rem',
  2: '1.5rem',
  3: '2rem',
  4: '4rem',
  5: '5rem',
  6: '6rem',
  7: '7rem',
  8: '8rem',
  9: '9rem',
};

export type SpacingKey = keyof typeof spacing;
export type MarginKey = keyof typeof margin;
export type PaddingKey = keyof typeof padding;

export default spacing;
export { margin, padding };
