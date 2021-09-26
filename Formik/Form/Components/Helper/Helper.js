export const ValidateRequired = (label, required) => {
  return required ? `* ${label}` : label;
};
