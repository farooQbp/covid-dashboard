import React from 'react';
import Plot from 'react-plotly.js';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { PlotData, Layout } from 'plotly.js';

const LineChart: React.FC = () => {
  const { data, selectedState } = useSelector((state: RootState) => state.covid);
  const stateData = data.find((state) => state.name === selectedState);

  if (!stateData) return null;

  const plotData: Partial<PlotData>[] = [
    {
      x: ['Day 1', 'Day 2', 'Day 3', 'Day 4'],
      y: [stateData.totalCases, stateData.activeCases, stateData.recovered, stateData.deaths],
      type: 'scatter',
      mode: 'lines',
      name: 'Total Cases'
    }
  ];

  const layout: Partial<Layout> = {
    title: `Covid Trends for ${selectedState}`,
    xaxis: { title: 'Days' },
    yaxis: { title: 'Cases' }
  };

  return <Plot data={plotData} layout={layout} />;
};

export default LineChart;
