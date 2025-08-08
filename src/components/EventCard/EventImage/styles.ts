import { CSSProperties } from 'react';
import { spacing } from '../../../theme';

export const eventImageContainerStyle = (isExpanded: boolean = false): CSSProperties => ({
  width: '100%',
  height: isExpanded ? '120px' : '80px',
  overflow: 'hidden',
  borderRadius: '6px',
  marginTop: spacing[2],
  marginBottom: spacing[2],
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f5f5f5',
  transition: 'height 0.3s ease-in-out',
});

export const getEventImageStyle = (): CSSProperties => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
  transition: 'all 0.3s ease-in-out',
  display: 'block',
});
