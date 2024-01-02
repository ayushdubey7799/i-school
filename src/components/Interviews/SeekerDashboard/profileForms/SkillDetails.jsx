import React, { useEffect, useState } from 'react'
import { TextField } from "@mui/material";
import styled from 'styled-components';
import addIcon from '../../../../assets/icons/Profile/addIcon.png'
import deleteIcon from '../../../../assets/icons/Profile/deleteIcon.png'
import { useSelector } from 'react-redux';
import { addSkills } from '../../../../functions/api/jobSeekers/addSkills';
import { updateSkill } from '../../../../functions/api/jobSeekers/updateSkill';
import { toast } from 'react-toastify';

const SkillDetails = ({ data, mode, handleClose, id }) => {

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
    }
  }, [])

  const handleSubmit = async () => {
    try {
      if (mode === 'create') {
        const payload = {
          name: formData?.name,
          experienceMonths: formData?.experienceMonths
        }

        const res = await addSkills(profileId, payload, accessToken);

        if (res) {
          toast.success('Skill added successfully')
          handleClose();
        }
      } else {
        const payload = {
          name: formData?.name,
          experienceMonths: formData?.experienceMonths
        }

        const res = await updateSkill(id, payload, accessToken);

        if (res) {
          toast.success('Skill updated successfully')
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

          {/* <div className='iconBox'>
            <img className='addIcon' src={addIcon} />
            <img className='deleteIcon' src={deleteIcon} />
          </div> */}
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

