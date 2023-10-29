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

export default function Invite() {
  const [value, setValue] = useState(dayjs("2022-04-17"));
  const [productTypes, setProductTypes] = useState([]);
  const [testTypes, setTestTypes] = useState([]);
  const [productType, setProductType] = useState("");
  const [testType, setTestType] = useState("");
  const accessToken = useSelector((state) => state.auth.userData.accessToken);
  const clientCode = useSelector(
    (state) => state.auth.userData.user.clientCode
  );
  const navigate = useNavigate();
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

  const handleProductTypeChange = (e) => {
    setProductType(e.target.value);
  };

  const handleTestTypeChange = (e) => {
    setTestType(e.target.value);
  };

  const handleInvite = () => {
    const makeApiCall = async () => {
      const payload = {
        jdId: array[array.length - 1],
        productType: "skill based",
        resumeIds: array.slice(0, -1),
        slotDate: value.format("YYYY-MM-DD"),
        testType: "AI",
        welcomeMessage: "string",
      };

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
  console.log("Date->", value.format("YYYY-MM-DD"));

  return (
    <Container>
      <div className="mainBox">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            value={value}
            onChange={(newValue) => setValue(dayjs(newValue))}
          />
        </LocalizationProvider>
        <ResponsiveTimePickers />

        <div className="selectBox">
          <Select value={productType} onChange={handleProductTypeChange}>
            <option value="">Select Product Type</option>
            {productTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </Select>

          <Select value={testType} onChange={handleTestTypeChange}>
            <option value="">Select Test Type</option>
            {testTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </Select>
        </div>
      </div>
      <button className="btn" onClick={handleInvite}>
        Send Invite
      </button>
    </Container>
  );
}

const Select = styled.select`
  padding: 0.6rem;
  margin: 0.6rem;
  border: 0.08rem solid #ccc;
  border-radius: 0.3rem;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 6rem;
  align-items: center;
  height: 100vh;

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

  .mainBox {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;
  }

  .selectBox {
    width: 50%;
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

function ResponsiveTimePickers() {
  const [selectedHour, setSelectedHour] = useState("00");
  const [selectedMinute, setSelectedMinute] = useState("00");
  const [selectedAmPm, setSelectedAmPm] = useState("AM");
  const [selectedTimezone, setSelectedTimezone] = useState("GMT");
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
        <option value="24">24</option>

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
      <TimeInput
        value={selectedTimezone}
        onChange={(e) => setSelectedTimezone(e.target.value)}
      >
        {timezones.map((tz) => (
          <option key={tz} value={tz}>
            {tz}
          </option>
        ))}
      </TimeInput>
    </TimeSelector>
  );
}
