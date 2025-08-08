import { useTranslation } from 'react-i18next';
import ICLogo from '@/assets/images/logo.png';
import { LogoStyle } from './styles';

interface LogoComponentProps {
  url?: string;
}

const Logo = ({ url }: LogoComponentProps): JSX.Element => {
  const { t } = useTranslation();
  
  return (
    <div>
      <a href={url}>
        <img style={LogoStyle} src={ICLogo} alt={t('components.footer.logoAlt')} />
      </a>
    </div>
  );
};

export default Logo;
