//rsc ---
import './modal/modal.css'
import Modal from './modal/Modal'


import React, {useState} from 'react';
import styled, {keyframes} from "styled-components";
// import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialLcons";
import {NavLink} from "react-router-dom";
import {YinYang} from "./AllSvg";
// import load from '../assets/svg/MZig.svg'
import Info from "./Info";
import {motion} from "framer-motion";
import SoundBar from "../subComponents/SoundBar";
import DownLoadCVBtn from "../subComponents/DownLoadCVBtn";
import ParticleComponent from "../subComponents/ParticleComponent";
import myCv from '../data/Malyshko_Vitaliy_juntreFrontEnd.pdf'





const MainContainer = styled.div`
  background: ${props => props.theme.body}; // проп цвета из app->them->lightTheme->body->bgcolor
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2, h3, h4, h5, h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }
`

const Container = styled.div`
  padding: 2rem;
`

const Contact = styled(NavLink)
    `
      color: ${props => props.theme.text};
      position: absolute;
      top: 2rem;
      right: calc(1rem + 2vw);
      text-decoration: none;
      z-index: 1;
    `

const rotate = keyframes
    `
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);

      }
    `


const PreLoader = styled.button
    `
      position: absolute;
      top: ${props => props.click ? '85%' : '50%'};
      left: ${props => props.click ? '92%' : '50%'};
      transform: translate(-50%, -50%);
      border: none;
      outline: none;
      background-color: ${props => props.theme.body};
      cursor: pointer;
      //
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: all 2s ease; // плавность движения

      & > :first-child {
        animation: ${rotate} infinite 20s linear;
      }

      & > :last-child {
        color: ${props => props.click ? props.theme.text : props.theme.text};
        //display: ${props => props.click ? 'none' : 'inline-block'}; // текст загрузчика пропадает при нажатиии
        padding-top: 1rem;
        z-index: 1;


        @keyframes flicker {
          0%, 18%, 22%, 25%, 53%, 57%, 100% {
            text-shadow: 0 0 2px #a1bcef,
            0 0 15px #a1bcef,
            0 0 30px #8cb0f3,
            0 0 40px #74a1f4,
            0 0 70px #4683f4,
            0 0 100px #1564f6;
          }
          20%, 24%, 55% {
            text-shadow: 0 0 1px #fff,
            0 0 2px #fff,
            0 0 5px #fff,
            0 0 11px #0fa,
            0 0 20px #0fa,
            0 0 30px #0fa,
            0 0 55px #0fa,
            0 0 80px #0fa;
          }
        }
        animation: flicker .5s infinite alternate;
      }

      @media only Screen and (max-width: 768px) {
        width: 260px;
        height: 260px;
        @media only Screen and (max-width: 450px) {
          width: 160px;
          height: 160px;
        }}
    `


const SUMMARY = styled(NavLink)
    `
        //color: ${props => props.click ? props.theme.body : props.theme.text};
      color: ${props => props.theme.text};
      position: absolute;
      top: 52%;
      transform: rotate(90deg) translate(-50%, -50%);
      right: calc(1rem - 2vw);
      text-decoration: none;
      z-index: 1;

      @media only Screen and (max-width: 450px) {
        right: calc(1rem - 8.0vw);
      }
      
    `
const WORK = styled(NavLink)
    `
      color: ${props => props.click ? props.theme.body : props.theme.text};
        //color: ${props => props.click ? props.theme.body : props.theme.text};

      position: absolute;
      top: 50%;
      left: calc(1rem + 2vw);
      transform: translate(-50%, -50%) rotate(-90deg);
      text-decoration: none;
      z-index: 1;

    `

const BottomBar = styled.div
    `
      position: absolute;
      bottom: 1rem;
      left: 0;
      right: 0;
      width: 100%;

      display: flex;
      justify-content: space-evenly;
    `

const ABOUT = styled(NavLink)
    `
      //color: ${props => props.click ? props.theme.text : props.theme.text}; // изминение цвета ABOUT при клике на прелодер
      color: ${props => props.theme.text}; // изминение цвета ABOUT при клике на прелодер
      text-decoration: none;
      z-index: 1;
    `;

