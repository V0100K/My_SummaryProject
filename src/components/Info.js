import React from "react";
import styled from "styled-components";
import Me from '../assets/Images/photo_2023-04-29 12.14.00.png'
import {motion} from 'framer-motion'  // библиотека анимаций

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 55vh;
  display: flex;
  background: linear-gradient(to right, ${props => props.theme.body} 50%, ${props => props.theme.text} 50%) bottom,
    linear-gradient(to right, ${props => props.theme.body} 50%, ${props => props.theme.text} 50%) top;
  background-size: 100% 2px;
  z-index: 1;
  box-shadow: 20px 5px 15px 15px #5d5656;
  @media only screen and (max-width: 550px) {
    width: 65vw;
    height: 35vh;
  }
`;
const SubBox = styled.div`
  width: 50%;
  display: flex;
   &.center {
    align-items: center;
    justify-content: center;
  }
   .pic {
    position: absolute;
    //bottom: 0;
    //left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    max-height: 100%;
  }
`;
const Text = styled(motion.div)`
  font-size: calc(1em + 1vw);
  color: ${props => props.theme.text};
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
   & > *:last-child {
    font-size: calc(0.5rem + 1.2vw);
    font-weight: 300;
  }
   @media only screen and (max-width: 550px) {
    padding: 1rem;
    font-size: calc(0.5rem + 1vw);
  }
`;
const Info = () => {
    return (
        <Box
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '45vh', opacity: 1 }}
            transition={{ type: 'spring', duration: 2, delay: 1 }}
        >
            <SubBox>
                <Text
                    initial={{ scale: -1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, delay: 1, rotate: 360 }}
                >
                    <h2>Hi,&nbsp;</h2>
                    <h3>I'm Vitaliy</h3>
                    <h5>
                        I'm 36 and I'm a junior developer. Before the start of the war, I had just finished a front-end developer course at the GoIt Academy and am currently looking for my first job. I would be very grateful for feedback.
                    </h5>
                </Text>
            </SubBox>
            <SubBox className="center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    <img className="pic" src={Me} alt="Profile Pic" />
                </motion.div>
            </SubBox>
        </Box>
    );
};
export default Info;