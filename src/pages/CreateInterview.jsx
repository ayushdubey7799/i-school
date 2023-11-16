import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useEffect,useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { updateInterview } from "../slices/interviewSlice";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
const style = {
    backgroundColor: 'var(--backgroundColor)',
    color: 'var(--lightOrange)',
    position: 'fixed',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.4rem',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    top: 0,
}

function CreateInterview() {
    const stringsArray = ['Analyzing JD and Resume', 'Creating Questions', 'Creating Interview', 'Verifying Interview'];
    const [currentString, setCurrentString] = useState('Analyzing JD and Resume');
    const { interviewId } = useParams();
    const accessToken = useSelector(state => state.auth.userData?.accessToken);

    const interviewData = useSelector((state => state?.interview?.interviewData));
 const navigate = useNavigate();
    
    console.log(interviewData);
    const dispatch = useDispatch();
    useEffect(() => {
      let currentIndex = 1;
       console.log("ran");
      const intervalId = setInterval(() => {
        setCurrentString(stringsArray[currentIndex]);
        currentIndex++;
  
        if (currentIndex === stringsArray.length) {
          clearInterval(intervalId); 
          setCurrentString(stringsArray[stringsArray.length-1])
        }
      }, 10000); 
      
      dispatch(updateInterview({id:interviewId,status:"started",accessToken}))

      return () => clearInterval(intervalId);
    }, []); //

    useEffect(() => {
      if(interviewData.status == "STARTED" && interviewData.id == interviewId){
         navigate(`/ongoing-interview/${interviewId}`)
      }
    },[interviewData])
    return (
        <Box sx={style}>
            <CircularProgress color="inherit" />
            <span style={{ color: 'var(--color)' }}>{currentString}</span>
        </Box>
    );
}

export default CreateInterview;



