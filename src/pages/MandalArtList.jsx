import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { HeaderContainer } from '../containers';

class MandalArtList extends Component {
  render() {
    return (
      <Fragment>
        <HeaderContainer />
        <div className="page-container">
          만다라트 목록입니다
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
