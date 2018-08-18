import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { HeaderContainer } from '../containers';
import MandalArtListContainer from '../containers/MandalArtListContainer';

class MandalArtList extends Component {
  render() {
    return (
      <Fragment>
        <HeaderContainer mandalPage listPage />
        <div className="page-container">
          <div>{sessionStorage.getItem('name')}의 만다라트 목록</div>
          <MandalArtListContainer />
          <div>
            <Link to="/mandal-arts/new">
              <button type="button">만다라트라 만들러 가기</button>
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MandalArtList;
