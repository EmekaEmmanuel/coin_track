import axios from 'axios';
import store from '../../redux/store';
import { fetchMarkets } from '../../redux/Market/marketSlice';

describe('Market redux state tests', () => {
  it('Should initially set Market store to an empty Array', () => {
    const state = store.getState().market.markets;
    expect(state).toEqual([]);
  });

  it('fetches market data from API', async () => {
    const url = 'https://api.coinstats.app/public/v1/markets?coinId=bitcoin';
    const axiosSpy = jest.spyOn(axios, 'get');
    jest.setTimeout(90000);
    const dispatchSpy = jest.fn();
    await fetchMarkets(url)(dispatchSpy);
    expect(axiosSpy).toHaveBeenCalledWith(url);
  });
});
