import { SxProps } from '@mui/system';
import { colors } from '../../theme';
import { brown, yellow } from '@mui/material/colors';
import { CSSProperties } from 'react';

export const homeGridContainerStyles: SxProps = {
  justifyContent: 'center',
  height: '100%',
  p: 3,
};

export const baseContainerStyle: SxProps = {
  flex: 1,
  maxWidth: '50%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  padding: '0 20%',
  border: `1px solid ${brown[500]}`,
  margin: '0 22.5%',
  p: 3,
};