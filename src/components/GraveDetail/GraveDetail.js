import React, { Component } from 'react';
import ReactModal from 'react-modal';
import classNames from 'classnames';

import './GraveDetail.scss';

export default class GraveDetail extends Component {
  render() {
    const {
      heavenLists,
      hellLists,
      graveIndex,
      place,
      onClickGraveClose,
    } = this.props;

    const graveLists = place === 'hell' ? hellLists : heavenLists;
    const modalBgColor =
      place === 'hell' ? 'rgba(243, 233, 234,0.7)' : 'rgba(233, 236, 243,0.7)';
    if (graveLists[graveIndex]) {
      const { start_date, end_date, title, status } = graveLists[graveIndex];
      return (
        <ReactModal
          isOpen={true}
          shouldCloseOnOverlayClick={true}
          onRequestClose={onClickGraveClose}
          style={{
            overlay: {
              width: '100vw',
              height: 'calc(100%-60px)',
              top: '60px',
              backgroundColor: `${modalBgColor}`,
            },
            content: {
              bottom: 'auto',
              minHeight: '540px',
              left: '50%',
              position: 'fixed',
              right: 'auto',
              top: '50%',
              transform: 'translate(-50%,-50%)',
              minWidth: '540px',
              padding: '3rem',
              opacity: '1',
              borderRadius: '10px',
            },
          }}
        >
          <div className={classNames('grave-detail', { [place]: place })}>
            <div className="top">
              <div>
                <p className="date">
                  {start_date}~{end_date}
                </p>
                <p className="title">{title}</p>
              </div>
              <div className="guide">
                <div />
                <span>완료</span>
                <br />
                <div className="uncomplete" />
                <span>미완료</span>
                <button className="close" onClick={onClickGraveClose}>
                  X
                </button>
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
                </span>
                동안
              </p>
              <p>
                {title}
                &nbsp; 만다라트를&nbsp; 달성&nbsp;
                {status === 'FAIL' ? '실패' : '성공'}
                하여
              </p>
              <p>
                만다라트가{' '}
                <span className="result">
                  {status === 'FAIL'
                    ? '지옥으로 떨어졌습니다.'
                    : '천국으로 갔습니다.'}
                </span>
              </p>
            </div>
          </div>
        </ReactModal>
      );
    }
  }
}
