import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { MandalArtList, LandingPage, MandalArtEditor } from '../pages';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={LandingPage} />
        <Switch>
          <Route exact path="/mandal-arts" component={MandalArtList} />
          <Route path="/mandal-arts/new" component={MandalArtEditor} />
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(App);
