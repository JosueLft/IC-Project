import { forwardRef } from 'react';

import InputWrapper from './InputWrapper';
import { actionButtonContainer, inputStyles } from './styles';
import { InputSize, LabelPosition } from './types';

export interface BaseInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  name: string;
  label?: string;
  size?: InputSize;
  labelPosition?: LabelPosition;
  errorMessage?: string;
  actionIcon?: React.ReactNode;
  onActionClick?: () => void;
  noWrapper?: boolean;
}

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  (
    {
      name,
      label,
      size = 'medium',
      labelPosition = 'top',
      errorMessage,
      actionIcon,
      onActionClick,
      value,
      onChange,
      noWrapper = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const handleClick = () => {
      onActionClick?.();
    };

    const inputElement = (
      <div css={{ position: 'relative', width: '100%' }}>
        <input
          css={inputStyles(size, !!errorMessage)}
          id={name}
          value={value ?? ''}
          onChange={onChange}
          disabled={disabled}
          {...props}
          ref={ref}
          key={name}
        />
        {actionIcon && !disabled && (
          <button
            css={actionButtonContainer}
            type="button"
            onClick={handleClick}
          >
            {actionIcon}
          </button>
        )}
      </div>
    );

    if (noWrapper) {
      return inputElement;
    }

    return (
      <InputWrapper
        label={label}
        errorMessage={errorMessage}
        id={name}
        labelPosition={labelPosition}
      >
        {inputElement}
      </InputWrapper>
    );
  }
);

export default BaseInput;