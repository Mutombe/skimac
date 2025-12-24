import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaUsers, FaHandshake, FaLightbulb, FaAward, FaHardHat, FaRocket } from 'react-icons/fa';

const About = () => {
    const values = [
        {
            icon: <FaUsers />,
            title: 'Teamwork',
            description: 'Collaboration and unity drive our success. We work together to achieve greatness.',
            gradient: 'from-blue-500 to-cyan-600'
        },
        {
            icon: <FaHandshake />,
            title: 'Integrity',
            description: 'Honesty and transparency in every interaction. We build trust through our actions.',
            gradient: 'from-green-500 to-emerald-600'
        },
        {
            icon: <FaLightbulb />,
            title: 'Innovation',
            description: 'Embracing new technologies and methods. We stay ahead of industry trends.',
            gradient: 'from-amber-500 to-orange-600'
        },
        {
            icon: <FaAward />,
            title: 'Excellence',
            description: 'Committed to delivering the highest quality. We exceed expectations on every project.',
            gradient: 'from-purple-500 to-pink-600'
        }
    ];

    const timeline = [
        { year: 'Founded', title: 'Company Inception', description: 'Started with a vision to revolutionize construction in Zimbabwe' },
        { year: 'Growth', title: 'Expansion', description: 'Grew our team and capabilities to handle larger projects' },
        { year: 'Innovation', title: 'PlasterSET Launch', description: 'Introduced our premium plastering product line' },
        { year: 'Today', title: 'Industry Leader', description: 'Leading construction firm delivering excellence across Zimbabwe' }
    ];

    return (
        <div className="bg-white pb-16">
            {/* Hero Section - Magazine Style */}
            <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800 text-white pt-32 pb-20">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)'
                    }} />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-accent font-bold uppercase tracking-wider text-sm mb-6 block">
                            Our Story
                        </span>
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 leading-none">
                            <span className="block">Building</span>
                            <span className="block text-outline text-transparent mt-2">Excellence</span>
                            <span className="block text-gradient mt-2">Since Inception</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
                            From humble beginnings to industry leadership, our journey has been defined by unwavering commitment to quality, innovation, and client satisfaction.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Bento Box / Asymmetric Grid Layout */}
            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Large Pull Quote */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <p className="text-4xl md:text-5xl font-heading font-bold text-secondary leading-tight max-w-4xl">
                            "We don't just build structures; we create <span className="text-gradient">spaces where life happens</span> and dreams take shape."
                        </p>
                        <p className="text-xl text-gray-500 mt-6">— Skimac Investments Team</p>
                    </motion.div>

                    {/* Asymmetric Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* Large Image - 60% width */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-2xl group"
                        >
                            <img
                                src="/assets/1.jpg"
                                alt="Skimac Team at Work"
                                className="w-full h-full object-cover min-h-[500px] transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <span className="inline-block px-4 py-2 bg-primary text-white text-sm font-bold rounded-full mb-3">
                                    Our Team
                                </span>
                                <h3 className="text-3xl font-heading font-bold text-white">
                                    Skilled Professionals, Exceptional Results
                                </h3>
                            </div>
                        </motion.div>

                        {/* Text Boxes - 40% width, varied sizes */}
                        <div className="lg:col-span-5 space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-gradient-red-gold p-8 rounded-3xl text-white"
                            >
                                <h3 className="text-3xl font-heading font-bold mb-4">Our Mission</h3>
                                <p className="text-white/90 leading-relaxed">
                                    To deliver exceptional construction services that exceed client expectations while maintaining the highest standards of safety, quality, and sustainability.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-neutral-100 p-8 rounded-3xl"
                            >
                                <h3 className="text-2xl font-heading font-bold text-secondary mb-4">Our Vision</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    To be Zimbabwe's most trusted construction partner, recognized for innovation, reliability, and transformative projects.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="bg-white p-6 rounded-3xl shadow-lg border-2 border-primary/20"
                            >
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { icon: <FaCheckCircle />, text: 'Licensed & Insured' },
                                        { icon: <FaCheckCircle />, text: 'Expert Team' },
                                        { icon: <FaCheckCircle />, text: 'Modern Equipment' },
                                        { icon: <FaCheckCircle />, text: 'Quality Guaranteed' }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-2 text-sm">
                                            <span className="text-primary">{item.icon}</span>
                                            <span className="text-gray-700 font-medium">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-20 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-20 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            </section>

            {/* Timeline Section */}
            <section className="py-24 bg-neutral-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">
                            Our Journey
                        </span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-6">
                            The Path to Excellence
                        </h2>
                    </motion.div>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary" />

                        {/* Timeline Items */}
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                            >
                                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                                    <div className="inline-block bg-white p-6 rounded-2xl shadow-lg">
                                        <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-3">
                                            {item.year}
                                        </span>
                                        <h3 className="text-xl font-heading font-bold text-secondary mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values - Overlapping Card Stack */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">
                            What Drives Us
                        </span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-6">
                            Our Core Values
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The principles that guide every decision we make and every project we undertake.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50, rotate: -5 }}
                                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10, rotate: 2, scale: 1.05 }}
                                className="relative group"
                            >
                                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-transparent hover:border-primary">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center text-3xl text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                                        {value.icon}
                                    </div>
                                    <h3 className="text-2xl font-heading font-bold text-secondary mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 bg-gradient-black-red text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }} />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        {[
                            { icon: <FaHardHat />, number: '100+', label: 'Projects Completed' },
                            { icon: <FaUsers />, number: '50+', label: 'Skilled Professionals' },
                            { icon: <FaRocket />, number: '15+', label: 'Years of Excellence' }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <div className="text-5xl text-accent mb-4">{stat.icon}</div>
                                <div className="text-5xl md:text-6xl font-heading font-bold mb-2">{stat.number}</div>
                                <div className="text-xl text-gray-300">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
