import { colors, spacing } from '../../../theme';
import { css, keyframes } from '@emotion/react';
import { ButtonSize } from './types';

const fontSizeMap = {
  small: '0.75rem',
  medium: '1rem',
  large: '1.25rem',
};

const paddingMap = {
  small: '0.25rem 0.5rem',
  medium: '0.25rem 0.5rem',
  large: '0.5rem 1rem',
};

const getButtonSizeStyle = (size: ButtonSize) => ({
  padding: paddingMap[size],
  fontSize: fontSizeMap[size],
});

export const loadingAnimation = keyframes({
  from: { backgroundPosition: '-100% 0' },
  to: { backgroundPosition: '100% 0' },
});

export const buttonBaseStyle = (size: ButtonSize = 'medium') =>
  css({
    fontFamily: 'Open Sans, sans-serif',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    gap: spacing[2],
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    color: colors.text.primary,
    borderRadius: '0.125rem',
    height: 'fit-content',
    cursor: 'pointer',
    ':disabled': {
      color: colors.text.disabled,
      cursor: 'default',
    },
    ...getButtonSizeStyle(size),

    /** Click animation */
    ':enabled::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '1em',
      height: '1em',
      borderRadius: '50%',
      backgroundColor: colors.white[30],
      transform: 'translate(-50%, -50%) scale(0)',
      transition: 'transform 0.3s ease-out',
    },
    ':enabled:active::after': { transform: 'translate(-50%, -50%) scale(10)' },
  });
