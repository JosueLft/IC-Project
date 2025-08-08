import { colors, gradients } from '../../../../theme';
import { css } from '@emotion/react';
import darken from '../../../../theme/utils';
import { loadingAnimation } from '../styles';

export const primaryButtonStyle = (loading: boolean = false) =>
  css({
    background: loading ? gradients.loading : colors.primary.main,
    border: `2px solid ${colors.primary.main}`,
    backgroundSize: '200% 100%',
    animation: loading ? `${loadingAnimation} 2s infinite linear` : undefined,
    ':enabled:hover': {
      background: darken(colors.primary.dark, 10),
      border: `2px solid ${darken(colors.primary.dark, 10)}`,
    },
  });
