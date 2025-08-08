import { colors } from '../../../../theme';
import { CSSProperties } from 'react';

export const sliderContainer: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer',
};

export const slider: CSSProperties = {
  width: '2em',
  height: '1em',
  border: `1px solid ${colors.white[90]}`,
  backgroundColor: colors.background.primary,
  borderRadius: '1em',
  position: 'relative',
  transition: 'background-color 0.3s',
};

export const sliderActive: CSSProperties = {
  backgroundColor: colors.white[90],
};

export const sliderCircle: CSSProperties = {
  width: '0.75em',
  height: '0.75em',
  backgroundColor: 'white',
  borderRadius: '50%',
  position: 'absolute',
  top: '0.1em',
  left: '0.1em',
  transition: 'left 0.3s',
};
export const sliderCircleActive: CSSProperties = {
  left: '1em',
  backgroundColor: colors.background.primary,
};
