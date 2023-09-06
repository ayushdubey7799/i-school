import { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function MyDrawer({ openDrawer, setOpenDrawer }) {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Drawer
                anchor={"right"}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <StyledDrawer className="drawer-div">
                    <StyledLink to="/about">
                        <span className="link">About Us</span>
                    </StyledLink>
                    <StyledLink to="/products">
                        <span className="link">Products</span>
                    </StyledLink>
                    <StyledLink to="/services">
                        <span className="link">Services</span>
                    </StyledLink>
                    <StyledLink to="/research-paper">
                        <span className="link">Research Papers</span>
                    </StyledLink>
                    <a href="mailto:care@intelliview.in"
                        target="_blank"
                        rel="noreferrer" className='contactLink'><span>Contact Us</span></a>
                    <StyledLink to="/case-studies">
                        <span className="link">Case Studies</span>
                    </StyledLink>
                </StyledDrawer>
            </Drawer>
        </div>
    );
}

const StyledDrawer = styled.div`
  width: 11rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
  gap: 1.2rem;

  .contactLink {
    text-decoration: none;
    font-size: 1.15rem;
    color: var(--grey);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--grey);
  font-size: 1.15rem;

  .link:hover {
    font-weight: 600;
  }
`;
