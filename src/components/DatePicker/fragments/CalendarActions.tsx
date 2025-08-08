import { actionButton, actionsContainer } from './styles';

export interface CalendarActionsProps {
  onClear?: () => void;
  onToday?: () => void;
}

const CalendarActions: React.FC<CalendarActionsProps> = (props) => {
  const { onClear, onToday } = props;

  const handleClearClick = () => onClear?.();
  const handleTodayClick = () => onToday?.();

  return (
    <div style={actionsContainer}>
      <button type="button" onClick={handleClearClick} css={actionButton}>
        Clear
      </button>
      <button type="button" onClick={handleTodayClick} css={actionButton}>
        Today
      </button>
    </div>
  );
};

export default CalendarActions;