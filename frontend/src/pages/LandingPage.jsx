import { AiOutlineThunderbolt, AiOutlineMessage, AiOutlineGlobal, AiOutlineCode } from "react-icons/ai";
import { AiOutlineCheck } from 'react-icons/ai';
import backgroundImage from '../images/background.avif';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100 ">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-800 px-24">
        <a className="flex items-center justify-center" href="#">
          <AiOutlineCode className="h-6 w-6 mr-2 text-blue-400" />
          <span className="font-bold text-blue-400">AI Compiler</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:text-blue-400 transition-colors" href="#features">
            Features
          </a>
          <a className="text-sm font-medium hover:text-blue-400 transition-colors" href="#languages">
            Languages
          </a>
          <a className="text-sm font-medium hover:text-blue-400 transition-colors" href="#copilot">
            CopilotKit
          </a>
        </nav>
      </header>

      <main className="flex-1 justify-center items-center">
        {/* Hero Section */}
        <section className="relative flex justify-center w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-800 overflow-hidden px-24">
          {/* Background Image */}
          <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${backgroundImage})` }}></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-80"></div>

          {/* Content Container */}
          <div className="relative container px-4 md:px-6 z-10">
            <div className="flex flex-col items-center space-y-6 text-center">
              {/* Heading */}
              <div className="space-y-4">
                <h1 className="text-3xl font-extrabold tracking-tighter text-blue-400 sm:text-4xl md:text-5xl lg:text-6xl animate-fade-in-up">
                  AI-Powered Online Compiler
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl animate-fade-in-up delay-100">
                  Write, compile, and debug your code with the help of AI. Support for Python, C, C++, and JavaScript.
                </p>
              </div>

              {/* Buttons */}
              <div className="space-x-4 animate-fade-in-up delay-200">
                <button className="bg-blue-600 text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
                  Get Started
                </button>
                <button className="py-3 px-8 border border-blue-400 text-blue-400 rounded-full shadow-lg hover:bg-blue-400 hover:text-gray-900 transition-transform transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Background Particles */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            {/* Add custom particle animation or effects here */}
          </div>
        </section>


        {/* Features Section */}
        <section id="features" className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-gray-900 px-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-blue-400">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <AiOutlineThunderbolt className="h-12 w-12 mb-4 text-blue-400" />
                <h3 className="text-xl font-bold mb-2 text-gray-100">Instant Compilation</h3>
                <p className="text-gray-400">
                  Compile and run your code in seconds with our powerful cloud infrastructure.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <AiOutlineMessage className="h-12 w-12 mb-4 text-blue-400" />
                <h3 className="text-xl font-bold mb-2 text-gray-100">AI-Assisted Coding</h3>
                <p className="text-gray-400">
                  Get intelligent code suggestions and error explanations powered by AI.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <AiOutlineGlobal className="h-12 w-12 mb-4 text-blue-400" />
                <h3 className="text-xl font-bold mb-2 text-gray-100">Collaborative Editing</h3>
                <p className="text-gray-400">
                  Work on projects together in real-time with built-in collaboration tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Languages Section */}
        <section id="languages" className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-gray-800 px-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-blue-400">
              Supported Languages
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <AiOutlineCode className="h-12 w-12 mb-4 text-blue-400" />
                <h3 className="text-xl font-bold text-gray-100">Python</h3>
              </div>
              <div className="flex flex-col items-center">
                <AiOutlineCode className="h-12 w-12 mb-4 text-blue-400" />
                <h3 className="text-xl font-bold text-gray-100">C</h3>
              </div>
              <div className="flex flex-col items-center">
                <AiOutlineCode className="h-12 w-12 mb-4 text-blue-400" />
                <h3 className="text-xl font-bold text-gray-100">C++</h3>
              </div>
              <div className="flex flex-col items-center">
                <AiOutlineCode className="h-12 w-12 mb-4 text-blue-400" />
                <h3 className="text-xl font-bold text-gray-100">JavaScript</h3>
              </div>
            </div>
          </div>
        </section>

        {/* CopilotKit Section */}


<section id="copilot" className="flex justify-center w-full py-16 md:py-32 bg-gray-900 relative overflow-hidden px-24">
  {/* Content Container */}
  <div className="container px-4 md:px-8 relative z-10">
    <div className="grid items-center gap-8 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
      {/* Image */}
      <img
        alt="CopilotKit Integration"
        className="mx-auto rounded-xl object-cover object-center shadow-lg transition-transform duration-500 hover:scale-105 lg:order-last"
        height="310"
        src="/placeholder.svg?height=310&width=550"
        width="550"
      />

      {/* Text Content */}
      <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
        {/* Heading */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-blue-400 sm:text-5xl md:text-6xl">
            CopilotKit Integration
          </h2>
          <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Experience the power of AI-assisted coding with our CopilotKit integration. Get intelligent code suggestions, explanations, and real-time assistance as you write your code.
          </p>
        </div>

        {/* Features List */}
        <ul className="grid gap-3 py-4">
          <li className="flex items-center gap-3">
            <AiOutlineCheck className="text-blue-400 h-6 w-6" />
            <span className="text-gray-300">Intelligent code completion</span>
          </li>
          <li className="flex items-center gap-3">
            <AiOutlineCheck className="text-blue-400 h-6 w-6" />
            <span className="text-gray-300">Natural language to code conversion</span>
          </li>
          <li className="flex items-center gap-3">
            <AiOutlineCheck className="text-blue-400 h-6 w-6" />
            <span className="text-gray-300">Interactive debugging assistance</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">© 2024 AI Compiler. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-blue-400" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-blue-400" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}
