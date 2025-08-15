import { colors, spacing } from '../../theme';
import { SxProps } from '@mui/material';

export const pageLayoutStyle: SxProps = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  background: colors.background.bg,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  maxWidth: '100%',
  margin: '0',
};

export const baseContainerStyle: SxProps = {
  flex: 1,
  maxWidth: '96.55%',
  width: '100%',
  display: 'row',
  justifyContent: 'center',
};