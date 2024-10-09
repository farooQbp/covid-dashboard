import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StateData {
  name: string;
  totalCases: number;
  activeCases: number;
  recovered: number;
  deaths: number;
}

interface CovidState {
  selectedState: string;
  data: StateData[];
}

const initialState: CovidState = {
  selectedState: 'Maharashtra',
  data: [
    {
      name: 'Maharashtra',
      totalCases: 1000000,
      activeCases: 200000,
      recovered: 750000,
      deaths: 50000
    },
    {
      name: 'Karnataka',
      totalCases: 500000,
      activeCases: 100000,
      recovered: 380000,
      deaths: 20000
    },
    {
      name: 'Kerala',
      totalCases: 80000,
      activeCases: 40000,
      recovered: 39000,
      deaths: 1000
    }
  ]
};

const covidSlice = createSlice({
  name: 'covid',
  initialState,
  reducers: {
    setSelectedState(state, action: PayloadAction<string>) {
      state.selectedState = action.payload;
    }
  }
});

export const { setSelectedState } = covidSlice.actions;

export default covidSlice.reducer;
