import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MandalArtList extends Component {
  render() {
    return (
      <div>
        만다라트 목록입니다
        <div>
          <Link to="/mandal-art/new">
            <button text="만달아트 만들러 가기" />
          </Link>
        </div>
      </div>
    );
  }
}

export default MandalArtList;
