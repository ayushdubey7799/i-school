import styled from "styled-components";


const TimeSlotPicker = ({ selectedTimeSlot, setSelectedTimeSlot }) => {

    return (

        <TimeSelector>

            <label>
                <input
                    type="radio"
                    value="00:00"
                    checked={selectedTimeSlot === '00:00'}
                    onChange={() => setSelectedTimeSlot('00:00')}
                />
                <span>00:00</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="00:30"
                    checked={selectedTimeSlot === '00:30'}
                    onChange={() => setSelectedTimeSlot('00:30')}
                />
                <span>00:30</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="01:00"
                    checked={selectedTimeSlot === '01:00'}
                    onChange={() => setSelectedTimeSlot('01:00')}
                />
                <span>01:00</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="01:30"
                    checked={selectedTimeSlot === '01:30'}
                    onChange={() => setSelectedTimeSlot('01:30')}
                />
                <span>01:30</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="02:00"
                    checked={selectedTimeSlot === '02:00'}
                    onChange={() => setSelectedTimeSlot('02:00')}
                />
                <span>02:00</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="02:30"
                    checked={selectedTimeSlot === '02:30'}
                    onChange={() => setSelectedTimeSlot('02:30')}
                />
                <span>02:30</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="03:00"
                    checked={selectedTimeSlot === '03:00'}
                    onChange={() => setSelectedTimeSlot('03:00')}
                />
                <span>03:00</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="03:30"
                    checked={selectedTimeSlot === '03:30'}
                    onChange={() => setSelectedTimeSlot('03:30')}
                />
                <span>03:30</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="04:00"
                    checked={selectedTimeSlot === '04:00'}
                    onChange={() => setSelectedTimeSlot('04:00')}
                />
                <span>04:00</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="04:30"
                    checked={selectedTimeSlot === '04:30'}
                    onChange={() => setSelectedTimeSlot('04:30')}
                />
                <span>04:30</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="05:00"
                    checked={selectedTimeSlot === '05:00'}
                    onChange={() => setSelectedTimeSlot('05:00')}
                />
                <span>05:00</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="05:30"
                    checked={selectedTimeSlot === '05:30'}
                    onChange={() => setSelectedTimeSlot('05:30')}
                />
                <span>05:30</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="06:00"
                    checked={selectedTimeSlot === '06:00'}
                    onChange={() => setSelectedTimeSlot('06:00')}
                />
                <span>06:00</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="06:30"
                    checked={selectedTimeSlot === '06:30'}
                    onChange={() => setSelectedTimeSlot('06:30')}
                />
                <span>06:30</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="07:00"
                    checked={selectedTimeSlot === '07:00'}
                    onChange={() => setSelectedTimeSlot('07:00')}
                />
                <span>07:00</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="07:30"
                    checked={selectedTimeSlot === '07:30'}
                    onChange={() => setSelectedTimeSlot('07:30')}
                />
                <span>07:30</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="08:00"
                    checked={selectedTimeSlot === '08:00'}
                    onChange={() => setSelectedTimeSlot('08:00')}
                />
                <span>08:00</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="08:30"
                    checked={selectedTimeSlot === '08:30'}
                    onChange={() => setSelectedTimeSlot('08:30')}
                />
                <span>08:30</span>
            </label>


            <label>
                <input
                    type="radio"
                    value="09:00"
                    checked={selectedTimeSlot === '09:00'}
                    onChange={() => setSelectedTimeSlot('09:00')}
                />
                <span>09:00</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="09:30"
                    checked={selectedTimeSlot === '09:30'}
                    onChange={() => setSelectedTimeSlot('09:30')}
                />
                <span>09:30</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="10:00"
                    checked={selectedTimeSlot === '10:00'}
                    onChange={() => setSelectedTimeSlot('10:00')}
                />
                <span>10:00</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="10:30"
                    checked={selectedTimeSlot === '10:30'}
                    onChange={() => setSelectedTimeSlot('10:30')}
                />
                <span>10:30</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="11:00"
                    checked={selectedTimeSlot === '11:00'}
                    onChange={() => setSelectedTimeSlot('11:00')}
                />
                <span>11:00</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="11:30"
                    checked={selectedTimeSlot === '11:30'}
                    onChange={() => setSelectedTimeSlot('11:30')}
                />
                <span>11:30</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="12:00"
                    checked={selectedTimeSlot === '12:00'}
                    onChange={() => setSelectedTimeSlot('12:00')}
                />
                <span>12:00</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="12:30"
                    checked={selectedTimeSlot === '12:30'}
                    onChange={() => setSelectedTimeSlot('12:30')}
                />
                <span>12:30</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="13:00"
                    checked={selectedTimeSlot === '13:00'}
                    onChange={() => setSelectedTimeSlot('13:00')}
                />
                <span>13:00</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="13:30"
                    checked={selectedTimeSlot === '13:30'}
                    onChange={() => setSelectedTimeSlot('13:30')}
                />
                <span>13:30</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="14:00"
                    checked={selectedTimeSlot === '14:00'}
                    onChange={() => setSelectedTimeSlot('14:00')}
                />
                <span>14:00</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="14:30"
                    checked={selectedTimeSlot === '14:30'}
                    onChange={() => setSelectedTimeSlot('14:30')}
                />
                <span>14:30</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="15:00"
                    checked={selectedTimeSlot === '15:00'}
                    onChange={() => setSelectedTimeSlot('15:00')}
                />
                <span>15:00</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="15:30"
                    checked={selectedTimeSlot === '15:30'}
                    onChange={() => setSelectedTimeSlot('15:30')}
                />
                <span>15:30</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="16:00"
                    checked={selectedTimeSlot === '16:00'}
                    onChange={() => setSelectedTimeSlot('16:00')}
                />
                <span>16:00</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="16:30"
                    checked={selectedTimeSlot === '16:30'}
                    onChange={() => setSelectedTimeSlot('16:30')}
                />
                <span>16:30</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="17:00"
                    checked={selectedTimeSlot === '17:00'}
                    onChange={() => setSelectedTimeSlot('17:00')}
                />
                <span>17:00</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="17:30"
                    checked={selectedTimeSlot === '17:30'}
                    onChange={() => setSelectedTimeSlot('17:30')}
                />
                <span>17:30</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="18:00"
                    checked={selectedTimeSlot === '18:00'}
                    onChange={() => setSelectedTimeSlot('18:00')}
                />
                <span>18:00</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="18:30"
                    checked={selectedTimeSlot === '18:30'}
                    onChange={() => setSelectedTimeSlot('18:30')}
                />
                <span>18:30</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="19:00"
                    checked={selectedTimeSlot === '19:00'}
                    onChange={() => setSelectedTimeSlot('19:00')}
                />
                <span>19:00</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="19:30"
                    checked={selectedTimeSlot === '19:30'}
                    onChange={() => setSelectedTimeSlot('19:30')}
                />
                <span>19:30</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="20:00"
                    checked={selectedTimeSlot === '20:00'}
                    onChange={() => setSelectedTimeSlot('20:00')}
                />
                <span>20:00</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="20:30"
                    checked={selectedTimeSlot === '20:30'}
                    onChange={() => setSelectedTimeSlot('20:30')}
                />
                <span>20:30</span>
            </label>


            <label>
                <input
                    type="radio"
                    value="21:00"
                    checked={selectedTimeSlot === '21:00'}
                    onChange={() => setSelectedTimeSlot('21:00')}
                />
                <span>21:00</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="21:30"
                    checked={selectedTimeSlot === '21:30'}
                    onChange={() => setSelectedTimeSlot('21:30')}
                />
                <span>21:30</span>
            </label>


            <label>
                <input
                    type="radio"
                    value="22:00"
                    checked={selectedTimeSlot === '22:00'}
                    onChange={() => setSelectedTimeSlot('22:00')}
                />
                <span>22:00</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="22:30"
                    checked={selectedTimeSlot === '22:30'}
                    onChange={() => setSelectedTimeSlot('22:30')}
                />
                <span>22:30</span>
            </label>


            <label>
                <input
                    type="radio"
                    value="23:00"
                    checked={selectedTimeSlot === '23:00'}
                    onChange={() => setSelectedTimeSlot('23:00')}
                />
                <span>23:00</span>
            </label>

            <label>
                <input
                    type="radio"
                    value="23:30"
                    checked={selectedTimeSlot === '23:30'}
                    onChange={() => setSelectedTimeSlot('23:30')}
                />
                <span>23:30</span>
            </label>

        </TimeSelector>
    );
}


export default TimeSlotPicker;


const TimeSelector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  max-height: 50vh;
  gap: 0.4rem;

  &::-webkit-scrollbar {
    width: 0.2rem;
}

&::-webkit-scrollbar-track {
    background: lightgrey;
}

&::-webkit-scrollbar-thumb {
    background: var(--lightOrange);
    width: 0.2rem;
}



  
label {
	display: flex;
	cursor: pointer;
	font-weight: 500;
	position: relative;
	margin-bottom: 0rem;
    padding: 0 1rem;

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

