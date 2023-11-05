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
<<<<<<< HEAD
      const dateTime = moment(value.format("YYYY-MM-DD") + "T" + selectedHour + ":" + selectedMinute + ":" + "00.000").utc().format('YYYY-MM-DD HH:mm');
=======
      const dateTime = moment(value.format("YYYY-MM-DD") + "T" + selectedTimeSlot + ":" + "00.000").utc().format('YYYY-MM-DD HH:mm:ss');
>>>>>>> 2d9d9714add20d621f865cc3fbcea12733b71497
      const date = dateTime.slice(0, 10);
      const time = dateTime.slice(11);
      const timeToSend = {
        
      }
      if (!productType || !testType || !value.format("YYYY-MM-DD")) {
        toast.error("Fill all fields");
        return;
      }
      const payload = {
        jdId: "DE2023-001",
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
      } catch (error) {
        console.error("API call failed:", error);
      }
    };

    makeApiCall();
  };
  // console.log(moment.tz.zone(selectedTimezone)?.name,"Date->", moment.tz(value.format("YYYY-MM-DD")+"T"+selectedHour + ":" + selectedMinute + ":" + "00.000",moment.tz.zone(selectedTimezone)?.name).utc().format());
  // console.log(
  //   selectedHour + ":" + selectedMinute + ":" + "00.000" + selectedTimezone
  // );


  return (
    <MainContainer>
      <LogoHeader />
      <Container>
        <IconButton onClick={() => navigate(`/schedule/matches/${jdId}`)} className="prev">
          <ArrowBackIcon sx={{ fontSize: "30px" }} />
        </IconButton>
        <div className="mainBox">
          <div className="box1">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <div className="calendarBox">
                <DateCalendar
                  value={value}
                  onChange={(newValue) => setValue(dayjs(newValue))}
                  views={['day']}
                />
              </div>
            </LocalizationProvider>

            <div className="slotBox">
              <span className="span">Select time-slot (IST)</span>
              <TimeSlotPicker
                selectedTimeSlot={selectedTimeSlot}
                setSelectedTimeSlot={setSelectedTimeSlot}
              />
            </div>
          </div>


          <div className="box2">
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
        </div>
        <div className="box3">
          <label className="smallTextBox">
            <input
              type="checkbox"
              checked={isTime}
              onChange={handleCheckboxChange}
            />
            <span className="smallText">Alow slot selection to candidate (Interview Date will be fixed)</span>
          </label>
          <button className="btn" onClick={handleInvite}>
            Send Invite
          </button>
        </div>
      </Container>
    </MainContainer>
  );
}


const MainContainer = styled.div`



`


const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6rem 3rem 2rem 3rem;
  align-items: center;
  height: calc(100vh - 8rem);
  justify-content: center;

  .prev {
    background-color: var(--lightOrange);
    padding: 0.1rem;
    position: absolute;
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
    justify-content: space-between;
    width: 100%;


    .box1 {
      display: flex;
      width: 50%;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 2rem;

      .calendarBox {
        border: 0.08rem solid lightgrey;
        border-radius: 0.5rem;

      }

      .slotBox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: -1.5rem;

        .span {
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
      }
    }

    .box2 {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      gap: 2rem;
      padding: 0rem 1rem;

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


    
    
  }


  .box3 {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
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


