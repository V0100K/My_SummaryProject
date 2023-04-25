import React from 'react';
import {Facebook, Github, Telegram, Twitter, YouTube} from "../components/AllSvg";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

import {darkTheme} from '../components/Themes'
import {motion} from "framer-motion";


const Icons = styled.div
    `
      display: flex;
      flex-direction: column;
      align-items: center;

      position: fixed;
      bottom: 0;
      left: 1.25rem;
      z-index: 3;
      transition: transform .2s;
      
      & > *:not(:last-child) {
        margin: 0.3rem 0;
      }
    `

const Line = styled(motion.span)
    `
      width: 2px;
      height: 6rem;
      background-color: ${props => props.color === 'dark' ? darkTheme.body : darkTheme.text};
    }
    `

// ховер на соц иконках
const One = styled.div
    `
      transition: transform 0.8s;

      &:hover {
        transform: scale(1.5);
        
      }
    `


const SocialIcons = (props) => {
    return (

        <Icons>

            <motion.div initial={{transform: 'scale(0)'}} animate={{scale: [0, 1, 1.5, 1]}}
                        transition={{type: 'spring', duration: 1, delay: 1}}>
                <a href={'https://github.com/V0100K'} style={{color: 'inherit'}} target='_blank' >
                    <One>
                        <Github with={20} height={20} fill={props.theme === 'dark' ? darkTheme.body : darkTheme.text}/>
                    </One>
                </a>
            </motion.div>

            {/*<motion.div initial={{transform: 'scale(0)'}} animate={{scale: [0, 1, 1.5, 1]}}*/}
            {/*            transition={{type: 'spring', duration: 1, delay: 1.2}}>*/}
            {/*    <a href={"https://github.com/V0100K"} target={"_blank"} style={{color: 'inherit'}}>*/}
            {/*        <One>*/}
            {/*        <Twitter with={20} height={20} fill={props.theme === 'dark' ? darkTheme.body : darkTheme.text}/>*/}
            {/*        </One>*/}
            {/*    </a>*/}
            {/*</motion.div>*/}

            <motion.div initial={{transform: 'scale(0)'}} animate={{scale: [0, 1, 1.5, 1]}}
                        transition={{type: 'spring', duration: 1, delay: 1.4}}>
                <a href={"https://github.com/V0100K"} target={"_blank"} style={{color: 'inherit'}}>
                    <One>
                    <Telegram with={25} height={25} fill={props.theme === 'dark' ? darkTheme.body : darkTheme.text}/>
                    </One>
                </a>
            </motion.div>

            <motion.div initial={{transform: 'scale(0)'}} animate={{scale: [0, 1, 1.5, 1]}}
                        transition={{type: 'spring', duration: 1, delay: 1.6}}>
                <a href={"https://github.com/V0100K"} target={"_blank"} style={{color: 'inherit'}}>
                    <One>
                    <Facebook with={20} height={20} fill={props.theme === 'dark' ? darkTheme.body : darkTheme.text}/>
                    </One>
                </a>
            </motion.div>

            <Line color={props.theme}

                  initial={
                      {
                          height: 0
                      }
                  }
                  animate={{
                      height: '6rem'
                  }}
                  transition={{
                      type: 'spring', duration: 1, delay: 0.8
                  }}
            />

        </Icons>

    )
};

export default SocialIcons;