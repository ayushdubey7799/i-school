import React, { useState } from 'react';
import SplitPane, { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';
import styled from 'styled-components';

const CodingQueInterface = ({queComp, codeEditorComp}) => {
    const [sizes, setSizes] = useState(['40%', '40%']);
    const [sizes2, setSizes2] = useState(['75%', '25%']);

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
            <SplitPane split="vertical" sizes={sizes} onChange={setSizes} style={{display: 'flex', gap: '2rem'}}>
                <Pane maxSize='90%'>
                    <div className='leftBox' style={{ ...layoutCSS}}>
                        <div style={contentCSS}>{queComp && queComp}</div>
                    </div>
                </Pane>
                <Pane maxSize='90%'>
                    <div style={{ ...layoutCSS, ...rowCSS }} className='rightBox'>
                        <SplitPane split="horizontal" sizes={sizes2} onChange={setSizes2}>
                            <Pane maxSize='90%'>
                                <div style={{ ...contentCSS}} className='rightBox1'>{codeEditorComp && codeEditorComp}</div>
                            </Pane>
                            <Pane maxSize='90%'>
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
display: flex;
gap: 2rem;

.leftBox {
    border-top: 0.1rem solid grey;
    border-left: 0.1rem solid grey;
    border-bottom: 0.1rem solid grey;
    background-color: var(--white);
    border-radius: 0.75rem;
    overflow: auto;
}

.rightBox {
    background-color: var(--white);
}

.rightBox1 {
    border-top: 0.1rem solid grey;
    border-left: 0.1rem solid grey;
    border-right: 0.1rem solid grey;
    border-radius: 0.75rem;
    background-color: var(--white);
}

.rightBox2 {
    border: 0.1rem solid grey;
    border-radius: 0.75rem;
    background-color: var(--white);
}

`