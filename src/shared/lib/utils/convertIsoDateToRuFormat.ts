export const convertIsoDateToRuFormat = (
  dateString: string,
  locale = 'ru-RU',
) => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });
  return formattedDate;
};
