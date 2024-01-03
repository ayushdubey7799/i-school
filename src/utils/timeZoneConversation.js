const utcDateTimeString = "2023-11-30T15:54:00";

export const timeZoneConversion = (utcDateTimeString) => {
  if (utcDateTimeString?.slice(-1) != 'Z') utcDateTimeString = utcDateTimeString + "Z";
  const utcDateTime = new Date(utcDateTimeString);

  const browserTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: browserTimeZone,
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  const browserDateTimeString = formatter.format(utcDateTime);
  return browserDateTimeString;
};


export const dateConversion = (utcDateTimeString) => {
  if (utcDateTimeString && utcDateTimeString?.slice(-1) != 'Z') utcDateTimeString = utcDateTimeString + "Z";
  const utcDateTime = new Date(utcDateTimeString);

  const browserTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: browserTimeZone,
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const browserDateTimeString = formatter.format(utcDateTime);
  return browserDateTimeString;
};
