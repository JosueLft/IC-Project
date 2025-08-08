import BaseButton from '../BaseButton';
import { ButtonProps } from '../types';
import { ghostButtonStyle } from './styles';

const GhostButton: React.FC<ButtonProps> = ({ onClick, loading, ...rest }) => (
  <BaseButton
    onClick={() => onClick?.()}
    loading={loading}
    css={ghostButtonStyle(loading)}
    {...rest}
  />
);

export default GhostButton;