const SKILLS = styled(NavLink)
    `
      //color: ${props => props.theme.body};
      color: ${props => props.click ? props.theme.body : props.theme.text};

      text-decoration: none;
      z-index: 1;
    `

const DarkDiv = styled.div
    `
      position: absolute;
      top: 0;
      background-color: white;
      bottom: 0;

      right: 50%;
        // width: ${props => props.click ? "50%" : "0%"};
      height: ${props => props.click ? "100%" : "0%"};
      width: ${props => props.click ? "100%" : "0%"};
      z-index: 1;
      transition: height 0.5s ease, width 1s ease 0.5s;
    `

const Main = () => {

    const [click, setClick] = useState(false);
    const [modalActive, setModalActive] = useState(false);

    const handleClick = () => setClick(!click);


    return (
        <MainContainer>
            <DarkDiv click={click}/>
            <Container>

                <PreLoader click={click}>
                                <img src={require('../assets/svg/fxVE.gif')} alt="loading..." onClick={() => handleClick()} width={click ? 80 : 320} height={click ? 80 : 320}/>
                                <span>click ball</span>


                            </PreLoader>

                <LogoComponent theme={click ? 'dark' : 'light '}/> {/*подключение лого*/}
                <DownLoadCVBtn theme={click ? 'dark' : 'light '} />
                <SoundBar/>
                <SocialIcons theme={click ? 'dark' : 'light '}/> {/*подключение иконки*/}

                <Modal active={modalActive} setActive={setModalActive}/>

                <Contact onClick={() => setModalActive(true)}><motion.h3
                    // появление надписей -------
                    initial={{
                        y: -400,
                        transition: {type: 'spring', duration: 1, delay: 0.5}
                    }}
                    animate={{
                        y: 0,
                        transition: {type: 'spring', duration: 1, delay: 0.5}
                    }}
                    // end ------

                    // увеличение при наведении
                    whileHover={{scale: 1.3}}
                    whileTap={{scale: 0.9}}

                >
                    Send me
                </motion.h3></Contact>

                <SUMMARY to='/summary'>
                    <motion.h2
                        initial={{
                            y: -400,
                            transition: {type: 'spring', duration: 1, delay: 0.5}
                        }}
                        animate={{
                            y: 0,
                            transition: {type: 'spring', duration: 1, delay: 0.7}
                        }}
                        whileHover={{scale: 1.3}}
                        whileTap={{scale: 0.9}}
                        >Summary
                    </motion.h2>




                </SUMMARY>
                <BottomBar>
                    <SKILLS to='/skills' click={+click}>
                        <motion.h2
                            initial={{
                                y: 200,
                                transition: {type: 'spring', duration: 1, delay: 0.5}
                            }}
                            animate={{
                                y: 0,
                                transition: {type: 'spring', duration: 1, delay: 1.1}
                            }}

                            whileHover={{scale: 1.3}}
                            whileTap={{scale: 0.9}}
                        >
                            My Skills
                        </motion.h2>
                    </SKILLS>
                    <ABOUT to='/about' click={+click}>
                        <motion.h2
                            initial={{
                                y: 2800,
                                transition: {type: 'spring', duration: 1, delay: 0.5}
                            }}
                            animate={{
                                y: 0,
                                transition: {type: 'spring', duration: 1, delay: 0.9}
                            }}

                            whileHover={{scale: 1.3}}
                            whileTap={{scale: 0.9}}
                        >
                            About
                        </motion.h2>
                    </ABOUT>
                </BottomBar>

                <WORK to='/work' click={+click}>
                    <motion.h2
                        initial={{
                            scale: 0,
                            y: -100,
                            transition: {type: 'spring', duration: 1, delay: 0.5}
                        }}
                        animate={{
                            rotate: 1440, scale: 1,
                            y: 0,
                            transition: {type: 'spring', duration: 1, delay: 0.9}
                        }}


                        whileHover={{scale: 1.3}}
                        whileTap={{scale: 0.9}}
                    >
                        Work
                    </motion.h2>
                </WORK>

                {/*{click ? <Info click={click}/> : null}*/}

            </Container>
            {click ? <Info click={click} /> : null}

        </MainContainer>
    );
};

export default Main;
