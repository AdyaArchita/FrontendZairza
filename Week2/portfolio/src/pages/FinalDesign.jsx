import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowUp,
  FaArrowDown,
  FaHome,
  FaUserAlt,
  FaLaptopCode,
  FaEnvelopeOpen,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const FinalDesign = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); 
  };

  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const navItems = [
    { id: "Home_Section", label: "Home", icon: <FaHome /> },
    { id: "AboutMe_Section", label: "About", icon: <FaUserAlt /> },
    { id: "Projects_Section", label: "Projects", icon: <FaLaptopCode /> },
    { id: "Contact_Section", label: "Contact", icon: <FaEnvelopeOpen /> },
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white transition duration-300 scroll-smooth">
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 text-sm md:text-base rounded-full bg-[#00adb5] text-white font-semibold shadow-md"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <div className="fixed top-4 left-4 z-50 md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#00adb5] text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav className={`fixed top-16 left-4 right-4 z-40 bg-white dark:bg-gray-900 shadow-lg rounded-lg md:rounded-full px-4 py-2 transition-all duration-300 ${menuOpen ? "block" : "hidden"} md:flex md:gap-6 md:top-4 md:left-4 md:right-auto md:shadow-none md:bg-transparent md:dark:bg-transparent`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex items-center gap-1 px-3 py-2 md:px-4 md:py-2 rounded-full text-blue-500 bg-white dark:bg-gray-800 hover:shadow-[0_0_10px_#00adb5] transition duration-300 w-full md:w-auto"
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

<section className="flex flex-col items-center mt-24 md:mt-32 px-6">
  <div className="w-40 h-40 md:w-56 md:h-56 relative perspective">
    <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d hover:rotate-y-180 cursor-pointer rounded-full shadow-lg">

      <img
        src="/assets/avatar.png"
        alt="Avatar"
        className="absolute backface-hidden w-full h-full rounded-full object-cover"
      />
      <img
        src="/assets/adya.jpg"
        alt="My Photo"
        className="absolute backface-hidden w-full h-full rounded-full object-cover rotate-y-180"
      />
    </div>
  </div>
  <p className="mt-4 text-xl md:text-2xl font-semibold text-blue-600">Hi ! I am Adya</p>
  <p className="mt-4 text-xl md:text-2xl font-semibold text-yellow-400">A passionate full-stack developer on the way to create beautiful web experiences</p>
</section>

        <motion.div
          id="Home_Section"
          className="relative min-h-screen bg-[url('/assets/HomeLight.png')] dark:bg-[url('/assets/HomeDark.png')] bg-cover bg-center bg-no-repeat flex items-center px-6 md:px-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div>
             <h1 className="text-black dark:text-white text-4xl md:text-6xl font-semibold leading-tight md:leading-[4rem] tracking-tight mb-4">
              <span> CREATIVE FRONTEND </span> 
              <span className="text-[#00adb5]">DESIGNER</span>
            </h1>
            <div className="mt-6 flex gap-4 flex-wrap">
              <button className="bg-[#00adb5] hover:shadow-[0_0_10px_#00adb5] text-white px-10 py-2 rounded-md transition flex items-center justify-center gap-2 font-bold">
                Hire Me
              </button>
              <button className="bg-[#393e46]/75 hover:shadow-[0_0_10px_#00adb5] backdrop-blur-sm text-white px-10 py-2 rounded-md transition flex items-center justify-center gap-2 font-bold">
           <img
      src="/assets/download.png"
      alt="Download Icon"
      className="w-5 h-5"
    />
 Download CV
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          id="AboutMe_Section"
          className="relative min-h-screen bg-[url('/assets/AboutLight.png')] dark:bg-[url('/assets/AboutDark.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-center px-6 md:px-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-black dark:text-white text-3xl md:text-4xl font-semibold mb-6">
            <span>About </span>  
            <span className="text-[#00adb5]">Me</span>
          </h2>
            <p className="text-black dark:text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl">
            I’m a passionate frontend developer focused on crafting engaging, user-friendly digital experiences. Currently, I'm focused on building responsive full-stack web applications. As a dedicated web developer, I blend in creativity and technical expertise to craft refined digital solutions that exudes quality and beauty.
            </p>
        </motion.div>

        <motion.div
          id="Projects_Section"
          className="relative min-h-screen bg-[url('/assets/ProjectsLight.png')] dark:bg-[url('/assets/ProjectsDark.png')] bg-cover bg-center bg-no-repeat flex items-center px-6 md:px-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="w-full">
            <h2 className="text-black dark:text-white text-3xl md:text-4xl font-semibold mb-6 tracking-wide text-center">Projects</h2>
            <div className="flex flex-col gap-10 mt-16 w-full">
              <div className="flex flex-col md:flex-row items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl shadow-md overflow-hidden max-w-5xl mx-auto">
                <img
                  src="/assets/p1.png"
                  alt="Project 1"
                  className="w-full md:w-1/2 h-64 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    Project One
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                    A responsive web layout showcasing frontend UI of Spotify.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row-reverse items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl shadow-md overflow-hidden max-w-5xl mx-auto">
                <img
                  src="/assets/p2.png"
                  alt="Project 2"
                  className="w-full md:w-1/2 h-64 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    Project Two
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                    A portfolio web app with dark mode, smooth scroll, and dynamic content rendering using JSX and Framer Motion.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl shadow-md overflow-hidden max-w-5xl mx-auto">
                <img
                  src="/assets/p3.png"
                  alt="Project 3"
                  className="w-full md:w-1/2 h-64 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    Project Three
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                    A responsive project of Guess the number using Javascript + Tailwind CSS.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        <motion.div
          id="Contact_Section"
          className="relative min-h-screen bg-[url('/assets/ContactLight.png')] dark:bg-[url('/assets/ContactDark.png')] bg-cover bg-center bg-no-repeat flex items-center justify-end px-4 md:px-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <form className="w-full max-w-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-md space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 dark:text-white">
              Contact Me
            </h2>
            <div>
              <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00adb5]"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00adb5]"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00adb5]"
              />
            </div>
<div className="text-center">
  <button
    type="submit"
    className="bg-[#00adb5] hover:shadow-[0_0_10px_#00adb5] text-white font-bold py-2 px-6 rounded-md transition flex items-center justify-center gap-2"
  >
    <img
      src="/assets/send.png"
      alt="Send Icon"
      className="w-5 h-5"
    />
    Send Message
  </button>
</div>
          </form>
        </motion.div>

<footer
  className={`w-full py-6 text-center text-sm flex flex-col items-center gap-4 transition duration-300 ${
    darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
  }`}
>
  <div className="flex gap-4 justify-center">
    {[1, 2, 3, 4, 5].map((n) => (
      <div
        key={n}
        className="w-10 h-10 rounded-full overflow-hidden border border-gray-400 dark:border-gray-200"
      >
        <img
          src={`/assets/img${n}.png`}
          alt={`icon-${n}`}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>
  <p>© {new Date().getFullYear()} SaulDesign. All rights reserved.</p>
</footer>

        <>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 bg-[#00adb5] hover:bg-[#007b8a] text-white p-3 rounded-full shadow-lg z-50 text-xl"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
          <button
            onClick={() =>
              window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
            }
            className="fixed bottom-6 left-6 bg-[#00adb5] hover:bg-[#007b8a] text-white p-3 rounded-full shadow-lg z-50 text-xl"
            aria-label="Scroll to bottom"
          >
            <FaArrowDown />
          </button>
        </>
      </div>
    </div>
  );
};

export default FinalDesign;







