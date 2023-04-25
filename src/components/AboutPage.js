import React from 'react';
import styled, {keyframes, ThemeProvider} from "styled-components";
import {darkTheme} from "./Themes";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialLcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";

import astronaut from '../assets/Images/spaceman.png'
import BigTitle from "../subComponents/BigTitle";




const Box = styled.div
    `
      background-color: ${props => props.theme.body};
      width: 100vw;
      height: 100vh;
      position: relative;
      overflow: hidden;
    `

const float = keyframes`
  0% {transform: translateY(-10px)}
  50% {transform: translateY(15px) translateX(15px)}
  100% {transform: translateY(-10px)}
`

const Spaceman = styled.div
    `
      position: absolute;
      top: 10%;
      right: 5%;
      width: 20vw;
      animation: ${float} 4s ease infinite;

      img {
        width: 100%;
        height: auto;
      }
    `


const Main = styled.div
    `
      //border: 2px solid ${(props) => props.theme.text};
      color: ${(props) => props.theme.text};
      padding: 2rem;
      width: 50vw;
      height: 60vh;
      z-index: 3;
      line-height: 1.5;
      
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: calc(0.6rem + 1vw);
      backdrop-filter: blur(4px);   // размытие
      
      position: absolute;
      left: calc(5rem + 5vw);
      bottom: calc(2rem + 2vw);
      top: 10rem;
      font-family: 'Ubuntu Mono', monospace;
      font-style: italic;
    `


const AboutPage = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box>
                {/*<LogoComponent theme='dark'/>*/}
                {/*<SocialIcons theme='dark'/>*/}
                <PowerButton/>
                <ParticleComponent theme='dark'/>

                <Spaceman>
                    <img src={astronaut} alt='spaceman'/>
                </Spaceman>
                <Main>
                    I'm a front-end developer located in Ukraine. I love to create simple yet beautiful websites with
                    great user experience.
                    <br/><br/>
                    I'm interested in the whole frontend stack Like trying new things and building great projects. I'm
                    junior developer with no commercial experience but with a great desire to get it. I love learning new things and experimenting with new things.
                    <br/>
                    <br/>
                    I believe everything is an Art when you put your consciousness in it. You can connect with me via
                    telegram, gmail or by clicking the "send me" button.

                </Main>
                <BigTitle text='About' top='10%' left='10%'/>

            </Box>

        </ThemeProvider>


    )
};

export default AboutPage;






// import React, {useEffect, useRef} from "react";
// import styled, {ThemeProvider} from "styled-components";
// import {darkTheme} from "./Themes";
// import {motion} from "framer-motion";
//
// import LogoComponent from "../subComponents/LogoComponent";
// import SocialIcons from "../subComponents/SocialLcons";
// import PowerButton from "../subComponents/PowerButton";
// import Card from "../subComponents/Card";
//
// import {Work} from "../data/WorkData";
// import {Cosmos, YinYang} from "./AllSvg";
// import BigTitle from "../subComponents/BigTitle";
// import SoundBar from "../subComponents/SoundBar";
//
// const Box = styled.div
//     `
//       background-color: ${props => props.theme.body};
//       height: 320vh;
//       position: relative;
//       display: flex;
//       align-items: center;
//
//     `
//
// const Main = styled(motion.ul)  //для анимации - ul -> заменяется на motion
//     `
//       position: fixed;
//       top: 12rem;
//       left: calc(10rem + 15vw);
//       height: 40vh;
//       display: flex;
//       color: white;
//     `
//
// const Rotate = styled.span
//     `
//       display: block;
//       position: fixed;
//       right: 1rem;
//       bottom: 1rem;
//       width: 80px;
//       height: 80px;
//       z-index: 1;
//     `
//
// // Framer-motion Configurate - animation
//
// const container = {
//     hidden: {opacity:0.1},
//     show: {
//         opacity: 1,
//         transition: {
//             staggerChildren:0.5,
//             duration: 0.5
//         }
//     }
// }
// // End----
//
// const WorkPage = () => {
//
//     const ref = useRef(null);
//     const yinyang = useRef(null);
//
//
//     useEffect(() => {
//         let element = ref.current;
//
//         const rotate = () => {
//             element.style.transform = `translateX(${-window.scrollY}px)`  // прокручиваются блоки вправо
//
//             // console.log(element)
//             // console.log(element.style)
//             // console.log(element.style.transform)
//
// // eslint-disable-next-line
// //             console.log(yinyang.current.style.transform)  иногда вылетает ошибка
//           return   (yinyang.current.style.transform = 'rotate(' + -window.scrollY + 'deg)') // крутится значек при пролистании
//         }
//
//         window.addEventListener('scroll', rotate)
//
//         return () => window.removeEventListener('scroll', rotate)
//     }, [])
//
//
//     return (
//         <ThemeProvider theme={darkTheme}>
//             <Box>
//                 {/*<LogoComponent theme='light'/>*/}
//                 <SoundBar/>
//                 <SocialIcons theme='light'/>
//                 <PowerButton/>
//
//                 {/*--- для добавления анимации акрточкам в main добавляем => variants={container} initial='hidden' animate='show'*/}
//
//                 <Main ref={ref} variants={container} initial='hidden' animate='show'>
//                     {
//                         Work.map(e =>
//                             <Card key={e.id} data={e}/>
//                         )
//                     }
//
//                 </Main>
//                 <Rotate ref={yinyang}>
//                     <YinYang width={80} height={80} fill={darkTheme.text}/>
//                 </Rotate>
//
//
//                 <BigTitle text='WORK' top='10%' right='20%'/>
//             </Box>
//
//         </ThemeProvider>
//
//
//     )
// };
//
// export default WorkPage;