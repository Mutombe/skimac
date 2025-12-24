import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaPhone, FaTimes, FaCheck, FaStar, FaArrowRight, FaArrowLeft, FaSearchPlus, FaShoppingCart, FaAward, FaCertificate, FaLeaf } from 'react-icons/fa';

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [activeTab, setActiveTab] = useState('features');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);

    const products = [
        {
            id: 1,
            name: 'PlasterSET Premium',
            category: 'Wall Finishing',
            tagline: 'Professional Grade Gypsum Plaster',
            price: 'Contact for Quote',
            rating: 4.9,
            reviews: 127,
            badge: 'Best Seller',
            images: [
                '/assets/p1.jpg',
                '/assets/p1.jpg',
                '/assets/p1.jpg'
            ],
            description: 'PlasterSET Premium is our flagship gypsum wall finishing plaster, engineered for professional contractors who demand the highest quality. This advanced formula delivers a flawless, mirror-smooth finish that serves as the perfect foundation for any final treatment.',
            features: [
                { icon: <FaCheck />, title: 'Superior Quality', desc: 'Premium-grade gypsum for exceptional results' },
                { icon: <FaCheck />, title: 'Smooth Finish', desc: 'Mirror-like surface ready for painting' },
                { icon: <FaCheck />, title: 'Easy Application', desc: 'User-friendly formula for all skill levels' },
                { icon: <FaCheck />, title: 'Durable Results', desc: 'Long-lasting finish that resists cracking' },
                { icon: <FaCheck />, title: 'Fast Drying', desc: 'Quick set time for efficient project completion' },
                { icon: <FaCheck />, title: 'Low Shrinkage', desc: 'Minimal shrinkage for consistent coverage' }
            ],
            specifications: [
                { label: 'Coverage', value: '3-4 m² per 25kg bag' },
                { label: 'Drying Time', value: '24-48 hours' },
                { label: 'Thickness', value: '5-15mm recommended' },
                { label: 'Base Material', value: 'Premium Gypsum' },
                { label: 'Packaging', value: '25kg bags' },
                { label: 'Shelf Life', value: '12 months (sealed)' }
            ],
            applications: [
                'Residential interior walls',
                'Commercial office spaces',
                'Retail environments',
                'Hospitality projects',
                'Educational facilities',
                'Healthcare buildings'
            ],
            certifications: [
                { icon: <FaAward />, name: 'ISO Certified' },
                { icon: <FaCertificate />, name: 'Quality Tested' },
                { icon: <FaLeaf />, name: 'Eco-Friendly' }
            ]
        },
        {
            id: 2,
            name: 'PlasterSET Standard',
            category: 'Wall Finishing',
            tagline: 'Reliable Quality for Every Project',
            price: 'Contact for Quote',
            rating: 4.7,
            reviews: 89,
            badge: 'Popular',
            images: [
                '/assets/p2.jpg',
                '/assets/p2.jpg'
            ],
            description: 'PlasterSET Standard offers excellent quality at an affordable price point. Perfect for residential projects and contractors seeking reliable performance without compromising on finish quality.',
            features: [
                { icon: <FaCheck />, title: 'Great Value', desc: 'Quality results at competitive pricing' },
                { icon: <FaCheck />, title: 'Reliable Performance', desc: 'Consistent application and finish' },
                { icon: <FaCheck />, title: 'Easy to Work', desc: 'Forgiving formula for smooth application' },
                { icon: <FaCheck />, title: 'Good Coverage', desc: 'Efficient material usage' }
            ],
            specifications: [
                { label: 'Coverage', value: '2.5-3.5 m² per 25kg bag' },
                { label: 'Drying Time', value: '36-48 hours' },
                { label: 'Thickness', value: '5-20mm recommended' },
                { label: 'Base Material', value: 'Quality Gypsum' },
                { label: 'Packaging', value: '25kg bags' },
                { label: 'Shelf Life', value: '9 months (sealed)' }
            ],
            applications: [
                'Residential homes',
                'Small commercial projects',
                'Renovation work',
                'Budget-conscious builds'
            ],
            certifications: [
                { icon: <FaCertificate />, name: 'Quality Tested' },
                { icon: <FaLeaf />, name: 'Eco-Friendly' }
            ]
        },
        {
            id: 3,
            name: 'PlasterSET Rapid',
            category: 'Wall Finishing',
            tagline: 'Fast-Setting Formula for Quick Projects',
            price: 'Contact for Quote',
            rating: 4.8,
            reviews: 64,
            badge: 'New',
            images: [
                '/assets/p3.jpg',
                '/assets/p3.jpg'
            ],
            description: 'PlasterSET Rapid is specially formulated for time-sensitive projects. With accelerated drying time, this product allows for faster project completion without sacrificing finish quality.',
            features: [
                { icon: <FaCheck />, title: 'Rapid Setting', desc: 'Industry-leading fast dry time' },
                { icon: <FaCheck />, title: 'High Performance', desc: 'Premium finish in less time' },
                { icon: <FaCheck />, title: 'Project Efficiency', desc: 'Complete jobs faster' },
                { icon: <FaCheck />, title: 'Professional Grade', desc: 'Meets commercial standards' }
            ],
            specifications: [
                { label: 'Coverage', value: '3-4 m² per 25kg bag' },
                { label: 'Drying Time', value: '12-24 hours' },
                { label: 'Thickness', value: '5-12mm recommended' },
                { label: 'Base Material', value: 'Fast-Set Gypsum' },
                { label: 'Packaging', value: '25kg bags' },
                { label: 'Shelf Life', value: '6 months (sealed)' }
            ],
            applications: [
                'Fast-track projects',
                'Renovations with tight deadlines',
                'Commercial fit-outs',
                'Emergency repairs'
            ],
            certifications: [
                { icon: <FaAward />, name: 'ISO Certified' },
                { icon: <FaCertificate />, name: 'Quality Tested' }
            ]
        }
    ];

    const nextImage = () => {
        if (selectedProduct) {
            setCurrentImageIndex((prev) =>
                prev === selectedProduct.images.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (selectedProduct) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? selectedProduct.images.length - 1 : prev - 1
            );
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Grid Pattern with Perspective */}
                <div className="absolute inset-0 opacity-[0.08]" style={{
                    backgroundImage: 'linear-gradient(#212121 1px, transparent 1px), linear-gradient(90deg, #212121 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                    transform: 'perspective(1000px) rotateX(60deg)',
                    transformOrigin: 'center top'
                }} />

                {/* Floating Geometric Shapes */}
                <motion.div
                    animate={{
                        rotate: [0, 360],
                        y: [0, -30, 0]
                    }}
                    transition={{
                        rotate: { duration: 60, repeat: Infinity, ease: 'linear' },
                        y: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
                    }}
                    className="absolute top-20 right-20 w-32 h-32 border-4 border-primary/10 rounded-2xl transform rotate-45"
                />
                <motion.div
                    animate={{
                        rotate: [360, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        rotate: { duration: 50, repeat: Infinity, ease: 'linear' },
                        scale: { duration: 10, repeat: Infinity, ease: 'easeInOut' }
                    }}
                    className="absolute bottom-40 left-20 w-40 h-40 border-4 border-accent/10 rounded-full"
                />
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -50, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                    className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg transform rotate-12"
                />

                {/* Gradient Blobs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl"
                />
            </div>

            {/* Hero Section */}
            <div className="relative pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block"
                    >
                        Premium Construction Materials
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-secondary mb-6 leading-tight"
                    >
                        Our Products
                        <span className="block text-gradient mt-2">PlasterSET Range</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
                    >
                        Professional-grade wall finishing solutions engineered for excellence. From premium to rapid-set formulas, find the perfect match for your project needs.
                    </motion.p>
                </div>
            </div>

            {/* Products Grid */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{
                                y: -15,
                                rotateX: 5,
                                rotateY: 5,
                                transition: { duration: 0.3 }
                            }}
                            onClick={() => {
                                setSelectedProduct(product);
                                setCurrentImageIndex(0);
                                setActiveTab('features');
                            }}
                            className="group cursor-pointer perspective-1000"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                                style={{
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1), 0 1px 8px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.02)'
                                }}
                            >
                                {/* Badge */}
                                {product.badge && (
                                    <div className="absolute top-4 right-4 z-10">
                                        <motion.div
                                            animate={{ rotate: [0, 5, 0, -5, 0] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="bg-gradient-red-gold text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                                        >
                                            {product.badge}
                                        </motion.div>
                                    </div>
                                )}

                                {/* Product Image with 3D Effect */}
                                <div className="relative h-80 bg-gradient-to-br from-neutral-100 to-neutral-200 overflow-hidden">
                                    <motion.div
                                        className="absolute inset-0"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <img
                                            src={product.images[0]}
                                            alt={product.name}
                                            className="w-full h-full object-contain p-8"
                                        />
                                    </motion.div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                    {/* Floating Price Tag */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + 0.3 }}
                                        className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-xl"
                                    >
                                        <p className="text-primary font-bold text-sm">{product.price}</p>
                                    </motion.div>
                                </div>

                                {/* Product Info - Layered Panels */}
                                <div className="relative p-6">
                                    {/* Background Layers for Depth */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white to-neutral-50 opacity-50 rounded-b-3xl" />

                                    <div className="relative z-10">
                                        <div className="flex items-start justify-between mb-2">
                                            <div>
                                                <h3 className="text-2xl font-heading font-bold text-secondary mb-1 group-hover:text-primary transition-colors">
                                                    {product.name}
                                                </h3>
                                                <p className="text-sm text-gray-500 font-medium">{product.category}</p>
                                            </div>
                                            {/* Rating */}
                                            <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full">
                                                <FaStar className="text-amber-500 text-sm" />
                                                <span className="text-sm font-bold text-amber-700">{product.rating}</span>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                            {product.tagline}
                                        </p>

                                        {/* Feature Pills */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {product.features.slice(0, 3).map((feature, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium"
                                                >
                                                    {feature.title}
                                                </span>
                                            ))}
                                        </div>

                                        {/* CTA Button */}
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full btn-primary py-3 flex items-center justify-center gap-2 group/btn"
                                        >
                                            View Full Details
                                            <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                                        </motion.button>
                                    </div>
                                </div>

                                {/* 3D Shadow Effect */}
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-black/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Product Detail Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                        onClick={() => {
                            setSelectedProduct(null);
                            setIsZoomed(false);
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25 }}
                            className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => {
                                    setSelectedProduct(null);
                                    setIsZoomed(false);
                                }}
                                className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-primary hover:bg-white transition-all shadow-lg"
                            >
                                <FaTimes className="text-xl" />
                            </motion.button>

                            <div className="grid grid-cols-1 lg:grid-cols-2 max-h-[90vh] overflow-y-auto">
                                {/* Left: Image Gallery */}
                                <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 p-8 lg:p-12 flex flex-col justify-center relative">
                                    {/* Main Image */}
                                    <div className="relative mb-6 group/image">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={currentImageIndex}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                                className="relative"
                                            >
                                                <img
                                                    src={selectedProduct.images[currentImageIndex]}
                                                    alt={selectedProduct.name}
                                                    className={`w-full h-96 object-contain rounded-2xl transition-transform duration-500 ${
                                                        isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
                                                    }`}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setIsZoomed(!isZoomed);
                                                    }}
                                                />
                                            </motion.div>
                                        </AnimatePresence>

                                        {/* Zoom Icon */}
                                        {!isZoomed && (
                                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg opacity-0 group-hover/image:opacity-100 transition-opacity">
                                                <FaSearchPlus className="text-primary" />
                                            </div>
                                        )}

                                        {/* Navigation Arrows */}
                                        {selectedProduct.images.length > 1 && (
                                            <>
                                                <motion.button
                                                    whileHover={{ scale: 1.1, x: -5 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    onClick={prevImage}
                                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary shadow-lg hover:bg-white transition-all"
                                                >
                                                    <FaArrowLeft />
                                                </motion.button>
                                                <motion.button
                                                    whileHover={{ scale: 1.1, x: 5 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    onClick={nextImage}
                                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary shadow-lg hover:bg-white transition-all"
                                                >
                                                    <FaArrowRight />
                                                </motion.button>
                                            </>
                                        )}
                                    </div>

                                    {/* Thumbnail Navigation */}
                                    {selectedProduct.images.length > 1 && (
                                        <div className="flex gap-3 justify-center">
                                            {selectedProduct.images.map((img, idx) => (
                                                <motion.button
                                                    key={idx}
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={() => setCurrentImageIndex(idx)}
                                                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                                                        idx === currentImageIndex
                                                            ? 'border-primary shadow-lg shadow-primary/30'
                                                            : 'border-gray-300 opacity-60 hover:opacity-100'
                                                    }`}
                                                >
                                                    <img src={img} alt="" className="w-full h-full object-contain bg-white p-2" />
                                                </motion.button>
                                            ))}
                                        </div>
                                    )}

                                    {/* Certifications */}
                                    <div className="mt-8 flex gap-4 justify-center flex-wrap">
                                        {selectedProduct.certifications.map((cert, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md"
                                            >
                                                <span className="text-primary">{cert.icon}</span>
                                                <span className="text-sm font-medium text-gray-700">{cert.name}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right: Product Information */}
                                <div className="p-8 lg:p-12 overflow-y-auto">
                                    {/* Header */}
                                    <div className="mb-8">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h2 className="text-4xl font-heading font-bold text-secondary mb-2">
                                                    {selectedProduct.name}
                                                </h2>
                                                <p className="text-primary font-semibold text-lg">{selectedProduct.category}</p>
                                                <p className="text-gray-600 mt-1">{selectedProduct.tagline}</p>
                                            </div>
                                            {selectedProduct.badge && (
                                                <div className="bg-gradient-red-gold text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                                    {selectedProduct.badge}
                                                </div>
                                            )}
                                        </div>

                                        {/* Rating & Reviews */}
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full">
                                                <FaStar className="text-amber-500" />
                                                <span className="font-bold text-amber-700">{selectedProduct.rating}</span>
                                                <span className="text-gray-500 text-sm">({selectedProduct.reviews} reviews)</span>
                                            </div>
                                            <div className="text-2xl font-bold text-primary">{selectedProduct.price}</div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-700 leading-relaxed mb-8">
                                        {selectedProduct.description}
                                    </p>

                                    {/* Tabbed Content */}
                                    <div className="mb-8">
                                        {/* Tab Headers */}
                                        <div className="flex gap-2 border-b-2 border-gray-200 mb-6">
                                            {[
                                                { id: 'features', label: 'Features' },
                                                { id: 'specs', label: 'Specifications' },
                                                { id: 'applications', label: 'Applications' }
                                            ].map((tab) => (
                                                <button
                                                    key={tab.id}
                                                    onClick={() => setActiveTab(tab.id)}
                                                    className="relative px-6 py-3 font-bold text-sm transition-colors"
                                                >
                                                    <span className={activeTab === tab.id ? 'text-primary' : 'text-gray-500 hover:text-gray-700'}>
                                                        {tab.label}
                                                    </span>
                                                    {activeTab === tab.id && (
                                                        <motion.div
                                                            layoutId="activeTab"
                                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                                                        />
                                                    )}
                                                </button>
                                            ))}
                                        </div>

                                        {/* Tab Content */}
                                        <AnimatePresence mode="wait">
                                            {activeTab === 'features' && (
                                                <motion.div
                                                    key="features"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                                                >
                                                    {selectedProduct.features.map((feature, idx) => (
                                                        <motion.div
                                                            key={idx}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: idx * 0.1 }}
                                                            className="flex items-start gap-3 p-4 bg-gradient-to-br from-neutral-50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
                                                        >
                                                            <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                                                {feature.icon}
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-secondary mb-1">{feature.title}</h4>
                                                                <p className="text-sm text-gray-600">{feature.desc}</p>
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </motion.div>
                                            )}

                                            {activeTab === 'specs' && (
                                                <motion.div
                                                    key="specs"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="space-y-3"
                                                >
                                                    {selectedProduct.specifications.map((spec, idx) => (
                                                        <motion.div
                                                            key={idx}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: idx * 0.05 }}
                                                            className="flex justify-between items-center p-4 bg-gradient-to-r from-neutral-50 to-white rounded-xl border border-gray-100"
                                                        >
                                                            <span className="font-medium text-gray-600">{spec.label}</span>
                                                            <span className="font-bold text-secondary">{spec.value}</span>
                                                        </motion.div>
                                                    ))}
                                                </motion.div>
                                            )}

                                            {activeTab === 'applications' && (
                                                <motion.div
                                                    key="applications"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                                                >
                                                    {selectedProduct.applications.map((app, idx) => (
                                                        <motion.div
                                                            key={idx}
                                                            initial={{ opacity: 0, scale: 0.9 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: idx * 0.05 }}
                                                            className="flex items-center gap-3 p-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl"
                                                        >
                                                            <FaCheck className="text-primary flex-shrink-0" />
                                                            <span className="text-gray-700 font-medium">{app}</span>
                                                        </motion.div>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Contact CTAs */}
                                    <div className="pt-6 border-t border-gray-200">
                                        <p className="font-bold text-secondary mb-4">Contact us to order:</p>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                            <motion.a
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                href="https://wa.me/263775040327"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 py-3 px-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all font-medium shadow-lg shadow-green-500/30"
                                            >
                                                <FaWhatsapp className="text-xl" /> WhatsApp
                                            </motion.a>
                                            <motion.a
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                href="mailto:info@skimac.co.zw"
                                                className="flex items-center justify-center gap-2 py-3 px-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all font-medium shadow-lg shadow-blue-500/30"
                                            >
                                                <FaEnvelope className="text-xl" /> Email
                                            </motion.a>
                                            <motion.a
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                href="tel:+263775040327"
                                                className="flex items-center justify-center gap-2 py-3 px-4 bg-secondary text-white rounded-xl hover:bg-gray-800 transition-all font-medium shadow-lg shadow-secondary/30"
                                            >
                                                <FaPhone className="text-xl" /> Call
                                            </motion.a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Products;
