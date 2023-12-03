import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { addJd } from "../../../functions/api/employers/addJd";
import { useSelector } from "react-redux";
import { editJd } from "../../../functions/api/employers/editJd";
import { TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { toast } from "react-toastify";

import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import { locations, technicalSkills } from "../../../utils/contantData";
import Saved from "../../commonComponents/infoDialog/Saved";
import Created from "../../commonComponents/infoDialog/Created";
import Error from "../../commonComponents/infoDialog/Error";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 0.3rem;

  .check {
    width: 100%;
    display: flex;
    justify-content: start;
  }

  .fileInputBox {
    position: relative;
    width: 100%;

    textarea {
      width: 100%;
      border: 1px solid #ccc;
      background-color: #f6f6fb;
      outline-color: #ccc;
      border-radius: 0.5rem;
      box-sizing: border-box;
      padding: 0.5rem 1rem;
      font-size: 0.8rem;
      font-weight: 400;
    }

    textarea:focus {
      outline-color: #1976d2;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  gap: 1rem;

  #outlined-basic {
    padding: 0.5rem 0.5rem;
    background-color: #f6f6fb;
  }

  #demo-simple-select-label {
    font-size: 0.8rem;
    font-weight: 400;
  }
`;

const Label = styled.label`
  font-size: 0.8rem;
  margin-bottom: 8px;
  font-weight: 500;
  color: grey;
  position: absolute;
  top: -0.5rem;
  left: 1rem;
  background-color: var(--white);
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #ccc;
  background-color: #f6f6fb;
  outline-color: #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
`;

const Button = styled.button`
  padding: 0.7rem 1.5rem;
  background-color: var(--lightOrange);
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  align-self: center;
`;

function JdForm({ array, handleClose }) {
  console.log("==========>",array)
  const [mode, setMode] = useState("create");
  const [autoReq, setAutoReq] = useState(false);
  const [formData, setFormData] = useState({
    jdId: "",
    reqNumber: "",
    numOfReqs: 0,
    title: "",
    description: "",
    skills: "",
    bu: "",
    exp: "",
    location: "",
    certification: "",
    workType: "",
    ctc: "",
    keywords: "",
    jd: "",
    noticePeriod: "",
    companyType: "",
    candidateAvl: "",
    hiringManager: "",
    recruiter: "",
    // jobSummary: '',
    jdUpload: null,
    visibility: "",
    autoReqNumbers: true,
  });

  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const [initialReqs, setInitialReqs] = useState(0);
  const [reqsError, setReqsError] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");
  const [errorPopup, setErrorPopup] = useState(false);
  const [createdPopup, setCreatedPopup] = useState(false);
  const [savedPopup, setSavedPopup] = useState(false);

  const handleErrorPopUpClose = () => {
    setErrorPopup(false);
  };

  const handleCreatedPopUpClose = () => {
    setCreatedPopup(false);
  };

  const handleSavedPopUpClose = () => {
    setSavedPopup(false);
  };

  const handleLocationsChange = (_, newLocations) => {
    setSelectedLocations(newLocations);
  };

  const handleSkillsChange = (_, newSkills) => {
    setSelectedSkills(newSkills);
  };

  useEffect(() => {
    setFormData({
      ...formData,
      skills: selectedSkills.join(", "),
    });
  }, [selectedSkills]);

  useEffect(() => {
    setFormData({
      ...formData,
      location: selectedLocations.join(", "),
    });
  }, [selectedLocations]);

  const accessToken = useSelector((state) => state.auth.userData.accessToken);
  const clientCode = useSelector(
    (state) => state.auth.userData.user.clientCode
  );
  useEffect(() => {
    console.log(array[0]);
    if (array[0]) {
      setFormData(array[0]);
      setInitialReqs(array[0].numOfReqs);
      setSelectedSkills(array[0].skills.split(", "));
      setSelectedLocations(array[0].location.split(", "));
    }
    setMode(array[1]);
  }, []);

  // useEffect(() => {
  //   if (array[1] == "clone") {
  //     setFormData({
  //       ...formData,
  //       jdId: "",
  //     });
  //   }
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const checkReqs = () => {
    console.log("Checking");
    if (formData.numOfReqs < initialReqs) {
      console.log("Reqs");

      setReqsError(true);
      setFormData({
        ...formData,
        numOfReqs: initialReqs,
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      jdUpload: file,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    handleClose();
    // if(mode=='clone')await handleCloneData
    try {
      if (mode === "create" || mode === "clone") {
        const resObj = await addJd(formData, accessToken, clientCode);
        if (resObj) {
          setCreatedPopup(true);
          console.log(resObj);
        }
      } else {
        const editRes = await editJd(formData, accessToken, clientCode);
        if (editRes) {
          setSavedPopup(true);
          console.log(editRes);
        }
      }
    } catch (error) {
      // Handle the error appropriately
      console.error("Error during JD submission:", error);
      const errMsg =
        error.response.data.notify.message ||
        "An error occurred. Please try again.";
      setErrorMsg(errMsg);
      setErrorPopup(true);
      // Optionally, you can also log more details about the error or perform additional error handling steps.
    }
  };

  {
    errorMsg && console.log(errorMsg);
  }


// const checkJdPresent = async () => {
//   const res = 
// }
  return (
    <Container>
      {errorPopup && (
        <Error
          handleClose={handleErrorPopUpClose}
          open={errorPopup}
          msg={errorMsg}
          handleRetryFunc={handleRegister}
        />
      )}
      {createdPopup && (
        <Created
          handleClose={handleCreatedPopUpClose}
          open={createdPopup}
          msg="JD successfully created"
        />
      )}
      {savedPopup && (
        <Saved
          handleClose={handleSavedPopUpClose}
          open={savedPopup}
          msg="JD successfully updated"
        />
      )}
      <h3>JD Registration</h3>
      <Form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="JD ID (ABC_XX__)"
          variant="outlined"
          type="text"
          name="jdId"
          value={formData.jdId}
          onChange={handleChange}
          // onBlur={checkJdPresent}
          // onFocus={handleJdPresentError}
          disabled={mode == "edit"}
          sx={{ backgroundColor: "#F6F6FB" }}
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
          required
        />

     
        <TextField
          id="outlined-basic"
          label="Number of Reqs"
          variant="outlined"
          type="text"
          name="numOfReqs"
          value={formData.numOfReqs}
          onChange={handleChange}
          onBlur={() => checkReqs()}
          onFocus={() => setReqsError(false)}
          sx={{ backgroundColor: "#F6F6FB" }}
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
          required
        />
        {reqsError && <p>Error Message</p>}

        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          sx={{ backgroundColor: "#F6F6FB" }}
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
          required
        />

        <div className="fileInputBox">
          <Label>Job Description</Label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            required
          ></textarea>
        </div>

        <Stack spacing={3} sx={{ width: "100%" }}>
          <Autocomplete
            multiple
            id="tags-standard"
            options={technicalSkills}
            getOptionLabel={(option) => option}
            onChange={handleSkillsChange}
            value={selectedSkills}
            required
            renderInput={(params) => (
              <TextField
                {...params}
                label="Skills"
                sx={{ backgroundColor: "#F6F6FB" }}
              />
            )}
          />
        </Stack>

        <TextField
          id="outlined-basic"
          label="BU"
          variant="outlined"
          type="text"
          name="bu"
          value={formData.bu}
          onChange={handleChange}
          sx={{ backgroundColor: "#F6F6FB" }}
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
        />

        <TextField
          id="outlined-basic"
          label="Exp"
          variant="outlined"
          type="text"
          name="exp"
          value={formData.exp}
          onChange={handleChange}
          sx={{ backgroundColor: "#F6F6FB" }}
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
          required
        />

        <Stack spacing={3} sx={{ width: "100%" }}>
          <Autocomplete
            multiple
            id="tags-standard"
            options={locations}
            getOptionLabel={(option) => option}
            onChange={handleLocationsChange}
            value={selectedLocations}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Location"
                sx={{ backgroundColor: "#F6F6FB" }}
              />
            )}
          />
        </Stack>

        <TextField
          id="outlined-basic"
          label="Certification"
          variant="outlined"
          type="text"
          name="certification"
          value={formData.certification}
          onChange={handleChange}
          sx={{ backgroundColor: "#F6F6FB" }}
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
        />

        <TextField
          id="outlined-basic"
          label="CTC"
          variant="outlined"
          type="text"
          name="ctc"
          value={formData.ctc}
          onChange={handleChange}
          sx={{ backgroundColor: "#F6F6FB" }}
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
        />

        <TextField
          id="outlined-basic"
          label="Keywords"
          variant="outlined"
          type="text"
          name="keywords"
          value={formData.keywords}
          onChange={handleChange}
          sx={{ backgroundColor: "#F6F6FB" }}
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
        />

        <TextField
          id="outlined-basic"
          label="Hiring Manager"
          variant="outlined"
          type="text"
          name="hiringManager"
          value={formData.hiringManager}
          onChange={handleChange}
          sx={{ backgroundColor: "#F6F6FB" }}
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
        />

        <TextField
          id="outlined-basic"
          label="Recruiter"
          variant="outlined"
          type="text"
          name="recruiter"
          value={formData.recruiter}
          onChange={handleChange}
          sx={{ backgroundColor: "#F6F6FB" }}
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
        />

        {/* <div className='fileInputBox'>
          <Label>Job Description</Label>
          <textarea name='jobSummary' value={formData.jobSummary} onChange={handleChange} rows={5}></textarea>
        </div> */}

        <FormControl sx={{ backgroundColor: "#F6F6FB" }} fullWidth>
          <InputLabel id="demo-simple-select-label">Worker Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formData.workType}
            label="Worker Type"
            onChange={handleChange}
            name="workType"
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
            <MenuItem value="Full-time">Full-time</MenuItem>
            <MenuItem value="Part-time">Part-time</MenuItem>
            <MenuItem value="Contract">Contract</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ backgroundColor: "#F6F6FB" }} fullWidth>
          <InputLabel id="demo-simple-select-label">Notice Period</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Notice Period"
            name="noticePeriod"
            value={formData.noticePeriod}
            onChange={handleChange}
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
            <MenuItem value="Immediate">Immediate</MenuItem>
            <MenuItem value="1week">1 Week</MenuItem>
            <MenuItem value="2weeks">2 Weeks</MenuItem>
            <MenuItem value="1month">1 Month</MenuItem>
            <MenuItem value="2months">2 Months</MenuItem>
            <MenuItem value="3months">3 Months</MenuItem>
            <MenuItem value="6months">6 Months</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ backgroundColor: "#F6F6FB" }} fullWidth>
          <InputLabel id="demo-simple-select-label">Company Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Company Type"
            name="companyType"
            value={formData.companyType}
            onChange={handleChange}
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
            <MenuItem value="service">Service</MenuItem>
            <MenuItem value="product">Product</MenuItem>
            <MenuItem value="serviceStartup">Service Start up</MenuItem>
            <MenuItem value="productStartup">Product Start up</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ backgroundColor: "#F6F6FB" }} fullWidth>
          <InputLabel id="demo-simple-select-label">
            Candidate Availability
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Candidate Availability"
            name="candidateAvl"
            value={formData.candidateAvl}
            onChange={handleChange}
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
            <MenuItem value="Immediate">Immediate</MenuItem>
            <MenuItem value="1week">1 Week</MenuItem>
            <MenuItem value="2weeks">2 Weeks</MenuItem>
            <MenuItem value="1month">1 Month</MenuItem>
            <MenuItem value="2months">2 Months</MenuItem>
            <MenuItem value="3months">3 Months</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ backgroundColor: "#F6F6FB" }} fullWidth required>
          <InputLabel id="demo-simple-select-label">Visibility</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Visibility"
            name="visibility"
            value={formData.visibility}
            onChange={handleChange}
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
            <MenuItem value="PUBLIC">Public</MenuItem>
            <MenuItem value="PRIVATE">Private</MenuItem>
          </Select>
        </FormControl>

        <Button type="submit">
          {mode == "create" ? "Submit" : "Save Changes"}
        </Button>
      </Form>
    </Container>
  );
}

export default JdForm;
