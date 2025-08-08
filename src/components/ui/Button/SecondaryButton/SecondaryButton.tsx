import BaseButton from '../BaseButton';
import { ButtonProps } from '../types';
import { secondaryButtonStyle } from './styles';

const SecondaryButton: React.FC<ButtonProps> = ({
  onClick,
  loading,
  ...rest
}) => (
  <BaseButton
    onClick={onClick}
    loading={loading}
    css={secondaryButtonStyle(loading)}
    {...rest}
  />
);

export default SecondaryButton;
