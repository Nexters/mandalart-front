import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { MandalArtList, LandingPage } from '../pages';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/mandal-arts" component={MandalArtList} />
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(App);
