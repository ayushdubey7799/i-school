import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getAllResumes } from '../../../../functions/api/jobSeekers/getAllResumes'
import { useSelector } from 'react-redux'

const EnhanceResume = () => {
  const profileId = useSelector(state => state.auth.userData?.user?.profileId);
  const accessToken = useSelector(state => state.auth.userData?.accessToken);
  const [resumeId, setResumeId] = useState(null);
  const [resumeData, setResumeData] = useState([]);
  const [jdText, setJdText] = useState('');

  useEffect(() => {
    const getData = async () => {
      const res = await getAllResumes(profileId, accessToken);
      if (res) {
        setResumeData(res?.data);
      }
    }
    getData();
  }, []);

  const handleCheckboxChange = (id) => {
    setResumeId(id);
  };


  const handleSubmit = () => {

  };


  return (
    <Component>
      <Form onSubmit={handleSubmit}>
        <div className='mainBox'>
          <div className='leftBox'>
            <h4>Select Resume</h4>
            {resumeData.map((resume) => (
              <ResumeItem key={resume.id}>
                <Checkbox
                  checked={resumeId == resume.id}
                  onChange={() => handleCheckboxChange(resume.id)}
                />
                {resume.srcFilename}
              </ResumeItem>
            ))}
          </div>
          <div className='rightBox'>
            <h4>JD</h4>
            <textarea
              value={jdText}
              onChange={(e) => setJdText(e.target.value)}
              rows={5}
            />
          </div>
        </div>
        <SubmitButton type="submit">Create Cover Letter</SubmitButton>
      </Form>
    </Component>
  )
}

export default EnhanceResume

const Component = styled.div`
  width: 90%;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.7rem;
  font-size: 0.9rem;
  background-color: var(--white);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 2rem auto;

  .mainBox {
    display: flex;
    gap: 2rem;
    margin: 0 0 1rem 0;
    width: 90%;
    justify-content: space-between;

    .leftBox {
      width: 100%;
    }

    .rightBox {
      width: 100%;

      h4 {
        line-height: 0.5rem;
      }

      textarea {
        width: 100%;
        height: calc(100% - 2rem);
        padding: 1rem;
        box-sizing: border-box;
      }
    }

  }

  
`;


const SubmitButton = styled.button`
  padding: 0.6rem 1.1rem;
  background-color: var(--lightOrange);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: var(--white);
  font-weight: 600;
  font-size: 0.9rem;
  font-family: var(--font);
  margin-top: 1.5rem;
`;

const ResumeItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 10px;
  cursor: pointer;
`;
