import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setSelectedState } from '../redux/covidslice';

const StateFilter = () => {
  const dispatch = useDispatch();
  const { data, selectedState } = useSelector((state: RootState) => state.covid);

  return (
    <select
      value={selectedState}
      onChange={(e) => dispatch(setSelectedState(e.target.value))}
    >
      {data.map((state) => (
        <option key={state.name} value={state.name}>
          {state.name}
        </option>
      ))}
    </select>
  );
};

export default StateFilter;
