import React from 'react';
import styled, {keyframes, ThemeProvider} from "styled-components";
import {darkTheme} from "./Themes";

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
        width: 180px;
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






