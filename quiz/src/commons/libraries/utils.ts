export const getDateAll = (value: Date) => {
  const date = new Date(value);
  const yyyy = date.getFullYear();
  const MM = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  return `${yyyy}-${MM}-${dd} ${hh}:${mm}`;
};

export const getDateYearDay = (value: Date) => {
  const date = new Date(value);
  const yyyy = date.getFullYear();
  const MM = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${MM}-${dd}`;
};

export const getErrorMessage = (error: unknown) => {
  let message;
  if (error instanceof Error) message = error.message;
  else message = String(error);

  alert(message);
};
