import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { technicalSkills } from '../../../utils/contantData';
import Loader from "../../commonComponents/Loader";
import { toast } from "react-toastify";
import Header from "../../../components/Interviews/CreateInterview/Header"
import { createInterview } from "../../../functions/api/interview/createInterview";
import Footer from "../../commonComponents/Footer";
const ParameterSelector = () => {

    const [productType, setProductType] = useState("");
    const [interviewType, setInterviewType] = useState('');
    const [difficultyLevel, setDifficultyLevel] = useState('');
    const [numberOfQue, setNumberOfQue] = useState(0);
    const [interviewerEmail, setInterviewerEmail] = useState('');
    const [meetUrl, setMeetUrl] = useState('');
    const [testType, setTestType] = useState("");
    const [jobSummary, setJobSummary] = useState("");
    const [resumeText, setResumeText] = useState("");
    const [selectedSkills, setSelectedSkills] = useState([]);
   const [isLoading,setIsLoading] = useState(false);
   const [loaderMessage,setLoaderMessage] = useState("");
    const [successPopup, setSuccessPopup] = useState(false);
    const [errorPopup, setErrorPopup] = useState(null);
    const accessToken = useSelector(state => state?.auth?.userData?.accessToken);
    const clientCode = useSelector(state => state?.auth?.userData?.user?.clientCode);
    const navigate = useNavigate();


    useEffect(() => {
        if (!accessToken || !clientCode) {
            toast.error("Login First");
            navigate("/login");
        }
    }, []);


    useEffect(() => {
       setJobSummary("");
       setResumeText("");
       setSelectedSkills([]);
    },[productType])

    const handleSkillsChange = (_, newSkills) => {
        setSelectedSkills(newSkills);
    };


    const handleProductTypeChange = (inp) => {
        setProductType(inp);
    };

    const handleTestTypeChange = (inp) => {
        setTestType(inp);
        setNumberOfQue(0);
    };

    const handleInterviewTypeChange = (inp) => {
        setInterviewType(inp);
    }



    const handlePrev = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    }

    const handleNext = () => {
        if (step < 3) {
            setStep(step + 1);
        }
    }

    const handleSuccessFunc = () => {
        setSuccessPopup(false);
        navigate("/schedule/invite/success");
    }

    const handleErrorRetry = () => {
        setErrorPopup({ status: false, msg: "" });
        setStep(1);
        // navigate(`/schedule/invite/${array[array.length - 1]}`);
    }

    const handleIncreaseNumber = () => {
        if (numberOfQue < 5 && testType === 'coding') {
            setNumberOfQue(prevNum => prevNum + 1);
        } else if (numberOfQue < 30 && testType !== 'coding') {
            setNumberOfQue(prevNum => prevNum + 1);
        }
    }

    const handleDecreaseNumber = () => {
        if (numberOfQue > 0) {
            setNumberOfQue(prevNum => prevNum - 1);
        }
    }

    const handleCreateInterview = async (e) => {
        e.preventDefault();
        setLoaderMessage("Creating Interview... please wait");
        setIsLoading(true);
        if (productType == 'Skill') {
            if (selectedSkills.length == 0) {
                toast.error("Select atleast one skill")
                setIsLoading(false);
                setLoaderMessage("");
                return;
            }
            if (resumeText.trim().length == 0) {
                toast.error("Experience Field is empty")
                setIsLoading(false);
                setLoaderMessage("");
            }
        }
        else if (productType == 'Profile') {
            if (
                jobSummary.length < 30 &&
                resumeText.length < 30
            ) {
                toast.error("Too short inputs, it should be minimum 30 chars.");
                setIsLoading(false);
                setLoaderMessage("");
                return;
            }
           
        }
        else {
            toast.error("Please Select Product Type")
            setIsLoading(false);
            setLoaderMessage("");
        }

            const payload = {
                difficultyLevel: difficultyLevel,
                testType: testType,
                jobSummary: productType == 'Skill' ? selectedSkills.join(', ').trim() : jobSummary,
                resumeText: productType == 'Skill' ? `Experience ${resumeText.trim()}` : resumeText,
                noOfQuestions: numberOfQue,
            };
            const ongoing = await createInterview(payload, accessToken)

            if (ongoing?.data?.id) {
                localStorage.setItem("currentInterview", "skill");
                navigate(`/create-interview/${ongoing?.data?.id}`)
            }
        }

        return <MainContainer>
            <Header/>
                {isLoading ? (
                    <Loader message={loaderMessage} />
                ) : (
                    <Container>
                        <p className="maintitle">Create Your Mock</p>
                        <div className="mainBox">
                            <div className="step2Box">
                                <div className="inputBox">
                                    <span className="title">Product Type</span>
                                    <div className="childInputBox">
                                        <label className="label">
                                            <input
                                                type="radio"
                                                value="Profile"
                                                checked={productType === 'Profile'}
                                                onChange={() => handleProductTypeChange('Profile')}
                                            />
                                            <span>Profile (JD + Resume)</span>
                                        </label>
                                        <label className="label">
                                            <input
                                                type="radio"
                                                value="Skill"
                                                checked={productType === 'Skill'}
                                                onChange={() => handleProductTypeChange('Skill')}
                                            />
                                            <span>Skill</span>
                                        </label>
                                    </div>
                                </div>

                                {productType === 'Profile' &&
                                    <div className="textBox">
                                        <TextField id="outlined-basic" label="JD" variant="outlined" fullWidth
                                            type='text'
                                            value={jobSummary}
                                            onChange={(e) => setJobSummary(e.target.value)}
                                            inputProps={{
                                                sx: {
                                                    color: '#626264',
                                                    fontSize: '0.9rem',
                                                    fontWeight: '400',
                                                    height: '5rem'
                                                },
                                            }}
                                            InputLabelProps={{
                                                sx: {
                                                    color: '#626264',
                                                    fontSize: '0.9rem',
                                                    fontWeight: '400'

                                                },
                                            }}
                                        />
                                        <TextField id="outlined-basic" label="Resume Text" variant="outlined" fullWidth
                                            type='url'
                                            value={resumeText}
                                            onChange={(e) => setResumeText(e.target.value)}
                                            inputProps={{
                                                sx: {
                                                    color: '#626264',
                                                    fontSize: '0.9rem',
                                                    fontWeight: '400',
                                                    height: '5rem'

                                                },
                                            }}
                                            InputLabelProps={{
                                                sx: {
                                                    color: '#626264',
                                                    fontSize: '0.9rem',
                                                    fontWeight: '400'

                                                },
                                            }}
                                        />
                                    </div>
                                }

                                {productType === 'Skill' &&
                                    <div className="textBox">
                                        <Stack spacing={3} sx={{ width: '100%' }}>
                                            <Autocomplete
                                                multiple
                                                id="tags-standard"
                                                options={technicalSkills}
                                                getOptionLabel={(option) => option}
                                                onChange={handleSkillsChange}
                                                value={selectedSkills}
                                                freeSolo
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        label="Skills"
                                                    />
                                                )}
                                            />
                                        </Stack>
                                        <TextField id="outlined-basic" label="Experience" variant="outlined" fullWidth
                                            type='url'
                                            value={resumeText}
                                            onChange={(e) => setResumeText(e.target.value)}
                                            inputProps={{
                                                sx: {
                                                    color: '#626264',
                                                    fontSize: '0.9rem',
                                                    fontWeight: '400'
                                                },
                                            }}
                                            InputLabelProps={{
                                                sx: {
                                                    color: '#626264',
                                                    fontSize: '0.9rem',
                                                    fontWeight: '400'
                                                },
                                            }}
                                        />
                                    </div>
                                }


                                <div className="inputBox">
                                    <span className="title">Interview Type</span>
                                    <div className="childInputBox">
                                        <label className="label">
                                            <input
                                                type="radio"
                                                value="mcq"
                                                checked={testType === 'mcq'}
                                                onChange={() => handleTestTypeChange('mcq')}
                                            />
                                            <span>MCQs</span>
                                        </label>
                                        <label className="label">
                                            <input
                                                type="radio"
                                                value="general"
                                                checked={testType === 'general'}
                                                onChange={() => handleTestTypeChange('general')}
                                            />
                                            <span>Subjective</span>
                                        </label>
                                        <label className="label">
                                            <input
                                                type="radio"
                                                value="coding"
                                                checked={testType === 'coding'}
                                                onChange={() => handleTestTypeChange('coding')}
                                            />
                                            <span>Coding</span>
                                        </label>
                                        <label className="label">
                                            <input
                                                type="radio"
                                                value="general"
                                                checked={testType === 'general'}
                                                onChange={() => handleTestTypeChange('general')}
                                            />
                                            <span>General (Includes all types of Que)</span>
                                        </label>
                                        <label className="label">
                                            <input
                                                type="radio"
                                                value="InPerson"
                                                checked={testType === 'InPerson'}
                                                onChange={() => handleTestTypeChange('InPerson')}
                                            />
                                            <span>In Person</span>
                                        </label>
                                    </div>
                                </div>

                                {testType === 'InPerson' &&
                                    <div className="textBox">
                                        <TextField id="outlined-basic" label="Interviewer Email" variant="outlined" fullWidth
                                            type='email'
                                            value={interviewerEmail}
                                            onChange={(e) => setInterviewerEmail(e.target.value)}
                                            inputProps={{
                                                sx: {
                                                    color: '#626264',
                                                    fontSize: '0.9rem',
                                                    fontWeight: '400'
                                                },
                                            }}
                                            InputLabelProps={{
                                                sx: {
                                                    color: '#626264',
                                                    fontSize: '0.9rem',
                                                    fontWeight: '400'
                                                },
                                            }}
                                        />
                                        <TextField id="outlined-basic" label="Meet Link (Optional)" variant="outlined" fullWidth
                                            type='url'
                                            value={meetUrl}
                                            onChange={(e) => setMeetUrl(e.target.value)}
                                            inputProps={{
                                                sx: {
                                                    color: '#626264',
                                                    fontSize: '0.9rem',
                                                    fontWeight: '400'
                                                },
                                            }}
                                            InputLabelProps={{
                                                sx: {
                                                    color: '#626264',
                                                    fontSize: '0.9rem',
                                                    fontWeight: '400'
                                                },
                                            }}
                                        />
                                    </div>
                                }

                                <div className="textBox">
                                    <div className="inputBox">
                                        <span className="title">Difficulty Level</span>
                                        <div className="childInputBox">
                                            <label className="label">
                                                <input
                                                    type="radio"
                                                    value="easy"
                                                    checked={difficultyLevel === 'easy'}
                                                    onChange={() => setDifficultyLevel('easy')}
                                                />
                                                <span>Easy</span>
                                            </label>
                                            <label className="label">
                                                <input
                                                    type="radio"
                                                    value="moderate"
                                                    checked={difficultyLevel === 'moderate'}
                                                    onChange={() => setDifficultyLevel('moderate')}
                                                />
                                                <span>Moderate</span>
                                            </label>
                                            <label className="label">
                                                <input
                                                    type="radio"
                                                    value="difficult"
                                                    checked={difficultyLevel === 'difficult'}
                                                    onChange={() => setDifficultyLevel('difficult')}
                                                />
                                                <span>Difficult</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="numberMainBox">
                                        <label className="label">Number of Questions</label>
                                        <div className="numberBox">

                                            <button className="numberBtn btn1" onClick={handleDecreaseNumber}>-</button>
                                            <input className="numberInput" type="number" value={numberOfQue} onChange={(e) => setNumberOfQue(e.target.value)} max={testType === 'coding' ? 5 : 30} />
                                            <button className="numberBtn btn2" onClick={handleIncreaseNumber}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>)}
                    <button onClick={handleCreateInterview} className='btn'>Start Interview</button>
                    <Footer/>
            </MainContainer>
        
    }


