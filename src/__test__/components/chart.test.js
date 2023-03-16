import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/store';
import Chart from '../../Components/Chart';

it('Chart component renders correctly', () => {
  const myCharts = store.getState().chart.charts;
  const tree = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <Chart myCharts={myCharts} />
      </MemoryRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
