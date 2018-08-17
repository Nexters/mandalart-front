import PropTypes from 'prop-types';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import {
  MandalArtList,
  LandingPage,
  MandalArtEditor,
  MandalArtGrave,
  MandalArtRewardTest,
} from '../../pages';
import { EditAccount, Settings, SocialLogin } from '../../components';

import './AppPresenter.scss';

const AppPresenter = ({ isLoggedIn }) => (
  <BrowserRouter>
    {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
  </BrowserRouter>
);

const LoggedOutRoutes = () => (
  <Switch>
    <Route path={'/'} exact={true} component={LandingPage} />
    <Route path={'/social-login'} component={SocialLogin} />
    <Redirect from={'*'} to={'/'} />
  </Switch>
);
const LoggedInRoutes = () => (
  <Switch>
    <Route path={'/'} exact={true} component={LandingPage} />
    <Route path={'/edit-account'} exact={true} component={EditAccount} />
    <Route path={'/settings'} exact={true} component={Settings} />
    <Route exact path="/mandal-arts" component={MandalArtList} />
    <Route path="/mandal-arts/new" component={MandalArtEditor} />
    <Route path="/mandal-arts/reward" component={MandalArtRewardTest} />
    <Route path="/mandal-arts/graves" component={MandalArtGrave} />
    <Redirect from={'*'} to={'/'} />
  </Switch>
);

AppPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppPresenter;