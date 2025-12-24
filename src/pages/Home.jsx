import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { FaArrowRight, FaHardHat, FaTools, FaDraftingCompass, FaPaintRoller, FaClipboardList, FaRulerCombined } from 'react-icons/fa';
import { staggerContainer, staggerItem } from '../utils/animations';

const Home = () => {
    const servicesRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: servicesRef,
        offset: ["start end", "end start"]
    });

    const services = [
        {
            icon: <FaHardHat />,
            title: 'Construction',
            desc: 'Residential and commercial building projects executed with precision and expertise.',
            color: 'from-red-500 to-red-700'
        },
        {
            icon: <FaTools />,
            title: 'Renovation',
            desc: 'Transforming existing spaces into modern marvels with expert craftsmanship.',
            color: 'from-orange-500 to-red-600'
        },
        {
            icon: <FaDraftingCompass />,
            title: 'Design',
            desc: 'Architectural planning and interior design that brings your visions to life.',
            color: 'from-amber-500 to-orange-600'
        },
        {
            icon: <FaPaintRoller />,
            title: 'Finishing',
            desc: 'Professional plastering and finishing services for perfect results.',
            color: 'from-yellow-500 to-amber-600'
        },
        {
            icon: <FaClipboardList />,
            title: 'Management',
            desc: 'Comprehensive project management from concept to completion.',
            color: 'from-red-600 to-orange-600'
        },
        {
            icon: <FaRulerCombined />,
            title: 'Planning',
            desc: 'Strategic planning and consultation for successful project execution.',
            color: 'from-orange-600 to-red-700'
        },
    ];

    return (
        <div>
            <Hero />

            {/* About Section - Diagonal Split */}
            <section className="section-padding bg-white relative overflow-hidden">
                {/* Diagonal Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-neutral-50 to-neutral-100 clip-diagonal" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left: Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            {/* Decorative line */}
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 80 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="h-1 bg-gradient-red-gold mb-6"
                            />

                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block"
                            >
                                Who We Are
                            </motion.span>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary mb-6 leading-tight">
                                Building Excellence
                                <span className="block text-gradient mt-2">Since Inception</span>
                            </h2>

                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                Skimac Investments is more than just a construction company; we are your partners in building the future. With an unwavering commitment to quality, safety, and innovation, we deliver projects that exceed expectations.
                            </p>

                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Our team of skilled professionals brings decades of combined experience to every project, ensuring precision, efficiency, and excellence in execution.
                            </p>

                            <motion.div
                                whileHover={{ x: 10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Link to="/about" className="btn-primary inline-flex items-center gap-3 group">
                                    Read Our Story
                                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </motion.div>

                            {/* Decorative element */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                className="absolute -left-12 top-1/2 w-24 h-24 border-4 border-accent/20 rounded-full -z-10 hidden lg:block"
                            />
                        </motion.div>

                        {/* Right: Image with clip-path reveal */}
                        <motion.div
                            initial={{ opacity: 0, clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
                            whileInView={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.3 }}
                            className="relative h-[500px] lg:h-[600px]"
                        >
                            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="/assets/delivery_truck.jpg"
                                    alt="Skimac Delivery Truck"
                                    className="w-full h-full object-cover"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                {/* Floating info card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1 }}
                                    className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl"
                                >
                                    <p className="font-bold text-2xl text-secondary mb-2">Reliable Logistics</p>
                                    <p className="text-gray-600">On-time delivery, every time. Our fleet ensures materials arrive when you need them.</p>
                                </motion.div>
                            </div>

                            {/* Decorative square */}
                            <motion.div
                                animate={{ rotate: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -right-6 -top-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Services - Horizontal Scroll Cards */}
            <section ref={servicesRef} className="py-24 bg-neutral-900 text-white relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }} />
                </div>

                <div className="relative z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <span className="text-accent font-bold uppercase tracking-wider text-sm mb-4 block">
                                What We Offer
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                                Our Expertise
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                                Comprehensive construction services tailored to bring your vision to life with precision and excellence.
                            </p>
                        </motion.div>
                    </div>

                    {/* Horizontal Scroll Container */}
                    <div className="overflow-x-auto custom-scrollbar pb-8 px-4 sm:px-6 lg:px-8">
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex gap-6 max-w-7xl mx-auto"
                            style={{ minWidth: 'max-content' }}
                        >
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    variants={staggerItem}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className="flex-shrink-0 w-80 perspective"
                                >
                                    <div className="card-glass h-full p-8 rounded-3xl border border-white/20 hover:border-primary/50 transition-all preserve-3d group">
                                        {/* Icon with gradient background */}
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                            className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-4xl text-white mb-6 shadow-lg group-hover:shadow-2xl transition-shadow`}
                                        >
                                            {service.icon}
                                        </motion.div>

                                        <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                                            {service.title}
                                        </h3>

                                        <p className="text-gray-300 mb-6 leading-relaxed min-h-[80px]">
                                            {service.desc}
                                        </p>

                                        <Link
                                            to="/services"
                                            className="text-accent font-semibold hover:text-white transition-colors flex items-center gap-2 group/link"
                                        >
                                            Learn More
                                            <FaArrowRight className="text-sm group-hover/link:translate-x-2 transition-transform" />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Scroll hint */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 }}
                        className="text-center mt-8 text-gray-500 text-sm"
                    >
                        <p className="flex items-center justify-center gap-2">
                            <span>Scroll horizontally to explore</span>
                            <motion.span
                                animate={{ x: [0, 10, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section - Animated Gradient Mesh */}
            <section className="relative py-32 overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-black-red animated-gradient" />

                {/* Background image overlay */}
                <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                    <img src="/assets/1.jpg" alt="Background" className="w-full h-full object-cover" />
                </div>

                {/* Floating shapes */}
                <motion.div
                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1/2 -right-1/2 w-full h-full border-[120px] border-white/5 rounded-full"
                />
                <motion.div
                    animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-1/2 -left-1/2 w-full h-full border-[100px] border-accent/5 rounded-full"
                />

                <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-accent font-bold uppercase tracking-wider text-sm mb-6 block"
                        >
                            Let's Get Started
                        </motion.span>

                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-8 text-white leading-tight">
                            Ready to Start Your
                            <span className="block mt-2 text-gradient">Dream Project?</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-white/90 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
                            Contact us today for a free consultation and quote. Let's build something amazing together.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    to="/contact"
                                    className="btn-glass inline-flex items-center gap-3 text-lg px-10 py-5"
                                >
                                    Get a Quote
                                    <FaArrowRight />
                                </Link>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    to="/projects"
                                    className="inline-block px-10 py-5 bg-transparent border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white hover:text-secondary transition-all shadow-2xl backdrop-blur-sm"
                                >
                                    View Portfolio
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
