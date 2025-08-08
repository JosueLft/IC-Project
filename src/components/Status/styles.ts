import { lighten } from '../../theme/utils';
import { CSSProperties } from 'react';

export const statusWithSignalStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  padding: '8px 0',
};

export const statusSignalStyles = (color: string): CSSProperties => ({
  backgroundColor: lighten(color, 50),
  border: `0.2rem solid ${color}`,
  minWidth: '1rem',
  height: '1rem',
  borderRadius: '50%',
  marginLeft: '8px',
  fontWeight: 'bold',
  color: 'white',
  textTransform: 'capitalize',
});

export const statusTextStyles: CSSProperties = {
  marginLeft: '8px',
  fontWeight: 'bold',
  color: 'white',
  textTransform: 'capitalize',
};
