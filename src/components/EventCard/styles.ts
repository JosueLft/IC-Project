import { spacing } from '../../theme';
import colors from '../../theme/colors';
import { CSSProperties } from 'react';

export const getEventCardStyles = (width: number = 200): CSSProperties => ({
  padding: spacing[2],
  marginBottom: spacing[2],
  width: `${width}px`,
  minWidth: `${width}px`,
  maxWidth: `${width}px`,
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
});

export const eventHeaderStyle: CSSProperties = {
  marginBottom: spacing[2],
  flex: '0 0 auto',
};

export const getEventTitleStyle = (color: string = colors.text.primary): CSSProperties => ({
  fontSize: '0.9rem',
  fontWeight: 'bold',
  color,
  marginBottom: spacing[2],
  marginTop: spacing[3],
  lineHeight: '1.2',
  wordWrap: 'break-word',
  hyphens: 'auto',
  height: '2.2rem', // Ensures consistent height for title
});

export const dateTimeContainerStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: spacing[1],
  marginBottom: spacing[2],
};

export const getDateStyle = (color: string = colors.text.quaternary): CSSProperties => ({
  fontSize: '0.85rem',
  color,
  fontWeight: '500',
});

export const getTimeStyle = (color: string = colors.text.quaternary): CSSProperties => ({
  fontSize: '0.85rem',
  color,
  fontWeight: '500',
});

export const bottomContainerStyle: CSSProperties = {
  padding: `${spacing[1]} 0`,
  borderTop: `1px solid ${colors.border.secondary}`,
  marginTop: 'auto',
  flex: '1 1 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
};

// Responsividade para telas menores
export const responsiveEventCardStyles = `
  @media (max-width: 480px) {
    .event-card {
      width: 100% !important;
      min-width: 160px !important;
      max-width: 180px !important;
      min-height: 250px !important;
    }
    
    .event-title {
      font-size: 0.95rem !important;
    }
    
    .date-time-container {
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 4px !important;
    }
    
    .date-time-text {
      font-size: 0.75rem !important;
    }
  }
`;
