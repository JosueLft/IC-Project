import { Box } from '@mui/material';
import logoIC from '@/assets/images/logo.png';
import { footerContentStyle, footerStyle, gradientLineStyle } from './style';

const Footer = () => (
  <Box sx={footerStyle}>
    <Box sx={gradientLineStyle} />
    <Box sx={footerContentStyle}>
      <img src={logoIC} alt="Iespa Church Logo" height="100%" />
      <span>© IESPA 2025 | Produced by Lofty Reign Studios | All rights reserved.</span>
    </Box>
  </Box>
);
export default Footer;
