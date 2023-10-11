import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
 width: 100%;
margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
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
  padding: 1rem;
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
  padding: 1rem;
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

const QuestionList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

const QuestionItem = styled.li`
  margin-bottom: 10px;
`;

function CreateQuestionForm() {
  const [formData, setFormData] = useState({
    type: '',
    tag: '',
    description: '',
    difficulty: '',
    choices: ['', '', '', ''],
    correctAnswer: '',
  });

  const [questions, setQuestions] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);

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
      tag: '',
      description: '',
      difficulty: '',
      choices: ['', '', '', ''],
      correctAnswer: '',
    });
  };

  const handleEditQuestion = (index) => {
    setEditingIndex(index);
    const questionToEdit = questions[index];
    setFormData({ ...questionToEdit });
  };

  const handleUpdateQuestion = (e) => {
    e.preventDefault();
    const updatedQuestions = [...questions];
    updatedQuestions[editingIndex] = { ...formData };
    setQuestions(updatedQuestions);
    setFormData({
      type: '',
      tag: '',
      description: '',
      difficulty: '',
      choices: ['', '', '', ''],
      correctAnswer: '',
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
      <h3>Create Question Form</h3>
      <Form onSubmit={editingIndex === -1 ? handleAddQuestion : handleUpdateQuestion}>
        <Label>Type</Label>
        <Select
          name="type"
          value={formData.type}
          onChange={handleChange}
        >
          <option value="">Select Type</option>
          <option value="Subjective">Subjective</option>
          <option value="Objective">Objective</option>
        </Select>

        <Label>Tag</Label>
        <Input
          type="text"
          name="tag"
          value={formData.tag}
          onChange={handleChange}
        />

        <Label>Description</Label>
        <Textarea
          name="description"
          rows={5}
          value={formData.description}
          onChange={handleChange}
        />

        <Label>Difficulty Level</Label>
        <Select
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
        >
          <option value="">Select Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </Select>

        {formData.type === 'Objective' && (
          <>
            <Label>Choices</Label>
            {formData.choices.map((choice, index) => (
              <div key={index}>
                <Input
                  type="text"
                  value={choice}
                  onChange={(e) => handleChoiceChange(e, index)}
                />
              </div>
            ))}
            <Label>Correct Answer</Label>
            <Input
              type="text"
              name="correctAnswer"
              value={formData.correctAnswer}
              onChange={handleChange}
            />
          </>
        )}

        <Button type="submit">
          {editingIndex === -1 ? 'Add Question' : 'Update Question'}
        </Button>
      </Form>

      <QuestionList>
        {questions.map((question, index) => (
          <QuestionItem key={index}>
            <p>Tag: {question.tag}</p>
            <p>Description: {question.description}</p>
            <p>Difficulty: {question.difficulty}</p>
            {question.type === 'Objective' && (
              <>
                <p>Choices:</p>
                <ul>
                  {question.choices.map((choice, choiceIndex) => (
                    <li key={choiceIndex}>{choice}</li>
                  ))}
                </ul>
                <p>Correct Answer: {question.correctAnswer}</p>
              </>
            )}
            <Button onClick={() => handleEditQuestion(index)}>Edit</Button>
            <Button onClick={() => handleDeleteQuestion(index)}>Delete</Button>
          </QuestionItem>
        ))}
      </QuestionList>
    </Container>
  );
}

export default CreateQuestionForm;
