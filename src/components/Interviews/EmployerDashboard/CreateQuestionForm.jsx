import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;

  .title {
    font-size: 0.9rem;
    font-weight: 600;
    display: block;
    margin-bottom: 1rem;
  }

  @media (max-width: 2000px) {
    #outlined-basic {
      padding: 0.75rem 0.5rem;
      background-color: #F6F6FB;
    }
  }

  @media (max-width: 1700px) {
    #outlined-basic {
      padding: 0.85rem 0.5rem;
      background-color: #F6F6FB;
    }
  }

  @media (max-width: 1350px) {
    #outlined-basic {
      padding: 0.95rem 0.5rem;
      background-color: #F6F6FB;
    }
  }

  @media (max-width: 1200px) {
    #outlined-basic {
      padding: 1rem 0.5rem;
      background-color: #F6F6FB;
    }
  }

  .textAreaBox {
    width: 100%;
    position: relative;
    margin-top: 0.5rem;

    label {
      font-size: 0.7rem;
  font-weight: 600;
  position: absolute;
  top: -0.5rem;
  left: 0.5rem;
  padding: 0 0.5rem;
  background-color: var(--white);
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  gap: 0.7rem;

  .inputBox {
    width: 100%;
    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;
  }

  .inputBoxMap {
    width: 100%;
    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;
    flex-flow: row wrap;
  }

  .box {
    width: calc(50% - 1rem);
  }
`;

const Label = styled.label`
font-size: 0.8rem;
  margin-bottom: 8px;
  font-weight: 600;
`;

const Textarea = styled.textarea`
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  outline-color: #1976d2;
  background-color: #F6F6FB;
`;


const Button = styled.button`
  padding: 0.6rem 1rem;
  background-color: var(--lightOrange);
  color: var(--white);
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: var(--font);
  display: flex;
  align-self: center;
  margin: 1rem auto;
`;


function CreateQuestionForm({ editingIndex, setEditingIndex }) {
  const [formData, setFormData] = useState({
    type: '',
    role: '',
    tag: '',
    description: '',
    choices: ['', '', '', ''],
    correctAnswer: '',
    category: '',
    testId: '',
  });

  const [questions, setQuestions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleChoiceChange = (e, index) => {
    const newChoices = [...formData.choices];
    newChoices[index] = e.target.value;
    setFormData({
      ...formData,
      choices: newChoices,
    });
  };

  const handleAddQuestion = (e) => {
    e.preventDefault();
    const newQuestion = { ...formData };
    setQuestions([...questions, newQuestion]);
    setFormData({
      type: '',
      role: '',
      tag: '',
      description: '',
      choices: ['', '', '', ''],
      correctAnswer: '',
      category: '',
      testId: '',
    });
  };

  const handleUpdateQuestion = (e) => {
    e.preventDefault();
    const updatedQuestions = [...questions];
    updatedQuestions[editingIndex] = { ...formData };
    setQuestions(updatedQuestions);
    setFormData({
      type: '',
      role: '',
      tag: '',
      description: '',
      choices: ['', '', '', ''],
      correctAnswer: '',
      category: '',
      testId: '',
    });
    setEditingIndex(-1);
  };

  const handleDeleteQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  return (
    <Container>
      <span className='title'>{editingIndex === -1 ? 'Create' : 'Update'} Question Form</span>
      <Form onSubmit={editingIndex === -1 ? handleAddQuestion : handleUpdateQuestion}>

        <div className="inputBox">
          <FormControl sx={{ backgroundColor: '#F6F6FB' }} required fullWidth>
            <InputLabel id="demo-simple-select-label" style={{ fontSize: '0.8rem' }}>Question Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Question Type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              size='small'
              inputProps={{
                sx: {
                  color: '#626264',
                  fontSize: '0.8rem',
                  fontWeight: '400'
                },
              }}
              InputLabelProps={{
                sx: {
                  color: '#626264',
                  fontSize: '0.8rem',
                  fontWeight: '400'
                },
              }}
              sx={{
                padding: '0rem 0 0.5rem 0',
              }}
            >
              <MenuItem value="Subjective">Subjective</MenuItem>
              <MenuItem value="Objective">Objective</MenuItem>
              <MenuItem value="Coding">Coding</MenuItem>
            </Select>
          </FormControl>

          <TextField id="outlined-basic" label="Role (SDE, HR, Manager...)" variant="outlined"
            type='text'
            name="role"
            value={formData.role}
            onChange={handleChange}
            inputProps={{
              sx: {
                color: '#626264',
                fontSize: '0.8rem',
                fontWeight: '400'
              },
            }}
            InputLabelProps={{
              sx: {
                color: '#626264',
                fontSize: '0.8rem',
                fontWeight: '400'
              },
            }}
            required
            fullWidth
          />
        </div>

        <div className="inputBox">
          <TextField id="outlined-basic" label="Tag" variant="outlined"
            type='text'
            name="tag"
            value={formData.tag}
            onChange={handleChange}
            inputProps={{
              sx: {
                color: '#626264',
                fontSize: '0.8rem',
                fontWeight: '400'
              },
            }}
            InputLabelProps={{
              sx: {
                color: '#626264',
                fontSize: '0.8rem',
                fontWeight: '400'
              },
            }}
            required
            fullWidth
          />

          <FormControl sx={{ backgroundColor: '#F6F6FB' }} required fullWidth>
            <InputLabel id="demo-simple-select-label" style={{ fontSize: '0.8rem' }}>Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              size='small'
              inputProps={{
                sx: {
                  color: '#626264',
                  fontSize: '0.8rem',
                  fontWeight: '400'
                },
              }}
              InputLabelProps={{
                sx: {
                  color: '#626264',
                  fontSize: '0.8rem',
                  fontWeight: '400'
                },
              }}
              sx={{
                padding: '0rem 0 0.5rem 0',
              }}
            >
              <MenuItem value="Technical">Technical</MenuItem>
              <MenuItem value="Non-technical">Non-technical</MenuItem>
              <MenuItem value="Aptitude">Aptitude</MenuItem>
              <MenuItem value="Cultural">Cultural</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className='textAreaBox'>
          <label>Que Description</label>
          <Textarea
            name="description"
            rows={5}
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>




        {formData.type === 'Objective' && (
          <>
            <Label>Choices</Label>
            <div className="inputBoxMap">
            {formData.choices.map((choice, index) => (
              <div key={index} className='box'>
                <TextField id="outlined-basic" label={index + 1} variant="outlined"
                  type='text'
                  value={choice}
                  onChange={(e) => handleChoiceChange(e, index)}
                  inputProps={{
                    sx: {
                      color: '#626264',
                      fontSize: '0.8rem',
                      fontWeight: '400'
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      color: '#626264',
                      fontSize: '0.8rem',
                      fontWeight: '400'
                    },
                  }}
                  required
                  fullWidth
                />
              </div>
            ))}
            </div>

            <div style={{width: 'calc(50% - 1rem)'}}>
            <TextField id="outlined-basic" label="Correct Answer" variant="outlined"
              type='text'
              name="correctAnswer"
              value={formData.correctAnswer}
              onChange={handleChange}
              inputProps={{
                sx: {
                  color: '#626264',
                  fontSize: '0.8rem',
                  fontWeight: '400'
                },
              }}
              InputLabelProps={{
                sx: {
                  color: '#626264',
                  fontSize: '0.8rem',
                  fontWeight: '400'
                },
              }}
              required
              fullWidth
            />
            </div>
          </>
        )}

        <Button type="submit">
          {editingIndex === -1 ? 'Add Question' : 'Update Question'}
        </Button>
      </Form>
    </Container>
  );
}

export default CreateQuestionForm;
