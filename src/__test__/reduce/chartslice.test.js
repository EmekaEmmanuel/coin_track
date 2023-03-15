import store from '../../redux/store';

describe('Chart redux state tests', () => {
  it('Should initially set Chart store to an empty Array', () => {
    const state = store.getState().chart.charts;
    expect(state).toEqual([]);
  });
});
