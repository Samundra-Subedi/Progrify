import { CopilotKit } from "@copilotkit/react-core";
// import { CopilotSidebar } from "@copilotkit/react-ui";
// import { CopilotTextarea } from "@copilotkit/react-textarea";
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
function App() {
  const [input, setInput] = useState('');
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
        <LandingPage/>
        {/* <HomePage /> */}
      </CopilotKit>
    </>
  )
}

export default App
