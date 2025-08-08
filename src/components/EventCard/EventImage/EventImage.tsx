import React, { useState } from 'react';
import { getEventImageStyle, eventImageContainerStyle } from './styles';
import logoImage from '../../../assets/images/logo.png';

interface EventImageProps {
  src: string;
  alt: string;
  isExpanded?: boolean;
}

const EventImage: React.FC<EventImageProps> = ({
  src,
  alt,
  isExpanded = false,
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    if (!hasError) {
      setHasError(true);
      setImageSrc(logoImage);
    }
  };

  return (
    <div style={eventImageContainerStyle(isExpanded)}>
      <img
        src={imageSrc || logoImage}
        alt={alt}
        style={getEventImageStyle()}
        loading="lazy"
        onError={handleImageError}
      />
    </div>
  );
};

export default EventImage;
