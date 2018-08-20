import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import client from './apolloConfig';
import App from './components/App';
import './global-styles';

ReactModal.setAppElement('#root');

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
);
