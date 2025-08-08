import { addDays } from 'date-fns';
import { useState } from 'react';
import CalendarDays from './fragments/CalendarDays';
import CalendarHeader from './fragments/CalendarHeader';
import { calendarWrapper } from './fragments/styles';
import CalendarActions, {
  CalendarActionsProps,
} from './fragments/CalendarActions';

interface CalendarProps extends CalendarActionsProps {
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
}

const Calendar = ({
  selectedDate,
  onDateSelect,
  onClear,
  onToday,
}: CalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  return (
    <div style={calendarWrapper}>
      <CalendarHeader
        currentMonth={currentMonth}
        onPrevMonth={() => setCurrentMonth(addDays(currentMonth, -30))}
        onNextMonth={() => setCurrentMonth(addDays(currentMonth, 30))}
      />
      <CalendarDays
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        onDateSelect={onDateSelect}
      />
      <CalendarActions onClear={onClear} onToday={onToday} />
    </div>
  );
};

export default Calendar;