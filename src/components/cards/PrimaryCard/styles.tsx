import { colors } from '../../../theme';
import shadows from '../../../theme/shadows';
import { CSSProperties } from 'react';

const primarycardStyles: CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: colors.background.primary,
  border: `1px solid ${colors.gray.dark}`,
  borderRadius: '6px',
  boxShadow: shadows.soft,
  color: colors.text.primary,
};

export default primarycardStyles;
