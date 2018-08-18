import React, { Fragment } from 'react';
import MandalArtItem from './MandalArtItem';
import MandalArtAddForm from './MandalArtAddForm';

class MandalArtList extends React.Component {
  render() {
    return (
      <Fragment>
        <MandalArtItem />
        <MandalArtItem />
        <MandalArtAddForm />
      </Fragment>
    );
  }
}

export default MandalArtList;
