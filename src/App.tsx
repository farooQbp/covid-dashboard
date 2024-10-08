import React from 'react';
import StateFilter from './components/statefilter';
import PieChart from './components/piechart';
import LineChart from './components/linechart';
import MapView from './components/mapview';

const App: React.FC = () => {
  return (
    <div>
      <h1>Covid-19 Dashboard</h1>
      <StateFilter />
      <PieChart />
      <LineChart />
      <MapView />
    </div>
  );
};

export default App;
