import dayjs, { Dayjs } from "dayjs";

export function GetSeasonStartYear(date: Dayjs): number{
    const endSeason = new Date(date.year(), 9, 15);
    const endSeasonDate = dayjs(endSeason);
    let currentSeasonStartYear: number;

    if (date > endSeasonDate)
        currentSeasonStartYear = date.year();
    else
        currentSeasonStartYear = date.year() - 1;

    return currentSeasonStartYear;
}