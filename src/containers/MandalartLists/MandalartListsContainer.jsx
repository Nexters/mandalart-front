import React from 'react';
import { Query } from 'react-apollo';
import { GET_MANDALARTS } from '../../sharedQueries';
import MandalArtListsPresenter from './MandalArtListsPresenter';

class MandalartsQuery extends Query {}

class MandalArtListsContainer extends React.Component {
  render() {
    return (
      <MandalartsQuery query={GET_MANDALARTS}>
        {({ data, loading }) => (
          <MandalArtListsPresenter data={data} loading={loading} />
        )}
      </MandalartsQuery>
    );
  }
}
export default MandalArtListsContainer;
