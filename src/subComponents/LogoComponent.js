// TODO: rsc
// import React from 'react';
//
// const MyComponent = () => {
//     return (
//         <div>
//         </div>
//     );
// };
//
// export default MyComponent;

// ____________________________________________________
//
// TODO: rsf
// import React from 'react';
//
// function LogoComponent(props) {
//     return (
//         <div></div>
//     );
// }
//
// export default LogoComponent;
//
// ____________________________________________________
//
// TODO: rsi
// import React from 'react';
//
// const LogoComponent = (props) => (
//
// );
//
// export default LogoComponent;
// ____________________________________________________


// import React from 'react';
//
// const LogoComponent = () => {
//     return (
//         <div>
//
//         </div>
//     )
// };
//
// export default LogoComponent;

import React from 'react';
import styled from "styled-components";
import {darkTheme} from "../components/Themes";


const Logo = styled.h1
    `
      display: inline-block;
      color: ${props => props.color === 'dark' ? darkTheme.body : darkTheme.text};
      font-family: 'Pacfico', cursive;
          font-size: 4em;
      
      position: fixed;
      left: 2rem;
      top: 2rem;
      z-index: 3;
      
      
      @media only Screen and (max-width: 600px) {
          font-size: 2em;
        }
       
    `


const LogoComponent = (props) => {
    return (
        <Logo color={props.theme}>
            Malyshko Vitaliy
        </Logo>
    );
};

export default LogoComponent;