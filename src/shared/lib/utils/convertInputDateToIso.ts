export const convertInputDateToIso = (dateString: string) => {
  const date = new Date(dateString);
  const isoDate = date.toISOString();
  return isoDate;
};
