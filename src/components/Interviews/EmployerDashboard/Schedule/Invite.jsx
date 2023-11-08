import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { getProductTypes } from "../../../../functions/api/employers/getProductTypes";
import { getTestTypes } from "../../../../functions/api/employers/getTestTypes";
import styled from "styled-components";
import axios from "axios";
import { sendInvite } from "../../../../functions/api/employers/match/sendInvite";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import moment from "moment-timezone";
import LogoHeader from "../../../commonComponents/LogoHeader";
import TimeSlotPicker from "./TimeSlotPicker";
import InviteSteps from "./InviteSteps";
import InviteReviewList from "./InviteReviewList";


const timezonesName = {
  'GMT': 'Greenwich Mean Time',
  'CET': 'Central European Time',
  'EET': 'Eastern European Time',
  'MSK': 'Moscow Standard Time',
  'PKT': 'Pakistan Standard Time',
  'IST': 'Indian Standard Time',
  'ICT': 'Indochina Time',
  'SGT': 'Singapore Time',
  'JST': 'Japan Standard Time',
  'AEST': 'Australian Eastern Standard Time',
  'VLAT': 'Vladivostok Time',
  'NZST': 'New Zealand Standard Time',
  'NUT': 'Niue Time',
  'SST': 'Samoa Standard Time',
  'ChST': 'Chamorro Standard Time',
  'HST': 'Hawaii Standard Time',
  'AKST': 'Alaska Standard Time',
  'PST': 'Pacific Standard Time',
  'MST': 'Mountain Standard Time',
  'CST': 'Central Standard Time',
  'EST': 'Eastern Standard Time',
  'AST': 'Atlantic Standard Time',
  'NST': 'Newfoundland Standard Time',
  'WGT': 'West Greenland Time'
};


export default function Invite() {
  const { jdId } = useParams();
  const [value, setValue] = useState(dayjs(new Date()));
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('00:00');
  const [productTypes, setProductTypes] = useState([]);
  const [testTypes, setTestTypes] = useState([]);
  const [productType, setProductType] = useState("");
  const [interviewType, setInterviewType] = useState('');
  const [testType, setTestType] = useState("");
  const accessToken = useSelector((state) => state.auth.userData.accessToken);
  const clientCode = useSelector(
    (state) => state.auth.userData.user.clientCode
  );
  const navigate = useNavigate();
  const [isTime, setIsTime] = useState(false);

  const [step, setStep] = useState(1);

  const handleCheckboxChange = () => {
    setIsTime(!isTime);
  };

  let array = localStorage.getItem("schedule");
  if (array) {
    array = JSON.parse(array);
  }
  useEffect(() => {
    if (!accessToken || !clientCode) {
      toast.error("Login First");
      navigate("/login");
    }
    // const getTypes = async () => {
    //   const response1 = await getProductTypes(accessToken, clientCode);
    //   if (response1.code == 2000) {
    //     setProductTypes(response1.data.value.split(','));
    //   }
    //   const response2 = await getTestTypes(accessToken, clientCode);
    //   if (response2.code == 2000) {
    //     setTestTypes(response2.data.value.split(','));
    //   }
    // }
    // getTypes();
    setProductTypes(["JD", "Resume", "JD + Resume", "Skill"]);
    setTestTypes(["MCQs", "Subjective", "Coding"]);
  }, []);

  const handleProductTypeChange = (inp) => {
    setProductType(inp);
  };

  const handleTestTypeChange = (inp) => {
    setTestType(inp);
  };

  const handleInterviewTypeChange = (inp) => {
    setInterviewType(inp);
  }

  const handleInvite = () => {


    const makeApiCall = async () => {
      const dateTime = moment(value.format("YYYY-MM-DD") + "T" + selectedTimeSlot + ":" + "00.000").utc().format('YYYY-MM-DD HH:mm');
      const date = dateTime.slice(0, 10);
      const time = dateTime.slice(11);
      console.log(selectedTimeSlot);
      if (!productType || !testType || !value.format("YYYY-MM-DD")) {
        toast.error("Fill all fields");
        return;
      }
      const payload = {
        jdId: array[array.length-1],
        productType: productType,
        resumeIds: array.slice(0, -1),
        testType: testType,
        slotDate: date,
        slotTime: time,
        timeZone: "UTC",
        welcomeMessage: "string",
      };
      if (isTime) delete payload.slotTime;
      console.log(payload);
      try {
        const response = await sendInvite(payload, accessToken, clientCode);
        console.log("API call successful:", response.data);
        toast.success("Invites sent successfully");
        navigate("/schedule/invite/success");
      } catch (error) {
        toast.error("error-> ", error?.message);
        console.error("API call failed:", error);
      }
    };

    makeApiCall();
  };
  // console.log(moment.tz.zone(selectedTimezone)?.name,"Date->", moment.tz(value.format("YYYY-MM-DD")+"T"+selectedHour + ":" + selectedMinute + ":" + "00.000",moment.tz.zone(selectedTimezone)?.name).utc().format());
  // console.log(
  //   selectedHour + ":" + selectedMinute + ":" + "00.000" + selectedTimezone
  // );

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

  return (
    <MainContainer>
      <LogoHeader />
      <Container>
        <InviteSteps step={step} setStep={setStep} />
        <IconButton onClick={() => navigate(`/schedule/matches/${jdId}`)} className="prev">
          <ArrowBackIcon sx={{ fontSize: "30px" }} />
        </IconButton>
        <div className="mainBox">
          {step === 1 &&
            <div className="step1Box">
              <div className="step1ChildBox">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <div className="calendarBox">
                    <DateCalendar
                      value={value}
                      onChange={(newValue) => setValue(dayjs(newValue))}
                      views={['day']}
                      sx={{
                        // width: "100%",
                        height: '100%',
                        display: 'flex',
                      }}
                    />
                  </div>
                </LocalizationProvider>

                <div className="slotBox">
                  <span className="span">Select time-slot</span>
                  <TimeSlotPicker
                    selectedTimeSlot={selectedTimeSlot}
                    setSelectedTimeSlot={setSelectedTimeSlot}
                  />
                </div>
              </div>
              <label className="smallTextBox">
                <input
                  type="checkbox"
                  checked={isTime}
                  onChange={handleCheckboxChange}
                />
                <span className="smallText">Alow slot selection to candidate (Interview Date will be fixed)</span>
              </label>
            </div>
          }

          {step === 2 &&
            <div className="step2Box">
              <div className="inputBox">
                <span className="title">Product Type</span>
                <div className="childInputBox">
                  <label>
                    <input
                      type="radio"
                      value="AI"
                      checked={productType === 'AI'}
                      onChange={() => handleProductTypeChange('AI')}
                    />
                    <span>AI</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="Employer"
                      checked={productType === 'Employer'}
                      onChange={() => handleProductTypeChange('Employer')}
                    />
                    <span>Employer</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="AI + Employer"
                      checked={productType === 'AI + Employer'}
                      onChange={() => handleProductTypeChange('AI + Employer')}
                    />
                    <span>AI + Employer</span>
                  </label>
                </div>
              </div>


              <div className="inputBox">
                <span className="title">Interview Based on</span>
                <div className="childInputBox">
                  <label>
                    <input
                      type="radio"
                      value="JD"
                      checked={interviewType === 'JD'}
                      onChange={() => handleInterviewTypeChange('JD')}
                    />
                    <span>JD</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="Resume"
                      checked={interviewType === 'Resume'}
                      onChange={() => handleInterviewTypeChange('Resume')}
                    />
                    <span>Resume</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="JD + Resume"
                      checked={interviewType === 'JD + Resume'}
                      onChange={() => handleInterviewTypeChange('JD + Resume')}
                    />
                    <span>JD + Resume</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="Skill"
                      checked={interviewType === 'Skill'}
                      onChange={() => handleInterviewTypeChange('Skill')}
                    />
                    <span>Skill</span>
                  </label>
                </div>
              </div>


              <div className="inputBox">
                <span className="title">Test Type</span>
                <div className="childInputBox">
                  <label>
                    <input
                      type="radio"
                      value="MCQs"
                      checked={testType === 'MCQs'}
                      onChange={() => handleTestTypeChange('MCQs')}
                    />
                    <span>MCQs</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="Subjective"
                      checked={testType === 'Subjective'}
                      onChange={() => handleTestTypeChange('Subjective')}
                    />
                    <span>Subjective</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="Coding"
                      checked={testType === 'Coding'}
                      onChange={() => handleTestTypeChange('Coding')}
                    />
                    <span>Coding</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="General"
                      checked={testType === 'General'}
                      onChange={() => handleTestTypeChange('General')}
                    />
                    <span>General (Includes all types of Que)</span>
                  </label>
                </div>
              </div>
            </div>
          }

          {
            step === 3 &&
            <div className="step3Box">
              <InviteReviewList />
            </div>
          }
        </div>

        <ButtonBox>
          {step <= 3 && <Button onClick={() => handlePrev()}>Prev</Button>}
          {step <= 2 && <Button onClick={() => handleNext()}>Next</Button>}
          {step === 3 && <Button onClick={handleInvite}>Send Invite</Button>}
        </ButtonBox>
      </Container>
    </MainContainer>
  );
}


