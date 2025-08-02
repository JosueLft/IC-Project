import { gradients, colors, spacing } from '../../theme';
import { css } from '@emotion/react';

export const buttonItemStyle = css({
  fontWeight: 700,
  height: 'calc(100% - 6px)',
  display: 'flex',
  alignItems: 'center',
  margin: `${spacing[0]} ${spacing[3]}`,
  fontSize: '1rem',
  lineHeight: '16px',
  letterSpacing: '0.05em',
  color: colors.text.primary,
  textTransform: 'capitalize',
  '&.active': {
    opacity: 1,
  },
  '& svg': {
    marginLeft: '10px',
  },
});

export const barActiveStyle = css({
  width: '100%',
  height: '6px',
  bottom: '0',
  position: 'absolute',
  selfAlign: 'flex-end',
  background: gradients.vale.horizontal,
  borderRadius: '6px 6px 0px 0px',
});

export const dropdownMenuDivideStyle = css({
  width: '100%',
  height: '2px',
  margin: '15px 0 25px 0',
  background: gradients.vale.horizontal,
});

export const dropdownMenuCloseStyle = css({
  position: 'absolute',
  cursor: 'pointer',
  right: '10px',
  top: '10px',
  color: colors.text.primary,
  '& :hover': {
    color: colors.text.hover,
  },
});

export const dropdownMenuTitleStyle = css({
  '& h1': {
    display: 'inline-flex',
    color: 'white',
    fontSize: '1rem',
    margin: '0',
  },
  '& svg': {
    display: 'inline-flex',
    marginRight: '5px',
  },
});

export const dropdownMenuStyle = css({
  '& .MuiPaper-root': {
    marginTop: '7px',
    width: '100%',
    maxWidth: '100%',
    height: '350px',
    backgroundColor: colors.background.primary,
    padding: '30px 50px',
    overflow: 'hidden',
    marginLeft: '16px',
  },
});

export const dropdownMenuGridContainerStyle = css({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  width: '100%',
  height: '250px',
  padding: '0 20px',
  '& .grid-item': {
    position: 'relative',
    padding: '20px 0',
    height: '80px',
    maxWidth: '33%',
    '& div': {
      margin: '0',
    },
  },
  '& .link-item': {
    display: 'block',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: '10px',
    textDecoration: 'none',
  },
  '& .menu-name:hover': {
    color: colors.text.hover,
  },
  '& .description': {
    fontSize: '0.8rem',
    color: colors.gray.main,
    margin: '0',
  },
  '& @media (max-width: 768px)': {
    gridTemplateColumns: 'repeat(2; 1fr)',
  },
  '& @media (max-width: 480px)': {
    gridTemplateColumns: '1fr',
  },
});