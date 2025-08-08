import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Location } from '../../models/Event';
import colors from '../../theme/colors';

interface EventDetailsProps {
  children: string[];
  location: Location;
  textColor?: string;
  locationTextColor?: string;
}

const EventDetails: React.FC<EventDetailsProps> = ({ 
  children, 
  location, 
  textColor = colors.text.primary,
  locationTextColor = colors.text.tertiary
}) => {
  const { t } = useTranslation();
  return (
    <Box sx={{ padding: '12px 0' }}>
      <Box sx={{ marginBottom: '12px' }}>
        <Typography 
          variant="subtitle2" 
          sx={{ 
            fontWeight: 'bold', 
            marginBottom: '6px',
            color: textColor,
            fontSize: '0.8rem'
          }}
        >
          ✨ {t('pages.events.labels.event')}:
        </Typography>
        {children.map((child, index) => (
          <Typography 
            key={index} 
            variant="body2" 
            sx={{ 
              marginBottom: '6px',
              color: textColor,
              lineHeight: 1.3,
              fontSize: '0.8rem',
              wordWrap: 'break-word'
            }}
          >
            {child}
          </Typography>
        ))}
      </Box>

      <Box sx={{ 
        borderTop: `1px solid ${colors.border.secondary}`, 
        paddingTop: '8px',
        marginTop: '8px'
      }}>
        <Typography 
          variant="subtitle2" 
          sx={{ 
            fontWeight: 'bold', 
            marginBottom: '6px',
            color: textColor,
            fontSize: '0.8rem'
          }}
        >
          📍 {t('pages.events.labels.fullLocation')}:
        </Typography>
        <Typography variant="body2" sx={{ 
          color: locationTextColor, 
          marginBottom: '3px',
          fontSize: '0.75rem',
          wordWrap: 'break-word'
        }}>
          {location.street}
        </Typography>
        <Typography variant="body2" sx={{ 
          color: locationTextColor, 
          marginBottom: '3px',
          fontSize: '0.75rem'
        }}>
          {location.city}, {location.state}
        </Typography>
        <Typography variant="body2" sx={{ 
          color: locationTextColor, 
          marginBottom: '3px',
          fontSize: '0.75rem'
        }}>
          {t('pages.events.labels.zipCode')}: {location.zip}
        </Typography>
        <Typography variant="body2" sx={{ 
          color: locationTextColor,
          fontSize: '0.75rem'
        }}>
          {t('pages.events.labels.country')}: {location.country}
        </Typography>
      </Box>
    </Box>
  );
};

export default EventDetails;
