import React, {
  ChangeEvent,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { colors } from '../../theme';
import { formatDate, parseDate } from '../../utils/dateUtils';
import BaseInput, { BaseInputProps } from '../BaseInput';
import Calendar from './Calendar';
import { datePickerContainer } from './styles';
import { applyDateMask } from './utils';
import Icon from '../ui/Icon';

export interface DatePickerInputProps
  extends Omit<BaseInputProps, 'value' | 'autoComplete'> {
  value?: Date | null;
  dateFormat?: string;
}

const DatePickerInput = React.forwardRef(
  (
    {
      label,
      value,
      onChange,
      name,
      dateFormat = 'MM/dd/yyyy',
      ...props
    }: DatePickerInputProps,
    ref
  ) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(
      value || null
    );
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState(formatDate(value || null));
    const calendarRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      clearFields: () => {
        handleClear();
      },
    }));

    useImperativeHandle(ref, () => inputRef.current!);

    useEffect(() => {
      setInputValue(formatDate(selectedDate));
    }, [selectedDate]);

    const dispatchOnChange = (date: Date | null) => {
      onChange?.({
        target: { name, value: formatDate(date, dateFormat) },
      } as ChangeEvent<HTMLInputElement>);
    };

    const handleDateChange = (date: Date | null) => {
      setSelectedDate(date);
      dispatchOnChange(date);
      setInputValue(formatDate(date));
      setIsOpen(false);
    };

    const handleClear = () => {
      handleDateChange(null);
    };

    const handleToday = () => {
      handleDateChange(new Date());
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const maskedValue = applyDateMask(event.target.value);
      setInputValue(maskedValue);

      const parsedDate = parseDate(maskedValue);
      if (parsedDate) {
        setSelectedDate(parsedDate);
        dispatchOnChange(parsedDate);
      } else {
        dispatchOnChange(null);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    useEffect(() => {
      if (isOpen) document.addEventListener('mousedown', handleClickOutside);
      else document.removeEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen]);

    return (
      <div css={datePickerContainer} ref={calendarRef}>
        <BaseInput
          {...props}
          name="datePicker"
          label={label}
          value={inputValue}
          onChange={handleChange}
          autoComplete="off"
          actionIcon={
            <Icon name={'CalendarDays'} size={'1rem'} color={colors.text.primary} />
          }
          onActionClick={() => setIsOpen((prev) => !prev)}
          onClick={() => setIsOpen((prev) => !prev)}
          ref={inputRef}
        />
        {isOpen && (
          <Calendar
            selectedDate={selectedDate}
            onDateSelect={handleDateChange}
            onClear={handleClear}
            onToday={handleToday}
          />
        )}
      </div>
    );
  }
);

export default DatePickerInput;
