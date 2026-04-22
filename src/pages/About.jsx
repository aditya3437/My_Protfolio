export default function About() {
  return (
    <section className="pt-8 pb-24 min-h-screen bg-gradient-to-b from-[#060b17] to-[#0b1220] text-white">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
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
            <span className="text-yellow-300">"About Me"</span>
          </p>
        </div>

        {/* Career Summary + Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Career Summary */}
          <div className="rounded-xl border border-white/10 bg-[#0b1220]/70 backdrop-blur p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              Career Summary
            </h2>

            <p className="text-cyan-300 font-mono text-sm leading-7 mb-3">
              I'm a passionate full stack developer focused on building
              scalable, clean, and user-centric applications using modern
              technologies.
            </p>

            <p className="text-cyan-300 font-mono text-sm leading-7 mb-3">
              With experience across the entire development lifecycle, I've
              worked on projects ranging from e-learning platforms to game
              development.
            </p>

            <p className="text-cyan-300 font-mono text-sm leading-7">
              I thrive in collaborative environments and enjoy mentoring junior
              developers.
            </p>
          </div>

          {/* Education */}
          <div className="rounded-xl border border-white/10 bg-[#0b1220]/70 backdrop-blur p-6 font-mono text-sm leading-7">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Education</h2>

            <pre className="text-cyan-400 whitespace-pre-wrap">
              <span className="text-purple-400">const</span>{" "}
              <span className="text-cyan-300">education</span>{" "}
              <span className="text-white">=</span>{" "}
              <span className="text-white">[</span>
              {"\n  {"}
              {"\n    "}
              <span className="text-green-400">level</span>:{" "}
              <span className="text-yellow-300">"B.Tech IT"</span>,{"\n    "}
              <span className="text-green-400">institute</span>:{" "}
              <span className="text-yellow-300">"Marwadi University"</span>,
              {"\n    "}
              <span className="text-green-400">cgpa</span>:{" "}
              <span className="text-yellow-300">"7.71 / 10"</span>,{"\n    "}
              <span className="text-green-400">duration</span>:{" "}
              <span className="text-yellow-300">"2020 - 2024"</span>
              {"\n  },"}
              {"\n  {"}
              {"\n    "}
              <span className="text-green-400">level</span>:{" "}
              <span className="text-yellow-300">"12th BSEB"</span>,{"\n    "}
              <span className="text-green-400">institute</span>:{" "}
              <span className="text-yellow-300">
                "M. P. Sinha Science College"
              </span>
              ,{"\n    "}
              <span className="text-green-400">percentage</span>:{" "}
              <span className="text-yellow-300">"73.04%"</span>,{"\n    "}
              <span className="text-green-400">year</span>:{" "}
              <span className="text-yellow-300">"May 2020"</span>
              {"\n  }"}
              {"\n]"}
            </pre>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="rounded-xl border border-white/10 bg-[#0b1220]/70 backdrop-blur p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6 font-mono">
            Soft Skills & Leadership
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Dynamic Solution Creator",
              "Problem Solving",
              "Team Management",
              "Project Management",
              "Technical Communication",
              "Time Management",
            ].map((skill, i) => (
              <div
                key={i}
                className="rounded-lg border border-white/5 bg-[#0e1628]/80 px-5 py-3 text-center font-mono text-sm text-cyan-300 hover:text-cyan-400 hover:border-cyan-400/40 hover:shadow-[0_0_12px_rgba(34,211,238,0.25)] transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Development Philosophy */}
        <div className="rounded-xl border border-white/10 bg-[#0b1220]/70 backdrop-blur p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6 font-mono">
            Development Philosophy
          </h2>

          <div className="relative rounded-lg bg-[#0e1628]/80 p-6 border border-white/5">
            <span className="absolute left-0 top-0 h-full w-1 bg-cyan-400 rounded-l-lg" />

            <p className="font-mono text-cyan-300 text-sm leading-8 pl-4">
              <span className="text-cyan-400">“</span>
              Code is poetry written in logic. Every function should tell a
              story, every variable should have purpose, and every solution
              should be elegant in its simplicity.
              <span className="text-cyan-400">”</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