export default ParameterSelector;

const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
.btn{
    background-color: var(--backgroundColor);
      color: var(--color);
      padding: 0.7rem 1rem;
      border: 0.1rem solid var(--lightOrange);
      border-radius: 0.4rem;
      font-size: 0.9rem;
      font-weight: 600;
      cursor: pointer;
      font-family: var(--font);
      align-self: center;
      margin-bottom: 2rem;
  }

`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 3rem 2rem 3rem;
  align-items: center;
  width: 100%;
  // height: calc(100vh - 8rem);
  justify-content: space;

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.maintitle{
    font-size: 2rem;
    margin: 1rem auto ;
}

.numberMainBox {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: -0.75rem;

  .label {
    font-size: 0.9rem;
    font-weight: 500;
  }
}


  .numberBox {
    width: 40%;
    height: 3rem;
    display: flex;

    .numberBtn {
      height: 100%;
      width: 3.5rem;
      border: none;
      background-color: var(--lightOrange);
      color: var(--white);
      font-size: 1.4rem;
      cursor: pointer;
    }

    .btn1 {
      border-top-left-radius: 0.4rem;
      border-bottom-left-radius: 0.4rem;
      font-family: var(--font);
    }

    .btn2 {
      border-top-right-radius: 0.4rem;
      border-bottom-right-radius: 0.4rem;
      font-family: var(--font);
    }

    .numberInput {
      height: 100%;
      width: 6rem;
      padding: 0 2.3rem;
      box-sizing: border-box;
      font-size: 0.9rem;
      font-weight: 500;
      border: none;
      outline: none;
      background-color: #F0F0F0;
      font-family: var(--font);
    }

  }

  .prev {
    background-color: var(--lightOrange);
    padding: 0.1rem;
    position: fixed;
    top: 5rem;
    left: 1.5rem;
    color: var(--white);
    font-family: var(--font);
  }

  .prev:hover {
    color: var(--color);
  }

  .btn {
    padding: 0.5rem 1rem;
    margin-top: 0rem;
    background-color: var(--lightOrange);
    border: none;
    color: var(--white);
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 0.5rem;
    cursor: pointer;
    font-family: var(--font);
  }

  .smallTextBox {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: start;
    padding-left: 2rem;
  }

  .textBox {
    display: flex;
    align-items: start;
    width: 100%;
    gap: 2rem;

  }
  
  .smallText {
    font-size: 0.8rem;
  }

  .mainBox {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;
    align-items: center;
    width: 100%;


    .step2Box {
      width: 80%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      padding: 0rem 1rem;
      margin-top: 4rem;
      margin-bottom: 1rem;
      box-sizing: border-box;

      .inputBox {
        width: 100%;
        display: flex;
        gap: 0.5rem;
        border: 0.08rem solid #C4C4C4;
        padding: 1rem 1rem;
        border-radius: 0.3rem;
        position: relative;
        box-sizing: border-box;
      }

      .childInputBox {
        display: flex !important; 
        flex-direction: row;
        gap: 5rem;
      }

      .title {
        font-size: 0.9rem;
        font-weight: 600;
        position: absolute;
        top: -0.8rem;
        background-color: var(--white);
        padding: 0 0.3rem;
      }
    }
    
  }
  
.label {
	display: flex;
	cursor: pointer;
	font-weight: 500;
	position: relative;
	margin-bottom: 0rem;

	input {
		position: absolute;
		left: -9999px;
		&:checked + span {
			background-color: #f0f0f6;
			&:before {
				box-shadow: inset 0 0 0 0.3rem var(--lightOrange);
			}
		}
	}
	span {
		display: flex;
		align-items: center;
    font-size: 0.9rem;
		padding: 0.3rem 0.75rem 0.3rem 0.3rem;
		border-radius: 99rem; // or something higher...
		transition: 0.25s ease;
		&:hover {
			background-color: mix(#fff, var(--lightOrange), 84%);
		}
		&:before {
			display: flex;
			flex-shrink: 0;
			content: "";
			background-color: #fff;
			width: 1rem;
			height: 1rem;
			border-radius: 50%;
			margin-right: 0.375em;
			transition: 0.25s ease;
			box-shadow: inset 0 0 0 0.125em var(--lightOrange);
		}
	}
}
`;



const ButtonBox = styled.div`
display: flex;
margin: 2rem 0;
gap: 2rem;


`


const Button = styled.button`
background-color: var(--lightOrange);
color: var(--white);
border: none;
padding: 0.4rem 0.9rem;
font-size: 0.9rem;
font-weight: 600;
border-radius: 0.5rem;
cursor: pointer;
font-family: var(--font);
`