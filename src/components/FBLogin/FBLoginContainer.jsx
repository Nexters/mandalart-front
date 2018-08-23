import React from 'react';
import { Mutation } from 'react-apollo';
import { toast } from 'react-toastify';
import { LOG_USER_IN } from '../../sharedQueries.local';
import FBLoginPresenter from './FBLoginPresenter';
import { FACEBOOK_CONNECT } from './FBLoginQueries';

class FBLoginMutation extends Mutation {}

class FBLoginContainer extends React.Component {
  state = {
    email: '',
    fbId: '',
    firstName: '',
    lastName: '',
  };

  render() {
    return (
      <Mutation mutation={LOG_USER_IN}>
        {logUserIn => (
          <FBLoginMutation
            mutation={FACEBOOK_CONNECT}
            onCompleted={data => {
              const { FacebookConnect } = data;
              if (FacebookConnect.ok) {
                logUserIn({
                  variables: {
                    token: FacebookConnect.token,
                  },
                });
              } else {
                toast.error(FacebookConnect.error);
              }
            }}
          >
            {(facebookMutation, { loading }) => {
              this.facebookMutation = facebookMutation;
              return <FBLoginPresenter loginCallback={this.loginCallback} />;
            }}
          </FBLoginMutation>
        )}
      </Mutation>
    );
  }

  loginCallback = response => {
    const { name, first_name, last_name, email, id, accessToken } = response;

    if (accessToken) {
      toast.info(` 😎 ${name}님 반갑습니다!`);
      this.facebookMutation({
        variables: {
          firstName: first_name,
          lastName: last_name,
          email,
          fbId: id,
        },
      }).then(() => {
        window.location.reload();
        this.props.history.replace('/');
      });
    } else {
      toast.error(' 😔 로그인 실패');
    }
  };
}

export default FBLoginContainer;
