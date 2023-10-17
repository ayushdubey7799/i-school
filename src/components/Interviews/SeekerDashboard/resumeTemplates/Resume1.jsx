import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faEnvelope, faPhone, faPencilSquare, faBriefcase, faAlignCenter, faLanguage, faCertificate, faProjectDiagram, faSchool } from '@fortawesome/free-solid-svg-icons';
import { resumeData } from "../../../../utils/contantData";



const Resume1 = () => {

    const [data, setData] = useState(resumeData);

    return (
        <Wrapper>
            <Header>
                <span className="name">{data.personalInfo.name}</span>
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
            </Header>

            <Content>
                <div className="column1">

                    <Summary>
                        <h2>
                            <FontAwesomeIcon icon={faPencilSquare} className="icon2" />
                            Professional Summary
                        </h2>
                        <span className="text">{data.summary}</span>
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
                                        <span className="title">{project.title}</span>
                                        <span className="date">{project.date}</span>
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

                <div className="column2">

                    <Skills>
                        <h2>
                            <FontAwesomeIcon icon={faAlignCenter} className="icon2" />
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

                    <Language>
                        <h2>
                            <FontAwesomeIcon icon={faLanguage} className="icon2" />
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

                    <Certification>
                        <h2>
                            <FontAwesomeIcon icon={faCertificate} className="icon2" />
                            Certifications
                        </h2>
                        <div className="experienceMainBox">
                            {
                                data.certifications.map((cert, index) => (
                                    <div className="certificateBox" key={index}>
                                        <span className="title">{cert.title}</span>
                                        <span className="company">{cert.organization}</span>
                                        <span className="date">{cert.date}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </Certification>
                </div>
            </Content>
        </Wrapper>
    );
};

export default Resume1;



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
    gap: 1rem;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 600;
  }

  .experienceMainBox {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

}

ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
`;

const Content = styled.div`
display: flex;
flex-direction: row;
gap: 4rem;
width: 100%;


.column1 {
    width: calc(70% - 2rem);
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
}

.column2 {
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


.name {
    font-size: 2.5rem;
    font-weight: 600;
    padding-bottom: 0.5rem;
}

.infoItem {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 1rem;
}

.icon {
    color: grey;
}



`


const Summary = styled.div`


.text {
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 0.05rem;
}

`

const Employment = styled.div`



.experienceBox {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;


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
    font-weight: 500;
    color: blue;
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
    font-size: 0.9rem;
    font-weight: 500;
    color: blue;
}


`


const Skills = styled.div`


.skillBox {
    display: flex;
    flex-flow: row wrap;
    row-gap: 0.5rem;
    column-gap: 0.5rem;
}

.skill {
    border: 0.05rem solid grey;
    padding: 0.2rem 0.5rem;
    font-size: 0.8rem;
    font-weight: 500;
    border-radius: 0.3rem;
}

`


const Language = styled.div`

.skillBox {
    display: flex;
    flex-flow: row wrap;
    row-gap: 0.5rem;
    column-gap: 0.5rem;
}

.skill {
    border: 0.05rem solid grey;
    padding: 0.2rem 0.5rem;
    font-size: 0.8rem;
    font-weight: 500;
    border-radius: 0.3rem;
}

`


const Certification = styled.div`


.certificateBox {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
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
    font-weight: 500;
    color: blue;
}

`


const Projects = styled.div`


.projectBox {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.title {
    font-size: 1rem;
    font-weight: 600;
}

.date {
    font-size: 0.8rem;
    font-weight: 500;
    color: blue;
    margin-bottom: -0.5rem;
}

.desc {
    font-size: 0.9rem;
    line-height: 1.3rem;
    letter-spacing: 0.03rem;
}



`
