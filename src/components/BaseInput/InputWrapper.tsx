import { ReactNode } from 'react';
import { containerStyles, labelStyles, errorStyles } from './styles';
import { LabelPosition } from './types';

interface InputWrapperProps {
  label?: string;
  errorMessage?: string;
  id?: string;
  labelPosition?: LabelPosition;
  children: ReactNode;
}

const InputWrapper = ({
  label,
  errorMessage,
  id,
  labelPosition = 'top',
  children,
}: InputWrapperProps) => (
  <div style={containerStyles(labelPosition)}>
    {label && (
      <label style={labelStyles(labelPosition, !!errorMessage)} htmlFor={id}>
        {label}
      </label>
    )}
    {children}
    {errorMessage && <span css={errorStyles}>{errorMessage}</span>}
  </div>
);

export default InputWrapper;
