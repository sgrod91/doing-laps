const INITIAL_STATE = {
  content: ''
};

export default function reducer(state = INITIAL_STATE, action) {
  if(action.type === 'getSinglePage') {
    return Object.assign( {}, state, {
      content: action.content.content
    })
  }
  return state;
}
