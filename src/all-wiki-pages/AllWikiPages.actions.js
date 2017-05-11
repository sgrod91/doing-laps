import $ from 'jquery';

export function fetchPages() {
  let asyncAction = function(dispatch) {
    $.get('http://localhost:4000/api/pages')
    .then(data => dispatch({
      type: 'load-all',
      content: data
    }));
  };
  return asyncAction;
}
