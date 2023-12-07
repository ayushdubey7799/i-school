import React, { useState } from 'react';
import SplitPane, { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';
import styled from 'styled-components';

const CodingQueInterface = () => {
    const [sizes, setSizes] = useState(['50%', '50%']);
    const [sizes2, setSizes2] = useState(['80%', '20%']);

    const layoutCSS = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    };

    const rowCSS = {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
    };

    const contentCSS = {
        padding: '10px',
        height: '100%',
        boxSizing: 'border-box',
    };

    return (
        <MainBox>
            <SplitPane split="vertical" sizes={sizes} onChange={setSizes}>
                <Pane>
                    <div className='leftBox' style={{ ...layoutCSS}}>
                        <div style={contentCSS}>pane1</div>
                    </div>
                </Pane>
                <Pane>
                    <div style={{ ...layoutCSS, ...rowCSS }} className='rightBox'>
                        <SplitPane split="horizontal" sizes={sizes2} onChange={setSizes2}>
                            <Pane>
                                <div style={{ ...contentCSS}} className='rightBox1'>pane2.0</div>
                            </Pane>
                            <Pane>
                                <div style={{ ...contentCSS}} className='rightBox2'>pane2.1</div>
                            </Pane>
                        </SplitPane>
                    </div>
                </Pane>
            </SplitPane>
        </MainBox>
    );
};

export default CodingQueInterface;

const MainBox = styled.div`
height: 100vh;


.leftBox {
    background-color: grey;
}

.rightBox {
    background-color: lightgrey;
}

.rightBox1 {
    border: 0.1rem solid grey;
    background-color: black;
}

.rightBox2 {
    
}

`