import { PropsWithChildren, CSSProperties } from 'react';
import primarycardStyles from './styles';

interface PrimaryCardProps extends PropsWithChildren {
  style?: CSSProperties;
}

const PrimaryCard: React.FC<PrimaryCardProps> = ({ children, style }) => (
  <div style={{ ...primarycardStyles, ...style }}>{children}</div>
);

export default PrimaryCard;
