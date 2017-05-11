import $ from 'jquery';

export function getPage(title) {
  let asyncAction = function(dispatch) {
    $.get('http://localhost:4000/api/page/' + title)
    .then(data => dispatch({
      type: 'getSinglePage',
      content: data
    }));

  };
  return asyncAction;
}
