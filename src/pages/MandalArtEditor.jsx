import React, { Component, Fragment } from 'react';
import { HeaderContainer } from '../containers';
import { Query } from 'react-apollo';
import { getTodosByMandalartId } from '../sharedQueries';
import MandalArtRenderPresenter from '../containers/MandalartRender/MandalartRenderPresenter.jsx';

class TodosQuery extends Query {}

class MandalArtEditor extends Component {
  constructor(props) {
    super(props);
    if (!props.match.params.id) {
      props.history.push('/mandal-arts');
    }
  }
  render() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    return (
      <TodosQuery query={getTodosByMandalartId} variables={{ mandalartId: id }}>
        {({ data, loading }) => (
          <div className="background">
            <MandalArtRenderPresenter data={data} loading={loading} />
            <HeaderContainer mandalPage />
          </div>
        )}
      </TodosQuery>
    );
  }
}

export default MandalArtEditor;
