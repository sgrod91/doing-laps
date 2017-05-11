import $ from 'jquery';

export function changeState(value, field) {
  return {
    type: 'changeState',
    content: value,
    field: field
  };
}

export function savePage(pageName, editBody) {
  let asyncAction = function(dispatch) {
    $.ajax({
      type: "PUT",
      url: "http://localhost4000//api/page/" + pageName,
      contentType: 'application/json',
      data: JSON.stringify({content: editBody})
    })
    .then(result => dispatch({type: 'success'}))
    .catch(error => dispatch({type: 'error'}));
  };
  return asyncAction;
}
