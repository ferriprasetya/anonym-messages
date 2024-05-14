export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const formatLongNumber = (num: number) => {
  let units = ['k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
  let floor = Math.floor(Math.abs(num) / 1000);
  if (floor > 0 && num >= 1000) {
    let value = +(num / Math.pow(1000, floor));
    return (+(value).toFixed(2)).toLocaleString("id") + (floor > 1 ? units[floor - 1] : '');
  }
  return num.toLocaleString("id");
};

