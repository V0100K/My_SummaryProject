//  import React from 'react';
// import styled from "styled-components";
// import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'
// import PowerButton from "../subComponents/PowerButton";
// import SocialIcons from "../subComponents/SocialLcons";
//
// import BigTitle from "../subComponents/BigTitle";
// import {motion} from 'framer-motion'
//
// import ResumeMe from '../assets/Images/Malyshko_Vitaliy_juntreFrontEnd_page-0001.jpg'
//  import DownLoadCVBtn from "../subComponents/DownLoadCVBtn";
//  import MagicButton from "../subComponents/MagicButton";
//
//
//
//
// // const Center = styled.div
// //     `
// //       display: flex;
// //       justify-content: center;
// //       align-items: center;
// //       padding-top: 10rem;
// //
// //     `
// //
// // const Grid = styled.div
// //     `
// //       display: grid;
// //       grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
// //       grid-gap: calc(1rem + 2vw);
// //     `
// //
// // // framer-motion config
// // const container = {
// //     hidden: {opacity: 0},
// //     show: {
// //         opacity: 1,
// //
// //         transition: {
// //             staggerChildren: 0.5,
// //             duration: 0.5,
// //         }
// //     }
// // }
//
// const MainContainer = styled(motion.div)
//     `
//       background-image: url${img} gradient 0.6;
//       background-size: cover;
//       background-repeat: no-repeat;
//       background-attachment: fixed;
//       background-position: center;
//       width: 100vw;
//       height: 100vh;
//
//     `
//
// // белая полоса вверху
// const Container = styled.div
//     `
//       //background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
//       //width: 100%;
//       //height: 15%;
//
//       //position: relative;
//       //padding-bottom: 5rem;
//     `
//  const Resume = styled.div
//      `
//       margin-top: 5rem;
//      display: flex;
//       justify-content: center;
//
//       .res{
//         display: flex;
//         max-width: 80%;
//       }
//
//     `
// const SummaryPage = () => {
//
//     // const [numbers, setNumbers] = useState(0)
//     //
//     // useEffect(() => {
//     //     // eslint-disable-next-line no-restricted-globals
//     //     let num = (window.innerHeight - 70)/30;
//     //     setNumbers(parseInt(num))
//     //     console.log(setNumbers(parseInt(num)));
//     // }, [])
//
//     return (
//         <MainContainer
//         // variants={container}
//         initial='hidden'
//         animate='show'
//         exit={{
//             opacity: 0, transition: {duration:0.5}
//         }}
//         >
//             <Container>
//                 {/*<LogoComponent />*/}
//                 <PowerButton/>
//                 <SocialIcons />
//                     {/*<Document   file={MyCV}>*/}
//                     {/*    <Page pageNumber={1} />*/}
//                     {/*</Document>*/}
//                 <MagicButton>
//                     <DownLoadCVBtn />
//                 </MagicButton>
//                 <Resume>
//                     <img className='res' src={ResumeMe} alt={'resume'}/>
//                                     </Resume>
//             </Container>
//             <BigTitle text='SUMMARY' top='35px' left='53%'/>
//         </MainContainer>
//     );
// };
//
// export default SummaryPage;


//
// import { Document, Page, pdfjs } from 'react-pdf';
// import { AnnotationLayer } from 'react-pdf/lib/entry.webpack';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
//
// const SummaryPage = ({ url }) => {
//     const [numPages, setNumPages] = useState(null);
//     const onDocumentLoadSuccess = ({ numPages }) => {
//         setNumPages(numPages);
//     };
//     const getText = async (page) => {
//         try {
//             // get the text layer for the given page
//             const textLayer = await page.getTextContent();
//             // extract the text as a string
//             return textLayer.items.map(item => item.str).join(' ');
//         } catch (err) {
//             console.log(err);
//             return '';
//         }
//     };
//     return (
//         <div style={{ height: '100vh' }}>
//             <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
//                 <Page pageNumber={1} renderMode="svg">
//                     {({ annotationLayer }) => (
//                         <>
//                             <AnnotationLayer
//                                 /* The `renderInteractiveForms` prop enables us to click on links */
//                                 renderInteractiveForms
//                                 /* When the text has been successfully extracted, we pass it to the annotation layer */
//                                 onGetTextSuccess={getText}
//                             />
//                             {annotationLayer}
//                         </>
//                     )}
//                 </Page>
//             </Document>
//         </div>
//     );
// };
// export default SummaryPage;


