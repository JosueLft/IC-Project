import { colors } from '../../theme';
import { SxProps } from '@mui/material';
import { CSSProperties } from 'react';
import { Variant } from './types';

const primaryLabelStyle: SxProps = {
  color: colors.text.secondary,
  fontFamily: 'Open Sans',
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '16px',
  letterSpacing: '1.2px',
};

const primaryValueStyle: SxProps = {
  color: colors.text.primary,
  fontFamily: 'Open Sans',
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: 600,
};

const secondaryLabelStyle: SxProps = {
  color: colors.text.secondary,
  fontFamily: 'Open Sans',
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '16px',
  letterSpacing: '1.2px',
};

const secondaryValueStyle: SxProps = {
  color: colors.text.primary,
  fontFamily: 'Open Sans',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '24px',
  marginTop: '3px',
};

export function labelStyle(variant: Variant = 'primary'): SxProps {
  return variant === 'primary' ? primaryLabelStyle : secondaryLabelStyle;
}

export function valueStyle(variant: Variant = 'primary'): SxProps {
  return variant === 'primary' ? primaryValueStyle : secondaryValueStyle;
}

export const containerStyle = (align: string): CSSProperties => ({
  display: align === 'horizontal' ? 'flex' : 'block',
  alignItems: align === 'horizontal' ? 'center' : 'initial',
  overflow: 'hidden',
});
