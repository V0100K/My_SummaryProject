// import React, {useState, useRef} from "react";
// import "./modal.css"
// import styled from "styled-components";
// import Me from '../../assets/Images/profile-img.png'
// import {motion} from 'framer-motion'  // библиотека анимаций
//
// // const Modal = styled.div
// //     `
// //    height: 100vh;
// //       width: 100vw;
// //       background-color: rgba(0, 0, 0, 0.7);
// //       position: fixed;
// //       top: 0;
// //       left: 0;
// //
// //       align-items: center;
// //       justify-content: center;
// //
// //    transform: scale(0);
// //
// //     `
// //
// //
// // const Content = styled.div
// // `
// // padding: 20px;
// //   border-radius: 12px;
// //   background-color: wheat;
// //
// // `
//
//
// // const SubBox = styled.div
// //     `
// //   width: 50%;
// //   position: relative;
// //   display: flex;
// //
// //   .pic{
// //     position: absolute;
// //     bottom: 0;
// //     left: 50%;
// //     transform: translate(-50%, 0%);
// //     width: 100%;
// //     height: auto;
// //   }
// // `
// //
// // const Text = styled(motion.div)
// //     `
// //  font-size: calc(1em + 1.5vw);
// //    color: ${props => props.theme.text};
// //    padding: 2rem;
// //    cursor: pointer;
// // //
// //    display: flex;
// //    flex-direction: column;
// //    justify-content: space-evenly;
// //
// //   &>*:last-child{
// //     //color: ${props => `rgba(${props.theme.body},0.6)` };
// //     font-size: calc(0.5rem + 1.5vw);
// //     font-weight:300;
// //
// //   }
// // `
//
//
// const Modal = ({active, setActive, children}) => {
//
//     let bot = {
//         TOKEN: "6166435689:AAF04PflHodvT-GfgRdOvWQjoBCHNv3Z_is",
//         chatID: "566620359",
//     }
//
//     let feedback = React.createRef();
// let submit = ()=> {
//     let message = feedback.current.value;
//
//     // очистка формы после отправки
// feedback.current.value = '';
//
//      fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${message}`,{
//         method: "GET"
//     })
//         .then(success => {
//
//
//                 alert('Message send, ThankYou!')
//
//
//         }, error => {
//             alert('Message not send!')
//             console.log(error)
//         })
//
//
// }
//
//
//     return (
// // проверка если active - try - добавляем класс modal active
//
//         <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
//             <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
//                 {children}
//                 <h3 className='modalTitle'>Hi, send me feedback or you message</h3>
//                 <textarea ref={feedback} className='modalText'/>
//                 <button onClick={active ? submit : 'modal'}  type='submit' className='modalBtn'>Send</button>
//             </div>
//         </div>
//
//     );
// };
//
// export default Modal;


// import React, {useState, useRef} from "react";
// import "./modal.css";
//
// const Modal = ({active, setActive, children}) => {
//     let bot = {
//         TOKEN: "6166435689:AAF04PflHodvT-GfgRdOvWQjoBCHNv3Z_is",
//         chatID: "566620359",
//     };
//
//     let feedback = useRef(null);
//
//     let submit = () => {
//         let message = feedback.current.value;
//
//         feedback.current.value = "";
//
//         fetch(
//             `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${message}`,
//             {
//                 method: "GET",
//             }
//         ).then(
//             (success) => {
//                 setTimeout(() => {
//                     setActive(false);
//                 }, 2000); // устанавливаем значение active в false через 2 секунды после клика submit и вызываем alert с задержкой в 2 секунды
//             },
//             (error) => {
//                 alert("Message not send!");
//                 console.log(error);
//             }
//         );
//     };
//
//     return (
//         <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
//             <div className={active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
//                 {children}
//                 <h3 className="modalTitle">Hi, send me feedback or you message</h3>
//                 <textarea ref={feedback} className="modalText"/>
//                 <button
//                     onClick={active ? submit : "modal"}
//                     type="submit"
//                     className="modalBtn"
//                 >
//                     Send
//                 </button>
//             </div>
//         </div>
//     );
// };
//
// export default Modal;


// TODO: Add modal window - thanks you message send
// import React, {useState, useRef, useEffect} from "react";
// import "./modal.css"
//
//
// const Modal = ({active, setActive, children}) => {
//
//     let bot = {
//         TOKEN: "",
//         chatID: "9",
//     }
//
//     let feedback = useRef(null);
//     let [alertActive, setAlertActive] = useState(false);
//
//     let submit = ()=> {
//         let message = feedback.current.value;
//
//         feedback.current.value = '';
//
//         fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${message}`,{
//             method: "GET"
//         })
//             .then(success => {
//                 setAlertActive(true);
//             }, error => {
//                 alert('Message not send!')
//                 console.log(error)
//             })
//     }
//
//     useEffect(() => {
//         if (alertActive) {
//             setTimeout(() => {
//                 setActive(false);
//                 setAlertActive(false);
//             }, 2000); // 2 seconds
//         }
//     }, [alertActive, setActive]);
//
//     return (
//         <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
//             <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
//                 {children}
//                 <h3 className='modalTitle'>Hi, send me feedback or you message</h3>
//                 <textarea ref={feedback} className='modalText'/>
//                 <button onClick={submit} type='submit' className='modalBtn'>Send</button>
//                 {alertActive && <div className='alert'>Message sent, Thank you!</div>}
//             </div>
//         </div>
//     );
// };
//
// export default Modal;


import React, { useState, useRef } from "react";
import "./modal.css";

const Modal = ({ active, setActive, children }) => {
    let bot = {
        TOKEN: "6166435689:AAF04PflHodvT-GfgRdOvWQjoBCHNv3Z_is",
         chatID: "566620359",
    };

    let feedback = useRef(null);
    let [submitDone, setSubmitDone] = useState(false);

    let submit = () => {
        let message = feedback.current.value;

        feedback.current.value = "";

        fetch(
            `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${message}`,
            {
                method: "GET",
            }
        ).then(
            (success) => {
                setSubmitDone(true);
                setTimeout(() => {
                    setActive(false);
                    setSubmitDone(false);
                }, 2000);
            },
            (error) => {
                alert("Message not send!");
                console.log(error);
            }
        );
    };

    return (
        <div
            className={active ? "modal active" : "modal"}
            onClick={() => setActive(false)}
        >
            <div
                className={active ? "modal__content active" : "modal__content"}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
                <h3 className="modalTitle">Hi, send me feedback or you message</h3>
                <textarea ref={feedback} className="modalText" />
                <button
                    onClick={submit}
                    type="submit"
                    className="modalBtn"
                    disabled={submitDone}
                >
                    {submitDone ? "Message sent, Thank you!" : "Send"}
                </button>
            </div>
        </div>
    );
};

export default Modal;