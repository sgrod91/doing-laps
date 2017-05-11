const INITIAL_STATE = {
  on: false
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'flip') {
    if(state.on === false) {
      return Object.assign({}, state, {
        on: true
      });
    } else {
      return Object.assign({}, state, {
        on: false
      });
    }
  }
  return state;
}
