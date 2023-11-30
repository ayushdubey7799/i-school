import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

const TimeSlot = ({ selectedTimeSlot, setSelectedTimeSlot }) => {
    const [timeMode, setTimeMode] = useState('');
    const [showPicker, setShowPicker] = useState(false);
    const dropdownRef = useRef(null);

    const handleClick = () => {
        setShowPicker(!showPicker);
    };

    const handleSelect = (value, type) => {
        // Adjust hour if PM is selected
        if (type === 'ampm' && value === 'PM') {
            setSelectedTimeSlot({
                ...selectedTimeSlot,
                $H: (selectedTimeSlot.$H % 12) + 12,
            });
            setTimeMode(value);
        } else if (type === 'ampm' && value === 'AM') {
            setSelectedTimeSlot({
                ...selectedTimeSlot,
                $H: selectedTimeSlot.$H % 12,
            });
            setTimeMode(value);
        } else {
            setSelectedTimeSlot({
                ...selectedTimeSlot,
                [type]: value,
            });
        }
    };

    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setShowPicker(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <MainBox ref={dropdownRef}>
            <input value={`${(selectedTimeSlot.$H > 12 && (selectedTimeSlot.$H % 12) < 10) ? '0' + (selectedTimeSlot.$H - 12) : (selectedTimeSlot.$H > 12 && (selectedTimeSlot.$H % 12) >= 10) ? (selectedTimeSlot.$H - 12) : ((selectedTimeSlot.$H % 12) == 0) ? '00' : ((selectedTimeSlot.$H > 9 && selectedTimeSlot.$H <= 12)) ? selectedTimeSlot.$H : '0' + selectedTimeSlot.$H}:${selectedTimeSlot.$m < 10 ? '0' + selectedTimeSlot.$m : selectedTimeSlot.$m} ${selectedTimeSlot.$H > 11 ? 'PM' : 'AM'}`} type='text' readOnly className='timeSlot' onClick={handleClick} />

            {showPicker && (
                <div className='dropDown'>
                    <div className='hrBox'>
                        {[...Array(12)].map((_, i) => (
                            <HrSpan key={i} value={i + 1} isSelected={selectedTimeSlot.$H % 12 == (i + 1) || (selectedTimeSlot.$H % 12 == 0 && (i == 11))} onClick={(e) => handleSelect((i + 1), '$H')}>
                                {i + 1}
                            </HrSpan>
                        ))}
                    </div>

                    <div className='minBox'>
                        {[...Array(12)].map((_, i) => (
                            <MinSpan key={i} value={(i * 5)} isSelected={selectedTimeSlot.$m == (i * 5)} onClick={(e) => handleSelect((i * 5), '$m')}>
                                {i * 5 < 10 ? `0${i}` : i * 5}
                            </MinSpan>
                        ))}
                    </div>


                    <div className='ampmBox'>
                        <AmPmSpan value="AM" isSelected={timeMode == 'AM'} onClick={(e) => handleSelect('AM', 'ampm')}>AM</AmPmSpan>
                        <AmPmSpan value="PM" isSelected={timeMode == 'PM'} onClick={(e) => handleSelect('PM', 'ampm')}>PM</AmPmSpan>
                    </div>
                </div>
            )}
        </MainBox>
    )
}

export default TimeSlot


const MainBox = styled.div`


.timeSlot {
    border: 0.08rem solid lightgrey;
    padding: 1rem 1rem;
    outline-color: lightgrey;
    outline-width: 0.05rem;
    border-radius: 0.3rem;
}

.dropDown {
    display: flex;
    flex-direction: column;
    width: 15rem;
    background-color: var(--white);
    padding: 1rem 1rem;
    box-sizing: border-box;
    gap: 1rem;
    border: 0.1rem solid lightgrey;
    border-radius: 0.5rem;
    position: absolute;
    margin-top: 1rem;
    margin-left: -0.5rem;

    .hrBox {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
        column-gap: 1%;
        width: 100%;
        border-bottom: 0.1rem solid lightgrey;
        padding-bottom: 1rem;
    }

    .minBox {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
        column-gap: 1%;
        width: 100%;
        border-bottom: 0.1rem solid lightgrey;
        padding-bottom: 1rem;
    }

    .ampmBox {
        display: flex;
        flex-flow: row wrap;
        width: 100%;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }
}

`

const HrSpan = styled.span`
width: 8%;
display: flex;
justify-content: center;
align-items: center;
background-color: ${(props) => (props.isSelected ? 'var(--lightOrange)' : 'transparent')};
color: ${(props) => (props.isSelected ? 'var(--white)' : 'var(--color)')};
cursor: pointer;
font-size: 0.95rem;
font-weight: 500;
padding: 0.5rem;
border-radius: 0.3rem;


`

const MinSpan = styled.span`
width: 8%;
display: flex;
justify-content: center;
align-items: center;
background-color: ${(props) => (props.isSelected ? 'var(--lightOrange)' : 'transparent')};
color: ${(props) => (props.isSelected ? 'var(--white)' : 'var(--color)')};
cursor: pointer;
font-size: 0.95rem;
font-weight: 500;
padding: 0.5rem;
border-radius: 0.3rem;

`


const AmPmSpan = styled.span`
background-color: ${(props) => (props.isSelected ? 'var(--lightOrange)' : 'transparent')};
color: ${(props) => (props.isSelected ? 'var(--white)' : 'var(--color)')};
cursor: pointer;
font-size: 0.95rem;
font-weight: 500;
padding: 0.5rem;
border-radius: 0.3rem;

`

