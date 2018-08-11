import React from 'react'

import Landing from '../components/Landing/Landing';

class LandingContainer extends React.Component {
    fullpageOptions = {
        callbacks: ['onLeave'],
      };

    state = {

    }
    render() {
        return (
            <div> 
                <Landing 
                    {...this.fullpageOptions}
                /> 
            </div>
        )
    }
}

export default LandingContainer;