export function formatDate(date1: Date) {
  date1 = new Date(date1);

  const longTimeOptions = {
    weekday: "long",
  };

  const dateString =
    date1.toLocaleDateString("en", longTimeOptions) +
    " at " +
    formatDateNum(date1.getHours()) +
    ":" +
    formatDateNum(date1.getMinutes());

  return dateString.charAt(0).toUpperCase() + dateString.slice(1);
}

function formatDateNum(num: number) {
  let returnString = "";
  if (num.toString().length === 1) {
    returnString = "0";
  }

  return returnString + num;
}
