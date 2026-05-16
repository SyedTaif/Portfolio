export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-sans">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>
      </div>

     {/* Navbar */}
<nav className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-md">

  {/* Logo */}
  <div className="flex items-center gap-3">

    <div className="w-12 h-12 rounded-2xl bg-cyan-400/20 border border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/20">
      <span className="text-cyan-400 font-black text-xl">
        T
      </span>
    </div>

    <div>
      <h1 className="text-2xl font-black tracking-wide text-white">
        TAIF
      </h1>

      <p className="text-xs tracking-[4px] text-cyan-400 uppercase">
        AI • Developer
      </p>
    </div>

  </div>

  {/* Menu */}
  <div className="hidden md:flex gap-8 text-sm text-gray-300">
    <a href="#about" className="hover:text-cyan-400 transition">
      About
    </a>

    <a href="#skills" className="hover:text-cyan-400 transition">
      Skills
    </a>

    <a href="#projects" className="hover:text-cyan-400 transition">
      Projects
    </a>

    <a href="#contact" className="hover:text-cyan-400 transition">
      Contact
    </a>
  </div>

</nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-28">
        <div className="border border-cyan-400/40 px-4 py-1 rounded-full text-sm text-cyan-300 mb-6 backdrop-blur-md">
          AI • Website • Developer
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-5xl">
          Building <span className="text-cyan-400">Future Tech</span>
          <br />
          With Code & Intelligence
        </h1>

        <p className="mt-8 text-gray-400 max-w-2xl text-lg leading-relaxed">
          Hey, I’m Syed Taif Ahmed — a future AI Engineer & Website Developer Specialist.
          I build smart systems, futuristic projects, and secure digital experiences.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <button className="bg-cyan-400 text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
            View Projects
          </button>

          <button className="border border-white/20 px-6 py-3 rounded-2xl hover:bg-white/10 transition">
            Download Resume
          </button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 px-6 md:px-20 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-cyan-400">About Me</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              I’m passionate about AI, Website Developer, automation, and futuristic technology.
              My goal is to create advanced systems like Jarvis-style AI assistants,
              secure applications, and modern digital products.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl">
            <div className="space-y-4 text-gray-300">
              <div className="flex justify-between">
                <span>Name</span>
                <span>Syed Taif Ahmed</span>
              </div>
              <div className="flex justify-between">
                <span>Focus</span>
                <span>AI + Website Developer</span>
              </div>
              <div className="flex justify-between">
                <span>Location</span>
                <span>India</span>
              </div>
              <div className="flex justify-between">
                <span>Status</span>
                <span>Learning & Building</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
<section id="skills" className="relative z-10 px-6 md:px-20 py-20">
  <h2 className="text-4xl font-bold text-center text-cyan-400 mb-14">
    Skills
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* Python */}
    <details className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition">
      <summary className="text-xl font-semibold cursor-pointer">
        Python
      </summary>

      <ul className="mt-4 space-y-2 text-gray-300">
        <li>• Python Basics</li>
        <li>• Automation Scripts</li>
        <li>• Flask Basics</li>
        <li>• API Handling</li>
      </ul>
    </details>

    {/* HTML CSS */}
    <details className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition">
      <summary className="text-xl font-semibold cursor-pointer">
        HTML & CSS
      </summary>

      <ul className="mt-4 space-y-2 text-gray-300">
        <li>• Responsive Design</li>
        <li>• Modern UI</li>
        <li>• Flexbox & Grid</li>
      </ul>
    </details>

    {/* JavaScript */}
    <details className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition">
      <summary className="text-xl font-semibold cursor-pointer">
        JavaScript
      </summary>

      <ul className="mt-4 space-y-2 text-gray-300">
        <li>• DOM Manipulation</li>
        <li>• Functions & Events</li>
        <li>• API Fetching</li>
      </ul>
    </details>

    {/* React */}
    <details className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition">
      <summary className="text-xl font-semibold cursor-pointer">
        React
      </summary>

      <ul className="mt-4 space-y-2 text-gray-300">
        <li>• Components</li>
        <li>• Hooks Basics</li>
        <li>• Responsive Portfolio</li>
      </ul>
    </details>

    {/* AI Automation */}
    <details className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition">
      <summary className="text-xl font-semibold cursor-pointer">
        AI Automation
      </summary>

      <ul className="mt-4 space-y-2 text-gray-300">
        <li>• AI Tools</li>
        <li>• Prompt Engineering</li>
        <li>• Workflow Automation</li>
      </ul>
    </details>

    {/* Networking */}
    <details className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition">
      <summary className="text-xl font-semibold cursor-pointer">
        Networking
      </summary>

      <ul className="mt-4 space-y-2 text-gray-300">
        <li>• IP Addressing</li>
        <li>• TCP/IP Basics</li>
        <li>• Router & Switch Basics</li>
      </ul>
    </details>

    {/* Microsoft Office */}
    <details className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition">
      <summary className="text-xl font-semibold cursor-pointer">
        Microsoft Office
      </summary>

      <ul className="mt-4 space-y-2 text-gray-300">
        <li>• MS Word</li>
        <li>• MS Excel</li>
        <li>• PowerPoint</li>
        <li>• Outlook</li>
      </ul>
    </details>

    {/* RESTful APIs */}
<details className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition">
  <summary className="text-xl font-semibold cursor-pointer">
    RESTful APIs
  </summary>

  <ul className="mt-4 space-y-2 text-gray-300">
    <li>• API Integration</li>
    <li>• Fetch & Axios</li>
    <li>• JSON Handling</li>
    <li>• GET & POST Requests</li>
  </ul>
</details>

  </div>
</section>
      {/* Projects */}
      <section id="projects" className="relative z-10 px-6 md:px-20 py-20">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-14">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Jarvis AI Assistant",
              desc: "Voice-controlled AI assistant with automation features.",
            },
            {
              title: "Ecommerce",
              desc: "A modern full-stack e-commerce platform with product listings, cart system, secure checkout, and responsive UI.",
            },
            {
              title: "AI Portfolio System",
              desc: "A futuristic portfolio with animations and AI theme.",
            },
          ].map((project, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-300 backdrop-blur-md"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-400">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 px-6 md:px-20 py-24 text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-6">
          Let’s Connect
        </h2>

        <p className="text-gray-400 mb-8">
          Ready to collaborate on AI, tech, or futuristic projects.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-cyan-400 text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
            GitHub
          </button>

          <button className="border border-white/20 px-6 py-3 rounded-2xl hover:bg-white/10 transition">
            LinkedIn
          </button>

          <button className="border border-white/20 px-6 py-3 rounded-2xl hover:bg-white/10 transition">
            Email Me
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-6 text-center text-gray-500 text-sm">
        © 2026 Syed Taif Ahmed — Future AI Engineer
      </footer>
    </div>
  );
}