// резюме 1  ИИ

// import React from "react";
// import "./resume.css";
// // Импортируем иконки
// import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
// import me from '../assets/Images/Снимок экрана 2023-04-16 в 11.08.00.png'
// const Resume = () => {
//     // Данные для резюме
//     const resumeData = {
//         name: "Имя",
//         photo: me,
//         contacts: [
//             { name: "Телефон", value: "+1234567890" },
//             { name: "Email", value: "email@example.com" },
//             {
//                 name: "Linkedin",
//                 value: "https://www.linkedin.com/in/username",
//                 icon: <FaLinkedin />,
//             },
//             {
//                 name: "Github",
//                 value: "https://github.com/username",
//                 icon: <FaGithub />,
//             },
//             {
//                 name: "Twitter",
//                 value: "https://twitter.com/username",
//                 icon: <FaTwitter />,
//             },
//         ],
//         skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5", "Skill 6"],
//         skills2: [
//             "Skill 7",
//             "Skill 8",
//             "Skill 9",
//             "Skill 10",
//             "Skill 11",
//             "Skill 12",
//         ],
//         title: "Заголовок резюме",
//         blocks: [
//             {
//                 title: "Блок 1",
//                 content: [
//                     "Строка 1",
//                     "Строка 2",
//                     "Строка 3",
//                     "Строка 4",
//                     "Строка 5",
//                 ],
//             },
//             {
//                 title: "Блок 2",
//                 content: [
//                     "Строка 1",
//                     "Строка 2",
//                     "Строка 3",
//                     "Строка 4",
//                     "Строка 5",
//                 ],
//             },
//             {
//                 title: "Блок 3",
//                 content: [
//                     "Строка 1",
//                     "Строка 2",
//                     "Строка 3",
//                     "Строка 4",
//                     "Строка 5",
//                 ],
//             },
//             {
//                 title: "Блок 4",
//                 content: [
//                     "Строка 1",
//                     "Строка 2",
//                     "Строка 3",
//                     "Строка 4",
//                     "Строка 5",
//                 ],
//             },
//         ],
//     };
//     // Функция отображения блока контактов
//     const renderContacts = () =>
//         resumeData.contacts.map(({ name, value, icon }, index) => (
//             <div key={index}>
//                 {icon ? icon : null}
//                 <a href={value} target="_blank" rel="noopener noreferrer">
//                     {name}: {value}
//                 </a>
//             </div>
//         ));
//     // Функция отображения блока навыков
//     const renderSkills = (skills) =>
//         skills.map((skill, index) => <div key={index}>{skill}</div>);
//     // Функция отображения блока содержания
//     const renderContent = (blocks) =>
//         blocks.map(({ title, content }, index) => (
//             <div key={index}>
//                 <h3>{title}</h3>
//                 {content.map((text, index) => (
//                     <div key={index}>{text}</div>
//                 ))}
//             </div>
//         ));
//     return (
//         <div className="resume">
//             <div className="resume-left">
//                 <div className="resume-photo">
//                     <img src={resumeData.photo} alt="Фото" />
//                 </div>
//                 <div className="resume-contacts">
//                     <h3>Контакты</h3>
//                     {renderContacts()}
//                 </div>
//                 <div className="resume-skills">
//                     <h3>Навыки</h3>
//                     {renderSkills(resumeData.skills)}
//                 </div>
//                 <div className="resume-skills2">
//                     <h3>Дополнительные навыки</h3>
//                     {renderSkills(resumeData.skills2)}
//                 </div>
//             </div>
//             <div className="resume-right">
//                 <h2>{resumeData.title}</h2>
//                 {renderContent(resumeData.blocks)}
//             </div>
//         </div>
//     );
// };
// export default Resume;


