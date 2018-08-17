import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import LandingPart1 from './LandingPart1';
import LandingPart2 from './LandingPart2';
import LandingPart3 from './LandingPart3';
import LandingPart4 from './LandingPart4';

import landing2 from '../../static/images/Landing2.png';
import landing3 from '../../static/images/Landing3.png';
import landing4 from '../../static/images/Landing4.png';
import landing5 from '../../static/images/Landing5.png';
import landing6 from '../../static/images/Landing6.png';
import landing7 from '../../static/images/Landing7.png';
import landing8 from '../../static/images/Landing8.png';
import landing9 from '../../static/images/Landing9.png';
import landing10 from '../../static/images/Landing10.png';
import landing11 from '../../static/images/Landing11.png';
import landing12 from '../../static/images/Landing12.png';

const landings = [landing2, landing3, landing4, landing5, landing6, landing7, landing8, landing9, landing10, landing11, landing12];

const Landing = fullpageProps => (<ReactFullpage
  {...fullpageProps}
  render={({ state, fullpageApi }) => {
    return (
        <div>        
            <LandingPart1 />
            {
                landings.map((landing) => {
                    return (
                        <div 
                            className="section" 
                            key={landing}
                            style={{
                                backgroundImage: `url(${landing})`,
                                backgroundPosition: 'center'
                            }}
                        >
                        </div>   
                    )
                })
            }            
        </div>
    );
  }}
/>);

export default Landing;
