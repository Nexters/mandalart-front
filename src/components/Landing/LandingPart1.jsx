import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import './LandingPart1.scss';
import landing1 from '../../static/images/Landing1.png';

class LandingPart1 extends React.Component {
    render() {
        return (
            <div 
                className="section" 
                style={{
                    backgroundImage: `url(${landing1})`,
                    backgroundPosition: 'center'
                }}
            >
                <FacebookLogin
                    appId="250416945587793"
                    autoLoad={ false }
                    fields="name,email,picture"
                    textButton="Facebook으로 로그인"
                />            
                <GoogleLogin
                    clientId="663679853206-4ubs89rk2135cu8n2mcqd0291h81ka2r.apps.googleusercontent.com"
                    buttonText="Google로 로그인"
                />
            </div>    
        )
    }
}

export default LandingPart1;