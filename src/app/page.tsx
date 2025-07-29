'use client';
import React from 'react';

// Main App component
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 font-inter antialiased">
      {/* Tailwind CSS CDN - Ensure this is loaded in your environment if running outside Canvas */}
      <script src="https://cdn.tailwindcss.com"></script>

      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900 bg-opacity-80 backdrop-blur-sm z-50 shadow-lg rounded-b-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#hero" className="text-2xl font-bold text-teal-400 hover:text-teal-300 transition-colors duration-300">
            YourName.dev
          </a>
          <div className="space-x-6">
            <a href="#about" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-lg">About</a>
            <a href="#skills" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-lg">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-lg">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-lg">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative flex items-center justify-center min-h-screen pt-20 pb-10 overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-20 transform -skew-y-3 scale-110 blur-3xl"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-white drop-shadow-lg">
            Hi, I'm <span className="text-teal-400">Your Name</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            A passionate <span className="font-semibold text-white">[Your Profession/Role]</span> dedicated to building amazing web experiences.
          </p>
          <a
            href="#projects"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            View My Work
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-800 rounded-lg shadow-xl mx-auto container my-10">
        <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="md:w-1/3 mb-8 md:mb-0">
            {/* Placeholder for your image */}
            <img
              src="https://placehold.co/300x300/155e75/FFFFFF?text=Your+Photo"
              alt="Your Profile"
              className="rounded-full w-64 h-64 mx-auto object-cover border-4 border-teal-500 shadow-lg"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x300/155e75/FFFFFF?text=Image+Missing"; }}
            />
          </div>
          <div className="md:w-2/3 text-lg text-gray-300 leading-relaxed">
            <p className="mb-4">
              Hello! I'm <span className="font-semibold text-white">Your Name</span>, a [Your Profession/Role] with X years of experience in [Your Field]. My journey in technology began with a fascination for [mention something specific that sparked your interest, e.g., how websites work, solving complex problems with code].
            </p>
            <p className="mb-4">
              I specialize in [mention your main expertise, e.g., front-end development, full-stack solutions, data analysis] and am passionate about creating intuitive, efficient, and visually appealing applications. I thrive in environments where I can continuously learn and apply new technologies to solve real-world problems.
            </p>
            <p>
              Outside of coding, I enjoy [mention a hobby or two, e.g., hiking, reading sci-fi novels, playing guitar], which helps me stay refreshed and brings new perspectives to my work. I'm always eager to connect with like-minded individuals and collaborate on exciting projects!
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-900 rounded-lg shadow-xl mx-auto container my-10">
        <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Example Skill Card */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center">
            <h3 className="text-2xl font-semibold mb-2 text-white">Frontend</h3>
            <ul className="list-disc list-inside text-gray-300 text-left pl-4">
              <li>React.js</li>
              <li>Next.js</li>
              <li>HTML5 & CSS3</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center">
            <h3 className="text-2xl font-semibold mb-2 text-white">Backend</h3>
            <ul className="list-disc list-inside text-gray-300 text-left pl-4">
              <li>Node.js</li>
              <li>Python (Django/Flask)</li>
              <li>REST APIs</li>
              <li>GraphQL</li>
            </ul>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center">
            <h3 className="text-2xl font-semibold mb-2 text-white">Databases</h3>
            <ul className="list-disc list-inside text-gray-300 text-left pl-4">
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>Firebase Firestore</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center">
            <h3 className="text-2xl font-semibold mb-2 text-white">Tools & Others</h3>
            <ul className="list-disc list-inside text-gray-300 text-left pl-4">
              <li>Git & GitHub</li>
              <li>Docker</li>
              <li>AWS Basics</li>
              <li>Jira</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800 rounded-lg shadow-xl mx-auto container my-10">
        <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Project Card 1 */}
          <div className="bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <img
              src="https://placehold.co/600x400/374151/FFFFFF?text=Project+1+Image"
              alt="Project 1"
              className="w-full h-48 object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/374151/FFFFFF?text=Image+Missing"; }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-2">Project Title One</h3>
              <p className="text-gray-300 mb-4">
                A brief description of this project, highlighting its purpose and the technologies used. For example, "A full-stack e-commerce platform built with React, Node.js, and MongoDB."
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-teal-600 text-white text-xs font-semibold px-2 py-1 rounded-full">React</span>
                <span className="bg-teal-600 text-white text-xs font-semibold px-2 py-1 rounded-full">Node.js</span>
                <span className="bg-teal-600 text-white text-xs font-semibold px-2 py-1 rounded-full">MongoDB</span>
              </div>
              <a
                href="#"
                className="text-teal-400 hover:text-teal-300 font-semibold inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Example Project Card 2 */}
          <div className="bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <img
              src="https://placehold.co/600x400/374151/FFFFFF?text=Project+2+Image"
              alt="Project 2"
              className="w-full h-48 object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/374151/FFFFFF?text=Image+Missing"; }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-2">Project Title Two</h3>
              <p className="text-gray-300 mb-4">
                Description of your second project. Focus on the problem it solves and your contribution. "A mobile-first responsive landing page for a tech startup, designed with Figma and implemented with Tailwind CSS."
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-teal-600 text-white text-xs font-semibold px-2 py-1 rounded-full">HTML</span>
                <span className="bg-teal-600 text-white text-xs font-semibold px-2 py-1 rounded-full">CSS</span>
                <span className="bg-teal-600 text-white text-xs font-semibold px-2 py-1 rounded-full">Tailwind CSS</span>
              </div>
              <a
                href="#"
                className="text-teal-400 hover:text-teal-300 font-semibold inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Example Project Card 3 */}
          <div className="bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <img
              src="https://placehold.co/600x400/374151/FFFFFF?text=Project+3+Image"
              alt="Project 3"
              className="w-full h-48 object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/374151/FFFFFF?text=Image+Missing"; }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-2">Project Title Three</h3>
              <p className="text-gray-300 mb-4">
                Details about your third project, focusing on its impact and your learning. "A data visualization dashboard using D3.js to display complex financial data in an interactive way."
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-teal-600 text-white text-xs font-semibold px-2 py-1 rounded-full">JavaScript</span>
                <span className="bg-teal-600 text-white text-xs font-semibold px-2 py-1 rounded-full">D3.js</span>
                <span className="bg-teal-600 text-white text-xs font-semibold px-2 py-1 rounded-full">Data Viz</span>
              </div>
              <a
                href="#"
                className="text-teal-400 hover:text-teal-300 font-semibold inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900 rounded-lg shadow-xl mx-auto container my-10">
        <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">Get in Touch</h2>
        <div className="max-w-xl mx-auto text-center text-lg text-gray-300">
          <p className="mb-8">
            I'm currently open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hi, feel free to reach out!
          </p>
          <div className="space-y-4">
            <a
              href="mailto:your.email@example.com"
              className="block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Email Me: your.email@example.com
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Connect on LinkedIn
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Visit My GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p>Built with React and Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;
