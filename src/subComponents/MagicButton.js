// import React, { useState } from 'react';
// const MagicButton = () => {
//     const [position, setPosition] = useState({ x: 0, y: 0 });
//
//     const handleMouseMove = (e) => {
//         setPosition({ x: e.clientX, y: e.clientY });
//     };
//
//     return (
//         <button
//             style={{ position: 'absolute', left: position.x, top: position.y }}
//             onMouseMove={handleMouseMove}
//         >
//             Follow Me!
//         </button>
//     );
// };
//
// export default MagicButton;

// import React, { useState } from 'react';
// import { useSpring, animated } from 'react-spring';
//
// const MagicButton = ({ children }) => {
//     const [mousePosition, setMousePosition] = useState({ x: null, y: null });
//     const [hovered, setHovered] = useState(false);
//
//     const animatedProps = useSpring({
//         left: mousePosition.x,
//         top: mousePosition.y,
//         delay: hovered ? 0 : 1000,
//     });
//
//     const handleMouseMove = (event) => {
//         setMousePosition({ x: event.clientX, y: event.clientY });
//     };
//
//     return (
//         <animated.button
//             style={animatedProps}
//             onMouseEnter={() => setHovered(true)}
//             onMouseLeave={() => setHovered(false)}
//             onMouseMove={handleMouseMove}
//         >
//             {children}
//         </animated.button>
//     );
// };
// export default MagicButton;


// import React, { useState, useEffect, useMemo } from 'react';
// import { useSpring, animated, springProps, to } from 'react-spring';
//
// const MagicButton = ({ children, onClick }) => {
//     const [isFollowing, setIsFollowing] = useState(false);
//
//     const springProps = useSpring({
//         x: 0,
//         y: 0,
//         config: { mass: 5, tension: 350, friction: 40 },
//     });
//
//     const animatedProps = useMemo(
//         () =>
//             springProps.to((props) => ({
//                 x: props.x / 10,
//                 y: props.y / 10,
//             })).to((x, y) => `translate3d(${x}px, ${y}px, 0)`),
//         [springProps]
//     );
//
//     useEffect(() => {
//         let timeout;
//         if (isFollowing) {
//             timeout = setTimeout(() => {
//                 setIsFollowing(false);
//             }, 1000);
//         }
//         return () => clearTimeout(timeout);
//     }, [isFollowing]);
//
//     const handleMouseMove = (e) => {
//         const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
//         const x = e.clientX - left - width / 2;
//         const y = e.clientY - top - height / 2;
//         springProps.set({ x, y });
//         setIsFollowing(true);
//     };
//
//     return (
//         <animated.button style={animatedProps} onMouseMove={handleMouseMove} onClick={onClick}>
//             {children}
//         </animated.button>
//     );
// };
//
// export default MagicButton;

// in video


// import React, {useState, useEffect} from 'react';
// import {motion} from "framer-motion";
//
//
// const MagicButton = ({children}) => {
//
//     const [isFollowing, setIsFollowing] = useState({x: 0, y: 0});
//     useEffect(() => {
//         const mousemove = (e) => {
//             // передача координат курсоора в setIsFollowing
//             setIsFollowing({x: e.clientX, y: e.clientY});
//         }
//         window.addEventListener('mousemove', mousemove)
//
//         return () => {
//             window.removeEventListener('mousemove', mousemove)
//         };
//     }, []);
//     return (
//
//         <motion.div
//             animate={{x: isFollowing.x-60, y: isFollowing.y - 120, transition:{type:'spring', damping: 50}}}
//         >
//             {children}
//         </motion.div>
//
//             );
//             }
//
// export default MagicButton;



import React, {useState, useEffect, useRef} from 'react';
import {motion} from "framer-motion";

const MagicButton = ({children}) => {
    const windowRef = useRef(window);
    const [isFollowing, setIsFollowing] = useState({x: 0, y: 0});
    const [mousePosition, setMousePosition] = useState({x: 80, y: 20});
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const mousemove = (e) => {
            setMousePosition({x: e.clientX, y: e.clientY});
        };
        const scroll = () => {
            setScrollPosition(windowRef.current.scrollY);
        };
        window.addEventListener('mousemove', mousemove);
        windowRef.current.addEventListener('scroll', scroll);

        return () => {
            window.removeEventListener('mousemove', mousemove);
            windowRef.current.removeEventListener('scroll', scroll);
        };
    }, []);

    return (
        <motion.div
            animate={{
                x: mousePosition.x - 60,
                y: mousePosition.y - 150 + scrollPosition,
                transition: {type:'spring', damping: 150},
            }}
        >
            {children}
        </motion.div>
    );
};

export default MagicButton;