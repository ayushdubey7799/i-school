import React, { useEffect, useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import styled from 'styled-components';
import addIcon from '../../../../assets/icons/Profile/addIcon.png'
import deleteIcon from '../../../../assets/icons/Profile/deleteIcon.png'
import { useSelector } from 'react-redux';
import { addSkills } from '../../../../functions/api/jobSeekers/addSkills';
import { updateSkill } from '../../../../functions/api/jobSeekers/updateSkill';
import { toast } from 'react-toastify';


const SkillDetails = ({ data, mode, handleClose, id, trigger, setTrigger }) => {

  const profileId = useSelector((state) => state.auth.userData?.user?.profileId);
  const accessToken = useSelector((state) => state.auth.userData?.accessToken);
  const [formData, setFormData] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (mode === 'edit') {
      setFormData(data)
      console.log(data?.expertiseLevel)
    }
  }, [])

  const handleSubmit = async () => {
    try {
      if (mode === 'create') {
        const payload = {
          name: formData?.name,
          experienceMonths: formData?.experienceMonths,
          expertiseLevel: formData?.expertiseLevel,
          rating: formData?.rating
        }

        const res = await addSkills(profileId, payload, accessToken);

        if (res) {
          toast.success('Skill added successfully')
        }
      } else {
        const payload = {
          name: formData?.name,
          experienceMonths: formData?.experienceMonths,
          expertiseLevel: formData?.expertiseLevel,
          rating: formData?.rating
        }

        const res = await updateSkill(id, payload, accessToken);

        if (res) {
          toast.success('Skill updated successfully')
          handleClose();
          setTrigger(!trigger)
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
      <span className='title'>{mode === 'create' ? 'Add Skills' : 'Update Skill'}</span>

      <Form>
        <div className="inputBox">
          <TextField
            id="outlined-basic"
            label="Skill"
            variant="outlined"
            type="text"
            name="name"
            value={formData?.name}
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
            label="Months of Experience"
            variant="outlined"
            type="number"
            name="experienceMonths"
            value={formData?.experienceMonths}
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

        <div className="inputBox">

          <FormControl sx={{ backgroundColor: "#F6F6FB" }} fullWidth>
            <InputLabel id="demo-simple-select-label">Rating</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Rating"
              name='rating'
              value={parseInt(formData?.rating, 10)}
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
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ backgroundColor: "#F6F6FB" }} fullWidth>
            <InputLabel id="demo-simple-select-label">Expertise Level</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Expertise Level"
              name='expertiseLevel'
              value={formData?.expertiseLevel?.length > 0 && formData?.expertiseLevel}
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
              <MenuItem value="beginner">Beginner</MenuItem>
              <MenuItem value="novice">Novice</MenuItem>
              <MenuItem value="intermediate">Intermediate</MenuItem>
              <MenuItem value="proficient">Proficient</MenuItem>
              <MenuItem value="expert ">Expert </MenuItem>
            </Select>
          </FormControl>

        </div>

        <Button onClick={handleSubmit}>{mode === 'create' ? 'Add' : 'Save Changes'}</Button>
      </Form>
    </Box>
  )
}

export default SkillDetails

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
    align-items: center;

    .iconBox {
      display: flex;
      height: 100%;
      align-items: center;
      gap: 1rem;
    }

    .addIcon {
      width: 1rem;
      height: 1rem;
      cursor: pointer;
      background-color: #F6F6FB;
      padding: 0.5rem;
      border-radius: 0.3rem;
    }

    .deleteIcon {
      width: 1rem;
      height: 1rem;
      cursor: pointer;
      background-color: #F6F6FB;
      padding: 0.5rem;
      border-radius: 0.3rem;
    }

    .addIcon:hover , .deleteIcon:hover {
      background-color: var(--lightOrange);
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

