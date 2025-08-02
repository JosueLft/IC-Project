import { Box, SxProps } from '@mui/material';
import { colors } from '../../theme';
import gradients from '../../theme/gradients';

const Footer = () => <Box sx={footerStyle}>Footer</Box>;
export default Footer;

export const footerStyle: SxProps = {
  width: '100%',
  height: '100px',
  backgroundColor: colors.background.secondary,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
};

export const footerContentStyle: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '90%',
  color: 'white',
  fontSize: '12px',
  padding: '5px 20px',
};

export const gradientLineStyle: SxProps = {
  height: '4px',
  width: '100%',
  background: `${gradients.vale.horizontal}`,
};