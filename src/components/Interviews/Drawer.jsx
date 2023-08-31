import { useState, useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';


export default function MyDrawer({ openDrawer, setOpenDrawer }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Drawer
        anchor={"left"}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <StyledDrawer className='drawer-div'>
          <Link to="/"><p className="link">Home</p></Link>
        </StyledDrawer>
      </Drawer>
    </div>
  );
}

const StyledDrawer = styled.div`
   width: 16rem;
`;

