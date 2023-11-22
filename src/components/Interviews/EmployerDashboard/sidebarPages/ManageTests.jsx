import React, { useEffect, useRef, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import ModalHOC from '../../SeekerDashboard/ModalHOC';
import CreateQuestionForm from '../CreateQuestionForm';
import filterIcon from '../../../../assets/icons/filterIcon.png'
import searchIcon from '../../../../assets/icons/searchIcon.png'
import closeIcon from '../../../../assets/icons/closeIcon.png'
import editIcon from '../../../../assets/icons/editBlack.png'
import deleteIcon from '../../../../assets/icons/delete.png'


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
    color: var(--lightOrange);
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    margin-left: 1rem;
    text-decoration: none;
  }

  .floatBtn:hover {
    text-decoration: underline;
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
  display: flex;
  justify-content: space-between;
  align-items: center;

  span{
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

  .questionBox {
    display: flex;
    justify-content: space-between;
    align-items: start;

    .iconBox {
      display: flex;
      gap: 0.5rem;
      align-items: start;
    }

    img {
      width: 1rem;
      cursor: pointer;
    }

  }
`;

{/* <span className='questionBox'><span>Q. {item.question}</span> <span className='iconBox'><img src={editIcon}/><img src={deleteIcon}/></span> </span> */}

const ManageTests = () => {
  const [data, setData] = useState(initialData);
  const [createVisible, setCreateVisible] = useState(false);
  const [openBasic, setOpenBasic] = useState(false);

  const [category, setCategory] = useState('');
  const [queType, setQueType] = useState('');

  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);


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

  const handleCategoryChange = (inp) => {
    setCategory(inp);
  }

  const handleQueTypeChange = (inp) => {
    setQueType(inp);
  }

  const handleSearch = () => {

  }

  const toggleDropdown = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({ top: rect.bottom });
    }
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const resetFilters = () => {
    setCategory('');
    setQueType('');
  };

  const applyFilters = () => {

  };

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
                <div className='skillBox'>
                  <input
                    className='skillInput'
                    type="text"
                    placeholder="Enter keywords..."
                  />
                </div>
                <button className='btn' onClick={() => handleSearch()}><img src={searchIcon} />Search</button>

                <button onClick={toggleDropdown} ref={buttonRef} className='mainBtn'><img src={filterIcon} /></button>

                {isOpen && (
                  <div className="dropdown" style={{ top: position.top, left: position.left }}>
                    <div className="buttons">
                      <button onClick={resetFilters} className='button'>Reset Filters</button>
                      <button onClick={applyFilters} className='button'>Apply Filters</button>
                      <img src={closeIcon} className='image' onClick={closeDropdown} />
                    </div>


                    <div className="content">
                      <InputBox>
                        <span className="title">Category</span>
                        <div className="childInputBox">
                          <label>
                            <input
                              type="checkbox"
                              value="Technical"
                              onChange={() => handleCategoryChange('Technical')}
                            /> Technical
                          </label>
                          <label>
                            <input
                              type="checkbox"
                              value="Non-technical"
                              onChange={() => handleCategoryChange('Non-technical')}
                            /> Non-technical
                          </label>
                          <label>
                            <input
                              type="checkbox"
                              value="Aptitude"
                              onChange={() => handleCategoryChange('Aptitude')}
                            /> Aptitude
                          </label>
                          <label>
                            <input
                              type="checkbox"
                              value="Cultural"
                              onChange={() => handleCategoryChange('Cultural')}
                            /> Cultural
                          </label>
                        </div>
                      </InputBox>

                      <InputBox>
                        <span className="title">Que Type</span>
                        <div className="childInputBox">
                          <label>
                            <input
                              type="checkbox"
                              value="Subjective"
                              onChange={() => handleQueTypeChange('Subjective')}
                            /> Subjective
                          </label>
                          <label>
                            <input
                              type="checkbox"
                              value="Objective"
                              onChange={() => handleQueTypeChange('Objective')}
                            /> Objective
                          </label>
                          <label>
                            <input
                              type="checkbox"
                              value="Coding"
                              onChange={() => handleQueTypeChange('Coding')}
                            /> Coding
                          </label>
                        </div>
                      </InputBox>
                    </div>
                  </div>
                )}
              </SearchBarContainer>
              <ModalHOC openNewInterviewModal={openBasic} setOpenNewInterviewModal={setOpenBasic} Component={CreateQuestionForm} />
              <ListTitle>Available Questions <span onClick={() => setOpenBasic(true)} className='floatBtn'>Add Question</span></ListTitle>
              {data.list1.map((item, index) => (
                <Draggable key={item.id.toString()} draggableId={item.id.toString()} index={index}>
                  {(provided) => (
                    <ListItem
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <span className='questionBox'><span>Q. {item.question}</span> <span className='iconBox'><img src={editIcon}/><img src={deleteIcon}/></span> </span>
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
              <ListTitle>Drop Questions here to create a test {createVisible && <span className='floatBtn'>Create Test</span>}
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
  justify-content: space-between;


  .skillBox {
    width: 50%;
  }



  .skillInput {
  flex-grow: 1;
  border: none;
  border-bottom: 0.1rem solid lightgrey;
  height: 100%;
  width: 100%;
  padding: 0.1rem 0.1rem 0.4rem 0.1rem;
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
    width: 70%;
    outline: none;

    option {
      font-size: 0.75rem;
    font-weight: 400;
  }
  }


  .dropdown {
    position: absolute;
    top: 0;
    left: 20rem;
    width: calc(50% - 14rem);
    // height: 50%;
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    z-index: 1;
    padding: 1rem;
    border-radius: 0.5rem;
  }
  
  .content {
    height: 50%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 1rem;
  }
  
  .buttons {
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem;
    position: relative;  
    gap: 0.8rem;
    

    .button {
      font-size: 0.8rem;
      background-color: var(--white);
      border: 0.08rem solid var(--color);
      padding: 0.2rem 0.3rem;
      border-radius: 0.2rem;
      cursor: pointer;
    }

    .image {
      width: 1.4rem;
      height: 1.4rem;
      cursor: pointer;
    }

  }


  .mainBtn {
    align-self: start;
    background-color: var(--white);
    border: 0.08rem solid lightgrey;
    padding: 0.4rem 0.4rem;
    border-radius: 0.3rem;
    cursor: pointer;
    height: 2.2rem;
    width: 2.2rem;
    display: flex;
    align-items: center;
    align-self: center;

    img {
      width: 100%;
    }
  }

`
const InputBox = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;



.childInputBox {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  label {
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    cursor: pointer;
  }

  input {
    cursor: pointer;
  }
}

.title {
  font-size: 0.95rem;
  font-weight: 500;

}



`