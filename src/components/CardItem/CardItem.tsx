import { Typography } from '@mui/material';
import { ReactNode } from 'react';
import { containerStyle, labelStyle, valueStyle } from './style';
import { Variant } from './types';

export interface CardItemProps {
  label: string;
  value: string | number | ReactNode;
  variant?: Variant;
  align?: 'vetical' | 'horizontal';
}

const CardItem: React.FC<CardItemProps> = ({
  label,
  value,
  variant = 'primary',
  align = 'vertical',
}) => {
  const renderValue = () => {
    if (typeof value === 'string') {
      return (
        <Typography variant="body1" sx={valueStyle(variant)}>
          {value}
        </Typography>
      );
    }
    return value;
  };

  return (
    <div style={containerStyle(align)}>
      <Typography
        variant="body1"
        sx={labelStyle(variant)}
        style={{ marginRight: align === 'horizontal' ? '8px' : '0' }}
      >
        {label}:
      </Typography>
      {renderValue()}
    </div>
  );
};

export default CardItem;