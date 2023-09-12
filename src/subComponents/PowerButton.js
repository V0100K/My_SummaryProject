// Home button

import React from 'react';
import styled from "styled-components";
import {PowerBtn} from "../components/AllSvg";
import {NavLink} from "react-router-dom";


const Power = styled.button
    `
      position: fixed;
      //top: 2rem;
      //left: 70vw;
      top: 5%;
      left: 50%;
      margin-right: -50%;
      transform: translate(0, -50%);

      background-color: #63cbea;
      padding: 0.35rem;
      border-radius: 50%;
      border: 1px solid #000;
      width: 2.5rem;
      height: 2.5rem;

      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 3;

      cursor: pointer;


      &:hover {
        background-color: rgb(119, 121, 179);
        box-shadow: 0 0 25px 16px rgba(40, 45, 229, 0.87);
        color: yellow;
      }

      & > *:first-child { //svg power
        text-decoration: none;
        padding-top: 0.2rem;
        color: inherit;

        &:hover {
          fill: #caccdf;
        }
      }

    `



const PowerButton = () => {
    return (
        <Power>
            <NavLink to='/'>
                <PowerBtn width={33} height={33} fill='props.fill'/>
            </NavLink>
        </Power>
    );
};

export default PowerButton;
