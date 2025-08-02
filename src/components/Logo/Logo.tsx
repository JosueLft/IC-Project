import ICLogo from '@/assets/images/logo.png';
import { LogoStyle } from './styles';

interface LogoComponentProps {
  url?: string;
}

const Logo = ({ url }: LogoComponentProps): JSX.Element => (
  <div>
    <a href={url}>
      <img style={LogoStyle} src={ICLogo} alt="Iespa Church" />
    </a>
  </div>
);

export default Logo;
