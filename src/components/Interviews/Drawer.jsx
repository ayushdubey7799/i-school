import { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function MyDrawer({ openDrawer, setOpenDrawer }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Drawer
        anchor={"left"}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <StyledDrawer className="drawer-div">
          <StyledLink to="/">
            <p className="link">Home</p>
          </StyledLink>
          <StyledLink to="/profile">
            <p className="link">Profile</p>
          </StyledLink>
          <StyledLink to="/setting">
            <p className="link">Setting</p>
          </StyledLink>
        </StyledDrawer>
      </Drawer>
    </div>
  );
}

const StyledDrawer = styled.div`
  width: 16rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--lightBlue);
  font-size: 1.3rem;
`;
