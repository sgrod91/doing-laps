const INITIAL_STATE = {
    title: '',
    body: ''
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'changeState') {
    return Object.assign({}, state, {
      [action.field]: action.content
    });
  } else if (action.type === 'success'){
    console.log('Success!');
  } else if (action.type === 'error') {
    console.log('error');
  }
  return state;
}
