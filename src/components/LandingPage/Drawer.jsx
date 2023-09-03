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
                        <p className="link">About</p>
                    </StyledLink>
                    <StyledLink to="/">
                        <p className="link">Pricing</p>
                    </StyledLink>
                    <StyledLink to="/">
                        <p className="link">Features</p>
                    </StyledLink>
                    <StyledLink to="/">
                        <p className="link">Institutions</p>
                    </StyledLink>
                    <StyledLink to="/">
                        <p className="link">Blog</p>
                    </StyledLink>
                </StyledDrawer>
            </Drawer>
        </div>
    );
}

const StyledDrawer = styled.div`
  width: 14rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--lightBlue);
  font-size: 1.3rem;
`;
