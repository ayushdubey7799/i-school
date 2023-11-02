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
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import moment from "moment-timezone";
import LogoHeader from "../../../commonComponents/LogoHeader";

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
  const [value, setValue] = useState(dayjs(new Date()));
  const [selectedHour, setSelectedHour] = useState("00");
  const [selectedMinute, setSelectedMinute] = useState("00");
  const [selectedTimezone, setSelectedTimezone] = useState("GMT");
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
      const dateTime = moment(value.format("YYYY-MM-DD") + "T" + selectedHour + ":" + selectedMinute + ":" + "00.000").utc().format('YYYY-MM-DD HH:mm:ss');
      const date = dateTime.slice(0, 10);
      const time = dateTime.slice(11);
      if (!productType || !testType || !value.format("YYYY-MM-DD")) {
        toast.error("Fill all fields");
        return;
      }
      const payload = {
        jdId: array[array.length - 1],
        productType: productType,
        resumeIds: array.slice(0, -1),
        testType: testType,
        slotDate: date,
        timeZone: "UTC",
        slotTime: time,
        welcomeMessage: "string",
      };
      if(isTime)delete payload.slotTime;
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
        <div className="mainBox">
          <div className="box1">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <div className="calendarBox">
                <DateCalendar
                  value={value}
                  onChange={(newValue) => setValue(dayjs(newValue))}
                />
              </div>
            </LocalizationProvider>

            <div className="slotBox">
              <span>Select Time Slot (IST)</span>
              <ResponsiveTimePickers
                selectedHour={selectedHour}
                setSelectedHour={setSelectedHour}
                selectedMinute={selectedMinute}
                setSelectedMinute={setSelectedMinute}
                selectedTimezone={selectedTimezone}
                setSelectedTimezone={setSelectedTimezone}
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
                  /> AI
                </label>
                <label>
                  <input
                    type="radio"
                    value="Employer"
                    checked={productType === 'Employer'}
                    onChange={() => handleProductTypeChange('Employer')}
                  /> Employer
                </label>
                <label>
                  <input
                    type="radio"
                    value="AI + Employer"
                    checked={productType === 'AI + Employer'}
                    onChange={() => handleProductTypeChange('AI + Employer')}
                  /> AI + Employer
                </label>
              </div>
            </div>


            <div className="inputBox">
              <span className="title">Interview Type</span>
              <div className="childInputBox">
                <label>
                  <input
                    type="radio"
                    value="JD"
                    checked={interviewType === 'JD'}
                    onChange={() => handleInterviewTypeChange('JD')}
                  /> JD
                </label>
                <label>
                  <input
                    type="radio"
                    value="Resume"
                    checked={interviewType === 'Resume'}
                    onChange={() => handleInterviewTypeChange('Resume')}
                  /> Resume
                </label>
                <label>
                  <input
                    type="radio"
                    value="JD + Resume"
                    checked={interviewType === 'JD + Resume'}
                    onChange={() => handleInterviewTypeChange('JD + Resume')}
                  /> JD + Resume
                </label>
                <label>
                  <input
                    type="radio"
                    value="Skill"
                    checked={interviewType === 'Skill'}
                    onChange={() => handleInterviewTypeChange('Skill')}
                  /> Skill
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
                  /> MCQs
                </label>
                <label>
                  <input
                    type="radio"
                    value="Subjective"
                    checked={testType === 'Subjective'}
                    onChange={() => handleTestTypeChange('Subjective')}
                  /> Subjective
                </label>
                <label>
                  <input
                    type="radio"
                    value="Coding"
                    checked={testType === 'Coding'}
                    onChange={() => handleTestTypeChange('Coding')}
                  /> Coding
                </label>
                <label>
                  <input
                    type="radio"
                    value="General"
                    checked={testType === 'General'}
                    onChange={() => handleTestTypeChange('General')}
                  /> General (Includes all types of Que)
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
            <span className="smallText">Give slot selection option to candidate (Interview Date will be fixed)</span>
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
  height: calc(100vh - 6rem);
  justify-content: center;

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
      gap: 1rem;

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

        span {
          font-size: 0.9rem;
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
        padding: 1.5rem 1rem;
        border-radius: 0.5rem;
        position: relative;
        box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.2);
      }

      .childInputBox {
        display: flex;
        gap: 0.5rem;
        flex-flow: row wrap;

        label {
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.2rem;
        }
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

    input {
      width: 0.8rem;
      height: 0.8rem;
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
`;

const TimeSelector = styled.div`
  display: flex;
  align-items: center;
`;

const TimeInput = styled.select`
  margin: 10px;
  padding: 5px;
  font-size: 16px;
`;

function ResponsiveTimePickers({ selectedHour, setSelectedHour, selectedMinute, setSelectedMinute, selectedTimezone, setSelectedTimezone }) {
  const timezones = [
    "GMT",
    "CET",
    "EET",
    "MSK",
    "PKT",
    "IST",
    "ICT",
    "SGT",
    "JST",
    "AEST",
    "VLAT",
    "NZST",
    "NUT",
    "SST",
    "ChST",
    "HST",
    "AKST",
    "PST",
    "MST",
    "CST",
    "EST",
    "AST",
    "NST",
    "WGT",
  ];

  return (
    // <LocalizationProvider dateAdapter={AdapterDayjs}>

    //     <DemoItem label="Select slot">
    //       <StaticTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
    //     </DemoItem>
    // </LocalizationProvider>
    <TimeSelector>
      <TimeInput
        value={selectedHour}
        onChange={(e) => setSelectedHour(e.target.value)}
      >
        <option value="00">00</option>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>

        {/* Add more hour options here */}
      </TimeInput>
      :
      <TimeInput
        value={selectedMinute}
        onChange={(e) => setSelectedMinute(e.target.value)}
      >
        <option value="00">00</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>

        {/* Add more minute options here */}
      </TimeInput>
      {/* <TimeInput
        value={selectedAmPm}
        onChange={(e) => setSelectedAmPm(e.target.value)}
      >
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </TimeInput> */}
      {/* <TimeInput
        value={selectedTimezone}
        onChange={(e) => setSelectedTimezone(e.target.value)}
      >
        {timezones.map((tz) => (
          <option key={tz} value={tz}>
            {tz}
          </option>
        ))}
      </TimeInput> */}
    </TimeSelector>
  );
}


