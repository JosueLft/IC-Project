import { colors } from '../../theme';
import shadows from '../../theme/shadows';
import { CSSProperties } from 'react';


export const navBarContainerStyle: CSSProperties = {
  width: '100%',
  height: '75px',
  background: colors.background.primary,
  boxShadow: shadows.inset,
  borderBottom: `1px solid ${colors.gray.dark}`,
  display: 'flex',
  justifyContent: 'space-between',
  position: 'fixed',
};

export const navigationContainerStyles: CSSProperties = {
  display: 'flex',
  width: '100%',
  gap: '20px',
  margin: '0 20%',
};

export const logoContainer: CSSProperties = {
  width: '190px',
  height: '10%',
  display: 'flex',
  alignItems: 'center',
  padding: '5px 20px',
};