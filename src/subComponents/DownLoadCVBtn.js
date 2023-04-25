//
// import React from "react";
//
//
//
// const DownLoadCV = () => {
//
//     const onButtonClick = () => {
//
//         fetch('Malyshko_Vitaliy_junFrontEnd.pdf').then(response => {
//             response.blob().then(blob => {
//                 // Creating new object of PDF file
//                 const fileURL = window.URL.createObjectURL(blob);
//                 // Setting various property values
//                 let alink = document.createElement('cv');
//                 alink.href = fileURL;
//                 alink.download = 'Malyshko_Vitaliy_junFrontEnd.pdf';
//                 alink.click();
//             })
//         })
//     }
//     return (
//         <>
//             <center>
//                 <button onClick={onButtonClick}>
//                     Download CV
//                 </button>
//             </center>
//         </>
//     );
// };
//
// export default DownLoadCV;




// import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
// import cv from '../../public/download/Malyshko_Vitaliy_junFrontEnd.pdf';
// import styled from "styled-components";
//
//
//
// const СvBlock = styled.div
//     `
//       max-width: 70%;
//         margin-left: calc(50% - 25%)
//     `
//
//
//
// const DownLoadCV = () => {
//     return (
//         <>
//             {/*PDF в новом окне без доп модулей*/}
//
//             {/*<center>*/}
//             {/*    <a href={cv} target="_blank"*/}
//             {/*       rel="referrer">*/}
//             {/*        Open First PDF*/}
//             {/*    </a>*/}
//             {/*</center>*/}
//
//
//
//             {/*PDF в текущей странице c модулем react-pdf*/}
//
//             <СvBlock>
//                 <Document file={cv}>
//                     <Page pageNumber={1} />
//                 </Document>
//
//             </СvBlock>
//
//         </>
//     );
// };
//
// export default DownLoadCV;







import styled from 'styled-components'
import {darkTheme} from "../components/Themes";

const Download = styled.button
`
  @media only Screen and (max-width: 600px) {
    margin: 60px auto;
  }

  position: fixed;
  text-align: center;
  white-space: pre-wrap;
  margin: 110px auto;
  padding: 5px;
  font-size: 14px;

  box-shadow: 0 0 0 0 rgba(232, 76, 61, 0.7);
  border: 1px solid ${props => props.color === 'dark' ? darkTheme.body : darkTheme.text};
  border-radius: 10px;
  background-color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};
  -webkit-animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  -moz-animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  -ms-animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  font-weight: normal;
  font-family: sans-serif;
  color: ${props => props.color === 'dark' ? darkTheme.body : darkTheme.text};
  


  /* Comment-out to have the button continue to pulse on mouseover */

  a.pulsingButton:hover {
    -webkit-animation: none;
    -moz-animation: none;
    -ms-animation: none;
    animation: none;
    color: #ffffff;
  }


  /* Animation */

  @-webkit-keyframes pulsing {
    to {
      box-shadow: 0 0 0 30px rgba(232, 76, 61, 0);
    }
  }

  @-moz-keyframes pulsing {
    to {
      box-shadow: 0 0 0 30px rgba(232, 76, 61, 0);
    }
  }

  @-ms-keyframes pulsing {
    to {
      box-shadow: 0 0 0 30px rgba(232, 76, 61, 0);
    }
  }

  @keyframes pulsing {
    to {
      box-shadow: 0 0 0 30px rgba(232, 76, 61, 0);
    }
  }

  &:hover {
    -webkit-animation: none;
    //background-color: #7b6262;
    border: solid .15em transparent;
    padding: .25em;
    border-radius: 1.375em;
    box-shadow: inset 0 1px 1px rgba(#f7f7f7, .875) /* сверху */,
    inset 0 -1px 1px rgba(#bbb, .75) /* снизу */;
    background: //linear-gradient(#9ea1a6, #fdfdfe) content-box,
            //linear-gradient(#fff, #9c9fa4) padding-box,
            linear-gradient(rgba(2, 2, 2, 0.7), #a4a7ab) border-box;
`


const DownLoadCVBtn = (props) => {
const onButtonClick = () => {

    fetch('Malyshko_Vitaliy_junFrontEnd.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file

            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values

            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'MalyshkoVitaliy_juniorFrontEnd.pdf';
            alink.click();
        })
    })
}
return (


            < Download color={props.theme} onClick={onButtonClick}>
                Download summary
            </Download>
);
};
export default DownLoadCVBtn;