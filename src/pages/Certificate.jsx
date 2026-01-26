const certificates = [
  {
    title: "Javascript Certificate",
    issuer: "SkillUp by Simplilearn",
    year: "2023",
    file: "/certificates/JavaScript for beginner.pdf",
    tag: "Technical",
    description:
      "Completed SkillUp by Simplilearn's certification program on JavaScript, covering fundamentals, DOM manipulation, and ES6+ features.",
  },
  {
    title: "React.js Certificate",
    issuer: "Udemy",
    year: "2023",
    file: "/certificates/reactjs.pdf",
    tag: "Frontend",
    description:
      "Certified in React.js focusing on component-based architecture, hooks,Router,Redux and modern UI development.",
  },
  {
    title: "Sql Basics Certificate",
    issuer: "Hackerrank",
    year: "2024",
    file: "/certificates/sql_basic certificate.pdf",
    tag: "Database",
    description:
      "Learned SQL basics including queries, joins, and data manipulation for effective database management.",
  },
  {
    title: "Sql Advanced Certificate",
    issuer: "Hackerrank",
    year: "2024",
    file: "/certificates/sql_advanced certificate.pdf",
    tag: "Database",
    description:
      "Learned SQL Advanced including complex queries, optimization, and advanced data manipulation techniques for effective database management.",
  },
];

export default function Certificate() {
  return (
    <section className="pt-20 pb-32 min-h-screen bg-gradient-to-b from-[#060b17] to-[#0b1220] text-white">
      <div className="max-w-7xl mx-auto px-4 space-y-14">

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
            <span className="text-yellow-300">"Certificate"</span>
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-[#0b1220]/70 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-primary-400/40 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary-400 mb-3"
                  >
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                  </svg>

                  <h3 className="text-lg font-bold text-primary-200 group-hover:text-primary-100 transition-colors">
                    {cert.title}
                  </h3>
                </div>

                <a
                  href={cert.file}
                  download
                  className="p-2 hover:bg-primary-600/20 rounded-lg transition"
                >
                  ↗
                </a>
              </div>

              <p className="text-primary-400 font-semibold mb-1">
                {cert.issuer}
              </p>

              <p className="text-primary-300 text-sm mb-3">
                📅 {cert.year}
              </p>

              <p className="text-primary-200 text-sm leading-relaxed mb-4">
                {cert.description}
              </p>

              <span className="inline-block px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                {cert.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Continuous Learning */}
        <div className="text-center rounded border border-white/10 bg-[#0b1220]/70 backdrop-blur p-4">
          <h2 className="text-xl font-bold text-primary-200 mb-4">
            Continuous Learning
          </h2>
          <p className="text-primary-300 leading-relaxed">
            I believe in continuous learning and staying updated with emerging
            technologies. These certifications reflect my dedication to
            professional growth through workshops, courses, and hands-on
            practice.
          </p>
        </div>
      </div>
    </section>
  );
}
