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
            <span className="link">Home</span>
          </StyledLink>
          <StyledLink to="/profile">
            <span className="link">Profile</span>
          </StyledLink>
          <StyledLink to="/setting">
            <span className="link">Setting</span>
          </StyledLink>
        </StyledDrawer>
      </Drawer>
    </div>
  );
}

const StyledDrawer = styled.div`
  width: 10rem;
  padding: 3rem 2rem 2rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--grey);
  font-size: 1.4rem;

  .link:hover {
    font-weight: 600;
  }
`;
