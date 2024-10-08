import React from 'react';
import Plot from 'react-plotly.js';
import { PlotData, Layout } from 'plotly.js';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const PieChart = () => {
  const { data, selectedState } = useSelector((state: RootState) => state.covid);
  const stateData = data.find((state) => state.name === selectedState);

  if (!stateData) return null;

  const plotData: Partial<PlotData>[] = [
    {
      values: [stateData.totalCases, stateData.activeCases, stateData.recovered, stateData.deaths],
      labels: ['Total Cases', 'Active Cases', 'Recovered', 'Deaths'],
      type: 'pie'
    }
  ];

  const layout: Partial<Layout> = {
    title: `Covid Data for ${selectedState}`,
  };

  return <Plot data={plotData} layout={layout} />;
};

export default PieChart;
