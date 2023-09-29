// import React, { useState } from "react";
// import { styled } from "styled-components";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../../assets/IntelliViewLogo.png";
// import { IconButton } from "@mui/material";
// import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
// import MyDrawer from "../LandingPage/Drawer";
// import profileIcon from '../../assets/profileIcon.png'
// import { persistor } from "../../store";
// import { logout } from "../../slices/authSlice";
// import { useDispatch } from "react-redux";


// const Header = ({
//   openNewInterviewModal,
//   setOpenNewInterviewModal,
//   isLoading,
//   setIsLoading,
// }) => {
//   const [openDrawer, setOpenDrawer] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     persistor.purge();
//     dispatch(logout())
//     navigate("/");
//   };

//   return (


//     <StyledDiv>
//       <div id="left">
//         <img src={logo} onClick={() => navigate("/")} />
//       </div>
//       <div id="middle">
//         <li onClick={() => navigate("/")}>Home</li>
//         <li onClick={() => navigate("/about")}>About Us</li>
//         <li onClick={() => navigate("/products")}>Products</li>
//         <li onClick={() => navigate("/services")}>Services</li>
//         <li onClick={() => navigate("/research-paper")}>Research Papers</li>
//         <li onClick={() => navigate("/contact")}>
//           Contact Us
//         </li>
//         <li onClick={() => navigate("/case-studies")}>Case Studies</li>
//       </div>

//       <div id="right">
//         <Link to="/create">
//           <button id="free">Start New Interview</button>
//         </Link>
//         {/* <button onClick={handleLogout} id="sign-in">Logout</button> */}
//         {/* <NewInterviewModal openNewInterviewModal={openNewInterviewModal} setOpenNewInterviewModal={setOpenNewInterviewModal} isLoading={isLoading} setIsLoading={setIsLoading} /> */}

//         <div className="profileIcon">
//           <IconButton>
//             <img src={profileIcon} className="profileImg"/>
//           </IconButton>
//         </div>

//         <div class="dropdown" id="dropdown">
//           <span onClick={() => navigate('/profile')}>View/Edit Profile</span>
//           <span onClick={() => navigate('/reset')}>Reset Password</span>
//           <span onClick={handleLogout}>Logout</span>
//           <span onClick={() => navigate('/support')}>Help</span>
//         </div>
//       </div>

//       <div id="drawer">
//         <IconButton onClick={() => setOpenDrawer(true)}>
//           <MenuRoundedIcon className="link" />
//         </IconButton>
//         <MyDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
//       </div>
//     </StyledDiv>


//   );
// };

// export default Header;


// const StyledDiv = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   color: black;
//   width: 90%;
//   padding: 0% 5%;
//   height: 6rem;
//   position: fixed;
//   z-index: 2000;
//   background-color: var(--white);
//   box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);

//   #left > img {
//     height: 3.5rem;
//     margin-left: -5%;
//     cursor: pointer;
//   }

//   #middle {
//     display: flex;
//     gap: 1rem;
//   }

//   h1 {
//     margin: 0;
//     color: #add8e6;
//   }

//   li {
//     list-style-type: none;
//   }

//   #middle {
//     font-size: 0.9rem;

//     li {
//       cursor: pointer;

//       .contactLink {
//         text-decoration: none;
//         color: black;
//       }
//     }

//     li:hover {
//       font-weight: 600;
//     }

//     @media (max-width: 900px) {
//       display: none;
//     }
//   }

//   #right {
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//     #sign-in {
//       border: none;
//       border-radius: 0.5rem;
//       background-color: var(--lightOrange);
//       color: var(--white);
//       height: 2.3rem;
//       padding: 0.2rem 0.8rem;
//       font-weight: 600;
//       font-size: 0.8rem;
//       cursor: pointer;
//     }

//     #sign-in:hover {
//       background-color: var(--white);
//       color: black;
//       border: 0.1rem solid var(--lightOrange);
//       padding: 0.2rem 0.75rem;
//     }

//     #free:hover {
//       background-color: var(--white);
//       color: black;
//       border: 0.1rem solid var(--lightOrange);
//       padding: 0.2rem 0.75rem;
//     }

//     #free {
//       border: none;
//       border-radius: 0.5rem;
//       height: 2.3rem;
//       padding: 0.2rem 0.8rem;
//       font-weight: 600;
//       font-size: 0.8rem;
//       cursor: pointer;
//       background-color: var(--lightOrange);
//       color: var(--white);
//     }
//   }

//   .profileIcon {
//     position: relative;
//   }

//   .profileImg {
//     width: 1.8rem;
//   }

