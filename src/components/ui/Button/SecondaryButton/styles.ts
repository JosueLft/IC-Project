import { colors, gradients } from '../../../../theme';
import { css } from '@emotion/react';
import { loadingAnimation } from '../styles';

export const secondaryButtonStyle = (loading: boolean = false) =>
  css({
    border: `1px solid ${colors.white.main}`,
    background: loading ? gradients.loading2 : 'none',
    backgroundSize: '200% 100%',
    animation: loading ? `${loadingAnimation} 2s infinite linear` : undefined,
    ':enabled:hover': { background: colors.white[10] },
    ':disabled': { border: `2px solid ${colors.white.disabled}` },
  });
