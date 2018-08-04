import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import {
  MandalArtList,
  LandingPage,
  MandalArtEditor,
  MandalArtGrave,
} from '../pages';

class App extends Component {
  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Route exact path="/" component={LandingPage} />
        <Switch>
          <Route exact path="/mandal-arts" component={MandalArtList} />
          <Route path="/mandal-arts/new" component={MandalArtEditor} />
          <Route path="/mandal-arts/graves" component={MandalArtGrave} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
