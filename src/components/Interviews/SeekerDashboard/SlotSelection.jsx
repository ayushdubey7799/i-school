import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { schedule } from "../../../functions/api/employers/match/schedule";
import { scheduleByCandidate } from "../../../functions/api/employers/schedule/scheduleByCandidate";
import { getInviteDetails } from "../../../functions/api/employers/schedule/getInviteDetails";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const ScheduleButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const SlotSelection = () => {
  const [selectedHour, setSelectedHour] = useState("00");
  const [selectedMinute, setSelectedMinute] = useState("00");
  const [selectedAmPm, setSelectedAmPm] = useState("AM");
  const accessToken = useSelector((state) => state.auth.userData?.accessToken);
  const navigate = useNavigate();
  const { token } = useParams();

 
  const handleScheduleInterview = () => {
    const scheduleTest = async () => {
      console.log(token);
      const res = await scheduleByCandidate(
        {
          slot: "2023-10-25T05:26:51",
          token: token,
        },
        accessToken
      );

      if (res) {
        localStorage.removeItem("token");
        toast.success(
          `Scheduled interview for ${selectedHour}:${selectedMinute} ${selectedAmPm}`
        );
        navigate("/dashboard/jobseeker");
      }
    };
    scheduleTest();
  };

  return (
    <PageContainer>
      <h1>Schedule Interview</h1>
      <TimeSelector>
        <TimeInput
          value={selectedHour}
          onChange={(e) => setSelectedHour(e.target.value)}
        >
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
        <TimeInput
          value={selectedAmPm}
          onChange={(e) => setSelectedAmPm(e.target.value)}
        >
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </TimeInput>
      </TimeSelector>
      <ScheduleButton onClick={handleScheduleInterview}>
        Schedule Interview
      </ScheduleButton>
      <div>
        <a href="/login">Login</a> | <a href="/register">Register</a>
      </div>
    </PageContainer>
  );
};

export default SlotSelection;
