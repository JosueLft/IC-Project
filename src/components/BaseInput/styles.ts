import { typography } from '../../theme';
import { css } from '@emotion/react';
import { CSSProperties } from 'react';
import inputColors from './colors';
import { InputSize, LabelPosition } from './types';

export const sizes = {
  small: { padding: '6px 12px', fontSize: '14px', height: '30px' },
  medium: { padding: '8px 16px', fontSize: '16px', height: '40px' },
  large: { padding: '10px 20px', fontSize: '18px', height: '50px' },
};

export const containerStyles = (
  labelPosition: LabelPosition
): CSSProperties => ({
  display: 'flex',
  flexDirection: labelPosition === 'left' ? 'row' : 'column',
  alignItems: labelPosition === 'left' ? 'center' : 'flex-start',
  gap: labelPosition === 'left' ? '8px' : '4px',
  width: '100%',
});

export const labelStyles = (
  labelPosition: LabelPosition,
  error: boolean
): CSSProperties => ({
  fontSize: '0.85rem',
  fontWeight: '400',
  fontFamily: 'Open Sans, sans-serif',
  color: error ? inputColors.error : inputColors.label,
  ...(labelPosition === 'left' && { minWidth: '80px' }),
  transition: 'color 0.2s ease',
});

export const inputStyles = (size: InputSize, error: boolean) =>
  css({
    border: `1px solid ${error ? inputColors.error : inputColors.border}`,
    color: inputColors.textPrimary,
    borderRadius: '4px',
    width: '100%',
    outline: 'none',
    transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
    backgroundColor: inputColors.background,

    ':focus': {
      borderColor: error ? inputColors.error : inputColors.borderFocus,
      color: inputColors.textPrimary,
    },

    ':-webkit-autofill': {
      // This is the one way to override the autofill color in Chromium based browsers
      boxShadow: `0 0 0px 1000px ${inputColors.background} inset !important`,
      WebkitTextFillColor: `${inputColors.textPrimary} !important`,
      caretColor: inputColors.textPrimary,
      backgroundColor: 'red',
      transition: 'background-color 0s ease-in-out 0s',
      background: 'red',
    },

    ':hover:not(:focus)': {
      borderColor: error ? inputColors.error : inputColors.borderHover,
    },

    ':disabled': {
      borderColor: inputColors.border,
      opacity: 0.5,
      color: inputColors.border,
    },

    '::placeholder': {
      color: inputColors.placeholder,
    },

    ...sizes[size],
  });

export const errorStyles = css({
  marginTop: '0.25rem',
  fontSize: '0.75rem',
  color: inputColors.error,
  fontFamily: 'Open Sans, sans-serif',
  fontWeight: typography.fontWeight.Bold,
});

export const actionButtonContainer = css({
  position: 'absolute',
  right: '0.5em',
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
  color: inputColors.textDisabled,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: 0,

  ':hover': {
    color: inputColors.textPrimary,
  },
});
