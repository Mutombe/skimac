import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useScrollProgress } from '../hooks/useScrollProgress';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();
    const { scrollYProgress } = useScrollProgress();
    const { scrollY } = useScroll();

    // Handle scroll for navbar styling and hide/show behavior
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();

        if (latest > previous && latest > 100) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        if (latest > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }

        setLastScrollY(latest);
    });

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Products', href: '/products' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    const menuVariants = {
        closed: {
            opacity: 0,
            transition: {
                duration: 0.3,
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            opacity: 1,
            transition: {
                duration: 0.3,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const menuItemVariants = {
        closed: { x: -20, opacity: 0 },
        open: { x: 0, opacity: 1 }
    };

    // Get navbar background based on current page and scroll state
    const getNavbarBackground = () => {
        if (scrolled) {
            return 'bg-white/95 backdrop-blur-md shadow-lg';
        }

        switch (location.pathname) {
            case '/':
                return 'bg-gradient-to-b from-black/40 to-transparent';
            case '/about':
                return 'bg-transparent';
            case '/projects':
                return 'bg-transparent';
            case '/contact':
                return 'bg-gradient-to-b from-black/90 to-transparent';
            case '/products':
                return 'bg-transparent';
            case '/services':
                return 'bg-transparent';
            default:
                return 'bg-white/95 backdrop-blur-md shadow-lg';
        }
    };

    // Determine if navbar should use light text (dark background pages)
    const isDarkBackground = !scrolled && ['/', '/about', '/projects', '/contact'].includes(location.pathname);

    return (
        <>
            <motion.nav
                initial={{ y: 0 }}
                animate={{ y: hidden ? -100 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className={`fixed w-full z-50 transition-all duration-500 ${getNavbarBackground()}`}
                style={{ height: scrolled ? '72px' : '80px' }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="flex justify-between items-center h-full">
                        {/* Logo */}
                        <motion.div
                            className="flex-shrink-0 flex items-center"
                            animate={{ scale: scrolled ? 0.9 : 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link to="/" className="flex items-center gap-2">
                                <img
                                    src="/assets/logo3.png"
                                    alt="Skimac Logo"
                                    className={`w-auto object-contain transition-all duration-300 ${
                                        scrolled ? 'h-10' : 'h-14'
                                    }`}
                                />
                            </Link>
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
                            {navLinks.slice(0, -1).map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                    <Link
                                        to={link.href}
                                        className={`relative px-4 py-2 font-medium text-sm lg:text-base transition-all duration-300 rounded-full ${
                                            isDarkBackground
                                                ? isActive(link.href)
                                                    ? 'text-white bg-white/20 backdrop-blur-sm'
                                                    : 'text-white/90 hover:text-white hover:bg-white/10'
                                                : isActive(link.href)
                                                ? 'text-white bg-primary'
                                                : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                <Link
                                    to="/contact"
                                    className={`px-6 py-2.5 rounded-full font-bold text-sm lg:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                                        isDarkBackground
                                            ? 'bg-white text-primary hover:bg-gray-100'
                                            : 'bg-primary text-white hover:bg-red-700'
                                    }`}
                                >
                                    Get a Quote
                                </Link>
                            </motion.div>
                        </div>

                        {/* Mobile Menu Button - Hamburger Animation */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`relative w-10 h-10 flex flex-col justify-center items-center focus:outline-none ${
                                    isDarkBackground ? 'text-white' : 'text-secondary'
                                }`}
                                aria-label="Toggle menu"
                            >
                                <motion.span
                                    animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                    className={`block w-6 h-0.5 mb-1.5 transition-colors ${
                                        isDarkBackground ? 'bg-white' : 'bg-secondary'
                                    }`}
                                />
                                <motion.span
                                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                                    className={`block w-6 h-0.5 mb-1.5 transition-colors ${
                                        isDarkBackground ? 'bg-white' : 'bg-secondary'
                                    }`}
                                />
                                <motion.span
                                    animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                                    className={`block w-6 h-0.5 transition-colors ${
                                        isDarkBackground ? 'bg-white' : 'bg-secondary'
                                    }`}
                                />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scroll Progress Indicator */}
                <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-red-gold origin-left"
                    style={{ scaleX: scrollYProgress }}
                />
            </motion.nav>

            {/* Full-Screen Mobile Menu with Blur Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 md:hidden"
                        onClick={() => setIsOpen(false)}
                    >
                        {/* Blur Backdrop */}
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />

                        {/* Menu Content */}
                        <motion.div
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="relative h-full flex flex-col justify-center items-center px-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    variants={menuItemVariants}
                                    className="w-full max-w-sm"
                                >
                                    <Link
                                        to={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-6 py-4 mb-4 text-2xl font-bold text-center rounded-2xl transition-all duration-300 ${
                                            isActive(link.href)
                                                ? 'bg-primary text-white shadow-2xl scale-105'
                                                : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            {/* Social Icons or Additional Info */}
                            <motion.div
                                variants={menuItemVariants}
                                className="mt-8 text-white/70 text-sm text-center"
                            >
                                <p>Building Excellence Since Inception</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
