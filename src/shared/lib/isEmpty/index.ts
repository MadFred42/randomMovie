export const isEmpty = (value: unknown): boolean => {
  return (
    value === undefined ||
    value === null ||
    value === '' ||
    (value as []).length === 0 ||
    Object.keys(value).length === 0
  );
};
