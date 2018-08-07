import React, { Component } from 'react';

import { GraveDetail } from '../components';

export default class GraveDetailContainer extends Component {
  state = {
    heavenLists: [
      {
        start_date: '2018-05-10',
        end_date: '2018-08-01',
        title: '코딩 초고수 되기',
        achRate: 50,
        isRead: false,
        status: 'FAIL',
      },
    ],
  };
  render() {
    const { heavenLists } = this.state;
    return <GraveDetail heavenLists={heavenLists} />;
  }
}
