import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaArrowUp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Simulate subscription
    setSubscribed(true);
    setError('');
    setEmail('');

    // Reset after 3 seconds
    setTimeout(() => {
      setSubscribed(false);
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    'Residential Construction',
    'Commercial Construction',
    'Plastering & Finishing',
    'Renovations',
    'Project Management',
    'Architectural Design'
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about' },
    { name: 'Careers', href: '/contact' }
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="relative bg-gradient-black-red text-white overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(255,255,255,.05) 35px,
            rgba(255,255,255,.05) 70px
          )`
        }} />
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">
                  Stay Updated
                </h3>
                <p className="text-gray-400">
                  Subscribe to our newsletter for the latest projects and updates
                </p>
              </div>

              <form onSubmit={handleNewsletterSubmit} className="w-full md:w-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full sm:w-80 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white/20 transition-all backdrop-blur-sm"
                      disabled={subscribed}
                    />
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-6 left-4 text-red-400 text-sm"
                      >
                        {error}
                      </motion.p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-3 rounded-full font-bold transition-all ${
                      subscribed
                        ? 'bg-green-500 text-white'
                        : 'bg-primary text-white hover:bg-red-700'
                    }`}
                    disabled={subscribed}
                  >
                    {subscribed ? '✓ Subscribed!' : 'Subscribe'}
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-block mb-6">
                <h2 className="text-3xl font-heading font-bold text-gradient-red-gold">
                  SKIMAC
                </h2>
                <p className="text-xs text-gray-400 mt-1 tracking-wider">INVESTMENTS</p>
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Building Excellence Since Inception. We are dedicated to delivering high-quality construction and renovation services across Zimbabwe with precision, safety, and innovation.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-gray-300 hover:bg-primary hover:border-primary hover:text-white transition-all backdrop-blur-sm"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-heading font-bold mb-4 text-accent">
                Our Services
              </h3>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to="/services"
                      className="text-gray-400 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-heading font-bold mb-4 text-accent">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/products"
                    className="text-gray-400 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="text-gray-400 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    Projects
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-heading font-bold mb-4 text-accent">
                Get In Touch
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300 group">
                  <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">
                    20 George rd, Hatfield<br />
                    Harare, Zimbabwe
                  </span>
                </li>
                <li className="flex items-center gap-3 text-gray-300 group">
                  <FaPhone className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <a href="tel:+263775040327" className="text-sm hover:text-primary transition-colors">
                    +263 77 504 0327
                  </a>
                </li>
                <li className="flex items-center gap-3 text-gray-300 group">
                  <FaEnvelope className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <a href="mailto:info@skimac.co.zw" className="text-sm hover:text-primary transition-colors">
                    info@skimac.co.zw
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                &copy; {new Date().getFullYear()} Skimac Investments. All rights reserved.
              </p>

              <div className="flex items-center gap-6 text-sm text-gray-400">
                <Link to="/" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer group"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="group-hover:animate-bounce" />
      </motion.button>
    </footer>
  );
};

export default Footer;
