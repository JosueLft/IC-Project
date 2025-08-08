import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
  loading?: boolean;
  leftIcon?: JSX.Element | null;
  rightIcon?: JSX.Element | null;
  icon?: JSX.Element | null;
  color?: string;
  text?: string;
  onClick?: () => void;
}

export type ButtonSize = 'small' | 'medium' | 'large';
