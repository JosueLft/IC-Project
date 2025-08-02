import { blue, brown, red } from '@mui/material/colors';
import { colors } from '../../theme';
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
  maxWidth: '96%',
  width: '100%',
  display: 'row',
  justifyContent: 'center',
  gap: '20px',
  padding: '0 20%',
  paddingTop: '75px',
  border: `1px solid ${brown[500]}`,
  margin: '0 1%',
  p: 3,
};