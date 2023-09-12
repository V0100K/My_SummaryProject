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



import React, {useEffect, useRef} from "react";
import styled, {ThemeProvider} from "styled-components";
import {darkTheme} from "./Themes";
import {motion} from "framer-motion";

// import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialLcons";
import PowerButton from "../subComponents/PowerButton";
import Card from "../subComponents/Card";

import {Work} from "../data/WorkData";
import {YouTube} from "./AllSvg";
import BigTitle from "../subComponents/BigTitle";
import SoundBar from "../subComponents/SoundBar";
import Space from "../subComponents/Space";


const Box = styled.div
    `
      background-color: ${props => props.theme.body};
      height: 320vh;
      position: relative;
      display: flex;
      align-items: center;

    `

const Main = styled(motion.ul)
    `
      position: fixed;
      top: 12rem;
      left: calc(10rem + 15vw);
      height: 40vh;
      display: flex;
      color: white;

      @media only Screen and (max-width: 768px) {
        left: calc(2rem + 5vw);
      }
    `

const Rotate = styled.span
    `
      display: block;
      position: fixed;
      right: 1rem;
      bottom: 1rem;
      width: 80px;
      height: 80px;
      z-index: 1;
    `



const container = {
    hidden: {opacity:0.1},
    show: {
        opacity: 1,
        transition: {
            staggerChildren:0.5,
            duration: 0.5
        }
    }
}
// End----

const WorkPage = () => {


    const ref = useRef(null);
    const yinyang = useRef(null);


    useEffect(() => {
        let element = ref.current;

        const rotate = () => {
            if (element) {
                element.style.transform = `translateX(${-window.scrollY}px)`;
            }
            if (yinyang.current) {
                yinyang.current.style.transform = `rotate(${-window.scrollY}deg)`;
            }
        }

        window.addEventListener('scroll', rotate)

        return () => window.removeEventListener('scroll', rotate)
    }, [])


    return (
        <ThemeProvider theme={darkTheme}>
            <Box>

                <SoundBar/>
                <SocialIcons theme='light'/>
                <PowerButton/>


                <Main ref={ref} variants={container} initial='hidden' animate='show'>
                    {
                        Work.map(e =>
                            <Card key={e.id} data={e}/>
                        )
                    }

                </Main>
                <Rotate ref={yinyang}>
                    <YouTube width={80} height={80} fill={darkTheme.text}/>

                </Rotate>


                <BigTitle text='WORK' top='10%' right='20%'/>
            </Box>

        </ThemeProvider>


    )
};

export default WorkPage;



