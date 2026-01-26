const projects = [
  {
    title: "Online Shop (E-commerce Platform)",
    stack: ["PHP", "Laravel", "MySQL", "Ajax", "jQuery", "JavaScript"],
    description:
      "A complete e-commerce platform featuring product listing, cart management, secure checkout, user authentication, and order management built using Laravel.",
    demo: "https://github.com/aditya3437/Online_Shop",
    confidential: false,
  },
  {
    title: "Movies Mania (Movie Database Website)",
    stack: ["React", "CSS", "OMDb API"],
    description:
      "A movie discovery web application that allows users to search and explore movies, view ratings, posters, and detailed information using real-time data from the OMDb API.",
    demo: "https://github.com/aditya3437/Movies-Mania",
    confidential: false,
  },
  {
    title: "Healthcare Website",
    stack: ["PHP", "Laravel", "MySQL", "Ajax", "jQuery", "JavaScript"],
    description:
      "A healthcare management website designed to manage patient information, appointments, and medical services with a clean UI and secure backend.",
    demo: "",
    confidential: true,
  },
  {
    title: "Attendance Management System",
    stack: ["Core PHP", "CSS", "JavaScript", "MySQL"],
    description:
      "A web-based attendance management system that allows admins and teachers to track, manage, and generate attendance records efficiently.",
    demo: "https://github.com/aditya3437/Attendence-Management-System",
    confidential: false,
  },
];


export default function Projects() {
  return (
    <section className="pt-20 pb-24 min-h-screen bg-gradient-to-b from-[#060b17] to-[#0b1220] text-white">
      <div className="max-w-7xl mx-auto px-4 space-y-12">

        {/* Terminal Header */}
        <div className="rounded-xl border border-white/10 bg-[#0b1220]/70 backdrop-blur p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-3 text-sm text-cyan-400 font-mono">
              terminal.sh
            </span>
          </div>

          <p className="font-mono text-2xl text-cyan-400">
            <span className="text-cyan-500">const currentPage =</span>{" "}
            <span className="text-yellow-300">"Projects"</span>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl
                         transition-all duration-300 hover:-translate-y-1
                         hover:shadow-xl hover:shadow-cyan-500/10
                         flex flex-col h-full"
            >
              <div className="p-6 flex flex-col h-full">

                {/* Confidential Badge + Tooltip */}
                {project.confidential && (
                  <div className="relative group w-fit mb-3">
                    <span
                      className="inline-flex items-center gap-1 px-3 py-1 text-xs
                                 rounded-full bg-red-500/10 text-red-400
                                 border border-red-400/30 cursor-help"
                    >
                      🔒 Confidential Project
                    </span>

                    <div
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2
                                 px-3 py-1 text-xs rounded-md whitespace-nowrap
                                 bg-black text-slate-200 border border-white/10
                                 opacity-0 scale-95
                                 group-hover:opacity-100 group-hover:scale-100
                                 transition-all duration-200 pointer-events-none z-20"
                    >
                      Client NDA protected
                    </div>
                  </div>
                )}

                {/* Code Block */}
                <div className="bg-black/40 rounded-lg p-4 mb-4 font-mono text-sm">
                  <div className="text-cyan-400">{"{"}</div>

                  <div className="ml-4 space-y-1">
                    <div>
                      <span className="text-cyan-300">"title"</span>
                      <span className="text-white">: </span>
                      <span className="text-yellow-300">
                        "{project.title}"
                      </span>
                      ,
                    </div>

                    <div>
                      <span className="text-cyan-300">"stack"</span>
                      <span className="text-white">: </span>
                      <span className="text-white">[ </span>
                      {project.stack.map((tech, i) => (
                        <span key={i} className="text-green-400">
                          "{tech}"{i !== project.stack.length - 1 && ", "}
                        </span>
                      ))}
                      <span className="text-white"> ]</span>
                    </div>
                  </div>

                  <div className="text-cyan-400">{"}"}</div>
                </div>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-cyan-400/10 text-cyan-300
                                 text-xs rounded border border-cyan-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Actions (Pinned Bottom) */}
                <div className="mt-auto">
                  {project.confidential || !project.demo ? (
                    <button
                      disabled
                      className="w-full py-2 px-4 rounded-lg
                                 bg-white/5 text-slate-400
                                 border border-white/10
                                 cursor-not-allowed"
                    >
                      {project.confidential
                        ? "Private Project"
                        : "Demo Unavailable"}
                    </button>
                  ) : (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2
                                 py-2 px-4 rounded-lg
                                 bg-cyan-400/10 hover:bg-cyan-400/20
                                 border border-cyan-400/30
                                 transition text-cyan-300 hover:text-cyan-200"
                    >
                      Demo
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}