import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaBuilding, FaTools, FaHardHat, FaPaintRoller, FaDraftingCompass, FaCheck, FaTimes, FaArrowRight } from 'react-icons/fa';

const servicesData = [
    {
        id: 1,
        icon: <FaHome />,
        title: 'Residential Construction',
        subtitle: 'Building Your Dream Home',
        shortDesc: 'Custom homes built with precision, quality, and care.',
        fullDesc: 'We specialize in creating beautiful, functional residential spaces that reflect your unique style and needs. From cozy cottages to luxury mansions, our experienced team ensures every detail is executed to perfection.',
        benefits: [
            'Custom architectural design',
            'High-quality materials and craftsmanship',
            'Energy-efficient construction',
            'On-time project completion',
            'Full warranty coverage'
        ],
        image: '/assets/486145601_1169411721641605_3660278389802093808_n.jpg',
        gradient: 'from-red-500 to-orange-600'
    },
    {
        id: 2,
        icon: <FaBuilding />,
        title: 'Commercial Construction',
        subtitle: 'Building Success for Business',
        shortDesc: 'Professional commercial spaces designed for growth.',
        fullDesc: 'Our commercial projects combine functionality, durability, and aesthetic appeal to create spaces where businesses thrive. We handle everything from office buildings to retail spaces with expert project management.',
        benefits: [
            'Functional workspace design',
            'Code-compliant construction',
            'Minimal business disruption',
            'Scalable solutions',
            'Professional finishing'
        ],
        image: '/assets/486279889_1169406424975468_363414213998524469_n.jpg',
        gradient: 'from-blue-500 to-cyan-600'
    },
    {
        id: 3,
        icon: <FaPaintRoller />,
        title: 'Plastering & Finishing',
        subtitle: 'Perfect Surfaces Every Time',
        shortDesc: 'Premium plastering with our exclusive PlasterSET product.',
        fullDesc: 'Using our premium PlasterSET product line, we deliver superior wall finishing that is smooth, durable, and ready for any final treatment. Our skilled craftsmen ensure flawless results on every project.',
        benefits: [
            'PlasterSET premium products',
            'Smooth, even surfaces',
            'Fast drying times',
            'Expert application',
            'Long-lasting results'
        ],
        image: '/assets/486433436_1168286801754097_3956274653735992506_n.jpg',
        gradient: 'from-amber-500 to-yellow-600'
    },
    {
        id: 4,
        icon: <FaTools />,
        title: 'Renovations & Remodeling',
        subtitle: 'Transform Your Space',
        shortDesc: 'Complete renovations that breathe new life into spaces.',
        fullDesc: 'Whether it is a kitchen remodel, bathroom upgrade, or full-scale building renovation, we bring fresh energy and modern design to your existing space while maintaining structural integrity.',
        benefits: [
            'Complete design services',
            'Structural upgrades',
            'Modern fixtures and finishes',
            'Minimal disruption',
            'Value enhancement'
        ],
        image: '/assets/486281502_1168267075089403_8802324942161279710_n.jpg',
        gradient: 'from-green-500 to-emerald-600'
    },
    {
        id: 5,
        icon: <FaHardHat />,
        title: 'Project Management',
        subtitle: 'Stress-Free Construction',
        shortDesc: 'Expert management from concept to completion.',
        fullDesc: 'We take the stress out of construction by managing every aspect of your project. Our experienced project managers ensure everything stays on schedule, within budget, and meets the highest quality standards.',
        benefits: [
            'Comprehensive planning',
            'Budget management',
            'Timeline adherence',
            'Quality control',
            'Regular updates'
        ],
        image: '/assets/486471289_1169400368309407_7649123009542693034_n.jpg',
        gradient: 'from-purple-500 to-pink-600'
    },
    {
        id: 6,
        icon: <FaDraftingCompass />,
        title: 'Architectural Design',
        subtitle: 'Vision to Blueprint',
        shortDesc: 'Creative design solutions that bring visions to life.',
        fullDesc: 'Our talented design team works closely with you to create detailed blueprints and stunning 3D models that transform your vision into reality before construction even begins.',
        benefits: [
            '3D modeling and visualization',
            'Custom design solutions',
            'Building code compliance',
            'Sustainable design options',
            'Revision support'
        ],
        image: '/assets/design_concept_1.jpg',
        gradient: 'from-indigo-500 to-blue-600'
    },
];