//   .dropdown {
//     display: none;
//     position: absolute;
//     top: 75%;
//     right: 0.5vw;
//     background-color: white;
//     box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
//     padding: 1rem;
//     font-weight: 400;
//     font-size: 0.8rem;
//     border-radius: 0.5rem;
// }

// .dropdown span {
//     display: block;
//     padding: 8px 10px;
//     text-decoration: none;
//     color: #333;
//     transition: background-color 0.3s ease;
// }

// .dropdown span:hover {
//     background-color: #f5f5f5;
//     border-radius: 5px;
//     cursor: pointer;
// }

// .profileIcon:hover+#dropdown {
//     display: block;
// }

// .dropdown:hover {
//     display: block;
// }

// @media(max-width: 900px) {

//   .dropdown {
//     right: 30%;
//   }
// }

// @media(max-width: 550px) {

//   .dropdown {
//     right: 20%;
//   }
// }


//   #drawer {
//     display: none;

//     @media (max-width: 900px) {
//       display: block;
//     }
//   }
// `;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import MyDrawer from "./Drawer";
import logo from "../../assets/IntelliViewLogo.png";
import { useSelector } from "react-redux";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Header = () => {
  const navigate = useNavigate();
  const accessToken = useSelector(state => state.auth.userData?.accessToken)
  const [openDrawer, setOpenDrawer] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

  const handleMouseEnter1 = () => {
    setHover1(true);
  };

  const handleMouseLeave1 = () => {
    setHover1(false);
  };

  const handleMouseEnter2 = () => {
    setHover2(true);
  };

  const handleMouseLeave2 = () => {
    setHover2(false);
  };

  const handleMouseEnter3 = () => {
    setHover3(true);
  };

  const handleMouseLeave3 = () => {
    setHover3(false);
  };

  console.log(accessToken);

  return (
    <StyledDiv>
      <div id="left">
        <img src={logo} onClick={() => navigate("/")} />
      </div>
      <div id="middle">
        <li onClick={() => navigate("/")}>Home</li>
        <div className="nav-item1 dropdown1" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
          <li className="dropdown-toggle1" >Products {!hover1 ? <KeyboardArrowDownIcon sx={{ fontSize: '1.1rem', color: 'var(--color)', }} /> : <KeyboardArrowUpIcon sx={{ fontSize: '1.1rem', color: 'var(--color)', }} />}</li>
          <div className="dropdown-menu1">
            <a href="/product/intelliview">IntelliView</a>
            <a href="/product/intellisource">IntelliSource</a>
            <a href="/product/intelliboard">IntelliBoard</a>
          </div>
        </div>
        <div className="nav-item2 dropdown2" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
          <li className="dropdown-toggle2">Services {!hover2 ? <KeyboardArrowDownIcon sx={{ fontSize: '1.1rem', color: 'var(--color)', }} /> : <KeyboardArrowUpIcon sx={{ fontSize: '1.1rem', color: 'var(--color)', }} />}</li>
          <div className="dropdown-menu2">
            <a href="/service/screening">Screening</a>
            <a href="/service/data-analytics">Data Analytics</a>
            <a href="/service/talent-management">Talent Management</a>
          </div>
        </div>

        <div className="nav-item3 dropdown3" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
          <li className="dropdown-toggle3" >Solutions {!hover3 ? <KeyboardArrowDownIcon sx={{ fontSize: '1.1rem', color: 'var(--color)', }} /> : <KeyboardArrowUpIcon sx={{ fontSize: '1.1rem', color: 'var(--color)', }} />}</li>
          <div className="dropdown-menu3">
            <a href="/solution/enterprise">For Enterprises</a>
            <a href="/solution/recruitment-agency">For Recruitment Agencies</a>
            <a href="/solution/job-seeker">For Job Seekers</a>
          </div>
        </div>

        <li onClick={() => navigate("/contact")}>Support</li>
        <li onClick={() => navigate("/about")}>About Us</li>
        <li onClick={() => navigate('/case-studies')} >Case Studies</li>
      </div>
      <div id="right">
        {accessToken ? (
          <Link to="/interview" className="link">
            {" "}
            <span id="sign-in">Go to Dashboard</span>
          </Link>
        ) : (
          <Link to="/login" className="link">
            <span id="sign-in">Login</span>
          </Link>
        )}
        <span>|</span>
        <Link to="/signup" className="link">
          <span id="free">Register</span>
        </Link>
        <span>|</span>
        <Link to="/demo" className="link">
          <span id="free">Request Demo</span>
        </Link>
      </div>
      <div id="drawer">
        <IconButton onClick={() => setOpenDrawer(true)}>
          <MenuRoundedIcon className="Icon" />
        </IconButton>
        <MyDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      </div>
    </StyledDiv>
  );
};

