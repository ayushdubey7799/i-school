import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import ModalHOC from '../../SeekerDashboard/ModalHOC';
import CreateQuestionForm from '../CreateQuestionForm';

import searchIcon from '../../../../assets/icons/searchIcon.png'

const initialData = {
  list1: [
    {
      id: 1,
      question: "What is HTML?",
      answer: "HTML (Hypertext Markup Language) is the standard markup language for creating web pages. It describes the structure and content of a web page using various elements and tags."
    },
    {
      id: 2,
      question: "What is CSS?",
      answer: "CSS (Cascading Style Sheets) is a stylesheet language used for describing the presentation and design of a web page written in HTML. It defines how elements should be displayed on the screen, in print, or other media."
    },
    {
      id: 3,
      question: "What is JavaScript?",
      answer: "JavaScript is a high-level, interpreted programming language that allows you to add interactivity and dynamic behavior to web pages. It can be used on both the client-side (in web browsers) and the server-side (with Node.js)."
    },
    {
      id: 4,
      question: "What is a responsive web design?",
      answer: "Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. It uses techniques like flexible grids and layouts, media queries, and fluid images."
    },
    {
      id: 5,
      question: "What is a web server?",
      answer: "A web server is a software or hardware component that serves web content to users. It receives and processes HTTP requests from clients (usually web browsers) and returns web pages and other resources in response."
    },
    {
      id: 6,
      question: "What is a front-end framework?",
      answer: "A front-end framework is a pre-built collection of HTML, CSS, and JavaScript tools, libraries, and templates that simplifies and streamlines web development. Popular front-end frameworks include React, Angular, and Vue.js."
    },
    {
      id: 7,
      question: "What is a back-end framework?",
      answer: "A back-end framework is a set of pre-built tools, libraries, and conventions for developing the server-side of a web application. Examples include Express.js for Node.js and Ruby on Rails for Ruby."
    },
    {
      id: 8,
      question: "What is a database?",
      answer: "A database is a structured collection of data that is organized and stored electronically. It provides a way to efficiently store, retrieve, and manage data. Common types of databases in web development include MySQL, PostgreSQL, and MongoDB."
    },
    {
      id: 9,
      question: "What is HTTP?",
      answer: "HTTP (Hypertext Transfer Protocol) is the protocol used for transmitting data over the World Wide Web. It defines how messages are formatted and transmitted, as well as how web servers and browsers should respond to various commands."
    },
    {
      id: 10,
      question: "What is a URL?",
      answer: "A URL (Uniform Resource Locator) is a reference or address used to access resources on the internet. It specifies the protocol (e.g., HTTP or HTTPS), domain name, path, and sometimes query parameters to locate a specific resource."
    }
  ]



  ,
  list2: [

  ],
};

const Container = styled.div`
width: 90%;
  display: flex;
  margin: 2rem auto;
  padding-bottom: 3rem;

  .floatBtn {
    background-color: var(--lightOrange);
    color: var(--white);
    border: none;
    padding: 0.5rem 0.8rem;
    font-size: 0.9rem;
    font-weight: 500;
    border-radius: 0.5rem;
    cursor: pointer;
    margin-left: 1rem;
    
  }
`;

const QuestionContainer = styled.div`
  width: 50%;
  padding: 1rem;
  margin: 0.5rem;
  font-size: 0.7rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  background-color: var(--white);
`;

const TestContainer = styled.div`
  width: 50%;
  padding: 1rem;
  margin: 8px;
  font-size: 0.7rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  height: auto;
  background-color: var(--white);
`;

const ListTitle = styled.h3`
  text-align: center;
  span{
    margin-left: 1rem;
    font-size: 0.7rem;
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const ListItem = styled.div`
  background-color: #f8f8f8;
  border: 0.08rem solid #ddd;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 0.3rem;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover{
      box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
      transform: scale(1.02)
  }
