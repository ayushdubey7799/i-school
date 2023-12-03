import React, { useEffect, useState } from "react";
import styled from "styled-components";
import searchIcon from "../../../../assets/icons/searchIcon.png";
import notificationIcon from "../../../../assets/icons/notification.png";
import { getAllAlerts } from "../../../../functions/api/employers/notifications/getAllAlerts";
import { useSelector } from "react-redux";
import { createBlobUrl } from "../../../commonComponents/Resume";
import { getBlobData } from "../../../../functions/api/resume/getBlobData";
import { timeZoneConversion } from "../../../../utils/timeZoneConversation";

const Inbox = () => {
  const [notifications, setNotifications] = useState(null);
  const accessToken = useSelector((state) => state.auth.userData?.accessToken);
  const clientCode = useSelector(
    (state) => state.auth.userData?.user?.clientCode
  );

  useEffect(() => {
    const getAlerts = async () => {
      const res = await getAllAlerts(accessToken, clientCode);

      if (res) setNotifications(res?.messages);
      console.log(res);
    };
    getAlerts();
  }, []);
  const handleDownload = async (url) => {
    const res = await getBlobData(url, accessToken, clientCode);
    console.log(res);
    const a = document.createElement('a');
    a.href = res;
    a.setAttribute('download', 'your-filename.ext');
    a.click();
  };

  return (
    <Box>
      <div className="box1">
        <div className="searchBar">
          <input type="text" placeholder="Search" />
          <img src={searchIcon} />
        </div>
        <img src={notificationIcon} className="notificationIcon" />
      </div>
      <div className="box2">
        <div className="left">
          <span className="title">Notifications</span>
          <span className="text">
            You have {notifications?.length} notifications to go through
          </span>
        </div>

        <div className="right">Mark all as Read</div>
      </div>

      <div className="box3">
        {notifications?.map((notify, i) => (
          <div className="mainCard">
            <div className="card">
              <div className="textBox">
                <div className="title">
                  {notify.title} <span className="time">{notify?.time}</span>
                </div>
                <div className="text">
                  {notify?.message}{" "}
                  {notify.url ? 
                  <button onClick={() => handleDownload(notify.url)}>
                  Download file
                  </button>
                  :
                  <></>
                    
                }
                </div>
                <div className="text">
                    {timeZoneConversion(notify.updatedAt)}
                </div>
              </div>
              <span className="btn">View</span>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default Inbox;

const Box = styled.div`
width: 90%;
display: flex;
flex-direction: column;
gap: 2.5rem;
margin-bottom: 3rem;





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


`;