export default Header;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color);
  width: 90%;
  padding: 0% 5%;
  height: 4rem;
  position: fixed;
  z-index: 2000;
  background-color: var(--white);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);

  #left > img {
    height: 3.5rem;
    margin-left: -5%;
    cursor: pointer;
  }

  #middle {
    display: flex;
    gap: 1rem;
  }

  h1 {
    margin: 0;
    color: #add8e6;
  }

  li {
    list-style-type: none;
    height: 5rem;
    display: flex;
    align-items: center;
  }

  #middle {
    font-size: 0.85rem;

    li {
      cursor: pointer;

      .contactLink {
        text-decoration: none;
        color: black;
      }
    }

    li:hover {
      font-weight: 500;
    }

    @media (max-width: 900px) {
      display: none;
    }
  }

  #right {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    #sign-in {
      color: var(--color);
      font-weight: 500;
      font-size: 0.85rem;
      cursor: pointer;
    }

    #free {
      font-weight: 500;
      font-size: 0.85rem;
      cursor: pointer;
      color: var(--color);
    }
  }

  .link {
    text-decoration: none;
  }


  .Icon {
    color: var(--white);
  }



  // Products Menu

  .dropdown-toggle1{
    position: relative;
  }
  

  .dropdown1:hover .dropdown-toggle1{
    background-image: linear-gradient(to right, var(--grey), var(--lightOrange));
    background-size: 100% 3px;
    background-repeat: no-repeat;
    background-position: 0 70%;
  }


  .dropdown-menu1 {
    display: none;
    position: absolute;
    top: 100%;
    background-color: var(--white);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
    padding: 0.7rem 0.7rem;
    flex-direction: column;
  }
  
  .dropdown-menu1 a {
    display: inline-block;
    padding: 0.5rem 0;
    margin: 0 0.5rem;
    text-decoration: none;
    color: var(--grey);
    font-size: 0.9rem;
    font-weight: 500;
  }

  .dropdown-menu1 a:hover {
    background-image: linear-gradient(to right, var(--grey), var(--lightOrange));
    background-size: 100% 2.4px;
    background-repeat: no-repeat;
    background-position: 0 90%;
  }

  .nav-item1:hover .dropdown-menu1 {
    display: flex;
    align-items: start;
  }


  // Services Menu

  .dropdown-toggle2 {
    position: relative;
  }
  

  .dropdown2:hover .dropdown-toggle2{
    background-image: linear-gradient(to right, var(--grey), var(--lightOrange));
    background-size: 100% 3px;
    background-repeat: no-repeat;
    background-position: 0 70%;
  }


  .dropdown-menu2 {
    display: none;
    position: absolute;
    top: 100%;
    background-color: var(--white);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
    padding: 0.7rem 0.7rem;
    flex-direction: column;
  }
  
  .dropdown-menu2 a {
    display: inline-block;
    padding: 0.5rem 0;
    margin: 0 0.5rem;
    text-decoration: none;
    color: var(--grey);
    font-size: 0.9rem;
    font-weight: 500;
  }

  .dropdown-menu2 a:hover {
    background-image: linear-gradient(to right, var(--grey), var(--lightOrange));
    background-size: 100% 2.4px;
    background-repeat: no-repeat;
    background-position: 0 90%;
  }

  .nav-item2:hover .dropdown-menu2 {
    display: flex;
    align-items: start;
  }
  

  // Solutions Menu

  .dropdown-toggle3 {
    position: relative;
  }
  

  .dropdown3:hover .dropdown-toggle3{
    background-image: linear-gradient(to right, var(--grey), var(--lightOrange));
    background-size: 100% 3px;
    background-repeat: no-repeat;
    background-position: 0 70%;
  }


  .dropdown-menu3 {
    display: none;
    position: absolute;
    top: 100%;
    background-color: var(--white);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
    padding: 0.7rem 0.7rem;
    flex-direction: column;
  }
  
  .dropdown-menu3 a {
    display: inline-block;
    padding: 0.5rem 0;
    margin: 0 0.5rem;
    text-decoration: none;
    color: var(--grey);
    font-size: 0.9rem;
    font-weight: 500;
  }

  .dropdown-menu3 a:hover {
    background-image: linear-gradient(to right, var(--grey), var(--lightOrange));
    background-size: 100% 2.4px;
    background-repeat: no-repeat;
    background-position: 0 90%;
  }

  .nav-item3:hover .dropdown-menu3 {
    display: flex;
    align-items: start;
  }





  #drawer {
    display: none;

    @media (max-width: 900px) {
      display: block;
    }
  }
`;

