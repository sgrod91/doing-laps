import $ from 'jquery';

const INITIAL_STATE = {
  allPages: []
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'load-all') {
    return Object.assign({}, state, {
      allPages: action.content
    });
  }
  return state;
}
