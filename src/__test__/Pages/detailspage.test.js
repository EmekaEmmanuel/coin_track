import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/store';
import DetailsPage from '../../Pages/DetailsPage';

it('RoCoin Details page renders correctly', () => {
  const myCoins = store.getState().coin.coins;
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <DetailsPage myCoins={myCoins} />
      </MemoryRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
