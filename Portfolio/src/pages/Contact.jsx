import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from 'react-icons/fa6';

export default function Contact() {
  const { darkMode } = useContext(ThemeContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [charsLeft, setCharsLeft] = useState(200);
  const [submitted, setSubmitted] = useState(false);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  useEffect(() => {
    setCharsLeft(200 - message.length);
  }, [message]);

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    setNameError('');
    setEmailError('');
    setMessageError('');

    let valid = true;

    if (!name.trim()) {
      setNameError('Name is required.');
      valid = false;
    }

    if (!email.trim()) {
      setEmailError('Email is required.');
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Invalid email format.');
      valid = false;
    }

    if (message.length < 10) {
      setMessageError('Message must be at least 10 characters.');
      valid = false;
    } else if (message.length > 200) {
      setMessageError('Message must not exceed 200 characters.');
      valid = false;
    }

    if (valid) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <section
      id="contact"
      className={`min-h-screen bg-cover bg-center p-6 sm:p-12 ${
        darkMode ? 'text-white' : 'text-black'
      }`}
      style={{ backgroundImage: "url('/assets/images/contact-bg.jpg')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6 border-b-4 inline-block border-orange-500 pb-2">
          Contact Me
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full p-3 rounded ${darkMode ? 'text-white bg-gray-800' : 'text-black bg-white'}`}
            />
            {nameError && <p className="text-red-400 text-sm mt-1">{nameError}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-3 rounded ${darkMode ? 'text-white bg-gray-800' : 'text-black bg-white'}`}
            />
            {emailError && <p className="text-red-400 text-sm mt-1">{emailError}</p>}
          </div>

          <div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={200}
              placeholder="Your Message (min 10 characters)"
              className={`w-full p-3 rounded ${darkMode ? 'text-white bg-gray-800' : 'text-black bg-white'}`}
            />
            <p className="text-sm">{charsLeft} characters left</p>
            {messageError && <p className="text-red-400 text-sm mt-1">{messageError}</p>}
          </div>

          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 transition px-6 py-2 rounded text-white font-semibold"
          >
            Send
          </button>

          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 text-lg font-semibold mt-2"
            >
              ✅ Message submitted successfully!
            </motion.p>
          )}
        </form>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-4 text-center sm:text-left">Let’s Connect</h3>

          <div className="flex flex-wrap justify-center sm:justify-start gap-4">
            {[
              {
                icon: <FaFacebookF />,
                url: 'https://facebook.com/yourusername',
                label: 'Facebook',
                bg: 'hover:bg-blue-600',
                text: 'text-blue-600',
              },
              {
                icon: <FaXTwitter />,
                url: 'https://x.com/yourusername',
                label: 'Twitter / X',
                bg: 'hover:bg-black',
                text: 'text-black',
              },
              {
                icon: <FaLinkedinIn />,
                url: 'https://linkedin.com/in/yourusername',
                label: 'LinkedIn',
                bg: 'hover:bg-blue-700',
                text: 'text-blue-700',
              },
              {
                icon: <FaInstagram />,
                url: 'https://instagram.com/yourusername',
                label: 'Instagram',
                bg: 'hover:bg-[#E1306C]',
                text: 'text-pink-600',
              },
              {
                icon: <FaYoutube />,
                url: 'https://youtube.com/yourchannel',
                label: 'YouTube',
                bg: 'hover:bg-red-600',
                text: 'text-red-600',
              },
              {
                icon: <FaGithub />,
                url: 'https://github.com/yourusername',
                label: 'GitHub',
                bg: 'hover:bg-gray-800',
                text: 'text-gray-800',
              },
            ].map(({ icon, url, label, bg, text }, i) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-full ${ darkMode ? 'bg-white/10 text-white' : 'bg-gray-800 text-white' } ${bg} hover:text-white transition duration-300`}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
