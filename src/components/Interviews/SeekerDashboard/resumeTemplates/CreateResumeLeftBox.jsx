import React from "react";
import styled from "styled-components";
import { useState } from 'react';
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import imgDummy from '../../../../assets/resume/imgDummy.png'

const CreateResumeLeftBox = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    const [expArr, setExpArr] = useState([]);
    const [eduArr, setEduArr] = useState([]);
    const [projectArr, setProjectArr] = useState([]);

    const [skillArr, setSkillArr] = useState([]);
    const [languageArr, setLanguageArr] = useState([]);

    const [profileImg, setProfileImg] = useState(imgDummy);

    const handleAddEducation = () => {
        setEduArr([...eduArr, {}])
    }

    const handleAddExperience = () => {
        setExpArr([...expArr, {}])
    }

    const handleAddProject = () => {
        setProjectArr([...projectArr, {}])
    }

    const handleAddLanguage = () => {
        setLanguageArr([...languageArr, {}])
    }

    const handleAddSkill = () => {
        setSkillArr([...skillArr, {}])
    }

    return (
        <Box>
            <div className="personalDetails mainBox">
                <span className="title">Personal Details</span>

                <div className="inputBoxMain">
                    <TextField id="outlined-basic" label="Job Title" variant="outlined" fullWidth
                        type='text'
                        size='small'
                        inputProps={{
                            sx: {
                                color: '#626264',
                                fontSize: '0.8rem',
                                fontWeight: '400'
                            },
                        }}
                        InputLabelProps={{
                            sx: {
                                color: '#626264',
                                fontSize: '0.8rem',
                                fontWeight: '400'
                            },
                        }} />

                    <div className="inputBox" style={{ width: '100%', display: 'flex', alignItems: 'start', justifyContent: 'center', marginTop: '0rem' }}>
                        <label htmlFor="photo" className="label" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
                            <img src={profileImg} style={{ width: '3rem', height: '3rem' }} />
                            <input type="file" id="photo" className="photoInput" style={{ display: 'none' }} onChange={(e) => setProfileImg(e.target.files[0])} />
                            <span style={{ fontSize: '0.8rem', color: 'var(--color)', fontWeight: '600' }}>Upload Photo</span>
                        </label>
                    </div>
                </div>

                <div className="inputBoxMain">

                    <TextField id="outlined-basic" label="First Name" variant="outlined" fullWidth
                        type='text'
                        size='small'
                        inputProps={{
                            sx: {
                                color: '#626264',
                                fontSize: '0.8rem',
                                fontWeight: '400'
                            },
                        }}
                        InputLabelProps={{
                            sx: {
                                color: '#626264',
                                fontSize: '0.8rem',
                                fontWeight: '400'
                            },
                        }} />

                    <TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth
                        type='text'
                        size='small'
                        inputProps={{
                            sx: {
                                color: '#626264',
                                fontSize: '0.8rem',
                                fontWeight: '400'
                            },
                        }}
                        InputLabelProps={{
                            sx: {
                                color: '#626264',
                                fontSize: '0.8rem',
                                fontWeight: '400'
                            },
                        }} />
                </div>

                <div className="inputBoxMain">
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth
                        type='email'
                        size='small'
                        inputProps={{
                            sx: {
                                color: '#626264',
                                fontSize: '0.8rem',
                                fontWeight: '400'
                            },
                        }}
                        InputLabelProps={{
                            sx: {
                                color: '#626264',
                                fontSize: '0.8rem',
                                fontWeight: '400'
                            },
                        }} />

                    <TextField id="outlined-basic" label="Phone" variant="outlined" fullWidth
                        type='tel'
                        size='small'
                        inputProps={{
                            sx: {
                                color: '#626264',
                                fontSize: '0.8rem',
                                fontWeight: '400'
                            },
                        }}
                        InputLabelProps={{
                            sx: {
                                color: '#626264',
                                fontSize: '0.8rem',
                                fontWeight: '400'
                            },
                        }} />
                </div>

                <div className="inputBoxMain">

                    <TextField id="outlined-basic" label="Country" variant="outlined" fullWidth
                        type='text'
                        size='small'
                        inputProps={{
                            sx: {
                                color: '#626264',
                                fontSize: '0.8rem',
                                fontWeight: '400'
                            },
                        }}
                        InputLabelProps={{
                            sx: {
                                color: '#626264',
                                fontSize: '0.8rem',
                                fontWeight: '400'
                            },
                        }} />


                    <TextField id="outlined-basic" label="City" variant="outlined" fullWidth
                        type='text'
                        size='small'
                        inputProps={{
                            sx: {
                                color: '#626264',
                                fontSize: '0.8rem',
                                fontWeight: '400'
                            },
                        }}
                        InputLabelProps={{
                            sx: {
                                color: '#626264',
                                fontSize: '0.8rem',
                                fontWeight: '400'
                            },
                        }} />
                </div>

                <div className="inputBoxMain">
                    <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth
                        type='text'
                        size='small'
                        inputProps={{
                            sx: {
                                color: '#626264',
                                fontSize: '0.8rem',
                                fontWeight: '400'
                            },
                        }}
                        InputLabelProps={{
                            sx: {
                                color: '#626264',
                                fontSize: '0.8rem',
                                fontWeight: '400'
                            },
                        }} />

                    <TextField id="outlined-basic" label="Nationality" variant="outlined" fullWidth
                        type='text'
                        size='small'
                        inputProps={{
                            sx: {
                                color: '#626264',
                                fontSize: '0.8rem',
                                fontWeight: '400'
                            },
                        }}
                        InputLabelProps={{
                            sx: {
                                color: '#626264',
                                fontSize: '0.8rem',
                                fontWeight: '400'
                            },
                        }} />
                </div>
            </div>

            <div className="profileSummary mainBox">
                <span className="title">Professional Summary</span>
                <span className="text">Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills.</span>

                <div className="textEditorBox">
                    <ReactQuill theme="snow" className="textEditor" />
                </div>

                <span className="text">Recruiter tip: write 50-200 characters to increase interview chances 176 / 200</span>
            </div>

            <div className="employmentHistory mainBox">
                <span className="title">Employment History</span>
                <span className="text">Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).</span>

                {expArr.length > 0 &&

                    expArr.map((exp, i) => (
                        <Accordion expanded={expanded === `panel1${i}`} onChange={handleChange(`panel1${i}`)} style={{ width: '100%', boxShadow: 'none', margin: '0' }} classes={{ root: 'custom-accordion-root' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                classes={{
                                    root: 'custom-accordion-summary-root',
                                    expanded: expanded === `panel1${i}` ? 'expanded' : ''
                                }}
                            >
                                <span className={`menuTitle ${expanded === `panel1${i}` ? 'selected' : ''}`}>Experience {i + 1}</span>
                            </AccordionSummary>
                            <AccordionDetails>

                                <div className="mainBox">
                                    <div className="inputBoxMain">
                                        <TextField id="outlined-basic" label="Job Title" variant="outlined" fullWidth
                                            type='text'
                                            size='small'
                                            inputProps={{
                                                sx: {
                                                    color: '#626264',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '400'
                                                },
                                            }}
                                            InputLabelProps={{
                                                sx: {
                                                    color: '#626264',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '400'
                                                },
                                            }} />

                                        <TextField id="outlined-basic" label="Company Name" variant="outlined" fullWidth
                                            type='text'
                                            size='small'
                                            inputProps={{
                                                sx: {
                                                    color: '#626264',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '400'
                                                },
                                            }}
                                            InputLabelProps={{
                                                sx: {
                                                    color: '#626264',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '400'
                                                },
                                            }} />
                                    </div>

                                    <div className="inputBoxMain">

                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DatePicker']} sx={{ width: '100%' }}>
                                                <DatePicker label="Start Date" sx={{ backgroundColor: '#fbfbfd', width: '100%' }} />
                                            </DemoContainer>
                                        </LocalizationProvider>


                                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                                            <DemoContainer components={['DatePicker']} sx={{ width: '100%' }}>
                                                <DatePicker label="End Date" sx={{ backgroundColor: '#fbfbfd', width: '100%' }} />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>

                                    <div className="inputMainBox">
                                        <TextField id="outlined-basic" label="City" variant="outlined" fullWidth
                                            type='text'
                                            size='small'
                                            inputProps={{
                                                sx: {
                                                    color: '#626264',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '400'
                                                },
                                            }}
                                            InputLabelProps={{
                                                sx: {
                                                    color: '#626264',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '400'
                                                },
                                            }} />
                                    </div>

                                    <div className="textAreaBox">
                                        <label className="textAreaLabel">
                                            Description
                                        </label>
                                        <div className="textEditorBox">
                                            <ReactQuill theme="snow" className="textEditor" />
                                        </div>


                                        <span className="text">Recruiter tip: write 200+ characters to increase interview chances.</span>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                {
                    expArr.length === 0 ? <span className="addMoreText" onClick={handleAddExperience}>+ Add employment</span> : <span className="addMoreText" onClick={handleAddExperience}>+ Add one more employment</span>
                }
            </div>

            <div className="education mainBox">
                <span className="title">Education</span>
                <span className="text">A varied education on your resume sums up the value that your learnings and background will bring to job.</span>

                {eduArr.length > 0 &&
                    eduArr.map((edu, i) => (
                        <Accordion expanded={expanded === `panel2${i}`} onChange={handleChange(`panel2${i}`)} style={{ width: '100%', boxShadow: 'none', margin: '0' }} classes={{ root: 'custom-accordion-root' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                                classes={{
                                    root: 'custom-accordion-summary-root',
                                    expanded: expanded === `panel2${i}` ? 'expanded' : ''
                                }}
                            >
                                <span className={`menuTitle ${expanded === `panel2${i}` ? 'selected' : ''}`}>Education {i + 1}</span>
                            </AccordionSummary>
                            <AccordionDetails>

                                <div className="mainBox">
                                    <div className="inputBoxMain">
                                        <TextField id="outlined-basic" label="School" variant="outlined" fullWidth
                                            type='text'
                                            size='small'
                                            inputProps={{
                                                sx: {
                                                    color: '#626264',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '400'
                                                },
                                            }}
                                            InputLabelProps={{
                                                sx: {
                                                    color: '#626264',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '400'
                                                },
                                            }} />

                                        <TextField id="outlined-basic" label="Degree" variant="outlined" fullWidth
                                            type='text'
                                            size='small'
                                            inputProps={{
                                                sx: {
                                                    color: '#626264',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '400'
                                                },
                                            }}
                                            InputLabelProps={{
                                                sx: {
                                                    color: '#626264',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '400'
                                                },
                                            }} />
                                    </div>

                                    <div className="inputBoxMain">

                                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                                            <DemoContainer components={['DatePicker']} sx={{ width: '100%' }}>
                                                <DatePicker label="Start Date" sx={{ backgroundColor: '#fbfbfd', width: '100%' }} />
                                            </DemoContainer>
                                        </LocalizationProvider>


                                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                                            <DemoContainer components={['DatePicker']} sx={{ width: '100%' }}>
                                                <DatePicker label="End Date" sx={{ backgroundColor: '#fbfbfd', width: '100%' }} />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>

                                    <div className="inputMainBox">
                                        <TextField id="outlined-basic" label="City" variant="outlined" fullWidth
                                            type='text'
                                            size='small'
                                            inputProps={{
                                                sx: {
                                                    color: '#626264',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '400'
                                                },
                                            }}
                                            InputLabelProps={{
                                                sx: {
                                                    color: '#626264',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '400'
                                                },
                                            }} />
                                    </div>


                                    <div className="textAreaBox">
                                        <label className="textAreaLabel">
                                            Description
                                        </label>
                                        <div className="textEditorBox">
                                            <ReactQuill theme="snow" className="textEditor" />
                                        </div>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                {
                    eduArr.length === 0 ? <span className="addMoreText" onClick={handleAddEducation}>+ Add education</span> : <span className="addMoreText" onClick={handleAddEducation}>+ Add one more education</span>
                }
            </div>

            <div className="urls mainBox">
                <span className="title">Websites & Social Links</span>
                <span className="text">You can add links to websites you want hiring managers to see! Perhaps It will be a link to your portfolio, LinkedIn profile, or personal website.</span>

                <div className="inputBoxMain">

                    <TextField id="outlined-basic" label="Portfolio Website" variant="outlined" fullWidth
                        type='url'
                        size='small'
                        inputProps={{
                            sx: {
                                color: '#626264',
                                fontSize: '0.8rem',
                                fontWeight: '400'
                            },
                        }}
                        InputLabelProps={{
                            sx: {
                                color: '#626264',
                                fontSize: '0.8rem',
                                fontWeight: '400'
                            },
                        }} />


                    <TextField id="outlined-basic" label="LinkedIn" variant="outlined" fullWidth
                        type='url'
                        size='small'
                        inputProps={{
                            sx: {
                                color: '#626264',
                                fontSize: '0.8rem',
                                fontWeight: '400'
                            },
                        }}
                        InputLabelProps={{
                            sx: {
                                color: '#626264',
                                fontSize: '0.8rem',
                                fontWeight: '400'
                            },
                        }} />
                </div>

                <div className="inputBoxMain">

                    <TextField id="outlined-basic" label="Github" variant="outlined" fullWidth
                        type='url'
                        size='small'
                        inputProps={{
                            sx: {
                                color: '#626264',
                                fontSize: '0.8rem',
                                fontWeight: '400'
                            },
                        }}
                        InputLabelProps={{
                            sx: {
                                color: '#626264',
                                fontSize: '0.8rem',
                                fontWeight: '400'
                            },
                        }} />

                    <TextField id="outlined-basic" label="Other social link" variant="outlined" fullWidth
                        type='url'
                        size='small'
                        inputProps={{
                            sx: {
                                color: '#626264',
                                fontSize: '0.8rem',
                                fontWeight: '400'
                            },
                        }}
                        InputLabelProps={{
                            sx: {
                                color: '#626264',
                                fontSize: '0.8rem',
                                fontWeight: '400'
                            },
                        }} />
                </div>
            </div>

            <div className="skills mainBox">
                <span className="title">Skills</span>
                <span className="skillText">Choose 5 important skills that show you fit the position. <span className="addSkillBtn" onClick={handleAddSkill}>Add Skill</span></span>

                {
                    skillArr.length > 0 &&

                    skillArr.map((skill, i) => (
                        <Accordion expanded={expanded === `panel4${i}`} onChange={handleChange(`panel4${i}`)} style={{ width: '100%', boxShadow: 'none', margin: '0' }} classes={{ root: 'custom-accordion-root' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                                classes={{
                                    root: 'custom-accordion-summary-root',
                                    expanded: expanded === `panel4${i}` ? 'expanded' : ''
                                }}
                            >
                                <span className={`menuTitle ${expanded === `panel4${i}` ? 'selected' : ''}`}>Skill {i + 1}</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <span className="inputBoxMain">
                                    <TextField id="outlined-basic" label="Skill" variant="outlined" fullWidth
                                        type='text'
                                        size='small'
                                        inputProps={{
                                            sx: {
                                                color: '#626264',
                                                fontSize: '0.8rem',
                                                fontWeight: '400'
                                            },
                                        }}
                                        InputLabelProps={{
                                            sx: {
                                                color: '#626264',
                                                fontSize: '0.8rem',
                                                fontWeight: '400'
                                            },
                                        }} />

                                    <FormControl sx={{ backgroundColor: '#fbfbfd', padding: '0' }} fullWidth>
                                        <InputLabel id="demo-simple-select-label">Level</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Level"
                                            size='small'
                                            inputProps={{
                                                sx: {
                                                    color: '#626264',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '400'
                                                },
                                            }}
                                            InputLabelProps={{
                                                sx: {
                                                    color: '#626264',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '400'
                                                },
                                            }}
                                            sx={{
                                                padding: '0rem 0 0.3rem 0',
                                            }}
                                        >
                                            <MenuItem value="Novice">Novice</MenuItem>
                                            <MenuItem value="Beginner">Beginner</MenuItem>
                                            <MenuItem value="Skillful">Skillful</MenuItem>
                                            <MenuItem value="Experienced">Experienced</MenuItem>
                                            <MenuItem value="Expert">Expert</MenuItem>
                                        </Select>
                                    </FormControl>

                                </span>
                            </AccordionDetails>
                        </Accordion>
                    ))
                }
            </div>

            <div className="language mainBox">
                <span className="title">Languages</span>
                <span className="skillText"><span>Choose Languages in which you're good.</span><span className="addSkillBtn" onClick={handleAddLanguage}>Add Language</span></span>

                {
                    languageArr.length > 0 &&

                    languageArr.map((language, i) => (
                        <Accordion expanded={expanded === `panel5${i}`} onChange={handleChange(`panel5${i}`)} style={{ width: '100%', boxShadow: 'none', margin: '0' }} classes={{ root: 'custom-accordion-root' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel5bh-content"
                                id="panel5bh-header"
                                classes={{
                                    root: 'custom-accordion-summary-root',
                                    expanded: expanded === `panel5${i}` ? 'expanded' : ''
                                }}
                            >
                                <span className={`menuTitle ${expanded === `panel5${i}` ? 'selected' : ''}`}>Language {i + 1}</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <span className="inputBoxMain">
                                    <TextField id="outlined-basic" label="Language" variant="outlined" fullWidth
                                        type='text'
                                        size='small'
                                        inputProps={{
                                            sx: {
                                                color: '#626264',
                                                fontSize: '0.8rem',
                                                fontWeight: '400'
                                            },
                                        }}
                                        InputLabelProps={{
                                            sx: {
                                                color: '#626264',
                                                fontSize: '0.8rem',
                                                fontWeight: '400'
                                            },
                                        }} />

                                    <FormControl sx={{ backgroundColor: '#fbfbfd', padding: '0' }} fullWidth>
                                        <InputLabel id="demo-simple-select-label">Level</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Level"
                                            size='small'
                                            inputProps={{
                                                sx: {
                                                    color: '#626264',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '400'
                                                },
                                            }}
                                            InputLabelProps={{
                                                sx: {
                                                    color: '#626264',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '400'
                                                },
                                            }}
                                            sx={{
                                                padding: '0rem 0 0.3rem 0',
                                            }}
                                        >
                                            <MenuItem value="Native">Native</MenuItem>
                                            <MenuItem value="Proficient">Proficient</MenuItem>
                                            <MenuItem value="VeryGoodCommand">Very good command</MenuItem>
                                        </Select>
                                    </FormControl>
                                </span>
                            </AccordionDetails>
                        </Accordion>
                    ))
                }
            </div>

            <div className="projects mainBox">
                <span className="title">Projects</span>


                {projectArr.length > 0 &&

                    projectArr.map((project, i) => (
                        <Accordion expanded={expanded === `panel3${i}`} onChange={handleChange(`panel3${i}`)} style={{ width: '100%', boxShadow: 'none', margin: '0' }} classes={{ root: 'custom-accordion-root' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                                classes={{
                                    root: 'custom-accordion-summary-root',
                                    expanded: expanded === `panel3${i}` ? 'expanded' : ''
                                }}
                            >
                                <span className={`menuTitle ${expanded === `panel3${i}` ? 'selected' : ''}`}>Project {i + 1}</span>
                            </AccordionSummary>
                            <AccordionDetails>

                                <div className="mainBox">
                                    <TextField id="outlined-basic" label="Project Title" variant="outlined"
                                        type='text'
                                        size='small'
                                        inputProps={{
                                            sx: {
                                                color: '#626264',
                                                fontSize: '0.8rem',
                                                fontWeight: '400'
                                            },
                                        }}
                                        InputLabelProps={{
                                            sx: {
                                                color: '#626264',
                                                fontSize: '0.8rem',
                                                fontWeight: '400'
                                            },
                                        }} />
                                    <div className="inputBoxMain">

                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DatePicker']} sx={{ width: '100%' }}>
                                                <DatePicker label="Start Date" sx={{ backgroundColor: '#fbfbfd', width: '100%' }} />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DatePicker']} sx={{ width: '100%' }}>
                                                <DatePicker label="End Date" sx={{ backgroundColor: '#fbfbfd', width: '100%' }} />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>

                                    <div className="textAreaBox">
                                        <label className="textAreaLabel">
                                            Description
                                        </label>
                                        <div className="textEditorBox">
                                            <ReactQuill theme="snow" className="textEditor" />
                                        </div>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                {
                    projectArr.length === 0 ? <span className="addMoreText" onClick={handleAddProject}>+ Add project</span> : <span className="addMoreText" onClick={handleAddProject}>+ Add one more project</span>
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
  box-sizing: border-box;

  #outlined-basic {
    padding: 0.8rem 0.8rem;
    background-color: #fbfbfd;
  }

  .inputBoxMain {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;



    .inputBox {
      width: 45%;
      display: flex;
      flex-direction: column;
      position: relative;
      margin-top: 1rem;
    }

    .photoInput {
        display: flex;
        align-items: center;
    }
  }

  .textAreaBox {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .textAreaLabel {
        font-size: 0.8rem;
    }
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
        font-size: 0.8rem;
        font-weight: 400;
        color: grey;
        line-height: 1rem;

    }
}

.addMoreText {
    color: var(--lightOrange);
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
}


.skillText {
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 0.8rem;
    font-weight: 400;
    color: grey;
    line-height: 1rem;
}

.addSkillBtn {
        color: var(--lightOrange);
        font-size: 0.8rem;
        font-weight: 500;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: end;
}

.addSkillBtn:hover {
    font-weight: 600;
    text-decoration: underline;
}

.textEditor {
    background-color: #fbfbfd;
}

#demo-simple-select-label {
    font-size: 0.8rem;
  }
`;
