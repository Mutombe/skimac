import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Masonry from 'react-masonry-css';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projectsData = [
    {
        id: 1,
        image: '/assets/486145601_1169411721641605_3660278389802093808_n.jpg',
        title: 'Modern Residential Complex',
        category: 'Residential',
        year: '2024',
        description: 'A beautiful residential development featuring modern architecture and sustainable design.'
    },
    {
        id: 2,
        image: '/assets/486279889_1169406424975468_363414213998524469_n.jpg',
        title: 'Commercial Building',
        category: 'Commercial',
        year: '2024',
        description: 'State-of-the-art commercial space with premium finishing and modern amenities.'
    },
    {
        id: 3,
        image: '/assets/486281502_1168267075089403_8802324942161279710_n.jpg',
        title: 'Luxury Home Renovation',
        category: 'Renovation',
        year: '2024',
        description: 'Complete transformation of a residential property with high-end finishes.'
    },
    {
        id: 4,
        image: '/assets/486433436_1168286801754097_3956274653735992506_n.jpg',
        title: 'Professional Plastering Work',
        category: 'Plastering',
        year: '2024',
        description: 'Expert plastering and finishing services for perfect wall surfaces.'
    },
    {
        id: 5,
        image: '/assets/486471289_1169400368309407_7649123009542693034_n.jpg',
        title: 'Office Space Construction',
        category: 'Commercial',
        year: '2024',
        description: 'Modern office development with flexible workspace solutions.'
    },
    {
        id: 6,
        image: '/assets/486835232_1170224604893650_8694655587522864895_n.jpg',
        title: 'Residential Extension',
        category: 'Residential',
        year: '2024',
        description: 'Home extension project adding value and space to existing property.'
    },
    {
        id: 7,
        image: '/assets/design_concept_1.jpg',
        title: 'Contemporary Design Concept',
        category: 'Design',
        year: '2024',
        description: 'Innovative design concept showcasing modern construction techniques.'
    },
    {
        id: 8,
        image: '/assets/design_concept_2.jpg',
        title: 'Architectural Planning',
        category: 'Design',
        year: '2024',
        description: 'Comprehensive architectural planning for residential development.'
    },
    {
        id: 9,
        image: '/assets/delivery_truck.jpg',
        title: 'Fleet & Logistics',
        category: 'Commercial',
        year: '2024',
        description: 'Our reliable fleet ensuring timely delivery of materials.'
    },
];

const categories = ['All', 'Residential', 'Commercial', 'Renovation', 'Plastering', 'Design'];

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Filter projects based on active category
    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All') return projectsData;
        return projectsData.filter(project => project.category === activeFilter);
    }, [activeFilter]);

    // Masonry breakpoint columns
    const breakpointColumnsObj = {
        default: 3,
        1024: 2,
        640: 1
    };

    // Open lightbox
    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    // Close lightbox
    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = 'auto';
    };

    // Navigate lightbox
    const navigateLightbox = (direction) => {
        if (direction === 'next') {
            setCurrentImageIndex((prev) => (prev + 1) % filteredProjects.length);
        } else {
            setCurrentImageIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
        }
    };

    // Handle keyboard navigation
    React.useEffect(() => {
        const handleKeyPress = (e) => {
            if (!lightboxOpen) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') navigateLightbox('next');
            if (e.key === 'ArrowLeft') navigateLightbox('prev');
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [lightboxOpen]);

    return (
        <div className="bg-white min-h-screen pb-16">
            {/* Header Section */}
            <div className="relative bg-gradient-black-red text-white pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }} />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-accent font-bold uppercase tracking-wider text-sm mb-4 block"
                    >
                        Our Work
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
                    >
                        Project Portfolio
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        Explore our diverse portfolio of completed projects showcasing our commitment to excellence and innovation in construction.
                    </motion.p>
                </div>
            </div>

            {/* Filter Section */}
            <div className="sticky top-20 z-30 bg-white shadow-md py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        {/* Filter Buttons */}
                        <div className="flex flex-wrap gap-3">
                            {categories.map((category) => (
                                <motion.button
                                    key={category}
                                    onClick={() => setActiveFilter(category)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                                        activeFilter === category
                                            ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {category}
                                </motion.button>
                            ))}
                        </div>

                        {/* Results Counter */}
                        <motion.div
                            key={filteredProjects.length}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-gray-600 font-medium"
                        >
                            <span className="text-primary font-bold text-2xl">{filteredProjects.length}</span>
                            <span className="ml-2">Projects</span>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Projects Grid - Masonry Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="flex -ml-6 w-auto"
                            columnClassName="pl-6 bg-clip-padding"
                        >
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="mb-6 group cursor-pointer"
                                    onClick={() => openLightbox(index)}
                                >
                                    <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                            <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-3 w-fit">
                                                {project.category}
                                            </span>
                                            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                            <p className="text-gray-300 text-sm mb-2">{project.description}</p>
                                            <p className="text-accent font-semibold text-sm">View Details →</p>
                                        </div>

                                        {/* Year badge */}
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-secondary">
                                            {project.year}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </Masonry>
                    </motion.div>
                </AnimatePresence>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-gray-500 text-xl mb-4">No projects found in this category.</p>
                        <button
                            onClick={() => setActiveFilter('All')}
                            className="btn-primary"
                        >
                            View All Projects
                        </button>
                    </motion.div>
                )}
            </div>

            {/* Lightbox Gallery */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all z-50"
                            aria-label="Close"
                        >
                            <FaTimes size={20} />
                        </button>

                        {/* Navigation Buttons */}
                        <button
                            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
                            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all z-50"
                            aria-label="Previous"
                        >
                            <FaChevronLeft size={20} />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
                            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all z-50"
                            aria-label="Next"
                        >
                            <FaChevronRight size={20} />
                        </button>

                        {/* Image Container */}
                        <div className="max-w-7xl mx-auto px-4 w-full h-full flex items-center" onClick={(e) => e.stopPropagation()}>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
                                {/* Image */}
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="lg:col-span-2"
                                >
                                    <img
                                        src={filteredProjects[currentImageIndex]?.image}
                                        alt={filteredProjects[currentImageIndex]?.title}
                                        className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
                                    />
                                </motion.div>

                                {/* Project Details */}
                                <motion.div
                                    key={`details-${currentImageIndex}`}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="bg-white/5 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-center"
                                >
                                    <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-4 w-fit">
                                        {filteredProjects[currentImageIndex]?.category}
                                    </span>
                                    <h2 className="text-3xl font-heading font-bold text-white mb-4">
                                        {filteredProjects[currentImageIndex]?.title}
                                    </h2>
                                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                        {filteredProjects[currentImageIndex]?.description}
                                    </p>
                                    <div className="flex items-center gap-4 text-gray-400">
                                        <span>Year: <span className="text-white font-bold">{filteredProjects[currentImageIndex]?.year}</span></span>
                                        <span>•</span>
                                        <span>{currentImageIndex + 1} / {filteredProjects.length}</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Projects;
