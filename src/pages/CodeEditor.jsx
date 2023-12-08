import React, { useState, useEffect } from 'react'
import Editor, { useMonaco } from '@monaco-editor/react';
import styled from 'styled-components'

const CodeEditor = ({input,setInput,language,setLanguage}) => {

    const handleCodeEditorChange = (value, event) => {
        setInput(value);
    }

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);
        setInput('');
    };

    // useEffect(() => {
    //     if (monaco) {
    //         monaco.editor.setModelLanguage(monaco.editor.getModels()[0], setLanguage);
    //     }
    // }, [monaco, language]);


    return (
        <Box>
            <LanguageSelector value={language} onChange={handleLanguageChange}>
                <option value="typescript">TypeScript</option>
                <option value="javascript">JavaScript</option>
                <option value="css">CSS</option>
                <option value="less">LESS</option>
                <option value="scss">SCSS</option>
                <option value="json">JSON</option>
                <option value="html">HTML</option>
                <option value="xml">XML</option>
                <option value="php">PHP</option>
                <option value="csharp">C#</option>
                <option value="cpp">C++</option>
                <option value="razor">Razor</option>
                <option value="markdown">Markdown</option>
                <option value="java">Java</option>
                <option value="vb">VB</option>
                <option value="coffeescript">CoffeeScript</option>
                <option value="handlebars">Handlebars</option>
                <option value="batch">Batch</option>
                <option value="pug">Pug</option>
                <option value="fsharp">F#</option>
                <option value="lua">Lua</option>
                <option value="powershell">Powershell</option>
                <option value="python">Python</option>
                <option value="ruby">Ruby</option>
                <option value="sass">SASS</option>
                <option value="r">R</option>
                <option value="objective-c">Objective-C</option>
                {/* Add more language options as needed */}
            </LanguageSelector>
            <Editor
                theme="light"
                height="100%"
                language={language}
                value={input}
                onChange={handleCodeEditorChange}
            />
        </Box>
    )
}

export default CodeEditor

const Box = styled.div`
width: 100%;
height: 100%;
display: flex;
padding: 0;
margin: 0;
box-sizing: border-box;
flex-direction: column;
align-items: start;


`

const LanguageSelector = styled.select`
  margin-bottom: 0rem;
  border-color: grey;
  font-size: 0.8rem;
  padding: 0.4rem 0.5rem;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  outline-color: grey;
`;