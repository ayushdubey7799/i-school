import React, { useEffect, useState } from "react";
import styled from "styled-components";
import searchIcon from "../../../../assets/icons/searchIcon.png";
import notificationIcon from "../../../../assets/icons/notification.png";
import { getAllAlerts } from "../../../../functions/api/employers/notifications/getAllAlerts";
import { useSelector } from "react-redux";
import { createBlobUrl } from "../../../commonComponents/Resume";
import { getBlobData } from "../../../../functions/api/resume/getBlobData";
import { timeZoneConversion } from "../../../../utils/timeZoneConversation";
import download from '../../../../assets/icons/download.png'

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
    };
    getAlerts();
  }, []);
  const handleDownload = async (url) => {
    const res = await getBlobData(url, accessToken, clientCode);
    const a = document.createElement('a');
    console.log(res);
    a.href = res;
    a.setAttribute('download',".pdf" );
    a.click();
  };

  return (
    <Box>
      <div className="box1">
        <div className="searchBar">
          <input type="text" placeholder="Search" />
          <img src={searchIcon} />
        </div>
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

                </div>
                <div className="text">
                  <span className="time">{timeZoneConversion(notify.updatedAt)}</span>
                </div>
              </div>
              <span className="btn"> {notify.url ?
                <span onClick={() => handleDownload(notify.url)}>
                  <img src={download} />
                </span>
                :
                <></>
              }</span>
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
            font-size: 1.1rem;
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
    gap: 0.3rem;


    .title {
        font-size: 0.9rem;
        font-weight: 500;
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
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;

    img {
      width: 2rem;
    }
}
}


`;
