import React, { Component } from 'react';
import ReactModal from 'react-modal';

import './GraveDetail.scss';

export default class GraveDetail extends Component {
  state = {};
  render() {
    const { start_date, end_date, title, status } = this.props.heavenLists[0];
    return (
      <ReactModal isOpen={true}>
        <div className="grave-detail">
          GraveDetail
          <div className="top">
            <div>
              <p>
                {start_date}~{end_date}
              </p>
              <p>{title}</p>
            </div>
            <div>
              <div />
              <span>완료</span>
              <div />
              <span>미완료</span>
            </div>
          </div>
          <div className="middle">
            <div>MandalArt</div>
            <div>Sub Lists</div>
          </div>
          <div className="bottom">
            <p>
              <span>
                {start_date}~{end_date}
              </span>동안<br />
              <span>{title}</span>만다라트를
              <span>달성{status === 'FAIL' ? '실패' : '성공'}</span>하여 <br />만다라트가
              지옥으로 떨어졌습니다.
            </p>
          </div>
        </div>
      </ReactModal>
    );
  }
}
