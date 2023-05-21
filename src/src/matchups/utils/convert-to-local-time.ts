export default function convertToLocalTime(gameDate: Date): string {
  const utcDateString = gameDate.toString() + "Z";
  const utcDate = new Date(utcDateString);
  const timeZone = utcDate
    .toLocaleDateString("en-US", {
      day: "2-digit",
      timeZoneName: "short",
    })
    .slice(4);
  const date = utcDate.toLocaleDateString("en-US");
  const time = utcDate.toLocaleTimeString();

  return date + " " + time + " " + timeZone;
}
