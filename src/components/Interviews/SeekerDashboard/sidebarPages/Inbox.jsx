import React from 'react'
import styled from 'styled-components'
import searchIcon from '../../../../assets/icons/searchIcon.png'
import notificationIcon from '../../../../assets/icons/notification.png'


const notifications = [
    {
        title: "New Message",
        description: "You have a new message from John Doe",
        time: "1h ago",
    },
    {
        title: "Meeting Reminder",
        description: "Don't forget your meeting at 2:30 PM",
        time: "2h ago",
    },
    {
        title: "Payment Received",
        description: "You've received a payment of $100",
        time: "3h ago",
    },
    {
        title: "New Follower",
        description: "You have a new follower on social media",
        time: "4h ago",
    },
    {
        title: "Product Update",
        description: "Check out the latest product updates",
        time: "5h ago",
    },
];


const Inbox = () => {
    return (
        <Box>
            <div className='box1'>
                <div className='searchBar'>
                    <input
                        type='text'
                        placeholder='Search'
                    />
                    <img src={searchIcon} />
                </div>
                <img src={notificationIcon} className='notificationIcon' />
            </div>

            <div className='box2'>
                <div className='left'>
                    <span className='title'>Notifications</span>
                    <span className='text'>You have {notifications.length} notifications to go through</span>
                </div>

                <div className='right'>
                    Mark all as Read
                </div>
            </div>

            <div className='box3'>
                {
                    notifications.map((notify, i) => (
                        <div className='mainCard'>
                            <div className='card'>
                                <div className='textBox'>
                                    <div className='title'>{notify.title} <span className='time'>{notify.time}</span></div>
                                    <div className='text'>{notify.description}</div>
                                </div>
                                <span className='btn'>View</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Box>
    )
}

export default Inbox


const Box = styled.div`
width: 90%;
display: flex;
flex-direction: column;
gap: 2.5rem;
margin-bottom: 3rem;
margin: 0 auto 3rem auto;




.box1 {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .notificationIcon {
        width: 1.5rem;
        height: 1.5rem;
    }
}
.searchBar {
    height: 2rem;
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--white);
    padding: 0.3rem 0.5rem;
    border-radius: 0.3rem;

    input {
        width: 80%;
        height: 100%;
        border: none;
        outline: none;
    }

    img {
        width: 1.3rem;
        height: 1.3rem;
        background-color: var(--lightOrange);
        padding: 0.3rem;
        border-radius: 0.3rem;
        cursor: pointer;
    }
}

.box2 {
    display: flex;
    justify-content: space-between;
    align-items: start;


    .left {
        display: flex;
        flex-direction: column;
        gap: 1rem;


        .title {
            font-size: 1.5rem;
            font-weight: 600;
        }

        .text {
            font-size: 0.9rem;
            font-weight: 500;
        }
    }

    .right {
        background-color: var(--white);
        font-size: 0.9rem;
        font-weight: 500;
        padding: 0.4rem 0.8rem;
        border-radius: 0.4rem;
        cursor: pointer;
    }
}

.box3 {
    width: 100%:
}


.mainCard {
display: flex;
flex-direction: column;
margin-bottom: 1rem;
}

.card {
    background-color: var(--white);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem 1.2rem;
    border-radius: 0.5rem;


.textBox {
    display: flex;
    flex-direction: column;



    .title {
        font-size: 0.9rem;
        font-weight: 600;
    }

    .text {
        font-size: 0.8rem;
        font-weight: 400;
    }

    .time {
        color: grey;
        font-weight: 500;
        font-size: 0.8rem;
    }
}

.btn {
    color: var(--lightOrange);
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
}
}


`
