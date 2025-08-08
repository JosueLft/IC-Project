import React from 'react';
import { badgeStyles, BadgeVariant } from './styles';

interface BadgeProps {
  color: string;
  text?: string;
  children?: React.ReactNode;
  variant?: BadgeVariant;
}

export const Badge: React.FC<BadgeProps> = ({
  color,
  text,
  children,
  variant = 'normal',
}) => <div style={badgeStyles(color, variant)}>{text || children}</div>;
