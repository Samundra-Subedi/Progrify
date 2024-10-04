import { CopilotKit } from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";
import { CopilotTextarea } from "@copilotkit/react-textarea";
import "@copilotkit/react-ui/styles.css";
import { useState } from "react";
function App() {
  const [input, setInput] = useState('');
  return (
    <>
    <CopilotKit runtimeUrl="http://localhost:3000/api">
        <CopilotTextarea
        className="min-h-40 border h-40 p-2 overflow-hidden"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write your code..."
        autosuggestionsConfig={{
          textareaPurpose: `Asisst me in writing a python code.`,
          chatApiConfigs: {}
        }}
      />
      <CopilotSidebar>
        Copilotkit
      </CopilotSidebar>
    </CopilotKit>
    </>
  )
}

export default App
