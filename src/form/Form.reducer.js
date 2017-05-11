const INITIAL_STATE = {
  name: '',
  email: '',
  phone: ''
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'change-state'){
    let something = action.thing;
    console.log(something);
    return Object.assign({}, state, {
      [something]: action.current
    });
  }
  return state;
}
