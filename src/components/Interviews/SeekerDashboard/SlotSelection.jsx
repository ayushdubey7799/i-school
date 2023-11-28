import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { schedule } from "../../../functions/api/employers/match/schedule";
import { scheduleByCandidate } from "../../../functions/api/employers/schedule/scheduleByCandidate";
import { getInviteDetails } from "../../../functions/api/employers/schedule/getInviteDetails";
import TimeSlotPicker from "../EmployerDashboard/Schedule/TimeSlotPicker";
import moment from "moment-timezone";
import { persistor } from "../../../store";
import { useDispatch } from "react-redux";
import { logout } from "../../../slices/authSlice";
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
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("00:00");
  const dispatch = useDispatch();

  const [inviteDetails, setInviteDetails] = useState(null);
  const accessToken = useSelector((state) => state.auth.userData?.accessToken);
  const navigate = useNavigate();
  const { token } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      const res = await getInviteDetails(token, accessToken);
      setInviteDetails(res?.data);
    };

    getDetails();
  }, []);

  const handleScheduleInterview = () => {
    const dateTime = moment(
      inviteDetails.slotDate + "T" + selectedTimeSlot + ":" + "00.000"
    )
      .utc()
      .format("YYYY-MM-DD HH:mm");
    const date = dateTime.slice(0, 10);
    const time = dateTime.slice(11);
    console.log(date + "T" + time);
    const scheduleTest = async () => {
      console.log(token,date);
      const res = await scheduleByCandidate(
        {
          slot: date + "T" + time,
          token: token,
        },
        accessToken
      );

      if (res) {
        localStorage.removeItem("token");
        localStorage.removeItem("key");
        toast.success(
          `Scheduled interview on ${inviteDetails.slotDate} at ${selectedTimeSlot}`
        );
        navigate("/dashboard/jobseeker");
      }
    };
    scheduleTest();
  };

  const handleRedirect = () => {
    persistor.purge();
    dispatch(logout())
    
  }

  return (
    <PageContainer>
      <h1>Schedule Interview</h1>
      {inviteDetails ? (
        <div>
          <p>Email: {inviteDetails.email}</p>
          <p>Jd Id: {inviteDetails.jdId}</p>
          <p>Slot Date: {inviteDetails.slotDate}</p>
          <p>Test Type: {inviteDetails.testType}</p>

          <TimeSlotPicker
        selectedTimeSlot={selectedTimeSlot}
        setSelectedTimeSlot={setSelectedTimeSlot}
      />

      <ScheduleButton onClick={handleScheduleInterview}>
        Schedule Interview
      </ScheduleButton>
        </div>
        
      ):
      <div>
        <h1>Login with same email you got invite on to schedule</h1>
        <Link onClick={handleRedirect} to={'/login'}>Redirect to Login Page</Link>
      </div>}
     
    </PageContainer>
  );
};

export default SlotSelection;
