import React, { useState } from 'react'
import styled from 'styled-components'
import LogoHeader from '../../commonComponents/LogoHeader'
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const EmployerFeedback = () => {
    const [feedback, setFeedback] = useState('');
    const [recommendation, setRecommendation] = useState('');

    return (
        <Box>
            <LogoHeader />
            <Content>
                <div className='textBox'>
                    <label className='label'>Feedback</label>
                    <textarea
                        value={feedback}
                        name='feeback'
                        onChange={(e) => setFeedback(e.target.value)}
                        rows={10}
                        className='textarea'
                    />
                </div>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Recommendation</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={recommendation}
                        label="Worker Type"
                        onChange={(e) => setRecommendation(e.target.value)}
                        name="recommendation"
                        size="small"
                        inputProps={{
                            sx: {
                                color: "#626264",
                                fontSize: "0.8rem",
                                fontWeight: "400",
                            },
                        }}
                        InputLabelProps={{
                            sx: {
                                color: "#626264",
                                fontSize: "0.8rem",
                                fontWeight: "400",
                            },
                        }}
                        sx={{
                            padding: "0rem 0 0.5rem 0",
                        }}
                    >
                        <MenuItem value="MOVE_TO_NEXT_ROUND">Move to next round</MenuItem>
                        <MenuItem value="HOLD">Hold</MenuItem>
                        <MenuItem value="REJECT">Reject</MenuItem>
                        <MenuItem value="OFFER">Offer</MenuItem>
                    </Select>
                </FormControl>
            </Content>
        </Box>
    )
}

export default EmployerFeedback

const Box = styled.div`
display: flex;
flex-direction: column;



`

const Content = styled.div`
width: 60%;
margin: 6rem auto 2rem auto;
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;


.textBox {
    width: 100%;
    position: relative;


    .label {
        font-size: 0.9rem;
        font-weight: 400;
        position: absolute;
        top: -0.75rem;
        left: 1rem;
        background-color: var(--white);
        color: #757575;
        padding: 0 0.5rem;
      }
}

.textarea {
    width: 100%;
    background-color: var(--white);
    padding: 1rem;
    line-height: 1.2rem;
    font-size: 0.9rem;
    border-radius: 0.75rem;
    outline-color: #1976d2;
    outline-width: 0.05rem;
    border: 0.075rem solid lightgrey;
    box-sizing: border-box;
}

#demo-simple-select-label {
    font-size: 0.75rem;
    font-weight: 400;
    font-family: var(--font);
  }

`
