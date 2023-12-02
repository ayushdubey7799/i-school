const utcDateTimeString = "2023-11-30T15:54:00";

export const timeZoneConversion = (utcDateTimeString) => {
  const utcDateTime = new Date(utcDateTimeString + "Z"); 

  const browserTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: browserTimeZone,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });

  const browserDateTimeString = formatter.format(utcDateTime);
  return browserDateTimeString;
};
