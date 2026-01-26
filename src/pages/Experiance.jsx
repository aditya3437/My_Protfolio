import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <section className="pt-20 pb-32 min-h-screen bg-gradient-to-b from-[#060b17] to-[#0b1220] text-white">
      <div className="max-w-7xl mx-auto px-4 space-y-14">

        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border border-white/10 bg-[#0b1220]/70 backdrop-blur p-4"
        >
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
            <span className="text-yellow-300">"Experience"</span>
          </p>
        </motion.div>

        {/* Experience List */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {[ 
           {
            title: "Software Engineer",
            company: "Rudra Innovative Pvt Ltd | Jun 2025 - Present",
            points: [
              "Developed and maintained scalable web applications using React for frontend and PHP/Laravel for backend with MySQL database",
              "Collaborated with designers to implement responsive and user-friendly UI components",
              "Optimized application performance and fixed bugs to improve overall stability",
            ],
          },
          {
            title: "Junior Developer",
            company: "Robral Technologies Pvt Ltd | Jan 2025 - May 2025",
            points: [
              "Built interactive user interfaces using React and Laravel, with Node.js for backend services",
              "Deployed applications on AWS and ensured smooth cross-platform performance",
              "Integrated RESTful APIs to fetch, process, and display dynamic data",
            ],
          },
          {
            title: "Full Stack Developer",
            company: "Artistic Bird Technologies | Feb 2024 - Dec 2024",
            points: [
              "Assisted in developing full-stack web applications using PHP, Laravel, React.js, and MySQL",
              "Created reusable frontend components using React and Tailwind CSS",
              "Participated in code reviews, debugging, and project documentation",
            ],
          },
          ].map((job, i) => (
            <motion.div
              key={i}
              variants={item}
              className="border border-white/10 rounded-xl bg-[#0b1220]/70 backdrop-blur p-6"
            >
              <h2 className="text-xl font-bold text-cyan-400 mb-2">
                {job.title}
              </h2>
              <p className="text-gray-300 mb-4">{job.company}</p>
              <ul className="list-disc list-inside text-cyan-300 font-mono text-sm space-y-1">
                {job.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Career Journey */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="border border-white/10 rounded-xl bg-[#0b1220]/70 backdrop-blur p-6"
        >
          <motion.div variants={item} className="text-center">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">
              Career Journey
            </h3>
            <p className="text-primary-200 leading-relaxed max-w-3xl mx-auto">
              My journey in software development has been marked by continuous
              learning and growth. From Backend development to full-stack web
              Developer, I've gained diverse experience across multiple
              domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: "📅", value: "2+", label: "Years of Experience" },
              { icon: "🚀", value: "15+", label: "Projects Completed" },
              { icon: "⚡", value: "10+", label: "Technologies" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={item}
                className="text-center border border-white/10 rounded-xl bg-[#0b1220]/70 backdrop-blur p-6"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
