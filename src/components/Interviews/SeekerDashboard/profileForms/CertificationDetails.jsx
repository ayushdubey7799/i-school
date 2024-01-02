import React, { useEffect, useState } from 'react'
import { TextField } from "@mui/material";
import styled from 'styled-components';
import { DateCalendar, DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import browseIcon from '../../../../assets/icons/browse.png'
import moment from 'moment-timezone';
import { addCertificationWithFile } from '../../../../functions/api/jobSeekers/addCertifications';
import { toast } from 'react-toastify';
import { updateCertification } from '../../../../functions/api/jobSeekers/updateCertification';

const CertificationDetails = ({ data, mode, id, handleClose }) => {

    const profileId = useSelector((state) => state.auth.userData?.user?.profileId);
    const accessToken = useSelector((state) => state.auth.userData?.accessToken);
    const [formData, setFormData] = useState();


    const [issueDate, setIssueDate] = useState(dayjs(new Date()));
    const [expirationDate, setExpirationDate] = useState(dayjs(new Date()));

    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFileName, setSelectedFileName] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange2 = (e) => {
        const file = e.target.files[0];

        if (file) {
            setSelectedFile(file);
            console.log(file);
            setSelectedFileName(file.name);
        }
    };

    useEffect(() => {
        if (mode === 'edit') {
            setFormData(data);
            setIssueDate(dayjs(data?.issueDate))
            setExpirationDate(dayjs(data?.expirationDate))
        }
    }, [])


    const handleSubmit = async () => {

        try {
            const issue = moment(issueDate.format("YYYY-MM-DD")).utc().format('YYYY-MM-DD');
            const expiration = moment(expirationDate.format("YYYY-MM-DD")).utc().format('YYYY-MM-DD');

            console.log(selectedFile)
            if (mode == 'create') {
                const formAllData = new FormData();
                formAllData.append("file", selectedFile);

                const title = formData?.title
                const issuingOrganization = formData?.issuingOrganization
                const credentialUrl = formData?.credentialUrl
                const description = formData?.description
                const expired = formData?.expired
                const issueDate = issue
                const expirationDate = expiration

                formAllData.append('String', JSON.stringify({
                    title,
                    issuingOrganization,
                    credentialUrl,
                    description,
                    expired,
                    issueDate,
                    expirationDate
                }))


                const res = await addCertificationWithFile(profileId, formAllData, accessToken);

                if (res) {
                    toast.success('Certification added successfully', 5000);
                    handleClose()
                }
            } else {

                const payload = {
                    title: formData?.title,
                    issuingOrganization: formData?.issuingOrganization,
                    credentialUrl: formData?.credentialUrl,
                    description: formData?.description,
                    expired: formData?.expired,
                    issueDate: issue,
                    expirationDate: expiration
                }

                const res = await updateCertification(id, payload, accessToken)

                if (res) {
                    toast.success('Certification updated successfully')
                    handleClose();
                }

            }
        } catch (error) {
            const errMsg =
                error?.message ||
                "An error occurred. Please try again.";
            toast.error(errMsg, 5000);
        }
    }

    return (
        <Box>
            <span className='title'>{mode === 'create' ? 'Add Your Certificate' : 'Update Your Certificate'}</span>

            <Form>
                <div className="inputBox">
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        type="text"
                        value={formData?.title}
                        name="title"
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
                        label="Issuing organization"
                        variant="outlined"
                        type="text"
                        value={formData?.issuingOrganization}
                        name="issuingOrganization"
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
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DemoContainer components={['DatePicker']} sx={{ width: '100%' }}>
                            <DatePicker label="Issue Date" sx={{ backgroundColor: '#F6F6FB', width: '100%' }} value={issueDate} onChange={(newValue) => setIssueDate(dayjs(newValue))} />
                        </DemoContainer>
                    </LocalizationProvider>

                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DemoContainer components={['DatePicker']} sx={{ width: '100%' }}>
                            <DatePicker label="Expiration Date" sx={{ backgroundColor: '#F6F6FB', width: '100%' }} value={expirationDate} onChange={(newValue) => setExpirationDate(dayjs(newValue))} />
                        </DemoContainer>
                    </LocalizationProvider>
                </div>

                <div className="inputBox" >
                    <TextField
                        id="outlined-basic"
                        label="Credential URL"
                        variant="outlined"
                        type="url"
                        value={formData?.credentialUrl}
                        name="credentialUrl"
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

                    {mode === 'edit' && <div style={{ width: '100%' }}></div>}
                    {mode === 'create' && <div className='resumeBox'>
                        <Label htmlFor='input'><img src={browseIcon} /> <span>{selectedFileName} </span></Label>
                        <FileInput
                            id='input'
                            type="file"
                            accept="*"
                            onChange={handleFileChange2}
                        />
                        <span className='labelText'>Select Certificate</span>
                    </div>}
                </div>

                <Button onClick={handleSubmit}>{mode === 'create' ? 'Add' : 'Save Changes'}</Button>
            </Form>
        </Box>
    )
}

export default CertificationDetails

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

  .resumeBox {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 0.5rem;
    margin-top: 0rem;

    .labelText {
        font-size: 0.8rem;
        font-weight: 500;
    }
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


const Label = styled.label`
  font-weight: 600;
  margin: 0.7rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;


  img {
    width: 2rem;
  }
  
  span {
    color: var(--color);
    
  }
`;

const FileInput = styled.input`
  margin-bottom: 0rem;
  position: absolute;
  left: -9999px;
`;
