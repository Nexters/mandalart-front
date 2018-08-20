import React from 'react';

import MandalArtList from '../components/MandalArtList';

class MandalArtListContainer extends React.Component {
  state = {
    mandalLists: [
      {
        title: '2018년 계획',
        editDate: '2018-08-01',
      },
      {
        title: '2019년 계획',
        editDate: '2018-08-01',
      },
      {
        title: '2020년 계획',
        editDate: '2018-08-01',
      },
    ],
  };
  render() {
    const { mandalLists } = this.state;
    return <MandalArtList mandalLists={mandalLists} />;
  }
}

export default MandalArtListContainer;
