import { colors, spacing } from '../../../theme';
import { CSSProperties } from 'react';

export type BadgeVariant = 'normal' | 'thin';

export const badgeStyles = (
  color?: string,
  variant?: BadgeVariant
): CSSProperties => ({
  display: 'inline-block',
  padding: spacing[1],
  fontSize: '75%',
  fontWeight: 700,
  lineHeight: 1,
  textAlign: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 'baseline',
  borderRadius: '0.25rem',
  color:
    variant === 'normal' ? colors.text.primary : color || colors.text.primary,
  backgroundColor: variant === 'normal' ? color : 'transparent',
});
