import React from 'react'
import { TextField } from "@mui/material";
import styled from 'styled-components';

const ContactDetails = ({ formData, setFormData, handleEdit }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <Box>
            <span className='title'>Contact Details</span>

            <Form>
                <div className="inputBox">
                    <TextField
                        id="outlined-basic"
                        label="Contact"
                        variant="outlined"
                        type="tel"
                        name="spocContact"
                        value={formData?.spocContact}
                        onChange={handleChange}
                        sx={{ backgroundColor: "#F6F6FB" }}
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
                        fullWidth
                    />
                    <TextField
                        id="outlined-basic"
                        label="Contact Name"
                        variant="outlined"
                        type="text"
                        name="spocName"
                        value={formData?.spocName}
                        onChange={handleChange}
                        sx={{ backgroundColor: "#F6F6FB" }}
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
                        fullWidth
                    />
                </div>

                <div className='inputBox'>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        type="email"
                        name="spocEmail"
                        value={formData?.spocEmail}
                        sx={{ backgroundColor: "#F6F6FB" }}
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
                        fullWidth
                        disabled
                    />
                    <TextField
                        id="outlined-basic"
                        label="Address"
                        variant="outlined"
                        type="text"
                        name="address"
                        value={formData?.address}
                        onChange={handleChange}
                        sx={{ backgroundColor: "#F6F6FB" }}
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
                        fullWidth
                    />
                </div>

                <div className='inputBox' style={{ width: 'calc(50% - 1rem)' }}>
                    <TextField
                        id="outlined-basic"
                        label="City"
                        variant="outlined"
                        type="text"
                        name="city"
                        value={formData?.city}
                        onChange={handleChange}
                        sx={{ backgroundColor: "#F6F6FB" }}
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
                        fullWidth
                    />
                </div>

                <Button onClick={handleEdit}>Save Changes</Button>
            </Form>
        </Box>
    )
}

export default ContactDetails

const Box = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 0.3rem;


  .title {
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 2rem;
    display: block;
    margin-bottom: 1rem;
  }
`

const Form = styled.div`
display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  gap: 1rem;

  .inputBox {
    width: 100%;
    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 2000px) {
    #outlined-basic {
      padding: 0.75rem 0.5rem;
      background-color: #F6F6FB;
      font-family: var(--font);
    }
  }

  @media (max-width: 1700px) {
    #outlined-basic {
      padding: 0.85rem 0.5rem;
      background-color: #F6F6FB;
      font-family: var(--font);
    }
  }

  @media (max-width: 1350px) {
    #outlined-basic {
      padding: 0.95rem 0.5rem;
      background-color: #F6F6FB;
      font-family: var(--font);
    }
  }

  @media (max-width: 1200px) {
    #outlined-basic {
      padding: 1rem 0.5rem;
      background-color: #F6F6FB;
      font-family: var(--font);
    }
  }


`

const Button = styled.button`
  padding: 0.7rem 1.2rem;
  background-color: var(--lightOrange);
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  align-self: center;
  font-family: var(--font);
`;

