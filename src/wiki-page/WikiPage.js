/*
You'll need to be running the wiki backend provided to do this part.

1. Within the componentDidMount method, trigger a action to fetch
the wiki page information from the backend for the given title -
specified as a URL parameter. Then render the content for the page in
the paragraph element.
2. Make navigative between the JavaScript Page and Python Page work (
it should fetch the content for the new page). You'll need to add code
to the componentWillReceiveProps method to detect if the title from the
params prop has changed. If it has, you want to trigger the action
to fetch the page information for the new title (from newProps).
*/

import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './WikiPage.actions';

class WikiPage extends React.Component {
  componentDidMount() {
    this.props.getPage(this.props.params.title);

  }
  componentWillReceiveProps(newProps) { //detects changes in parameters
    if(this.props.params.title !== newProps.params.title) {//will compare the old params with the current params, if changed, it will trigger a function.
      this.props.getPage(newProps.params.title);
    }
  }
  render() {
    return (
      <div>
        <h1>{this.props.params.title} Page</h1>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

const WikiPageContainer = ReactRedux.connect(
  state => state.wikiPage,
  actions
)(WikiPage);

export default WikiPageContainer;
