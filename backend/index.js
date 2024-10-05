require("dotenv").config(); // Load environment variables
const express = require("express");
const cors = require("cors"); // Import the CORS middleware
const { CopilotRuntime, GoogleGenerativeAIAdapter,copilotRuntimeNodeHttpEndpoint } = require("@copilotkit/runtime");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const port = 3000; // Define your server's port

// Enable CORS for all routes
app.use(cors());

// Enable JSON parsing for incoming requests
app.use(express.json());

// Initialize the Google Generative AI and Copilot Kit
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);


// API endpoint to interact with Google Generative AI
app.post("/api", async (req, res) => {

  // Initialize the GoogleGenerativeAIAdapter with the genAI instance
  const serviceAdapter = new GoogleGenerativeAIAdapter({ model: genAI.getGenerativeModel({ model: "gemini-pro" }) });
  
  // Initialize the CopilotRuntime
  const runtime = new CopilotRuntime();

  // Set up the handler for the Copilot Kit endpoint
  const handler = copilotRuntimeNodeHttpEndpoint({
    endpoint: "/api", // Ensure the endpoint matches your request route
    runtime,
    serviceAdapter,
  });

  // Return the handler, which processes the request
  return handler(req, res);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
