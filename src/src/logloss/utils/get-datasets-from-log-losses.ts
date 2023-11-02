import { ILogLossesVM } from "../types/types";
import { ChartDataset, ChartData } from 'chart.js';

export function GetDatasetsFromLogLosses(logLosses: ILogLossesVM): any {
    const modelDataset: ChartDataset = {
        label: "Model",
        data: logLosses.modelLogLosses,
        borderColor: 'rgba(128, 0, 128, 1)', // Purple
        borderWidth: 1,
        fill: false
    }
    const barstoolDataset: ChartDataset = {
        label: "Model",
        data: logLosses.barstoolLogLosses,
        borderColor: 'rgba(54, 162, 235, 1)', // Blue
        borderWidth: 1,
        fill: false
    }
    const betMgmDataset: ChartDataset = {
        label: "Model",
        data: logLosses.betMgmLogLosses,
        borderColor: 'rgba(255, 206, 86, 1)', // Yellow
        borderWidth: 1,
        fill: false
    }
    const bovadaDataset: ChartDataset = {
        label: "Model",
        data: logLosses.bovadaLogLosses,
        borderColor: 'rgba(255, 99, 132, 1)', // Red
        borderWidth: 1,
        fill: false
    }
    const draftKingsDataset: ChartDataset = {
        label: "Model",
        data: logLosses.draftKingsLogLosses,
        borderColor: 'rgba(75, 192, 192, 1)', // Green
        borderWidth: 1,
        fill: false
    }

    return {
        labels: logLosses.gameCounts,
        datasets: [modelDataset, barstoolDataset, betMgmDataset, bovadaDataset, draftKingsDataset]
    };
}