import './Landing.scss';

import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import success_block from '../../static/images/Success_Block.png';
import success_blocks from '../../static/images/Success_Blocks.gif';
import fail_block from '../../static/images/Fail_Block.png';
import fail_block_dots from '../../static/images/Fail_Block_Dots.gif';
import introduction from '../../static/images/Introduction.gif';

import FBLogin from '../FBLogin';

const Landing = fullpageProps => (
  <ReactFullpage
    {...fullpageProps}
    render={({ state, fullpageApi }) => {
      return (
        <div className="Landing">
          <div className="section landing-part1">
            <div className="landing-title">MANDALART</div>
            <FBLogin />
          </div>

          <div className="section landing-part2">
            <div className="image-wrapper">
              <img src={introduction} alt="landing part2" />
            </div>
            <div className="landing-text">
              <div>MANDALART는 MANDAL+LA+ART가 결합된 용어로</div>
              <br />
              <div>
                일본 디자이너 이마이즈미 히로아키가 개발한 발상기법입니다.
              </div>
            </div>
          </div>

          <div className="section landing-part3">
            <div className="image-wrapper">
              <img src={success_blocks} alt="landing part3" />
            </div>
            <div className="landing-text">
              <div>MANDALART에서 당신은 각각의 만다라트들을 수행해 나가며</div>
              <br />
              <div>만다라트 블럭을 쌓아 나갑니다.</div>
            </div>
          </div>

          <div className="section landing-part4">
            <div className="image-wrapper">
              <img src={fail_block_dots} alt="landing part4" />
            </div>
            <div className="landing-text">
              <div>만일 계획을 정해진 기한내에 달성하지 못한다면</div>
              <br />
              <div>귀염둥이 만다라 블럭들은 부서지게 될거에요</div>
            </div>
          </div>

          <div className="section landing-part5">
            <div className="landing-text">
              <div>만다라트, 어떻게 사용하나요?</div>
            </div>
          </div>

          <div className="section landing-part6">튜토리얼1</div>

          <div className="section landing-part7">튜토리얼2</div>

          <div className="section landing-part8">튜토리얼3</div>

          <div className="section landing-part9">튜토리얼4</div>

          <div className="section landing-part10">
            <div className="landing-text">
              <div>자, 쉽죠?</div>
            </div>
          </div>

          <div className="section landing-part11">
            <div className="image-wrapper">
              <img src={success_block} alt="success" />
            </div>
            <div className="landing-text">
              <div>달성하거나</div>
            </div>
          </div>

          <div className="section landing-part12">
            <div className="image-wrapper">
              <img src={fail_block} alt="fail" />
            </div>
            <div className="landing-text">
              <div>실패하거나</div>
            </div>
          </div>

          <div className="section landing-part1">
            <div className="landing-title">MANDALART</div>
            <FBLogin />
          </div>
        </div>
      );
    }}
  />
);

export default Landing;
