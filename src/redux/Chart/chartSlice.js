import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  charts: [],
  error: '',
};

export const testFetchCharts = createAsyncThunk('market/fetchMarkets', async () => {
  const { data } = await (axios.get('https://api.coinstats.app/public/v1/charts?period=1m&coinId=bitcoin'));
  return data;
});

export const fetchCharts = createAsyncThunk('market/fetchMarkets', async (id) => {
  const { data } = await (axios.get(`https://api.coinstats.app/public/v1/charts?period=1m&coinId=${id}`));
  return data;
});

/* eslint-disable no-param-reassign */

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCharts.pending, (state) => {
      state.loading = true;
    })
      .addCase(fetchCharts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.charts = action.payload.chart;
      })
      .addCase(fetchCharts.rejected, (state) => {
        state.loading = false;
        state.error = '';
      });
  },
});

/* eslint-disable no-param-reassign */

export default chartSlice.reducer;
