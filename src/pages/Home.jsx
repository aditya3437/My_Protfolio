import { Github, Linkedin, Download, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <section className="pt-20 min-h-screen bg-gradient-to-b from-[#060b17] to-[#0b1220] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Terminal Box */}
        <div className="mb-10 max-w-69xl rounded-xl border border-white/10 bg-[#0b1220]/70 backdrop-blur p-4 opacity-0 animate-fadeIn delay-200">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-3 text-sm text-cyan-400 font-mono">
              terminal.sh
            </span>
          </div>

          <p className="font-mono text-sm text-cyan-400">
            <span className="text-gray-400">➜ aditya-portfolio git:(main)</span>{" "}
            echo "Hello, World!"
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cyan-400 mb-4 leading-tight opacity-0 animate-slideInLeft delay-300">
          Hi, I’m Aditya Kumar
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-cyan-300 mb-6 opacity-0 animate-fadeIn delay-400">
          Full Stack Developer | LAMP | AI Integration
        </p>

        {/* Description */}
        <p className="max-w-2xl text-gray-300 leading-relaxed mb-10 font-mono opacity-0 animate-fadeIn delay-500">
          Dynamic full stack developer skilled in building scalable, real-world
          applications using modern tech stacks. Passionate about solving
          problems through clean, functional code.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-10 opacity-0 animate-scaleUp delay-600">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
          >
            <ExternalLink size={18} />
            View Projects
          </a>
          <a
            href="/Aditya_Kumar.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 opacity-0 animate-fadeIn delay-700">
          <a
            href="https://github.com/aditya3437"
            target="_blank"
            className="p-3 rounded-lg bg-white/5 hover:bg-cyan-400/10 text-cyan-400 transition transform hover:scale-110"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-kumar-801515228/"
            target="_blank"
            className="p-3 rounded-lg bg-white/5 hover:bg-cyan-400/10 text-cyan-400 transition transform hover:scale-110"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
