export const isObjectFilled = (object: object): boolean => {
  return Object.values(object).every((value) => value);
};
