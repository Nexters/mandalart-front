import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import {
  MandalArtList,
  LandingPage,
  MandalArtEditor,
  MandalArtGrave,
  MandalArtRewardTest,
} from '../pages';

import './App.scss';

class Router extends Component {
  render() {
    return (
      <div className="container">
        <Route exact path="/" component={LandingPage} />
        <Switch>
          <Route exact path="/mandal-arts" component={MandalArtList} />
          <Route path="/mandal-arts/new" component={MandalArtEditor} />
          <Route path="/mandal-arts/reward" component={MandalArtRewardTest} />
          <Route path="/mandal-arts/graves" component={MandalArtGrave} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Router);