const MainContainer = styled.div`



`


const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6.5rem 3rem 2rem 3rem;
  align-items: center;
  width: calc(100% - 6rem);
  // height: calc(100vh - 8rem);
  justify-content: center;

  .prev {
    background-color: var(--lightOrange);
    padding: 0.1rem;
    position: fixed;
    top: 5rem;
    left: 1.5rem;
    color: var(--white);
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
  }

  .smallTextBox {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: start;
    padding-left: 2rem;
  }
  
  .smallText {
    font-size: 0.75rem;
  }

  .mainBox {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;
    align-items: center;
    width: 100%;


    .step1Box {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      margin-top: 3rem;

      .step1ChildBox {
        display: flex;
        width: 100%;
        flex-direction: row;
        gap: 1rem;
        justify-content: center;
        align-items: center;
      }

      .calendarBox {
        border: 0.08rem solid lightgrey;
        border-radius: 0.5rem;
        width: 40%;
        height: 350px;
      }

      .slotBox {
        display: flex;
        width: 40%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 0.08rem solid lightgrey;
        border-radius: 0.5rem;
        height: 350px;

        .span {
          font-size: 0.9rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }
      }
    }

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

      .inputBox {
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        border: 0.08rem solid grey;
        padding: 1rem 1rem;
        border-radius: 0.5rem;
        position: relative;
        box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.2);
      }

      .childInputBox {
        display: flex;
        gap: 0.5rem;
        flex-flow: row wrap;

      }

      .title {
        font-size: 1.1rem;
        font-weight: 500;
        position: absolute;
        top: -0.8rem;
        background-color: var(--white);
        padding: 0 0.3rem;
      }
    }


    .step3Box {
      display: flex;
      flex-direction: row;
      width: 100%;
    }
    
  }
  
label {
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
font-size: 1rem;
font-weight: 600;
border-radius: 0.5rem;
cursor: pointer;

`