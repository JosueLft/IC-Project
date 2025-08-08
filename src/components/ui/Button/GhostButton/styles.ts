import { colors, gradients } from '../../../../theme';
import { css } from '@emotion/react';
import { loadingAnimation } from '../styles';

export const ghostButtonStyle = (loading: boolean = false) =>
  css({
    border: `2px solid transparent`,
    background: loading ? gradients.loading2 : 'none',
    boxSizing: 'border-box',
    backgroundSize: '200% 100%',
    animation: loading ? `${loadingAnimation} 2.0s infinite linear` : undefined,
    whiteSpace: 'nowrap',
    ':enabled:hover': { background: colors.white[10] },
  });
