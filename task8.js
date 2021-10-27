function convertToHoursMin(num) {
  const minInHour = 60;
  const decimalHours = num / minInHour;
  const hours = Math.floor(decimalHours);
  const decimalMinutes = (decimalHours - hours) * minInHour;
  const minutes = Math.floor(decimalMinutes);
  let hourString = "hour";
  let minString = "minute";
  let time = "";
  if (hours > 1) {
    hourString = "hours";
  }
  if (minutes > 1) {
    minString = "minutes";
  }
  time = hours + " " + hourString + ", " + minutes + " " + minString;
  return time;
}
convertToHoursMin(66);
