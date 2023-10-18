import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faEnvelope, faPhone, faPencilSquare, faBriefcase, faProjectDiagram, faSchool } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { resumeData } from "../../../../utils/contantData";
import SkillProgressBar from "./commonComp/SkillProgress";


const Resume4 = () => {

    const [data, setData] = useState(resumeData);

    return (
        <Wrapper>
            <Header>
                <span className="name">{data.personalInfo.name}</span>
                <div className="headerBox">
                    <span className="infoItem">
                        <FontAwesomeIcon icon={faLocationArrow} className="icon" />
                        {data.personalInfo.address}
                    </span>
                    <span className="infoItem">
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                        {data.personalInfo.email}
                    </span>
                    <span className="infoItem">
                        <FontAwesomeIcon icon={faPhone} className="icon" />
                        {data.personalInfo.phone}
                    </span>
                    <span className="infoItem">
                        <a href={data.personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="icon" />
                            Linkedin
                        </a>
                    </span>
                    <span className="infoItem">
                        <a href={data.personalInfo.github} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="icon" />
                            Github
                        </a>
                    </span>
                </div>
            </Header>

            <Content>

                <div className="column1">
                    <Skills>
                        <h2>
                            <span className="point">◉</span>
                            Skills
                            <span className="point">◉</span>
                        </h2>
                        <div className="skillBox">
                            {
                                data.skills.map((skill, index) => (
                                    <div className="skillMain" key={index}>
                                        <span className="skill">{skill.name}</span>
                                        <SkillProgressBar score={skill.score} />
                                    </div>
                                ))
                            }
                        </div>
                    </Skills>

                    <Language>
                        <h2>
                            <span className="point">◉</span>
                            Languages
                            <span className="point">◉</span>
                        </h2>
                        <div className="skillBox">
                            {
                                data.languages.map((lang, index) => (
                                    <div className="skillMain" key={index}>
                                    <span className="skill" key={index}>{lang.name}</span>
                                    <SkillProgressBar score={lang.score} />
                                    </div>
                                ))
                            }
                        </div>
                    </Language>

                    <Certification>
                        <h2>
                            <span className="point">◉</span>
                            Certifications
                            <span className="point">◉</span>
                        </h2>
                        <div className="experienceMainBox">
                            {
                                data.certifications.map((cert, index) => (
                                    <div className="certificateBox" key={index}>
                                        <div className="educationBoxTop">
                                            <span className="title">{cert.title}</span>
                                            <span className="date">{cert.date}</span>
                                        </div>
                                        <span className="company">{cert.organization}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </Certification>
                </div>

                <div className="column2">
                    <Summary>
                        <h2>
                            <FontAwesomeIcon icon={faPencilSquare} className="icon2" />
                            Professional Summary
                        </h2>
                        <div className="text">{data.summary}</div>
                    </Summary>

                    <Employment>
                        <h2>
                            <FontAwesomeIcon icon={faBriefcase} className="icon2" />
                            Employment History
                        </h2>
                        <div className="experienceMainBox">
                            {
                                data.experience.map((exp, index) => (
                                    <div className="experienceBox" key={index}>
                                        <div className="experienceBoxTop">
                                            <span className="title">{exp.title}</span>
                                            <span className="company">{exp.company}</span>
                                        </div>
                                        <span className="location">{exp.location}</span>
                                        <span className="date">{exp.date}</span>
                                        <ul>
                                            {
                                                exp.description.map((e, i) => (
                                                    <li className="desc" key={i}>{e}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                ))
                            }
                        </div>
                    </Employment>

                    <Education>
                        <h2>
                            <FontAwesomeIcon icon={faSchool} className="icon2" />
                            Education
                        </h2>
                        <div className="experienceMainBox">
                            {
                                data.education.map((edu, index) => (
                                    <div className="educationBox" key={index}>
                                        <div className="educationBoxTop">
                                            <span className="title">{edu.degree}</span>
                                            <span className="date">{edu.year}</span>
                                        </div>
                                        <span className="company">{edu.university}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </Education>

                    <Projects>
                        <h2>
                            <FontAwesomeIcon icon={faProjectDiagram} className="icon2" />
                            Projects
                        </h2>
                        <div className="experienceMainBox">
                            {
                                data.projects.map((project, index) => (
                                    <div className="projectBox" key={index}>
                                        <div className="educationBoxTop">
                                            <span className="title">{project.title}</span>
                                            <span className="date">{project.date}</span>
                                        </div>
                                        <ul>
                                            {
                                                project.description.map((pro, i) => (
                                                    <li className="desc" key={i}>{pro}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                ))
                            }
                        </div>
                    </Projects>
                </div>
            </Content>
        </Wrapper>
    );
};

export default Resume4;



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 21cm;
  margin: 4rem auto;
  gap: 2rem;


  .icon2 {
    color: grey;
  }

  h2 {
    display: flex;
    flex-direction: row;
    gap: 0.8rem;
    align-items: center;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .experienceMainBox {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

}

ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.point {
    color: grey;
    font-size: 0.8rem;
}
`;

const Content = styled.div`
display: flex;
flex-direction: row;
gap: 4rem;
width: 100%;


.column2 {
    width: calc(70% - 2rem);
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
}

.column1 {
    width: calc(30% - 2rem);
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
}



`

const Header = styled.div`

display: flex;
flex-direction: column;
gap: 0.7rem;
width: 100%;
align-items: center;


.name {
    font-size: 2.5rem;
    font-weight: 600;
    padding-bottom: 0.5rem;
}

.infoItem {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-size: 0.8rem;
}

a {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-size: 0.8rem;
    text-decoration: none;
    color: var(--color);
}

.icon {
    color: grey;
}

.headerBox {
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    justify-content: center;
    gap: 2rem;
}



`


const Summary = styled.div`


.text {
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 0.05rem;
    padding-left: 2rem;
}

`

const Employment = styled.div`


.experienceBox {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    padding-left: 2rem;


    .experienceBoxTop {
        display: flex;
        gap: 0.6rem;
    }
}


.title {
    font-size: 1rem;
    font-weight: 600;
}

.company {
    font-size: 0.9rem;
    font-weight: 500;
    font-style: italic;
}

.location {
    font-size: 0.8rem;
    font-weight: 500;
}

.date {
    font-size: 0.8rem;
    font-weight: 600;
    color: grey;
}

.desc {
    font-size: 0.9rem;
    line-height: 1.3rem;
    letter-spacing: 0.03rem;
}

`


const Education = styled.div`


.educationBox {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-left: 2rem;


    .educationBoxTop {
        display: flex;
        width: 100%;
        justify-content: space-between;
        gap: 0.6rem;
    }
}

.title {
    font-size: 1rem;
    font-weight: 600;
}

.company {
    font-size: 0.9rem;
    font-weight: 500;
    color: grey;
}

.date {
    font-size: 0.8rem;
    font-weight: 600;
    color: grey;
}


`


const Skills = styled.div`

h2 {
    display: flex;
    width: 100%;
    justify-content: center;
}

.skillBox {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.skill {
    padding: 0.2rem 0.5rem;
    font-size: 0.8rem;
    font-weight: 500;
}

.skillMain {
    display: flex;
    flex-direction: column;
    gap: 0.2rem; 
}

`


const Language = styled.div`

h2 {
    display: flex;
    width: 100%;
    justify-content: center;
}

.skillBox {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.skill {
    padding: 0.2rem 0.5rem;
    font-size: 0.8rem;
    font-weight: 500;
}

.skillMain {
    display: flex;
    flex-direction: column;
    gap: 0.2rem; 
}

`


const Certification = styled.div`
h2 {
    display: flex;
    width: 100%;
    justify-content: center;
}

.certificateBox {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    padding-left: 0.5rem;

    .educationBoxTop {
        display: flex;
        width: 100%;
        justify-content: space-between;
        gap: 0.6rem;
    }
}

.title {
    font-size: 1rem;
    font-weight: 600;
}

.company {
    font-size: 0.85rem;
    font-weight: 500;
    color: grey;
}

.date {
    font-size: 0.8rem;
    font-weight: 600;
    color: grey;
}

`


const Projects = styled.div`


.projectBox {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-left: 2rem;
    
}

.title {
    font-size: 1rem;
    font-weight: 600;
}

.date {
    font-size: 0.8rem;
    font-weight: 600;
    color: grey;
}

.desc {
    font-size: 0.9rem;
    line-height: 1.3rem;
    letter-spacing: 0.03rem;
}

.educationBoxTop {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: -1rem;
}

`
