import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Mutation, Query } from 'react-apollo';
import { USER_PROFILE } from '../sharedQueries';
import { LOG_USER_OUT } from '../sharedQueries.local';
import { IS_LOGGED_IN } from '../components/App/AppQueries.local';

import { Header } from '../components';

class ProfileQuery extends Query {}

export default class HeaderContainer extends Component {
  state = {
    redirectToLogin: false,
  };

  getUserProfile = response => {
    const { name, first_name, last_name, email, id, accessToken } = response;
  };

  render() {
    const { redirectToLogin } = this.state;

    const { mandalPage, gravePage, listPage } = this.props;
    return (
      <Mutation mutation={LOG_USER_OUT}>
        {logUserOut => (
          <ProfileQuery query={USER_PROFILE}>
            {({ data, loading }) => (
              <Header
                data={data}
                loading={loading}
                mandalPage={mandalPage}
                gravePage={gravePage}
                listPage={listPage}
                redirectToLogin={redirectToLogin}
                getUserProfile={this.getUserProfile}
                logUserOut={logUserOut}
              />
            )}
          </ProfileQuery>
        )}
      </Mutation>
    );
  }
}
