import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faEnvelope, faPhone, } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { resumeData } from "../../../../utils/contantData";


const Resume3 = () => {

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

            <HLine />

            <Content>

                <Summary>
                    <h2>
                        Professional Summary
                    </h2>
                    <div className="text">{data.summary}</div>
                </Summary>

                <HLine />

                <Employment>
                    <h2>
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

                <HLine />

                <Projects>
                    <h2>
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

                <HLine />

                <Skills>
                    <h2>
                        Skills
                    </h2>
                    <div className="skillBox">
                        {
                            data.skills.map((skill, index) => (
                                <span className="skill" key={index}>{skill.name}</span>
                            ))
                        }
                    </div>
                </Skills>

                <HLine />

                <Education>
                    <h2>
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

                <HLine />

                <Language>
                    <h2>
                        Languages
                    </h2>
                    <div className="skillBox">
                        {
                            data.languages.map((lang, index) => (
                                <span className="skill" key={index}>{lang.name}</span>
                            ))
                        }
                    </div>
                </Language>

                <HLine />

                <Certification>
                    <h2>
                        Certifications
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
            </Content>
        </Wrapper>
    );
};

export default Resume3;



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 21cm;
  margin: 4rem auto;
  gap: 1rem;


  h2 {
    display: flex;
    flex-direction: row;
    gap: 0.8rem;
    align-items: center;
    font-size: 1.1rem;
    font-weight: 600;
    margin-top: 0rem;
  }

  .experienceMainBox {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

}

ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
`;

const Content = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;
width: 100%;




`

const Header = styled.div`

display: flex;
flex-direction: column;
gap: 0.7rem;
width: 100%;
align-items: center;


.name {
    font-size: 2rem;
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
display: grid;
grid-template-columns: 2fr 5fr;
align-items: start;


.text {
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 0.05rem;
    padding-left: 2rem;
}

`

const Employment = styled.div`
display: grid;
grid-template-columns: 2fr 5fr;
align-items: start;


.experienceBox {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    padding-left: 2rem;


    .experienceBoxTop {
        display: flex;
        width: 100%;
        justify-content: space-between;
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
display: grid;
grid-template-columns: 2fr 5fr;
align-items: start;

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
display: grid;
grid-template-columns: 2fr 5fr;
align-items: start;

.skillBox {
    display: flex;
    flex-flow: row wrap;
    row-gap: 0.5rem;
    column-gap: 0.5rem;
    padding-left: 1.5rem;
}

.skill {
    padding: 0.2rem 0.5rem;
    font-size: 0.8rem;
    font-weight: 500;
}

`


const Language = styled.div`
display: grid;
grid-template-columns: 2fr 5fr;
align-items: start;

.skillBox {
    display: flex;
    flex-flow: row wrap;
    row-gap: 0.5rem;
    column-gap: 0.5rem;
    padding-left: 1.5rem;
}

.skill {
    padding: 0.2rem 0.5rem;
    font-size: 0.8rem;
    font-weight: 500;
}

`


const Certification = styled.div`
display: grid;
grid-template-columns: 2fr 5fr;
align-items: start;

.certificateBox {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
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
display: grid;
grid-template-columns: 2fr 5fr;
align-items: start;


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
const HLine = styled.hr`
border: none;
height: 0.1rem;
width: 100%;
background-color: var(--color);
margin: 0.5rem 0 0 0;


`
