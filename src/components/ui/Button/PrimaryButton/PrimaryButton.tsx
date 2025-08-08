import BaseButton from '../BaseButton';
import { ButtonProps } from '../types';
import { primaryButtonStyle } from './styles';

const PrimaryButton: React.FC<ButtonProps> = ({
  onClick,
  loading,
  ...rest
}) => (
  <BaseButton
    onClick={onClick}
    loading={loading}
    css={primaryButtonStyle(loading)}
    {...rest}
  />
);

export default PrimaryButton;