// 2 резюмп II

// import React from 'react';
// const Resume = () => {
//     const data = {
//         contacts: [
//             {
//                 name: 'Phone',
//                 value: '+38 095 00 00',
//                 link: 'tel:+3809500000'
//             },
//             {
//                 name: 'Email',
//                 value: 'malyshko2001@gmail.com',
//                 link: 'mailto:malyshko2001@gmail.com'
//             },
//             {
//                 name: 'Location',
//                 value: 'Kyiv, Ukraine',
//                 link: ''
//             },
//             {
//                 name: 'Portfolio',
//                 value: 'Portfolio page',
//                 link: 'https://example.com'
//             },
//             {
//                 name: 'GitHub',
//                 value: 'GitHub.com/V0100K/',
//                 link: 'https://github.com/V0100K/'
//             },
//             {
//                 name: 'LinkedIn',
//                 value: 'Linkedin.com/in/vitaly-malyshko/',
//                 link: 'https://www.linkedin.com/in/vitaly-malyshko/'
//             }
//         ],
//         techSkills: [
//             'HTML5/CSS3/SASS',
//             'Responsive/Adaptive design',
//             'GIT',
//             'JavaScript',
//             'React',
//             'Redux',
//             'REST API'
//         ],
//         softSkills: [
//             'Honest',
//             'Diligent and organized',
//             'Punctual',
//             'Team player'
//         ],
//         education: [
//             {
//                 title: 'IT School GoIT (Lviv)',
//                 subtitle: 'Full-Stack Developer',
//                 date: '2021 - 2022'
//             },
//             {
//                 title: 'IT School STEP (Kyiv)',
//                 subtitle: 'HTML + CSS + Bootstrap',
//                 date: '2018 - 2018'
//             }
//         ],
//         languages: [
//             {
//                 name: 'English',
//                 level: 'Pre-Intermediate'
//             },
//             {
//                 name: 'Ukrainian',
//                 level: 'Native'
//             }
//         ],
//         summary:
//             "I’m looking for a junior position to get a proper background in web development and gain practical skills. I’ve gotten decent skills of HTML/CSS and basic knowledge of JS & React during the intensive full-time course (6 months, 60 hours per week). Also, I've got skills in React Native by self-learning.",
//         projects: [
//             {
//                 name: 'WEB STUDIO',
//                 link: 'https://example.com',
//                 technologies: ['HTML', 'CSS'],
//                 description: 'A website with a responsive layout.'
//             },
//             {
//                 name: 'ICE CREAM',
//                 link: 'https://example.com',
//                 technologies: ['HTML', 'SASS', 'JS', 'Parcel'],
//                 description: 'A website types of ice cream.'
//             },
//             {
//                 name: 'EVENT BOSTER',
//                 link: 'https://example.com',
//                 technologies: [
//                     'HTML',
//                     'SASS',
//                     'JS',
//                     'REST API',
//                     'AJAX',
//                     'Parcel'
//                 ],
//                 description: 'Application for selecting and booking tickets.'
//             },
//             {
//                 name: 'KAPUSTA',
//                 link: 'https://example.com',
//                 technologies: [
//                     'React',
//                     'SASS',
//                     'Redux',
//                     'Axios',
//                     'Styled Components'
//                 ],
//                 description: 'Application for accounting expenses and income.'
//             }
//         ],
//         experience: [
//             {
//                 title: 'PROJECT MANAGER / MEDICAL EQUIPMENT ENGINEER',
//                 company: 'MMЕ',
//                 date: '03/2021 - 05/2021',
//                 description:
//                     'Technical communication Commissioning and adjustment of oxygen generators.'
//             },
//             {
//                 title: 'SALES MANAGER/DRAWING CONSTRUCTOR',
//                 company: 'SarosDesign',
//                 date: '06/2020 – 02/2021',
//                 description:
//                     'Production of working drawings of products Advice and assistance in choosing.'
//             },
//             {
//                 title: 'DEPUTY HEAD OF GAS NETWORKS / SHIEF OF A POWER PLANT',
//                 company: 'Thermal power plant',
//                 date: '01/2010 – 08/2019',
//                 description:
//                     'Creation and control of work processes Maintaining documentation from the implementation of plans to tendering for procurement.'
//             }
//         ]
//     };
//     return (
//         <div
//             style={{
//                 display: 'flex',
//                 flexDirection: 'row',
//                 background: 'linear-gradient(to right, #ccc, #eee)'
//             }}
//         >
//             <div style={{ width: '35%', padding: '30px' }}>
//                 <img
//                     src="path/to/image"
//                     alt="Malyshko Vitaliy"
//                     style={{ width: '100%' }}
//                 />
//                 <div style={{ marginTop: '30px' }}>
//                     <h3>Contacts</h3>
//                     {data.contacts.map((contact) => (
//                         <p key={contact.name}>
//                             {contact.value}{' '}
//                             <a href={contact.link} target="_blank" rel="noreferrer">
//                                 {contact.name}
//                             </a>
//                         </p>
//                     ))}
//                 </div>
//                 <div style={{ marginTop: '30px' }}>
//                     <h3>Tech Skills</h3>
//                     {data.techSkills.map((skill) => (
//                         <p key={skill}>{skill}</p>
//                     ))}
//                 </div>
//                 <div style={{ marginTop: '30px' }}>
//                     <h3>Soft Skills</h3>
//                     {data.softSkills.map((skill) => (
//                         <p key={skill}>{skill}</p>
//                     ))}
//                 </div>
//                 <div style={{ marginTop: '30px' }}>
//                     <h3>Additional education</h3>
//                     {data.education.map((education) => (
//                         <p key={education.title}>
//                             {education.title}, {education.subtitle}, {education.date}
//                         </p>
//                     ))}
//                 </div>
//                 <div style={{ marginTop: '30px' }}>
//                     <h3>Languages</h3>
//                     {data.languages.map((language) => (
//                         <p key={language.name}>
//                             {language.name} - {language.level}
//                         </p>
//                     ))}
//                 </div>
//             </div>
//             <div
//                 style={{
//                     width: '65%',
//                     background: '#fff',
//                     margin: '30px 0 0 15px',
//                     padding: '30px'
//                 }}
//             >
//                 <h1>Malyshko Vitaliy</h1>
//                 <h2>FRONT-END DEVELOPER</h2>
//                 <hr style={{ border: '1px solid #ccc', margin: '15px 0' }} />
//                 <div>
//                     <h3>SUMMARY</h3>
//                     <p>{data.summary}</p>
//                 </div>
//                 <hr style={{ border: '1px solid #ccc', margin: '15px 0' }} />
//                 <div>
//                     <h3>PROJECT EXPERIENCE</h3>
//                     {data.projects.map((project) => (
//                         <div key={project.name} style={{ margin: '20px 0' }}>
//                             <h4>
//                                 {project.name}{' '}
//                                 <a href={project.link} target="_blank" rel="noreferrer">
//                                     {project.link}
//                                 </a>
//                             </h4>
//                             <p>{project.description}</p>
//                             <p>
//                                 <strong>Technologies: </strong>
//                                 {project.technologies.join(', ')}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//                 <hr style={{ border: '1px solid #ccc', margin: '15px 0' }} />
//                 <div>
//                     <h3>WORK EXPERIENCE</h3>
//                     {data.experience.map((exp) => (
//                         <div key={exp.title} style={{ margin: '20px 0' }}>
//                             <h4>{exp.title}</h4>
//                             <p>{exp.company}</p>
//                             <p>{exp.date}</p>
//                             <p>{exp.description}</p>
//                         </div>
//                     ))}
//                 </div>
//                 <hr style={{ border: '1px solid #ccc', margin: '15px 0' }} />
//                 <div>
//                     <h3>EDUCATION</h3>
//                     {data.education.map((education) => (
//                         <div key={education.title} style={{ margin: '20px 0' }}>
//                             <h4>{education.title}</h4>
//                             <p>{education.subtitle}</p>
//                             <p>{education.date}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default Resume;


