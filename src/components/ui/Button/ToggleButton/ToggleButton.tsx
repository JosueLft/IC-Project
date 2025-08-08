import React from 'react';
import {
  slider,
  sliderActive,
  sliderCircle,
  sliderCircleActive,
} from './styles';
import BaseButton from '../BaseButton';

interface ToggleButtonProps {
  isActive: boolean;
  onToggle: (activation: boolean) => void;
  text: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  isActive,
  onToggle,
  text,
}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    }}
  >
    <BaseButton
      type="button"
      style={{
        ...slider,
        ...(isActive ? sliderActive : {}),
      }}
      onClick={() => onToggle(isActive)}
    >
      <div
        style={{
          ...sliderCircle,
          ...(isActive ? sliderCircleActive : {}),
        }}
      />
    </BaseButton>
    <span style={{ paddingLeft: '0.25em', fontSize: '1em' }}>{text}</span>
  </div>
);

export default ToggleButton;
