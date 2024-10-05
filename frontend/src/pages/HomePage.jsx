import React, { useState, useEffect } from 'react';
import { useCopilotReadable, useCopilotAction } from "@copilotkit/react-core";
import { useCopilotChatSuggestions } from "@copilotkit/react-ui";
import Editor from '@monaco-editor/react';
import Dropdown from '../components/Dropdown';
import { CODE_SNIPPETS } from '../utils/Constants';
import { executeCode } from '../api/Api';
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

const HomePage = () => {
    return (
        <>
            <CopilotKit runtimeUrl="http://localhost:3000/api">
                {/* <CopilotTextarea
        className="min-h-40 border h-40 p-2 overflow-hidden"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write your code..."
        autosuggestionsConfig={{
          textareaPurpose: `Asisst me in writing a essay.`,
          chatApiConfigs: {}
        }}
      /> */}
                <div
                    style={
                        {
                            "--copilot-kit-primary-color": "rgb(47, 53, 102)",
                        }
                        // as CopilotKitCSSProperties
                    }>
                    <CopilotPopup
                        labels={{
                            title: "Your Assistant",
                            initial: "Hi! 👋 How can I assist you today?",
                        }}
                    />
                </div>
                {/* <LandingPage/>
        <HomePage /> */}
                <HomePageExtend />
            </CopilotKit>
        </>
    );
}

const HomePageExtend = () => {
    const [language, setLanguage] = useState('python');
    const [inputCode, setInputCode] = useState(CODE_SNIPPETS[language]);
    const [output, setOutput] = useState('');
    const [isRunning, setIsRunning] = useState(false);

    const cleanCodeString = (str) => {
        // Replace unnecessary escape characters
        let cleanedStr = str.replace(/\\"/g, '"');
        // Replace \n with actual new line
        cleanedStr = cleanedStr.replace(/\\n/g, '\n');
        cleanedStr = cleanedStr.replace(/\\t/g, '\t');
        console.log(cleanedStr)
        return cleanedStr;
    };

    // Function to handle changes in the input code editor
    const handleInputChange = (value) => {
        setInputCode(value || '');
    };


    // Function to handle changes in the selected language
    const handleLanguageChange = (lan) => {
        setLanguage(lan);
        setInputCode(CODE_SNIPPETS[lan]);
    };

    // Function to handle the Run Code button click
    const handleRun = async () => {
        setIsRunning(true);
        try {
            const response = await executeCode(language, inputCode);
            if (response.run) {
                setOutput(response.run.output);
            } else {
                setOutput('No output received');
            }
        } catch (error) {
            setOutput(`Error: ${error.message}`);
        } finally {
            setIsRunning(false);
        }
    };

    useCopilotReadable({
        description: "The code for the program written in " + language,
        value: inputCode
    });

    useCopilotAction({
        name: "updateCode",
        description: "Updates the code. The code should run without any changes. It should also contain proper spacing.",
        parameters: [
            {
                name: "updatedCode",
                type: "string",
                description: "The updated code",
                required: true,
            },
        ],
        handler: ({ updatedCode }) => {
            // updatedCode = cleanCodeString(updatedCode)
            setInputCode(updatedCode);
            console.log(updatedCode)
        },
    });

    useCopilotChatSuggestions({
        instructions: `The following is the code written in ${language} language.`,
    });

    useEffect(() => {
        setInputCode(cleanCodeString(inputCode))
    }, [inputCode])


    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <header className="text-3xl font-bold mb-6">AI Code Editor</header>
            <div className="flex justify-between items-center mb-4">

                <Dropdown language={language} handleLanguageChange={handleLanguageChange} />
                <div className='flex gap-6 mr-4'>
                    <button className='px-4 py-2 rounded-md transition  bg-green-600' onClick={() => { cleanCodeString(inputCode) }}>
                        Explain
                    </button>

                    <button
                        onClick={handleRun}
                        disabled={isRunning}
                        className={`px-4 py-2 rounded-md transition ${isRunning ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'
                            }`}
                    >
                        {isRunning ? 'Running...' : 'Run Code'}
                    </button>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
                {/* Input Code Editor */}
                <div className="flex-1 bg-gray-800 rounded-lg overflow-hidden">
                    <div className="flex justify-between items-center bg-gray-700 p-4 rounded-t-lg">
                        <h2 className="text-xl font-semibold">Input Code</h2>
                    </div>
                    <Editor
                        height="600px"
                        language={language}
                        value={inputCode}
                        theme="vs-dark"
                        onChange={handleInputChange}
                        options={{
                            minimap: { enabled: false },
                            fontSize: 14,
                        }}
                    />
                </div>
                {/* Output Section */}
                <div className="flex-1 bg-gray-800 rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-2">Output</h2>
                    <pre className="whitespace-pre-wrap h-[552px] overflow-y-auto bg-gray-900 p-4 rounded">
                        {output}
                    </pre>
                </div>
            </div>
        </div>
    );
};



export default HomePage;
