export default function convertToLocalTime(gameDate: Date): string{
    let utcDateString = gameDate.toString()+"Z";
    let utcDate = new Date(utcDateString);
    let timeZone = utcDate.toLocaleDateString('en-US', {
        day: '2-digit',
        timeZoneName: 'short',
      }).slice(4);
    let date = utcDate.toLocaleDateString("en-US")
    let time = utcDate.toLocaleTimeString();

    return date + " " + time + " " + timeZone;
}