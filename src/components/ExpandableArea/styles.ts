import { spacing } from '../../theme';
import { CSSProperties } from 'react';

export const expandableAreaStyle: CSSProperties = {};

export const contentStyle = (expanded: boolean): CSSProperties => ({
  display: expanded ? 'block' : 'none',
});

export const buttonContainerStyle: CSSProperties = {
  marginTop: spacing[2],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
};
