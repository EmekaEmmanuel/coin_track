import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/store';
import Market from '../../Components/Market';

it('Market component renders correctly', () => {
  const myMarkets = store.getState().market.markets;
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <Market myMarkets={myMarkets} />
      </MemoryRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
