import React from 'react'
import dayjs from "dayjs";
import styled from 'styled-components'
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import TimeSlot from '../commonComponents/TimeSlot';
import { useState } from 'react';

const RequestDemoPage = () => {

    const [value, setValue] = useState(dayjs(new Date()));
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(dayjs(new Date()));


    return (
        <Box>

            <span className='title'>Request a Free Demo</span>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className="calendarBox">
                    <DateCalendar
                        value={value}
                        onChange={(newValue) => setValue(dayjs(newValue))}
                        views={['day']}
                        sx={{
                            height: '100%',
                            display: 'flex',
                        }}
                    />
                </div>
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimePicker', 'TimePicker']} className='slotChildBox' sx={{ width: 'calc(100% + 1rem)', marginLeft: '1rem' }}>
                    <TimeSlot selectedTimeSlot={selectedTimeSlot} setSelectedTimeSlot={setSelectedTimeSlot} />
                </DemoContainer>
            </LocalizationProvider>

            <Btn>Request Demo</Btn>
        </Box>
    )
}

export default RequestDemoPage


const Box = styled.div`
height: 130vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;
gap: 1rem;

.title {
    margin: 1rem 0;
    font-size: 1.5rem;
    font-weight: 600;
}

.calendarBox {
    border: 0.08rem solid lightgrey;
    border-radius: 0.5rem;
    width: 100%;
    background-color: var(--white);
  }


`

const Btn = styled.button`
background-color: var(--lightOrange);
color: var(--white);
border: none;
padding: 0.7rem 1.2rem;
font-size: 1rem;
font-weight: 500;
border-radius: 0.3rem;
margin-top: 1rem;


`