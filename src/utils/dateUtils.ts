import {
  format,
  isValid,
  differenceInDays,
  addDays,
  subDays,
  isFuture,
  isPast,
} from 'date-fns';
import { DATE_PATTERN_DEFAULT } from './constants/date';

const formatDate = (
  date: Date | string | null,
  pattern: string = DATE_PATTERN_DEFAULT
): string => {
  if (date && isValid(new Date(date))) {
    return format(new Date(date), pattern);
  }
  return '';
};

const parseDate = (date: string): Date | null => {
  const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  const match = date.match(regex);
  if (!match) return null;

  const [, mm, dd, yyyy] = match;
  const parsedDate = new Date(Number(yyyy), Number(mm) - 1, Number(dd));

  return parsedDate.getFullYear() === Number(yyyy) &&
    parsedDate.getMonth() === Number(mm) - 1 &&
    parsedDate.getDate() === Number(dd)
    ? parsedDate
    : null;
};

const differenceBetweenDates = (
  date1: Date | string,
  date2: Date | string
): number => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  if (isValid(d1) && isValid(d2)) {
    return differenceInDays(d1, d2);
  }
  return NaN;
};

const addDaysToDate = (date: Date | string, days: number): Date | null => {
  const d = new Date(date);
  if (isValid(d)) {
    return addDays(d, days);
  }
  return null;
};

const subtractDaysFromDate = (
  date: Date | string,
  days: number
): Date | null => {
  const d = new Date(date);
  if (isValid(d)) {
    return subDays(d, days);
  }
  return null;
};

const isDateInFuture = (date: Date | string): boolean => {
  const d = new Date(date);
  if (isValid(d)) {
    return isFuture(d);
  }
  return false;
};

const isDateInPast = (date: Date | string): boolean => {
  const d = new Date(date);
  if (isValid(d)) {
    return isPast(d);
  }
  return false;
};

const timestampToDate = (timestamp: number | undefined): Date | null => {
  if (!timestamp) return null;
  const correctedTimestamp = timestamp < 1e12 ? timestamp * 1000 : timestamp;
  const date = new Date(correctedTimestamp);
  return isValid(date) ? date : null;
};

const dateToMonthYearFormat = (date: Date) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(date);

export {
  formatDate,
  differenceBetweenDates,
  addDaysToDate,
  subtractDaysFromDate,
  isDateInFuture,
  isDateInPast,
  parseDate,
  timestampToDate,
  dateToMonthYearFormat,
};