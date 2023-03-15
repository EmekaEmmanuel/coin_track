import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/store';
import MarketPage from '../../Pages/MarketPage';

it('Market page renders correctly', () => {
  const myMarkets = store.getState().market.markets;
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <MarketPage myMarkets={myMarkets} />
      </MemoryRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
