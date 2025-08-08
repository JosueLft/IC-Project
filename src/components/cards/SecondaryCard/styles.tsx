import { SxProps } from '@mui/material';
import { colors } from '../../../theme';
import shadows from '../../../theme/shadows';

const secondaryCardStyles: SxProps = {
  width: '100%',
  height: 'auto',
  background: colors.background.secondary, // TO DO - Fix this color
  border: `1px solid ${colors.gray.dark}`,
  borderRadius: '6px',
  boxShadow: shadows.strong,
  margin: '15px 0 0 0',
  padding: '15px 30px',
  color: colors.text.primary,
};

export default secondaryCardStyles;
