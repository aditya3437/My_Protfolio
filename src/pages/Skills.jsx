import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
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
            <span className="text-yellow-300">"Skills"</span>
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Frontend",
              skills: ["React", "Vue.js", "HTML5 & CSS3", "Tailwind CSS", "JavaScript (ES6+)"],
            },
            {
              title: "Backend",
              skills: ["Node.js & Express", "PHP & Laravel", "MySQL", "REST APIs", "GraphQL"],
            },
            {
              title: "DevOps",
              skills: ["AWS", "CI/CD", "Linux Servers","Nginx"],
            },
            {
              title: "Tools",
              skills: ["Git & GitHub", "VS Code", "Postman", "Figma", "Vite"],
            },
            {
              title: "Additional",
              skills: ["MongoDB", "Java Basics", "Spring Boot Basics", "Data Structure"],
            },
          ].map((block, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="rounded-xl border border-white/10 bg-[#0b1220]/70 backdrop-blur p-6 hover:border-cyan-400/40 hover:shadow-cyan-500/10 hover:shadow-xl"
            >
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                {block.title}
              </h2>
              <ul className="list-disc list-inside text-cyan-300 font-mono text-sm space-y-2">
                {block.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}