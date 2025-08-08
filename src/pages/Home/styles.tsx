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
  maxWidth: '60%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  padding: '0 20%',
  border: `1px solid ${brown[500]}`,
  margin: '0 23%',
  p: 3,
};

export const baseContainerVerticalStyle: SxProps = {
  maxWidth: '60%',
  width: '100%',
  justifyContent: 'center',
  gap: '20px',
  padding: '0 20%',
  border: `1px solid ${brown[500]}`,
  margin: '0 23%',
  p: 3,
};

export const eventContainersStyle: SxProps = {
  // width: '100%',
  padding: '0 1em',
  display: 'flex',
  alignItems: 'stretch',
  gap: '16px',
  overflowX: 'auto',
  paddingBottom: '16px',
  // Scroll styling
  '&::-webkit-scrollbar': {
    height: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: colors.background.secondary,
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: colors.text.quaternary,
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: colors.text.tertiary,
  },
};