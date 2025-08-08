import { format } from 'date-fns';
import { calendarHeader, navigationButton } from './styles';

interface CalendarHeaderProps {
  currentMonth: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const CalendarHeader = ({
  currentMonth,
  onPrevMonth,
  onNextMonth,
}: CalendarHeaderProps) => (
  <div style={calendarHeader}>
    <button onClick={onPrevMonth} type="button" css={navigationButton}>
      ◀
    </button>
    <span>{format(currentMonth, 'MMMM yyyy')}</span>
    <button onClick={onNextMonth} type="button" css={navigationButton}>
      ▶
    </button>
  </div>
);

export default CalendarHeader;