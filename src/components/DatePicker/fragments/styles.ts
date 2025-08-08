import { colors, shadows } from '../../../theme';
import spacing from '../../../theme/spacing';
import { css } from '@emotion/react';
import { CSSProperties } from 'react';

export const calendarWrapper: CSSProperties = {
  position: 'absolute',
  top: '100%',
  left: 0,
  background: colors.backgroundCard.primary,
  boxShadow: shadows.strong,
  borderRadius: '5px',
  padding: '10px',
  zIndex: 1000,
};

export const calendarHeader: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '10px',
  fontWeight: 'bold',
  color: colors.text.primary,
  fontSize: '0.8rem',
};

export const dayContainer: CSSProperties = {
  width: '1.5rem',
  height: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  border: 'none',
  backgroundColor: 'transparent',
  color: colors.text.primary,
  fontSize: '0.8rem',
  overflow: 'hidden',
  position: 'relative',
};

export const calendarDay = (selectedDay: boolean, today: boolean) =>
  css({
    ...dayContainer,
    cursor: 'pointer',
    transition: 'background 0.2s ease',
    ...(selectedDay ? selectedDayStyle : {}),
    ...(today && !selectedDay ? todayStyle : {}),

    '&:hover': {
      border: `1px solid ${colors.primary.main}`,
      color: colors.text.secondary,
    },

    /** Click animation */
    ':enabled::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '0.1em',
      height: '0.1em',
      borderRadius: '50%',
      backgroundColor: colors.white[30],
      transform: 'translate(-50%, -50%) scale(0)',
      transition: 'transform 0.3s ease-out',
    },
    ':enabled:active::after': { transform: 'translate(-50%, -50%) scale(50)' },
  });

export const selectedDayStyle: CSSProperties = {
  backgroundColor: colors.primary.main,
  color: colors.text.secondary,
};

export const todayStyle: CSSProperties = {
  color: colors.primary.main,
  textDecoration: 'underline',
};

export const navigationButton = css({
  all: 'unset',
  cursor: 'pointer',
  ':hover': {
    color: colors.primary.main,
  },
});

export const actionsContainer: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: `${spacing[2]} ${spacing[2]}`,
};

export const actionButton = css({
  all: 'unset',
  cursor: 'pointer',
  color: colors.primary.main,
  fontSize: '0.8rem',
  padding: `${spacing[1]} ${spacing[2]}`,
  border: `1px solid transparent`,
  ':hover': {
    border: `1px solid ${colors.primary.main}`,
    borderRadius: '5px',
  },
});
