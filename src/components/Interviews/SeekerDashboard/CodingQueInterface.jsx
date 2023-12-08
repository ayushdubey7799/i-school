import React, { useState } from 'react';
import SplitPane, { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';
import styled from 'styled-components';

const CodingQueInterface = ({ queComp, codeEditorComp }) => {
    const [sizes, setSizes] = useState(['49.5%', '49.5%']);
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
            <SplitPane split="vertical" sizes={sizes} onChange={setSizes} style={{ display: 'flex', gap: '2rem' }}>
                <Pane minSize='10%' maxSize='90%'>
                    <div className='leftBox' style={{ ...layoutCSS }}>
                        <div style={contentCSS}>{queComp && queComp}</div>
                    </div>
                </Pane>
                <Pane minSize='10%' maxSize='90%'>
                    <div style={{ ...layoutCSS, ...rowCSS }} className='rightBox'>
                        <SplitPane split="horizontal" sizes={sizes2} onChange={setSizes2}>
                            <Pane minSize='10%' maxSize='90%'>
                                <div style={{ ...contentCSS }} className='rightBox1'>{codeEditorComp && codeEditorComp}</div>
                            </Pane>
                            <Pane minSize='10%' maxSize='90%'>
                                <div style={{ ...contentCSS }} className='rightBox2'>Test Cases Playground</div>
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
height: calc(100vh - 6rem);
width: calc(95vw);
display: flex;

.leftBox {
    border: 0.08rem solid grey;
    background-color: var(--white);
    border-radius: 0.75rem;
    overflow: auto;
    margin: 0 0.5rem 0 0;
    padding: 1rem;
    box-sizing: border-box;

    &::-webkit-scrollbar {
        width: 0.2rem;
    }
    
      &::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 0.2rem;
        margin: 0.5rem 0;
    }
    
      &::-webkit-scrollbar-thumb {
        background: grey;
        width: 0.2rem;
        border-radius: 0.2rem;
    }
    
    & {
      scrollbar-width: none;
    } 
}

.middleBox {

}

.rightBox {
    background-color: var(--white);
    margin: 0 0 0 0.5rem;
    height: 96%;
    box-sizing: border-box;
}

.rightBox1 {
    border: 0.08rem solid grey;
    border-radius: 0.75rem;
    background-color: var(--white);
    // margin: 0 0 0.5rem 0;
    box-sizing: border-box;
    padding: 0;

}


.rightBox2 {
    border: 0.08rem solid grey;
    border-radius: 0.75rem;
    background-color: var(--white);
    margin: 0.2rem 0 0 0;
    box-sizing: border-box;
}

`