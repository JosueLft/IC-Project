export const applyDateMask = (value: string): string => {
  let maskedValue = value.replace(/[^\d]/g, '');
  if (maskedValue.length > 8) {
    maskedValue = maskedValue.slice(0, 8);
  }

  if (maskedValue.length > 2) {
    maskedValue = `${maskedValue.slice(0, 2)}/${maskedValue.slice(2)}`;
  }
  if (maskedValue.length > 5) {
    maskedValue = `${maskedValue.slice(0, 5)}/${maskedValue.slice(5)}`;
  }

  return maskedValue;
};