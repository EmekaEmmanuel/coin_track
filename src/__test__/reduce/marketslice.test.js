import store from '../../redux/store';

describe('Market redux state tests', () => {
  it('Should initially set Market store to an empty Array', () => {
    const state = store.getState().market.markets;
    expect(state).toEqual([]);
  });
});
