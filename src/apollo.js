import ApolloClient, { Operation } from 'apollo-boost';

const client = new ApolloClient({
  clientState: {
    defaults: {
      auth: {
        __typename: 'Auth',
        isLoggedIn: Boolean(localStorage.getItem('jwt')),
      },
    },
    resolvers: {
      Mutation: {
        logUserIn: (_, { token }, { cache }) => {
          localStorage.setItem('jwt', token);
          cache.writeData({
            data: {
              auth: {
                __typename: 'Auth',
                isLoggedIn: true,
              },
            },
          });
          return null;
        },
        logUserOut: (_, __, { cache }) => {
          localStorage.removeItem('jwt');
          window.location.reload();
          cache.writeData({
            data: {
              auth: {
                __typename: 'Auth',
                isLoggedIn: false,
              },
            },
          });
          this.props.history.replace('/');
          return null;
        },
      },
    },
  },
  request: async (operation: Operation) => {
    operation.setContext({
      headers: {
        'MY-JWT': localStorage.getItem('jwt') || '',
      },
    });
  },
  uri: 'http://localhost:4000/graphql',
});

export default client;
