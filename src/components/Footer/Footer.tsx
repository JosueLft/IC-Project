import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import logoIC from '@/assets/images/logo.png';
import { footerContentStyle, footerStyle, gradientLineStyle } from './style';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <Box sx={footerStyle}>
      <Box sx={gradientLineStyle} />
      <Box sx={footerContentStyle}>
        <img src={logoIC} alt={t('components.footer.logoAlt')} height="100%" />
        <span>{t('components.footer.copyright')}</span>
      </Box>
    </Box>
  );
};

export default Footer;
