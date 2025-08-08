import React, { useState } from 'react';
import { PrimaryCard } from '../cards';
import ExpandableArea from '../ExpandableArea/ExpandableArea';
import EventDetails from '../EventDetails';
import EventImage from './EventImage';
import Event from './types';
import logoImage from '../../assets/images/logo.png';
import {
  getEventCardStyles,
  eventHeaderStyle,
  getEventTitleStyle,
  dateTimeContainerStyle,
  getDateStyle,
  getTimeStyle,
  bottomContainerStyle,
  responsiveEventCardStyles,
} from './styles';

interface EventCardProps {
  event: Event;
  width?: number;
  titleColor?: string;
  actions?: React.ReactNode;
  onSuccess?: (event: Event) => void;
}

const EventCard: React.FC<EventCardProps> = ({
  event,
  width = 200,
  titleColor,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandChange = (expanded: boolean) => {
    setIsExpanded(expanded);
  };
  // Inject responsive styles
  React.useEffect(() => {
    const styleId = 'event-card-responsive-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = responsiveEventCardStyles;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className="event-card">
      <PrimaryCard style={getEventCardStyles(width)}>
        <div style={eventHeaderStyle}>
            <div className="date-time-container" style={dateTimeContainerStyle}>
                <span className="date-time-text" style={getDateStyle()}>
                📅 {event.date}
                </span>
                <span className="date-time-text" style={getTimeStyle()}>
                🕐 {event.time}
                </span>
            </div>
            <div 
                className="event-title"
                style={getEventTitleStyle(titleColor)}
                title={event.title}
            >
                {event.title}
            </div>
            
            {/* Event Image */}
            <EventImage
              src={event.image || logoImage}
              alt={event.title}
              isExpanded={isExpanded}
            />
        </div>

        {/* Área Expansível */}
        <div style={bottomContainerStyle}>
          <ExpandableArea onExpandChange={handleExpandChange}>
            <EventDetails 
              children={event.child} 
              location={event.location} 
            />
          </ExpandableArea>
        </div>
      </PrimaryCard>
    </div>
  );
};

export default EventCard;
