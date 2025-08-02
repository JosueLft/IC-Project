import colors from './colors';

export type FontWeights = 'Thin' | 'Light' | 'Regular' | 'Bold' | 'Heavy';

const typography = {
  fontFamily: "'Open sans', sans-serif, Arial",
  color: colors.text.primary,
  fontWeight: {
    Thin: 100,
    Light: 300,
    Regular: 400,
    Bold: 600,
    Heavy: 700,
  } as Record<FontWeights, number>,
};

export default typography;
