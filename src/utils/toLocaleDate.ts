export const toLocaleDate = (date: string | undefined) => {
  return date ? new Date(date).toLocaleDateString('ua-UA') : '';
};