// 3 var by II


import React from 'react';
import './resume.css';
import data from '../data/resumeData.json';
import MagicButton from "../subComponents/MagicButton";
import DownLoadCVBtn from "../subComponents/DownLoadCVBtn";
import BigTitle from "../subComponents/BigTitle";
import PowerButton from "../subComponents/PowerButton";
import me from '../assets/Images/myPhoto.jpeg'

const SummaryPage = () => {
    const {
        contacts,
        techSkills,
        softSkills,
        additionalEducation,
        languages,
        summary,
        projectExperience,
        workExperience,
        education,
        name,
        title,
    } = data;

    const renderContacts = () => {
        return contacts.map((contact, index) => (
            <div key={index} className="contact">
                <a href={contact.link}>{contact.name}</a>
            </div>
        ));
    };

    const renderTechSkills = () => {
        return techSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
        ));
    };

    const renderSoftSkills = () => {
        return softSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
        ));
    };

    const renderAdditionalEducation = () => {
        return additionalEducation.map((education, index) => (
            <li key={index}>{education}</li>
        ));
    };

    const renderLanguages = () => {
        return languages.map((language, index) => (
            <li key={index}>{language}</li>
        ));
    };

    const renderProjectExperience = () => {
        return projectExperience.map((experience, index) => (
            <div key={index} className="project-experience">
                <a href={experience.link}>{experience.name}</a>
                <p>{experience.description}</p>

            </div>

        ));
    };

    const renderWorkExperience = () => {
        return workExperience.map((experience, index) => (
            <div key={index} className="work-experience">
                <p style={{fontWeight: 'bolder'}}>{experience.position}</p>
                <p style={{paddingLeft: '20px', marginBottom: '7px'}}>{experience.company} | {experience.date}</p>
                <ul style={{paddingLeft: '40px', display: 'inline-list-item'}}>
                    {experience.responsibilities.map((responsibility, index) => (
                        <li key={index}> {responsibility}</li>
                    ))}
                </ul>
            </div>
        ));
    };

    const renderEducation = () => {
        return education.map((education, index) => (
            <div key={index} className="education">
                <p style={{fontWeight: 'bolder'}}>{education.school} </p>
                <p>{education.degree} | {education.date}</p>
            </div>
        ));
    };

    return (
        <>

            <MagicButton>
                <DownLoadCVBtn/>
            </MagicButton>
            <PowerButton/>

            <div className="resumeWrapper">
                <BigTitle text='SUMMARY' top='35px' left='53%'/>

                <div className="left-column">
                    <img className="photo" src={me} alt="My Image"/>
                    <div className="contacts">
                        <h3>Contacts</h3>
                        {renderContacts()}
                    </div>
                    <div className="tech-skills">
                        <h3>Tech Skills</h3>
                        <ul>{renderTechSkills()}</ul>
                    </div>
                    <div className="soft-skills">
                        <h3>Soft Skills</h3>
                        <ul>{renderSoftSkills()}</ul>
                    </div>
                    <div className="additional-education">
                        <h3>Additional Education</h3>
                        <ul>{renderAdditionalEducation()}</ul>
                    </div>
                    <div className="languages">
                        <h3>Languages</h3>
                        <ul>{renderLanguages()}</ul>
                    </div>
                </div>
                <div className="right-column">

                    <div className="nameBox">
                        <div className="name">{name}</div>
                        <div className="title">{title}</div>
                    </div>
                    <div className="summary">
                        <h2>Summary</h2>
                        <div className="RightText">
                            <p>{summary}</p>
                        </div>
                    </div>
                    <div className="project-experience">
                        <h2>Project Experience</h2>
                        <div className="RightText">
                            {renderProjectExperience()}
                        </div>
                    </div>
                    <div className="work-experience">
                        <h2>Work Experience</h2>
                        <div className="RightText">
                            {renderWorkExperience()}
                        </div>
                    </div>
                    <div className="education">
                        <h2>Education</h2>
                        <div className="RightText">
                            {renderEducation()}
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default SummaryPage;