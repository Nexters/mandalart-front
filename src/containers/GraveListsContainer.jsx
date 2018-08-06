import React, { Component } from 'react';

import { GraveLists } from '../components';

export default class GraveListsContainer extends Component {
  state = {
    heavenLists: [
      {
        start_date: '2018-05-10',
        end_date: '2018-08-01',
        title: '코딩 초고수 되기',
        achRate: 50,
        isRead: true,
      },
      {
        start_date: '2018-05-10',
        end_date: '2018-08-01',
        title: '코딩 초고수 되기',
        achRate: 50,
        isRead: false,
      },
      {
        start_date: '2018-05-10',
        end_date: '2018-08-01',
        title: '코딩 초고수 되기',
        achRate: 50,
        isRead: false,
      },
      {
        start_date: '2018-05-10',
        end_date: '2018-08-01',
        title: '코딩 초고수 되기',
        achRate: 50,
        isRead: false,
      },
      {
        start_date: '2018-05-10',
        end_date: '2018-08-01',
        title: '코딩 초고수 되기',
        achRate: 50,
        isRead: false,
      },
      {
        start_date: '2018-05-10',
        end_date: '2018-08-01',
        title: '코딩 초고수 되기',
        achRate: 50,
        isRead: false,
      },
    ],
    hellLists: [
      {
        start_date: '2018-05-10',
        end_date: '2018-08-01',
        title: '코딩 초고수 되기',
        achRate: 50,
        isRead: false,
      },
      {
        start_date: '2018-05-10',
        end_date: '2018-08-01',
        title: '코딩 초고수 되기',
        achRate: 50,
        isRead: false,
      },
      {
        start_date: '2018-05-10',
        end_date: '2018-08-01',
        title: '코딩 초고수 되기',
        achRate: 50,
        isRead: true,
      },
      {
        start_date: '2018-05-10',
        end_date: '2018-08-01',
        title: '코딩 초고수 되기',
        achRate: 50,
        isRead: false,
      },
      {
        start_date: '2018-05-10',
        end_date: '2018-08-01',
        title: '코딩 초고수 되기',
        achRate: 50,
        isRead: false,
      },
      {
        start_date: '2018-05-10',
        end_date: '2018-08-01',
        title: '코딩 초고수 되기',
        achRate: 50,
        isRead: false,
      },
    ],
  };
  render() {
    const { heavenLists, hellLists } = this.state;
    return <GraveLists heavenLists={heavenLists} hellLists={hellLists} />;
  }
}
