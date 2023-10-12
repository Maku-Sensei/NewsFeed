const getTime = (dateString: string) => {
  const date = new Date(dateString);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const timePortion = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
  return timePortion;
};

export default getTime;
