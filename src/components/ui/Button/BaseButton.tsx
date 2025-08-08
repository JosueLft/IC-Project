import { buttonBaseStyle } from './styles';
import { ButtonProps } from './types';

const BaseButton: React.FC<ButtonProps> = ({
  size = 'medium',
  loading = false,
  onClick,
  leftIcon,
  rightIcon,
  children,
  disabled,
  icon,
  text,
  ...props
}) => {
  const handleClick = () => {
    if (!loading && !disabled && onClick) onClick();
  };

  return (
    <button
      css={buttonBaseStyle(size)}
      onClick={handleClick}
      type="button"
      disabled={loading || disabled}
      {...props}
    >
      {leftIcon}
      <span>{icon || text || children}</span>
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};

export default BaseButton;
