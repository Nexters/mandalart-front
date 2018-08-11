import React, { Component, Fragment } from 'react';

import { GraveLists, GraveDetail } from '../components';

export default class GraveListsContainer extends Component {
  state = {
    isGraveDetailOpen: false,
    graveIndex: null,
    place: '',
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

  noScroll = () => {
    window.scrollTo(0, 0);
  };

  onClickGrave = e => {
    window.addEventListener('scroll', this.noScroll);
    const { index, place } = e.target.dataset;
    this.setState({
      isGraveDetailOpen: true,
      graveIndex: index,
      place,
    });
  };

  onClickGraveClose = () => {
    window.removeEventListener('scroll', this.noScroll);
    this.setState({
      isGraveDetailOpen: false,
      graveIndex: null,
      place: '',
    });
  };

  render() {
    const {
      heavenLists,
      hellLists,
      graveIndex,
      isGraveDetailOpen,
      place,
    } = this.state;

    return (
      <Fragment>
        <GraveLists
          heavenLists={heavenLists}
          hellLists={hellLists}
          onClickGrave={this.onClickGrave}
        />
        {isGraveDetailOpen && (
          <GraveDetail
            heavenLists={heavenLists}
            hellLists={hellLists}
            graveIndex={graveIndex}
            place={place}
            onClickGraveClose={this.onClickGraveClose}
          />
        )}
      </Fragment>
    );
  }
}
