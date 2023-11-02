import React, { useState, useEffect, memo } from "react";
import ApiService from "../services/ApiService";
import dayjs, { Dayjs } from "dayjs";
import Block from "../../sdk/components/Block";
import { GetSeasonStartYear } from "../../teams/sdk/utils/get-season-start-year";
import DateHeader from "../../sdk/components/DateHeader";
import { ILogLossesVM } from "../types/types";
import LineChart from "../../sdk/components/LineChart";
import { GetDatasetsFromLogLosses } from "../utils/get-datasets-from-log-losses";
import { ChartData } from "chart.js";

function TeamView() {
  const currentSeasonStartYear = GetSeasonStartYear(dayjs());
  const [year, setYear] = useState<number>(currentSeasonStartYear);
  const [chartData, setChartData] = useState<ChartData | null>(null);

  const onChangeCallback = (newYear: Dayjs | null) => {
    if (newYear === null || newYear.year() === year) return;
    if (newYear.year() > 2000) setYear(newYear.year());
  };

  const getLogLosses = (year: number, teamId: number | null) => {
    ApiService.getLogLossesForSeason(year, teamId)
      .then((response) => {
        const logLossesVM: ILogLossesVM = response.data.value;
        setChartData(GetDatasetsFromLogLosses(logLossesVM));
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  // Get teams
  useEffect(() => {
    getLogLosses(year, null);
  }, [year]);

  return (
    <>
      <DateHeader
        header={"Log Losses"}
        year={year}
        isLoading={false}
        onDateChange={onChangeCallback}
      />
      <Block>
        {chartData && <LineChart chartData={chartData} />}
      </Block>
    </>
  );
}
export default memo(TeamView);
