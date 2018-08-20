import React, { Component } from 'react';
import classNames from 'classnames';
import './RewardSetting.scss';

export default class RewardSetting extends Component {
  state = {
    submitted: false,
  };

  onClickRewardSave = () => {
    this.setState({ submitted: true });
  };
  render() {
    const { submitted } = this.state;
    return (
      <div className="reward">
        <h2>보상 설정</h2>
        <div className="box">
          <div className="text-box">
            <p className={classNames('title', { submitted })}>
              {submitted
                ? '보상이 설정되었습니다.'
                : '목표 달성 기간을 설정해주세요.'}
            </p>
            <p className="setting-reward">
              정연이의 취업준비를
              {submitted ? (
                <span>100%</span>
              ) : (
                <input type="text" placeholder="100%" />
              )}{' '}
              달성시{' '}
              {submitted ? (
                <span>친구랑 영화관가기</span>
              ) : (
                <input
                  type="text"
                  className="long"
                  placeholder="친구랑 영화관가기"
                />
              )}
              를 할 수 있습니다.
              <button onClick={this.onClickRewardSave}>확인</button>
            </p>
          </div>
        </div>
        <div className="progressive-bar">
          <span>달성률</span>
          <div className="bar">
            <div className="purpose-wrapper">
              <div style={{ left: '0%' }}>
                <span>0%</span>
                <p>당일치기 여행을 아주 그냥 제대로</p>
                <div />
              </div>
              <div style={{ left: '10%' }}>
                <span>10%</span>
                <p>당일치기 여행을 아주로</p>
                <div />
              </div>
              <div style={{ left: '100%' }}>
                <span>100%</span>
                <p>당일치기 여행을 아주 그냥 제대로</p>
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
