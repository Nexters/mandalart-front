import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import { graphql, compose, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { getTodosByMandalartId } from '../sharedQueries';
import { HeaderContainer, MandalArtRenderContainer } from '../containers';

class TodosQuery extends Query {}

class MandalArtEditor extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, match } = this.props;
    const mandalartId = match.params.id;

    return (
      <div className="background">
        <MandalArtRenderContainer mandalartId={mandalartId} />
        <HeaderContainer mandalPage />
      </div>
      // <TodosQuery query={getTodosByMandalartId}>
      //   {({ data, loading, match }) => (
      //     <div className="background">
      //       <MandalArtRenderContainer data={data} loading={loading} />
      //       <HeaderContainer mandalPage />
      //     </div>
      //   )}
      // </TodosQuery>
    );
  }
}

// export default MandalArtEditor;

export default graphql(getTodosByMandalartId, {
  name: 'getTodosByMandalartId',
  options: ({ match }) => ({
    variables: {
      mandalartId: match.params.id,
    },
  }),
})(MandalArtEditor);
