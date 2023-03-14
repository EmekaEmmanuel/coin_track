import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const getMarketsURL = 'https://api.coinstats.app/public/v1/markets?coinId=bitcoin';

const initialState = {
  loading: false,
  markets: [],
  error: '',
};

export const fetchMarkets = createAsyncThunk('market/fetchMarkets', async (id) => {
  console.log(id);
  const { data } = await (axios.get(`https://api.coinstats.app/public/v1/markets?coinId=${id}`));
  console.log(data);
  return data;
});

/* eslint-disable no-param-reassign */

const marketSlice = createSlice({
  name: 'market',
  initialState,
  // reducers: {
  //   bookRocket: (state, { payload }) => {
  //     const newRockets = state.rockets.map((rocket) => {
  //       if (rocket.id !== payload) { return rocket; }
  //       return { ...rocket, reserved: true };
  //     });
  //     return {
  //       ...state,
  //       rockets: newRockets,
  //     };
  //   },
  //   unreserveRocket: (state, { payload }) => {
  //     const newRockets = state.rockets.map((rocket) => {
  //       if (rocket.id !== payload) { return rocket; }
  //       return { ...rocket, reserved: false };
  //     });
  //     return {
  //       ...state,
  //       rockets: newRockets,
  //     };
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(fetchMarkets.pending, (state) => {
      state.loading = true;
    })
      .addCase(fetchMarkets.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.markets = action.payload;
      })
      .addCase(fetchMarkets.rejected, (state) => {
        state.loading = false;
        state.error = '';
      });
  },
});

/* eslint-disable no-param-reassign */

export default marketSlice.reducer;

// export const { bookRocket, unreserveRocket } = rocketSlice.actions;
