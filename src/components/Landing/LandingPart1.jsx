import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';

import './LandingPart1.scss';
import landing1 from '../../static/images/Landing1.png';

class LandingPart1 extends React.Component {
    constructor(props) {
        super(props);
        this.responseFacebook = this.responseFacebook.bind(this);
        this.responseGoogle = this.responseGoogle.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this);
    };

    state = {
        login: false
    };

    responseFacebook = (response) => {
        console.log(response);
        sessionStorage.setItem('name', response.name);
        sessionStorage.setItem('pictureUrl', response.picture.data.url);

        this.setState({
            login: true
        })
    };

    responseGoogle = (response) => {
        console.log(response);
        sessionStorage.setItem('name', response.profileObj.name);
        sessionStorage.setItem('pictureUrl', response.profileObj.imageUrl);

        this.setState({
            login: true
        })
    };

    renderRedirect = () => {
        if (this.state.login) {
          return <Redirect to='/mandal-arts/' />
        }
      }    

    render() {

        return (
            <div 
                className="section" 
                style={{
                    backgroundImage: `url(${landing1})`,
                    backgroundPosition: 'center'
                }}
            >
                {this.renderRedirect()}
                <div
                    className="landing-title"
                >
                    MANDALART
                </div>
                <FacebookLogin
                    cssClass="fb-btn"                
                    appId="250416945587793"
                    autoLoad={ false }
                    fields="name,email,picture"
                    textButton="facebook"
                    callback={ this.responseFacebook }
                />            
                <GoogleLogin
                    className="google-btn"
                    clientId="663679853206-4ubs89rk2135cu8n2mcqd0291h81ka2r.apps.googleusercontent.com"
                    buttonText="google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                />                
            </div>    
        )
    }
}

export default LandingPart1;