import reset from 'styled-reset';
import { injectGlobal } from './styled-components';

injectGlobal`
  @import url('https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css');
  ${reset};
  * {
      box-sizing: border-box;
  }
  body{
      font-family: 'NanumSquare', sans-serif;
  }
  a{
      color:inherit;
      text-decoration:none;
  }
  input,
  button{
      &:focus,
      &:active{outline:none}
  }
`;
