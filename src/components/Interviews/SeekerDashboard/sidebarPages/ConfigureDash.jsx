import React, { useState } from 'react'
import styled from 'styled-components'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import metric1 from '../../../../assets/icons/metric1.png'
import metric2 from '../../../../assets/icons/metric2.png'
import metric3 from '../../../../assets/icons/metric3.png'
import metric4 from '../../../../assets/icons/metric4.png'
import metric5 from '../../../../assets/icons/metric5.png'
import metric6 from '../../../../assets/icons/metric6.png'
import metric7 from '../../../../assets/icons/metric7.png'
import metric8 from '../../../../assets/icons/metric8.png'



const initialData = {
    list1: [
        {
            id: 1,
            title: 'Interview Scheduled',
            text: 'interviewScheduled',
            img: metric1,
        },
        {
            id: 2,
            title: 'Interviews Completed',
            text: 'interviewCompleted',
            img: metric2,
        },
        {
            id: 3,
            title: 'Recommended Jobs',
            text: 'recommendedJobs',
            img: metric3,
        },
        {
            id: 4,
            title: 'Applied Jobs',
            text: 'appliedJobs',
            img: metric4,
        },
    ]

    ,
    list2: [
        {
            id: 5,
            title: 'Interviews Upcoming (next 7 days)',
            text: 'interviewsUpcoming',
            img: metric5,
        },
        {
            id: 6,
            title: 'Interviews in Progress',
            text: 'interviewsInProgress',
            img: metric6,
        },
        {
            id: 7,
            title: 'Profile Views',
            text: 'profileViews',
            img: metric7,
        },
        {
            id: 8,
            title: 'My Profile',
            text: 'myProfile',
            img: metric8,
        }
    ],
};


const ConfigureDash = () => {

    const [data, setData] = useState(initialData);

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




    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Container>
                <Droppable droppableId="list1" direction="vertical">
                    {(provided) => (
                        <LeftBox ref={provided.innerRef} {...provided.droppableProps}>
                            <span className='title'>Current Metrics</span>
                            {
                                data.list1.map((item, index) => (
                                    <Draggable key={item.id.toString()} draggableId={item.id.toString()} index={index}>
                                        {(provided) => (
                                            <div className='cardBox'
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}>
                                                <Card>
                                                    <div className='top'>
                                                        <img src={item.img} />
                                                        <span className='achievedNumberDigit'>{index + 1}</span>
                                                    </div>
                                                    <span className='hrLine'></span>
                                                    <span className='achievedNumberText'>{item.title}</span>
                                                </Card>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                            {provided.placeholder}
                        </LeftBox>
                    )}
                </Droppable>
                <Droppable droppableId="list2" direction="vertical">
                    {(provided) => (
                        <RightBox ref={provided.innerRef} {...provided.droppableProps}>
                            <span className='title'>Optional Metrics</span>
                            {
                                data.list2.map((item, index) => (
                                    <Draggable key={item.id.toString()} draggableId={item.id.toString()} index={index}>
                                        {(provided) => (
                                            <div className='cardBox'
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}>
                                                <Card>
                                                    <div className='top'>
                                                        <img src={item.img} />
                                                        <span className='achievedNumberDigit'>{index + 1}</span>
                                                    </div>
                                                    <span className='hrLine'></span>
                                                    <span className='achievedNumberText'>{item.title}</span>
                                                </Card>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                            {provided.placeholder}
                        </RightBox>
                    )}
                </Droppable>
            </Container>
        </DragDropContext>

    )
}

export default ConfigureDash

const Container = styled.div`
display: flex;
width: 100%;
flex-direction: row;
align-items: start;
margin: 2rem auto
gap: 2rem;


.cardBox {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

`

const LeftBox = styled.div`
width: 98%;
margin: 1rem 2rem;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: var(--white);
padding: 2rem 3%;
box-sizing: border-box;
border-radius: 0.5rem;
border: 0.075rem solid grey;
gap: 2rem;

.title {
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
}

`

const RightBox = styled.div`
width: 98%;
margin: 1rem 2rem;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: var(--white);
padding: 2rem 3%;
box-sizing: border-box;
border-radius: 0.5rem;
border: 0.075rem solid grey;
gap: 2rem;

.title {
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
}

`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.7rem;
  background-color: var(--white);
  padding: 1rem 0 1.5rem 0;
  width: 90%;
  height: 7rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.5);

  .top {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    img {
      width: 3rem;
      height: 3rem;
    }
  }

  .achievedNumberDigit {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color);
  }
  
  .achievedNumberText {
    font-size: 0.9rem;
      font-weight: 600;
      color: var(--color);
      text-align: center;
  }

  .hrLine {
    width: 100%;
    border-top: 0.1rem groove lightgrey;
    margin: -0.2rem 0 -0.9rem 0;
    box-shadow: 0 0.5px 0.5px rgba(0, 0, 0, 0.25);
  }

`