const INITIAL_STATE = {
  coins: [
    { name: 'quarter', value: 25 },
    { name: 'dime', value: 10 },
  ],
  total: 0
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'addPenny') {
    let array = state.coins.map(item => item);
    array.push({name: 'penny', value: 1});
    return Object.assign({}, state, {
      coins: array,
      total: state.total + 1
    });
  }else if (action.type === 'addNickle') {
    let array = state.coins.map(item => item);
    array.push({name: 'nickle', value: 5});
    return Object.assign({}, state, {
      coins: array,
      total: state.total + 5
    });
  }else if (action.type === 'addDime') {
    let array = state.coins.map(item => item);
    array.push({name: 'dime', value: 10});
    return Object.assign({}, state, {
      coins: array,
      total: state.total + 10
    });
  }else if (action.type === 'addQuarter') {
    let array = state.coins.map(item => item);
    array.push({name: 'quarter', value: 25});
    return Object.assign({}, state, {
      coins: array,
      total: state.total + 25
    });
  }
  return state;
}
