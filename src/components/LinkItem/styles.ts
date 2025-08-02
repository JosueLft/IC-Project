import { gradients, colors } from '../../theme';
import { SxProps } from '@mui/material';

export const linkItemStyle: SxProps = {
  fontWeight: 700,
  height: 'calc(100% - 6px)',
  display: 'flex',
  alignItems: 'center',
  margin: '0 16px',
  fontSize: '1rem',
  lineHeight: '16px',
  letterSpacing: '0.05em',
  color: colors.text.primary,
  '&.active': {
    opacity: 1,
  },
};

export const barActiveStyle = {
  width: '100%',
  height: '5px',
  bottom: '0',
  position: 'absolute',
  selfAlign: 'flex-end',
  background: colors.white.main,
};
