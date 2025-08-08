// displayUtils.js

/**
 * Format numbers with customizable options.
 * @param {number} value - The number to format.
 * @param {Object} options - Intl.NumberFormat options for customization.
 * @param {string} [locale="en-US"] - Locale string, default is "en-US".
 * @returns {string} - The formatted number as a string.
 */
export function displayNumber(
  value: number,
  options = { minimumFractionDigits: 2, maximumFractionDigits: 2 },
  locale = 'en-US'
) {
  const formatter = new Intl.NumberFormat(locale, options);
  return formatter.format(value);
}

/**
 * Format dates with customizable options.
 * @param {Date|string|number} value - The date to format (can be a Date object, timestamp, or ISO string).
 * @param {Object} options - Intl.DateTimeFormat options for customization.
 * @param {string} [locale="en-US"] - Locale string, default is "en-US".
 * @returns {string} - The formatted date as a string.
 */
export function displayDate(
  value: string | number | Date,
  options = {},
  locale = 'en-US'
) {
  const date =
    typeof value === 'string' || typeof value === 'number'
      ? new Date(value)
      : value;
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
}

/**
 * Format currency values with customization options.
 * @param {number} value - The monetary value to format.
 * @param {string} [currency="USD"] - The currency code (e.g., "USD", "EUR").
 * @param {Object} options - Additional Intl.NumberFormat options for customization.
 * @param {string} [locale="en-US"] - Locale string, default is "en-US".
 * @returns {string} - The formatted currency string.
 */
export function displayCurrency(
  value: number,
  currency = 'USD',
  options = {},
  locale = 'en-US'
) {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    ...options,
  });
  return formatter.format(value);
}

/**
 * Format percentages with customizable precision.
 * @param {number} value - The value to format as a percentage.
 * @param {number} [decimalPlaces=2] - Number of decimal places for precision.
 * @param {string} [locale="en-US"] - Locale string, default is "en-US".
 * @returns {string} - The formatted percentage as a string.
 */
export function displayPercentage(
  value: number,
  decimalPlaces = 2,
  locale = 'en-US'
) {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  });
  return formatter.format(value);
}

/**
 * Generic fallback for displaying any value as a string.
 * Useful for ensuring consistent display behavior.
 * @param {any} value - The value to convert to a string.
 * @returns {string} - The string representation of the value.
 */
export function displayGeneric(value: any) {
  return value !== undefined && value !== null ? String(value) : '';
}

export default {
  displayNumber,
  displayDate,
  displayCurrency,
  displayPercentage,
  displayGeneric,
};
