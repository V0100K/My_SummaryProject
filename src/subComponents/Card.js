import React from 'react';
import styled from "styled-components";
// import {Work} from "../data/WorkData";
// import {NavLink} from "react-router-dom";
import {Github} from "../components/AllSvg";
// import Kapusta from "../assets/Images/Kapysta.png"
import {motion} from "framer-motion";
// import astronaut from "../assets/Images/spaceman.png";


const Box = styled(motion.li)  //для анимации - li -> заменяется на motion
    `
      width: 16rem;
      height: 50vh;
      background-color: ${props => props.theme.text};
      color: ${props => props.theme.body};
      padding: 1.5rem 2rem;
      margin-right: 8rem;
      border-radius: 0 50px 0 50px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 1px solid ${props => props.theme.body};
      transition: all 0.7s ease;


      &:hover {
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.text};
        border: 1px solid ${props => props.theme.text};
      }
    `

const Title = styled.h2
    `
      font-size: calc(1em + 0.5vw);
    `
const Description = styled.h2
    `
      font-size: calc(0.8em + 0.2vw);
      font-family: 'Karla', sans-serif;
      font-weight: 500;
    `
const Tags = styled.div
    `
      border-top: 2px solid ${props => props.theme.body};
      padding-top: 0.5rem;
      display: flex;
      flex-wrap: wrap;

      ${Box}:hover & {
        border-top: 2px solid ${props => props.theme.body};
      }
    `
const Tag = styled.span
    `
      margin-right: 1rem;
      font-size: calc(0.8em + 0.3vw);
    `
const Footer = styled.div
    `
      display: flex;
      justify-content: space-between;
    `
const Link = styled.button
    `
      background-color: ${props => props.theme.body};
      color: ${props => props.theme.text};
      text-decoration: none;
      padding: 0.45rem calc(2rem + 2vw);
      border-radius: 0 0 0 50px;
      font-size: calc(1em + 0.5vw);
      cursor: pointer;


      ${Box}:hover & {
        background-color: ${props => props.theme.text};
        color: ${props => props.theme.body};
        transition: all 0.7s ease;
      }
    `

// const Git = styled(NavLink)
const Git = styled.button
    `
      background-color: inherit;
      text-decoration: none;
      border: none;

      ${Box}:hover & {
        fill: ${props => props.theme.text};
        transition: all 0.7s ease;
      }
    `


// Framer-motion Configurate - animation

const Item = {
    hidden: {scale: 0},
    show: {
        scale: 1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}
// End----


const BackImg = styled.div
    `
      display: contents;

    `


const Card = (props) => {
    const {id, name, description, tags, demo, github, img} = props.data


    return (
        <Box key={id} variants={Item}>


            <Title>{name}</Title>
            <BackImg>
                <img src={img} alt='man' style={{borderRadius: '0 50px 0 50px', height: '30vh'}}/>
            </BackImg>
            <Description>
                {description}
            </Description>
            <Tags>
                {
                    tags.map((e, id) => {
                        return <Tag key={id}> #{e}</Tag>
                    })
                }
            </Tags>

            <Footer>
                <Link>
                    <a href={`${demo}`} target={"_blank"} rel="noreferrer" style={{textDecoration: 'none', color: 'inherit'}}>Visit</a>
                </Link>
                <Git>
                    <a href={`${github}`} target={"_blank"} rel="noreferrer">
                        <Github width={35} height={35}/>
                    </a>
                </Git>
            </Footer>
        </Box>
    )
};

export default Card;