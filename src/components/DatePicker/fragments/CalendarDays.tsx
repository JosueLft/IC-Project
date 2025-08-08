import { css } from '@emotion/react';
import { addDays, endOfMonth, format, isSameDay, startOfMonth } from 'date-fns';
import { calendarDay, dayContainer } from './styles';

interface CalendarDaysProps {
  selectedDate?: Date | null;
  onDateSelect: (date: Date) => void;
  currentMonth: Date;
}

const CalendarDays = ({
  selectedDate,
  onDateSelect,
  currentMonth,
}: CalendarDaysProps) => {
  const startMonth = startOfMonth(currentMonth);
  const endMonth = endOfMonth(currentMonth);

  const days: Date[] = [];
  for (let i = 0; i < endMonth.getDate(); i += 1) {
    const day = addDays(startMonth, i);
    days.push(day);
  }

  return (
    <div
      css={css({
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: '5px',
      })}
    >
      {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
        <div key={day} style={dayContainer}>
          {day}
        </div>
      ))}

      {Array.from({ length: startMonth.getDay() }).map(() => (
        <div style={dayContainer} key={crypto.randomUUID()} />
      ))}

      {days.map((day) => (
        <button
          key={day.toString()}
          css={[
            calendarDay(
              selectedDate ? isSameDay(day, selectedDate) : false,
              isSameDay(day, new Date())
            ),
          ]}
          onClick={() => onDateSelect(day)}
          type="button"
        >
          {format(day, 'd')}
        </button>
      ))}
    </div>
  );
};

export default CalendarDays;