`;

const ManageTests = () => {
  const [data, setData] = useState(initialData);
  const [createVisible, setCreateVisible] = useState(false);
  const [openBasic, setOpenBasic] = useState(false);

  const [category, setCategory] = useState('');
  const [queType, setQueType] = useState('');


  useEffect(() => {
    if (data.list2.length >= 3) { setCreateVisible(true) } else {
      setCreateVisible(false);
    };

  }, [data])

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination, draggableId } = result;

    if (source.droppableId === destination.droppableId) {
      // Reorder within the same list
      const list = data[source.droppableId];
      const updatedList = [...list];
      const [movedItem] = updatedList.splice(source.index, 1);
      updatedList.splice(destination.index, 0, movedItem);

      const updatedData = {
        ...data,
        [source.droppableId]: updatedList,
      };

      setData(updatedData);
    } else {
      // Move item between lists
      const sourceList = data[source.droppableId];
      const destinationList = data[destination.droppableId];
      const updatedSourceList = [...sourceList];
      const updatedDestinationList = [...destinationList];
      const [movedItem] = updatedSourceList.splice(source.index, 1);
      updatedDestinationList.splice(destination.index, 0, movedItem);

      const updatedData = {
        ...data,
        [source.droppableId]: updatedSourceList,
        [destination.droppableId]: updatedDestinationList,
      };

      setData(updatedData);
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  }

  const handleQueTypeChange = (e) => {
    setQueType(e.target.value);
  }

  const handleSearch = () => {

  }


  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <Droppable droppableId="list1" direction="vertical">
          {(provided) => (
            <QuestionContainer
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <SearchBarContainer>
                <select value={category} onChange={handleCategoryChange} className='selectInput'>
                  <option value="" disabled selected>Category</option>
                  <option value="Technical">Technical</option>
                  <option value="Non-technical">Non-technical</option>
                  <option value="Aptitude">Aptitude</option>
                  <option value="Cultural">Cultural</option>
                </select>
                <select value={queType} onChange={handleQueTypeChange} className='selectInput'>
                  <option value="" disabled selected>Que Type</option>
                  <option value="Subjective">Subjective</option>
                  <option value="Objective">Objective</option>
                  <option value="Coding">Coding</option>
                </select>
                <div className='skillBox'>
                  <input
                    className='skillInput'
                    type="text"
                    placeholder="Enter keywords..."
                  />
                </div>
                <button className='btn' onClick={() => handleSearch()}><img src={searchIcon} />Search</button>
              </SearchBarContainer>
              <ModalHOC openNewInterviewModal={openBasic} setOpenNewInterviewModal={setOpenBasic} Component={CreateQuestionForm} />
              <ListTitle>List of existing questions <button onClick={() => setOpenBasic(true)} className='floatBtn'>Add Question</button></ListTitle>
              {data.list1.map((item, index) => (
                <Draggable key={item.id.toString()} draggableId={item.id.toString()} index={index}>
                  {(provided) => (
                    <ListItem
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      Q. {item.question}
                      <br />
                      <br />
                      A. {item.answer}
                    </ListItem>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </QuestionContainer>
          )}
        </Droppable>
        <Droppable droppableId="list2" direction="vertical">
          {(provided) => (
            <TestContainer
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <ListTitle>Drop Questions here to create a test {createVisible && <button className='floatBtn'>Create Test</button>}
              </ListTitle>

              {data.list2.map((item, index) => (
                <Draggable key={item.id.toString()} draggableId={item.id.toString()} index={index}>
                  {(provided) => (
                    <ListItem
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      Q. {item.question}
                      <br />
                      <br />
                      A. {item.answer}
                    </ListItem>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </TestContainer>
          )}
        </Droppable>
      </Container>
    </DragDropContext>
  );
};

export default ManageTests;



const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0rem auto;
  height: 3.5rem;
  background-color: var(--white);
  border-radius: 0.5rem;;
  padding: 0rem 0.2rem;
  box-sizing: border-box;
  gap: 0.5rem;


  .skillBox {
    position: relative;
    width: 100%;
  }



  .skillInput {
  flex-grow: 1;
  border: none;
  height: 100%;
  width: 100%;
  padding: 0.1rem;
  font-size: 0.75rem;
  background-color: var(--white);
  outline: none;
  }


  .btn {
    background-color: var(--lightOrange);
    padding: 0.3rem 0.7rem;
    border-radius: 1.1rem;
    color: var(--white);
    font-size: 0.8rem;
    font-weight: 600;
    border: none;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    cursor: pointer;
    margin-top: 0rem;
  }

  .btn img {
    width: 1rem;
  }

  .selectInput {
    padding: 0.2rem 0.2rem;
    border: none;
    background-color: var(--white);
    border-radius: 0.3rem;
    font-size: 0.75rem;
    width: 90%;
    outline: none;

    option {
      font-size: 0.75rem;
    font-weight: 400;
  }
  }

`
