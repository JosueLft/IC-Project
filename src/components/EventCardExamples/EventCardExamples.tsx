import React from 'react';
import EventCard from '../EventCard';
import { generateDailyEvents } from '../../mocks/eventMock';
import { Box } from '@mui/material';

interface EventCardExamplesProps {
  variant?: 'small' | 'medium' | 'large' | 'responsive';
}

const EventCardExamples: React.FC<EventCardExamplesProps> = ({ variant = 'medium' }) => {
  const events = generateDailyEvents();
  
  const getCardWidth = () => {
    switch (variant) {
      case 'small': return 160;
      case 'medium': return 200;
      case 'large': return 250;
      case 'responsive': return window.innerWidth < 480 ? 160 : 200;
      default: return 200;
    }
  };

  const containerStyle = {
    display: 'flex',
    gap: '16px',
    overflowX: 'auto' as const,
    padding: '16px',
    width: '100%'
  };

  return (
    <Box sx={containerStyle}>
      {events.slice(0, 3).map((event, index) => (
        <EventCard
          key={`example-${index}`}
          event={event}
          width={getCardWidth()}
        />
      ))}
    </Box>
  );
};

export default EventCardExamples;
