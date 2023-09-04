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
                    <StyledLink to="/">
                        <p className="link">About Us</p>
                    </StyledLink>
                    <StyledLink to="/">
                        <p className="link">Products</p>
                    </StyledLink>
                    <StyledLink to="/">
                        <p className="link">Services</p>
                    </StyledLink>
                    <StyledLink to="/">
                        <p className="link">Research Papers</p>
                    </StyledLink>
                    <StyledLink to="/">
                        <p className="link">Contact Us</p>
                    </StyledLink>
                    <StyledLink to="/">
                        <p className="link">Case Studies</p>
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
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--grey);
  font-size: 1.3rem;
`;
