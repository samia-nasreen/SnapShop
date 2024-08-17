export const formatCurrency = (value: number): string => {
  if (value > 0) return value.toFixed(2);
  return "0.00";
};
