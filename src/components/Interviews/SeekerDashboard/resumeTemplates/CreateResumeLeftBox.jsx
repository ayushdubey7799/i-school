import React from "react";
import styled from "styled-components";
import { useState } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CreateResumeLeftBox = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    const [expArr, setExpArr] = useState([1]);
    const [eduArr, setEduArr] = useState([1]);
    const [projectArr, setProjectArr] = useState([1]);

    return (
        <Box>
            <div className="personalDetails mainBox">
                <span className="title">Personal Details</span>

                <div className="inputBoxMain">
                    <div className="inputBox">
                        <input type="text" id="jobTitle" />
                        <label htmlFor="jobTitle" className="label">
                            Job Title
                        </label>
                    </div>
                    <div className="inputBox">
                        <input type="file" id="photo" className="photoInput" />
                        <label htmlFor="photo" className="label">
                            Upload Photo
                        </label>
                    </div>
                </div>

                <div className="inputBoxMain">
                    <div className="inputBox">
                        <input type="text" id="fName" />
                        <label htmlFor="fName" className="label">
                            First Name
                        </label>
                    </div>
                    <div className="inputBox">
                        <input type="text" id="lName" />
                        <label htmlFor="lName" className="label">
                            Last Name
                        </label>
                    </div>
                </div>

                <div className="inputBoxMain">
                    <div className="inputBox">
                        <input type="email" id="email" />
                        <label htmlFor="email" className="label">
                            Email
                        </label>
                    </div>
                    <div className="inputBox">
                        <input type="tel" id="contact" />
                        <label htmlFor="contact" className="label">
                            Phone
                        </label>
                    </div>
                </div>

                <div className="inputBoxMain">
                    <div className="inputBox">
                        <input type="text" id="country" />
                        <label htmlFor="country" className="label">
                            Country
                        </label>
                    </div>
                    <div className="inputBox">
                        <input type="text" id="city" />
                        <label htmlFor="city" className="label">
                            City
                        </label>
                    </div>
                </div>

                <div className="inputBoxMain">
                    <div className="inputBox">
                        <input type="text" id="address" />
                        <label htmlFor="address" className="label">
                            Address
                        </label>
                    </div>
                    <div className="inputBox">
                        <input type="text" id="nationality" />
                        <label htmlFor="nationality" className="label">
                            Nationality
                        </label>
                    </div>
                </div>
            </div>

            <div className="profileSummary mainBox">
                <span className="title">Professional Summary</span>
                <span className="text">Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills.</span>

                <textarea
                    className="textArea"
                    rows='10'
                />

                <span className="text">Recruiter tip: write 50-200 characters to increase interview chances 176 / 200</span>
            </div>

            <div className="employmentHistory mainBox">
                <span className="title">Employment History</span>
                <span className="text">Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).</span>

                {expArr.length > 0 &&

                    expArr.map((exp, i) => (
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ width: '100%', boxShadow: 'none', margin: '0' }} classes={{ root: 'custom-accordion-root' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                classes={{
                                    root: 'custom-accordion-summary-root',
                                    expanded: expanded === 'panel1' ? 'expanded' : ''
                                }}
                            >
                                <span className={`menuTitle ${expanded === 'panel1' ? 'selected' : ''}`}>Experience {i + 1}</span>
                            </AccordionSummary>
                            <AccordionDetails>

                                <div className="mainBox">
                                    <div className="inputBoxMain">
                                        <div className="inputBox">
                                            <input type="text" id="jobTitle" required />
                                            <label htmlFor="jobTitle" className="label">
                                                Job title
                                            </label>
                                        </div>
                                        <div className="inputBox">
                                            <input type="text" id="company" required />
                                            <label htmlFor="company" className="label">
                                                Company Name
                                            </label>
                                        </div>
                                    </div>

                                    <div className="inputBoxMain">
                                        <div className="inputBox">
                                            <input type="text" id="date" required />
                                            <label htmlFor="date" className="label">
                                                Start & End Date
                                            </label>
                                        </div>

                                        <div className="inputBox">
                                            <input type="text" id="city" required />
                                            <label htmlFor="city" className="label">
                                                City
                                            </label>
                                        </div>
                                    </div>


                                    <div className="inputBox">
                                        <label className="label">
                                            Description
                                        </label>
                                        <textarea
                                            className="textArea"
                                            rows='10'
                                        />

                                        <span className="text">Recruiter tip: write 200+ characters to increase interview chances.</span>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                {
                    expArr.length === 0 ? <span className="addMoreText">+ Add employment</span> : <span className="addMoreText">+ Add one more employment</span>
                }
            </div>

            <div className="education mainBox">
                <span className="title">Education</span>
                <span className="text">A varied education on your resume sums up the value that your learnings and background will bring to job.</span>

                {eduArr.length > 0 &&
                    eduArr.map((edu, i) => (
                        <Accordion expanded={expanded === 'panel21'} onChange={handleChange('panel21')} style={{ width: '100%', boxShadow: 'none', margin: '0' }} classes={{ root: 'custom-accordion-root' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel21bh-content"
                                id="panel21bh-header"
                                classes={{
                                    root: 'custom-accordion-summary-root',
                                    expanded: expanded === 'panel21' ? 'expanded' : ''
                                }}
                            >
                                <span className={`menuTitle ${expanded === 'panel21' ? 'selected' : ''}`}>Education {i + 1}</span>
                            </AccordionSummary>
                            <AccordionDetails>

                                <div className="mainBox">
                                    <div className="inputBoxMain">
                                        <div className="inputBox">
                                            <input type="text" id="school" required />
                                            <label htmlFor="school" className="label">
                                                School
                                            </label>
                                        </div>
                                        <div className="inputBox">
                                            <input type="text" id="degree" required />
                                            <label htmlFor="degree" className="label">
                                                Degree
                                            </label>
                                        </div>
                                    </div>

                                    <div className="inputBoxMain">
                                        <div className="inputBox">
                                            <input type="text" id="date" required />
                                            <label htmlFor="date" className="label">
                                                Start & End Date
                                            </label>
                                        </div>

                                        <div className="inputBox">
                                            <input type="text" id="city" required />
                                            <label htmlFor="city" className="label">
                                                City
                                            </label>
                                        </div>
                                    </div>


                                    <div className="inputBox">
                                        <label className="label">
                                            Description
                                        </label>
                                        <textarea
                                            className="textArea"
                                            rows='10'
                                        />
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                {
                    eduArr.length === 0 ? <span className="addMoreText">+ Add education</span> : <span className="addMoreText">+ Add one more education</span>
                }
            </div>

            <div className="urls mainBox">
                <span className="title">Websites & Social Links</span>
                <span className="text">You can add links to websites you want hiring managers to see! Perhaps It will be a link to your portfolio, LinkedIn profile, or personal website.</span>

                <div className="inputBoxMain">
                    <div className="inputBox">
                        <input type="url" id="portfolio" />
                        <label htmlFor="portfolio" className="label">
                            Portfolio Website
                        </label>
                    </div>
                    <div className="inputBox">
                        <input type="url" id="linkedin" />
                        <label htmlFor="linkedin" className="label">
                            LinkedIn
                        </label>
                    </div>
                </div>

                <div className="inputBoxMain">
                    <div className="inputBox">
                        <input type="url" id="github" />
                        <label htmlFor="github" className="label">
                            Github
                        </label>
                    </div>
                    <div className="inputBox">
                        <input type="url" id="otherSocialLink" />
                        <label htmlFor="otherSocialLink" className="label">
                            Other social link
                        </label>
                    </div>
                </div>
            </div>

            <div className="skills mainBox">
                <span className="title">Skills</span>
                <span className="text">Choose 5 important skills that show you fit the position.</span>

                <span className="inputBoxMain">
                    <div className="inputBox">
                        <input type="text" id="skill" />
                        <label htmlFor="skill" className="label">
                            Skill
                        </label>
                    </div>
                    <button className="skillBtn">Add Skill</button>
                </span>
            </div>

            <div className="language mainBox">
                <span className="title">Languages</span>

                <span className="inputBoxMain">
                    <div className="inputBox">
                        <input type="text" id="language" />
                        <label htmlFor="language" className="label">
                            Language
                        </label>
                    </div>
                    <button className="skillBtn">Add Language</button>
                </span>
            </div>

            <div className="projects mainBox">
                <span className="title">Projects</span>


                {projectArr.length > 0 &&

                    projectArr.map((project, i) => (
                        <Accordion expanded={expanded === 'panel31'} onChange={handleChange('panel31')} style={{ width: '100%', boxShadow: 'none', margin: '0' }} classes={{ root: 'custom-accordion-root' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel31bh-content"
                                id="panel31bh-header"
                                classes={{
                                    root: 'custom-accordion-summary-root',
                                    expanded: expanded === 'panel31' ? 'expanded' : ''
                                }}
                            >
                                <span className={`menuTitle ${expanded === 'panel31' ? 'selected' : ''}`}>Project {i + 1}</span>
                            </AccordionSummary>
                            <AccordionDetails>

                                <div className="mainBox">
                                    <div className="inputBoxMain">
                                        <div className="inputBox">
                                            <input type="text" id="projectTitle" required />
                                            <label htmlFor="projectTitle" className="label">
                                                Project title
                                            </label>
                                        </div>

                                        <div className="inputBox">
                                            <input type="text" id="date" required />
                                            <label htmlFor="date" className="label">
                                                Start & End Date
                                            </label>
                                        </div>
                                    </div>

                                    <div className="inputBox">
                                        <label className="label">
                                            Description
                                        </label>
                                        <textarea
                                            className="textArea"
                                            rows='10'
                                        />
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                {
                    projectArr.length === 0 ? <span className="addMoreText">+ Add project</span> : <span className="addMoreText">+ Add one more project</span>
                }
            </div>
        </Box>
    );
};

export default CreateResumeLeftBox;

const Box = styled.div`
  width: 90%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem; 

  .inputBoxMain {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: end;

    .skillBtn {
        background-color: var(--lightOrange);
        border: none;
        height: 2rem;
        border-radius: 0.5rem;
        color: var(--white);
        font-weight: 500;
        cursor: pointer;
    }


    .inputBox {
      width: 45%;
      display: flex;
      flex-direction: column;
      position: relative;
      margin-top: 1rem;
    }

    input {
      width: 100%;
      height: 2rem;
      margin-top: 0.7rem;
      padding-left: 0.5rem;
      border-radius: 0.3rem;
      border: 0.05rem solid lightgrey;
      background-color: #EFF3F8;
      font-size: 1rem;
    }

    .photoInput {
        background: none;
        border: none;
        display: flex;
        align-items: center;

    }

    input:focus {
      outline-color: var(--lightOrange);
    }

    label {
      position: absolute;
      top: -0.8rem;
      left: 0rem;
      transition: color 0.3s;
      color: grey;
      font-size: 0.8rem;
      font-weight: 500;
    }

    input:focus + label {
      color: var(--lightOrange);
    }
  }

  .textArea {
    width: 100%;
    margin-top: 0.7rem;
    border-radius: 0.3rem;
    border: 0.02rem solid lightgrey;
    background-color: #EFF3F8;
    font-size: 1rem;
    padding: 0.5rem;
}

.textArea:focus {
    outline-color: var(--lightOrange);
}

.mainBox {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .title {
        font-size: 1.4rem;
        font-weight: 600;
        line-height: 1.5rem;
    }

    .text {
        font-size: 0.9rem;
        font-weight: 400;
        line-height: 1.1rem;

    }
}

.addMoreText {
    color: var(--lightOrange);
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
}

`;
