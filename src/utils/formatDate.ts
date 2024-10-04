const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day =
    date.getDate() < 10 ? `0${date.getDate()}` : date.getDate().toString();
  const month =
    date.getMonth() + 1 < 10
      ? `0${date.getMonth() + 1}`
      : (date.getMonth() + 1).toString();
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export default formatDate;
