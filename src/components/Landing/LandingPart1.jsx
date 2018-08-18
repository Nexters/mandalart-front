import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';

import FBLogin from '../FBLogin';
import './LandingPart1.scss';
import landing1 from '../../static/images/Landing1.png';

// class LandingPart1 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.responseFacebook = this.responseFacebook.bind(this);
//     this.responseGoogle = this.responseGoogle.bind(this);
//     this.renderRedirect = this.renderRedirect.bind(this);
//   }

//   state = {
//     login: false,
//   };

//   responseFacebook = response => {
//     console.log(response);
//     sessionStorage.setItem('name', response.name);
//     sessionStorage.setItem('pictureUrl', response.picture.data.url);

//     this.setState({
//       login: true,
//     });
//   };

//   responseGoogle = response => {
//     console.log(response);
//     sessionStorage.setItem('name', response.profileObj.name);
//     sessionStorage.setItem('pictureUrl', response.profileObj.imageUrl);

//     this.setState({
//       login: true,
//     });
//   };

//   renderRedirect = () => {
//     if (this.state.login) {
//       return <Redirect to="/mandal-arts/" />;
//     }
//   };

//   render() {
//     return (
//       <div
//         className="section"
//         style={{
//           backgroundImage: `url(${landing1})`,
//           backgroundPosition: 'center',
//         }}
//       >
//         {this.renderRedirect()}
//         <div className="landing-title">MANDALART</div>

//         <FacebookLogin
//       appId="250416945587793"
//       autoLoad={true}
//       fields="name,email,picture"
//       callback={this.responseFacebook}
//       render={renderProps => (
//         <Link onClick={renderProps.onClick}>
//           <Icon>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="18"
//               height="18"
//               viewBox="0 0 24 24"
//               fill="#344EA1"
//             >
//               <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
//             </svg>
//           </Icon>
//           Facebook
//         </Link>
//       )}
//     />
//         <GoogleLogin
//           className="google-btn"
//           clientId="663679853206-4ubs89rk2135cu8n2mcqd0291h81ka2r.apps.googleusercontent.com"
//           buttonText="Google로 시작하기"
//           onSuccess={this.responseGoogle}
//           onFailure={this.responseGoogle}
//         />
//       </div>
//     );
//   }
// }

class LandingPart1 extends React.Component {
  render() {
    return (
      <div
        className="section"
        style={{
          backgroundImage: `url(${landing1})`,
          backgroundPosition: 'center',
        }}
      >
        <div className="landing-title">MANDALART</div>
        <FBLogin />
      </div>
    );
  }
}

export default LandingPart1;
