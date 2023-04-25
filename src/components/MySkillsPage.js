import React from 'react';
import styled, {ThemeProvider} from "styled-components";
import {darkTheme} from "./Themes";
import {Design, Develope} from "./AllSvg";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialLcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";


const Box = styled.div
    `
      background-color: ${props => props.theme.text};
      width: 100vw;
      height: 100vh;
      position: relative;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      
    `

const Main = styled.div
    `
      border: 2px solid ${props => props.theme.body};
      backdrop-filter: blur(4px);   // размытие

      color: ${props => props.theme.text};
      //background-color: ${props => props.theme.text};
      padding: 2rem;
      width: 30vw;
      height: 60vh;
      z-index: 3;
      line-height: 1.5;
      cursor: pointer;

      font-family: 'Ubuntu Mono', monospace;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      
      &:hover{
        //color: ${props => props.theme.text};
        background-color: ${props => props.theme.body};
      }

      @media only Screen and (max-width: 768px) {
        height: 40vh;
        font-size: 12px;
      }
    `

const Title = styled.h2
    `
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: calc(1em + 1vw);
      color: ${props => props.theme.body};

      ${Main}:hover &{
        //только для svg 
        // &>*{
        //   fill: ${props => props.theme.text};
        // }
        fill: ${props => props.theme.text};
        color: ${props => props.theme.text};
        
      }
      
      &>*:first-child{
        margin-right: 1rem;    // отдвинуть svg значек от текста
        text-transform: uppercase;
     
      }
    `
const Description = styled.div
    `
      color: ${props => props.theme.body};
      font-size: calc(0.6em + 1vw);
      padding: 0.5rem 0;

      ${Main}:hover &{
          color: ${props => props.theme.text};
      }
      
      strong {
        margin-bottom: 1rem;
        text-transform: uppercase;
      }

      ul, p {
        margin-left: 2rem;
      }
    `


const MySkillsPage = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box>
                {/*<LogoComponent theme=''/>*/}
                {/*<SocialIcons  theme='light'/>*/}
                <PowerButton/>
                <ParticleComponent theme='light'/>
                {/*<ParticleComponent/>*/}

                <Main>
                    <Title>
                        <Design width={35} height={35}/> Designer
                    </Title>
                    <Description>
                        I love to create design which speaks, Keep it clean, minimal and simple.
                    </Description>
                    <Description>
                        <strong>I LIKE TO DESIGN</strong>
                        <ul>
                            <li>Web Design</li>
                            <li>Mobile Apps</li>
                        </ul>
                    </Description>
                    <Description>
                        <strong>TOOLS</strong>
                        <ul>
                            <li>Figma</li>
                        </ul>
                    </Description>
                    </Main>
                <Main>
                    <Title>
                        <Develope width={40} height={40}/> Frontend Developer
                    </Title>
                    <Description>
                        I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
                    </Description>
                    <Description>
                        <strong>Skills</strong>

                    <p>
                        Html, Css, Js, React, Redux, Sass, Bootstrap, etc.
                    </p>
                </Description>
                    <Description>
                        <strong>TOOLS</strong>
                        <p>
                            WebStorm, Github, Codepen etc.
                        </p>
                    </Description>


                </Main>
                <BigTitle text='Skills' top='0%' right='0%'/>
            </Box>

        </ThemeProvider>


    )
        ;
};

export default MySkillsPage;
