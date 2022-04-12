export const isEmptyString = (value?: string) => {
  const errorName = "Field cannot be empty.";
  if (value) {
    const trimedValue = value.trim();
    return trimedValue ? undefined : errorName;
  }
  return errorName;
};
