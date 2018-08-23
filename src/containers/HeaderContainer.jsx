import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import { USER_PROFILE } from '../sharedQueries';
import { LOG_USER_OUT } from '../sharedQueries.local';

import { Header } from '../components';

class ProfileQuery extends Query {}

export default class HeaderContainer extends Component {
  state = {
    redirectToLogin: false,
  };

  getUserProfile = () => {};

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
