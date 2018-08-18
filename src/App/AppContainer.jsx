import React from 'react';
import { graphql } from 'react-apollo';
import { IS_LOGGED_IN } from './AppQueries';
import Router from './Router';

const AppContainer = ({ data }) => <Router data={data} />;

export default graphql(IS_LOGGED_IN)(AppContainer);