const Services = () => {
    const [expandedId, setExpandedId] = useState(null);

    const handleCardClick = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const expandedService = servicesData.find(s => s.id === expandedId);

    return (
        <div className="bg-neutral-50 min-h-screen pb-16">
            {/* Header Section */}
            <div className="relative bg-white pt-32 pb-12 mb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block"
                    >
                        What We Offer
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary mb-6"
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        Comprehensive construction solutions tailored to bring your vision to life with excellence and precision.
                    </motion.p>
                </div>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatePresence mode="wait">
                    {!expandedId ? (
                        // Grid View
                        <motion.div
                            key="grid"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {servicesData.map((service, index) => (
                                <motion.div
                                    key={service.id}
                                    layoutId={`service-${service.id}`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    onClick={() => handleCardClick(service.id)}
                                    className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group relative overflow-hidden"
                                >
                                    {/* Gradient background on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                        className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-3xl text-white mb-6 shadow-lg relative z-10`}
                                    >
                                        {service.icon}
                                    </motion.div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-heading font-bold text-secondary mb-2 relative z-10">
                                        {service.title}
                                    </h3>
                                    <p className="text-primary font-semibold text-sm mb-4 relative z-10">
                                        {service.subtitle}
                                    </p>
                                    <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
                                        {service.shortDesc}
                                    </p>

                                    {/* CTA */}
                                    <div className="flex items-center gap-2 text-primary font-bold group/link relative z-10">
                                        <span>Learn More</span>
                                        <FaArrowRight className="group-hover/link:translate-x-2 transition-transform" />
                                    </div>

                                    {/* Decorative border */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        // Expanded View
                        <motion.div
                            key="expanded"
                            layoutId={`service-${expandedId}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
                        >
                            <div className="relative">
                                {/* Hero Image */}
                                <div className="relative h-96 overflow-hidden">
                                    <img
                                        src={expandedService.image}
                                        alt={expandedService.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-r ${expandedService.gradient} opacity-60`} />

                                    {/* Close Button */}
                                    <button
                                        onClick={() => setExpandedId(null)}
                                        className="absolute top-6 right-6 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all z-10 group"
                                        aria-label="Close"
                                    >
                                        <FaTimes className="group-hover:rotate-90 transition-transform" size={20} />
                                    </button>

                                    {/* Title Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                                        <div className={`inline-block w-16 h-16 bg-gradient-to-br ${expandedService.gradient} rounded-2xl flex items-center justify-center text-3xl text-white mb-4 shadow-lg`}>
                                            {expandedService.icon}
                                        </div>
                                        <h2 className="text-4xl font-heading font-bold text-white mb-2">
                                            {expandedService.title}
                                        </h2>
                                        <p className="text-accent text-lg font-semibold">
                                            {expandedService.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 lg:p-12">
                                    {/* Left Column - Description */}
                                    <div>
                                        <h3 className="text-2xl font-heading font-bold text-secondary mb-6">
                                            About This Service
                                        </h3>
                                        <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                            {expandedService.fullDesc}
                                        </p>

                                        <Link
                                            to="/contact"
                                            className="btn-primary inline-flex items-center gap-3"
                                        >
                                            Request a Quote
                                            <FaArrowRight />
                                        </Link>
                                    </div>

                                    {/* Right Column - Benefits */}
                                    <div>
                                        <h3 className="text-2xl font-heading font-bold text-secondary mb-6">
                                            Key Benefits
                                        </h3>
                                        <ul className="space-y-4">
                                            {expandedService.benefits.map((benefit, index) => (
                                                <motion.li
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="flex items-start gap-3"
                                                >
                                                    <div className={`flex-shrink-0 w-6 h-6 bg-gradient-to-br ${expandedService.gradient} rounded-full flex items-center justify-center mt-0.5`}>
                                                        <FaCheck className="text-white text-xs" />
                                                    </div>
                                                    <span className="text-gray-700 text-lg">{benefit}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Back to Grid Button */}
                                <div className="px-8 lg:px-12 pb-8">
                                    <button
                                        onClick={() => setExpandedId(null)}
                                        className="text-gray-600 hover:text-primary font-semibold flex items-center gap-2 transition-colors"
                                    >
                                        ← Back to All Services
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Call to Action */}
            {!expandedId && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mt-20 px-4 text-center"
                >
                    <div className="bg-gradient-black-red rounded-3xl p-12 relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                                Ready to Start Your Project?
                            </h2>
                            <p className="text-xl text-white/90 mb-8">
                                Get in touch with our team for a free consultation and quote.
                            </p>
                            <Link
                                to="/contact"
                                className="btn-glass inline-flex items-center gap-3 text-lg"
                            >
                                Contact Us Today
                                <FaArrowRight />
                            </Link>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Services;
