import { Github, Linkedin } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const phonenumber = form.phonenumber?.value.trim();

    // 🔐 Simple validation
    if (!name || !email || !message || !phonenumber) {
      setStatus("❌ Please fill all fields");
      return;
    }

    if (!/^[0-9]{10}$/.test(phonenumber)) {
      setStatus("❌ Please enter a valid 10-digit phone number");
      return;
    }

    emailjs
      .sendForm(
        "service_gbuv0a6",
        "template_c48tv8c",
        formRef.current,
        "sYIhJAiMPDa6stMoe"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.reset();
        },
        () => {
          setStatus("❌ Failed to send message");
        }
      );
  }
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
            <span className="text-yellow-300">"Contact"</span>
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Contact Form */}
          <div className="bg-[#0b1220]/70 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-bold text-primary-200 mb-4">
              Send a Message
            </h3>

            <form  ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 text-primary-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  autoComplete="name"
                  className="w-full p-2 rounded-lg bg-[#060b17]/50 border border-white/20 focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 text-primary-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  autoComplete="email"
                  className="w-full p-2 rounded-lg bg-[#060b17]/50 border border-white/20 focus:border-cyan-400 focus:outline-none"
                />
              </div>
             <div>
              <label
                htmlFor="phonenumber"
                className="block mb-1 text-primary-300"
              >
                Phone Number
              </label>

              <input
                id="phonenumber"
                name="phonenumber"
                type="tel"
                placeholder="Your Phone Number"
                autoComplete="tel"
                inputMode="numeric"
                pattern="[0-9]{10}"
                maxLength={10}
                className="w-full p-2 rounded-lg bg-[#060b17]/50 border border-white/20 focus:border-cyan-400 focus:outline-none"
              />
            </div>
              <div>
                <label htmlFor="message" className="block mb-1 text-primary-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  className="w-full p-2 rounded-lg bg-[#060b17]/50 border border-white/20 focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 py-2 rounded-lg font-semibold transition"
              >
                Send Message
              </button>
              {status && <p className="text-sm mt-2">{status}</p>}
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-[#0b1220]/70 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-primary-200 mb-2">
                Get in Touch
              </h3>
              <p className="text-primary-300">
                Feel free to reach out for collaborations, opportunities, or
                freelance work.
              </p>
            </div>

            <ul className="space-y-3 text-primary-200">
              <li className="flex items-center gap-2">
                📧 <span>chaudharyaditya5556@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                📱 <span>+91 7654653333</span>
              </li>
              <li className="flex items-center gap-2">
                📍 <span>Mohali, India</span>
              </li>
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="text-md font-bold text-primary-200 mb-3">
                Connect with Me
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/aditya3437"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/5 hover:bg-cyan-400/10 text-cyan-400 transition hover:scale-110"
                >
                  <Github size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/aditya-kumar-801515228/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/5 hover:bg-cyan-400/10 text-cyan-400 transition hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-start gap-3 bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <span className="text-green-400 text-xl">✔</span>
              <p className="text-sm text-primary-200">
                <strong>Available for Work</strong><br />
                Currently open to new opportunities and freelance projects.
                Let’s build something amazing together!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
