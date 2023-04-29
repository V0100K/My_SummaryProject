import GlobalStyles from "./globalStyles";
import {ThemeProvider} from "styled-components";
 import {lightTheme} from "./components/Themes";
import { Routes, Route, useLocation} from "react-router-dom";

// import myCv from '../src/data/Malyshko_Vitaliy_juntreFrontEnd.pdf'
// TODO: Komponents--------
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import SummaryPage from "./components/SummaryPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";
import {AnimatePresence} from "framer-motion";
import DownLoadCVBtn from "./subComponents/DownLoadCVBtn";


//TODO: /Заменить 'Switch' на 'Routers' и поиграться-----------

function App() {


    const location = useLocation();

    return <>

        {/*подключение глобальных стилей*/}
        <GlobalStyles/>
        <ThemeProvider theme={lightTheme}>

{/*// For framer-motion animation on page change --- ++ '<AnimatePresence exitBeforeEnter> +
               k <Switch +добавляется=> location={location} key={location.pathname}>'*/}

            <AnimatePresence mode='wait'>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/" element={<DownLoadCVBtn/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/summary" element={<SummaryPage/>}/>
                    <Route path="/work" element={<WorkPage/>}/>
                    <Route path="/skills" element={<MySkillsPage/>}/>
                </Routes>
            </AnimatePresence>

        </ThemeProvider>

    </>

}

export default App

