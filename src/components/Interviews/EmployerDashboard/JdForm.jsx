import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { addJd } from '../../../functions/api/employers/addJd';
import { useSelector } from 'react-redux';
import { editJd } from '../../../functions/api/employers/editJd';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;

  .check {
    width: 100%;
    display: flex;
    justify-content: start;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;

const Label = styled.label`
font-size: 0.8rem;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function JdForm({ array, handleClose }) {
  const [mode, setMode] = useState("create");
  const [autoReq, setAutoReq] = useState(false);
  const [formData, setFormData] = useState({
    jdId: '',
    reqNumber: '',
    numberOfReqs: '',
    title: '',
    description: '',
    skills: '',
    bu: '',
    exp: '',
    location: '',
    certification: '',
    workerType: '',
    ctc: '',
    keywords: '',
    jdUpload: null,
    visibility: '',
  });
  const accessToken = useSelector(state => state.auth.userData.accessToken);
  const clientCode = useSelector(state => state.auth.userData.user.clientCode);
  useEffect(() => {
    if (array[0]) {
      setFormData(array[0]);
    }
    setMode(array[1])
    console.log("props", array[1]);
  }, [])

  console.log(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
    if (mode == "create") {
      const resObj = await addJd(formData, accessToken, clientCode);
      handleClose();
      console.log(resObj);
    }
    else {
      const editRes = await editJd(formData, accessToken, clientCode);
      handleClose();
      console.log(editRes);
    }
  };

  return (
    <Container>
      <h3>JD Registration</h3>
      <Form onSubmit={handleSubmit}>
        <Label>JD ID (ABC_XX__)</Label>
        <Input
          type="text"
          name="jdId"
          value={formData.jdId}
          onChange={handleChange}
        />

        <Label>Req Number (From Employer System)</Label>
        <Input
          type="text"
          name="reqNumber"
          value={formData.reqNumber}
          onChange={handleChange}
          disabled={autoReq}
        />

        <Label>Auto Generate Req Number</Label>
        <div className='check'>
          <Input
            type='checkbox'
            onClick={() => setAutoReq(!autoReq)}
          />
        </div>


        <Label>Number of Reqs</Label>
        <Input
          type="text"
          name="reqNumber"
          value={formData.numberOfReqs}
          onChange={handleChange}
        />

        <Label>Title</Label>
        <Input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <Label>Description</Label>
        <Textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <Label>Skills</Label>
        <Input
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
        />

        <Label>BU</Label>
        <Input
          type="text"
          name="bu"
          value={formData.bu}
          onChange={handleChange}
        />

        <Label>Exp</Label>
        <Input
          type="text"
          name="exp"
          value={formData.exp}
          onChange={handleChange}
        />

        <Label>Location</Label>
        <Input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />

        <Label>Certification</Label>
        <Input
          type="text"
          name="certification"
          value={formData.certification}
          onChange={handleChange}
        />

        <Label>Worker Type</Label>
        <Select
          name="workerType"
          value={formData.workerType}
          onChange={handleChange}
        >
          <option value="">Select Worker Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          {/* Add more worker type options here */}
        </Select>

        <Label>CTC</Label>
        <Input
          type="text"
          name="ctc"
          value={formData.ctc}
          onChange={handleChange}
        />

        <Label>Keywords</Label>
        <Input
          type="text"
          name="keywords"
          value={formData.keywords}
          onChange={handleChange}
        />

        <Label>JD Upload</Label>
        <Input
          type="file"
          name="jdUpload"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
        />

        <Label>Visibility</Label>
        <Select
          name="visibility"
          value={formData.visibility}
          onChange={handleChange}
        >
          <option value="">Select Visibility</option>
          <option value="Public">Public</option>
          <option value="Private">Private</option>
        </Select>

        <Button type="submit">{mode == "create" ? "Submit" : "Edit Changes"}</Button>
      </Form>
    </Container>
  );
}

export default JdForm;
