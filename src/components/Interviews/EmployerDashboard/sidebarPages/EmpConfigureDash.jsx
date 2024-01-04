import React, { useState } from 'react'
import styled from 'styled-components'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import EmpMetric1 from '../../../../assets/icons/metric2.1.png'
import EmpMetric2 from '../../../../assets/icons/metric2.2.png'
import EmpMetric3 from '../../../../assets/icons/metric2.3.png'
import EmpMetric4 from '../../../../assets/icons/metric2.4.png'
import EmpMetric5 from '../../../../assets/icons/metric2.5.png'
import EmpMetric6 from '../../../../assets/icons/metric2.6.png'
import EmpMetric7 from '../../../../assets/icons/metric2.7.png'
import EmpMetric8 from '../../../../assets/icons/metric2.8.png'


const initialData = {
    current: [
        {
            id: 1,
            title: 'Interviews',
            text: 'interviews',
            img: EmpMetric1,
        },
        {
            id: 2,
            title: 'Active JDs',
            text: 'activeJDs',
            img: EmpMetric2,
        },
        {
            id: 3,
            title: 'Applications',
            text: 'applications',
            img: EmpMetric3,
        },
        {
            id: 4,
            title: 'Candidates Pool',
            text: 'candidatesPool',
            img: EmpMetric4,
        },
    ]

    ,
    optional: [
        {
            id: 5,
            title: 'Invite Sent (Last 30 Days)',
            text: 'inviteSent',
            img: EmpMetric5,
        },
        {
            id: 6,
            title: 'Reviewed Profiles (Last 30 Days)',
            text: 'reviewedProfile',
            img: EmpMetric6,
        },
        {
            id: 7,
            title: 'JD Views (Last 30 Days)',
            text: 'jdViews',
            img: EmpMetric7,
        },
        {
            id: 8,
            title: 'Offers (Last 30 Days)',
            text: 'offers',
            img: EmpMetric8,
        }
    ],
};


const EmpConfigureDash = () => {

    const [data, setData] = useState(initialData);


    const onDragEnd = (result) => {
        if (!result.destination) return;

        const { source, destination } = result;

        // Clone the data to avoid modifying the state directly
        const updatedData = { ...data };

        // Swap the items between source and destination lists
        const sourceList = [...updatedData[source.droppableId]];
        const destinationList = [...updatedData[destination.droppableId]];

        const [movedItem] = sourceList.splice(source.index, 1);
        const [replacedItem] = destinationList.splice(destination.index, 1);

        // Replace the source index with the destination index in source list
        sourceList.splice(destination.index, 0, replacedItem);

        // Replace the destination index with the source index in destination list
        destinationList.splice(source.index, 0, movedItem);

        // Update the data with the modified lists
        updatedData[source.droppableId] = sourceList;
        updatedData[destination.droppableId] = destinationList;

        // Update the state with the modified data
        setData(updatedData);
    };



    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Container>
                <Droppable droppableId="optional" direction="vertical">
                    {(provided) => (
                        <LeftBox ref={provided.innerRef} {...provided.droppableProps}>
                            <span className='title'>Optional Metrics</span>
                            {
                                data.optional.map((item, index) => (
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
                <Droppable droppableId="current" direction="vertical">
                    {(provided) => (
                        <RightBox ref={provided.innerRef} {...provided.droppableProps}>
                            <span className='title'>Current Metrics</span>
                            {
                                data.current.map((item, index) => (
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

export default EmpConfigureDash

const Container = styled.div`
display: flex;
width: 94%;
flex-direction: row;
align-items: start;
margin: 2rem auto
gap: 2rem;
background-color: var(--backgroundColor);
border-radius: 0.5rem;


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
width: 60%;
margin: 1rem 2rem 1rem 20%;
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
width: 60%;
margin: 1rem 20% 1rem 2rem;
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