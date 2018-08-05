import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { HeaderContainer } from '../containers';

class MandalArtList extends Component {
  render() {
    return (
      <Fragment>
        <HeaderContainer />
        만다라트 목록입니다
        <div>
          <Link to="/mandal-arts/new">
            <button value="만달아트 만들러 가기" />
          </Link>
        </div>
      </Fragment>
    );
  }
}

export default MandalArtList;
