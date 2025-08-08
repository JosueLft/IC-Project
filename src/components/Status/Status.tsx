import { StatusEnum, statusEnumToString } from '../../types/status';
import {
  statusSignalStyles,
  statusTextStyles,
  statusWithSignalStyles,
} from './styles';
import { StatusColor } from './colors';

interface StatuProps {
  status: StatusEnum;
}

const Status: React.FC<StatuProps> = ({ status }) => {
  const color = StatusColor[status];

  return (
    <div style={statusWithSignalStyles}>
      <div style={statusSignalStyles(color)} />
      <div style={statusTextStyles}>{statusEnumToString(status)}</div>
    </div>
  );
};

export default Status;
