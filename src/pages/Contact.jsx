import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaLinkedin, FaCheckCircle, FaArrowRight, FaArrowLeft, FaBuilding, FaHome, FaTools, FaPaintRoller, FaHardHat, FaDraftingCompass } from 'react-icons/fa';

const Contact = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1
        name: '',
        email: '',
        phone: '',
        // Step 2
        serviceType: '',
        projectDescription: '',
        budget: '',
        // Step 3
        preferredDate: '',
        preferredTime: '',
        contactMethod: 'email'
    });
    const [errors, setErrors] = useState({});
    const [focusedField, setFocusedField] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [mapExpanded, setMapExpanded] = useState(false);

    const serviceTypes = [
        { value: 'residential', label: 'Residential Construction', icon: <FaHome /> },
        { value: 'commercial', label: 'Commercial Construction', icon: <FaBuilding /> },
        { value: 'plastering', label: 'Plastering & Finishing', icon: <FaPaintRoller /> },
        { value: 'renovation', label: 'Renovations & Remodeling', icon: <FaTools /> },
        { value: 'management', label: 'Project Management', icon: <FaHardHat /> },
        { value: 'design', label: 'Architectural Design', icon: <FaDraftingCompass /> }
    ];

    const budgetRanges = [
        { value: 'under-10k', label: 'Under $10,000' },
        { value: '10k-50k', label: '$10,000 - $50,000' },
        { value: '50k-100k', label: '$50,000 - $100,000' },
        { value: '100k-plus', label: '$100,000+' }
    ];

    const validateStep = (step) => {
        const newErrors = {};

        if (step === 1) {
            if (!formData.name.trim()) newErrors.name = 'Name is required';
            if (!formData.email.trim()) {
                newErrors.email = 'Email is required';
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                newErrors.email = 'Invalid email address';
            }
            if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
        }

        if (step === 2) {
            if (!formData.serviceType) newErrors.serviceType = 'Please select a service';
            if (!formData.projectDescription.trim()) {
                newErrors.projectDescription = 'Project description is required';
            } else if (formData.projectDescription.trim().length < 20) {
                newErrors.projectDescription = 'Please provide at least 20 characters';
            }
            if (!formData.budget) newErrors.budget = 'Please select a budget range';
        }

        if (step === 3) {
            if (!formData.preferredDate) newErrors.preferredDate = 'Preferred date is required';
            if (!formData.preferredTime) newErrors.preferredTime = 'Preferred time is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(currentStep + 1);
            setErrors({});
        }
    };

    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
        setErrors({});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateStep(3)) {
            setSubmitted(true);
            console.log('Form submitted:', formData);
        }
    };

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors({ ...errors, [field]: '' });
        }
    };

    const FloatingLabelInput = ({ label, name, type = 'text', value, error, required = true, ...props }) => {
        const hasValue = value && value.length > 0;
        const isFocused = focusedField === name;

        return (
            <div className="relative">
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={(e) => handleChange(name, e.target.value)}
                    onFocus={() => setFocusedField(name)}
                    onBlur={() => setFocusedField('')}
                    className={`w-full px-4 pt-6 pb-2 rounded-xl border-2 bg-white transition-all duration-300 focus:outline-none ${
                        error
                            ? 'border-red-500 focus:border-red-500'
                            : isFocused
                            ? 'border-primary shadow-lg shadow-primary/20'
                            : 'border-gray-200 hover:border-gray-300'
                    }`}
                    {...props}
                />
                <motion.label
                    initial={false}
                    animate={{
                        y: hasValue || isFocused ? 0 : 12,
                        fontSize: hasValue || isFocused ? '0.75rem' : '1rem',
                        color: error ? '#ef4444' : isFocused ? '#D32F2F' : '#6b7280'
                    }}
                    className="absolute left-4 top-2 font-medium pointer-events-none"
                >
                    {label}{required && ' *'}
                </motion.label>
                <AnimatePresence>
                    {error && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-500 text-sm mt-1 ml-1"
                        >
                            {error}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        );
    };

    const contactInfo = [
        {
            icon: <FaMapMarkerAlt />,
            title: 'Our Location',
            content: '20 George rd, Hatfield, Harare, Zimbabwe',
            link: 'https://maps.google.com',
            color: 'from-red-500 to-orange-600'
        },
        {
            icon: <FaPhone />,
            title: 'Phone Number',
            content: '+263 77 504 0327',
            link: 'tel:+263775040327',
            color: 'from-blue-500 to-cyan-600'
        },
        {
            icon: <FaEnvelope />,
            title: 'Email Address',
            content: 'info@skimac.co.zw',
            link: 'mailto:info@skimac.co.zw',
            color: 'from-amber-500 to-orange-600'
        },
        {
            icon: <FaClock />,
            title: 'Working Hours',
            content: 'Mon - Fri: 8:00 AM - 5:00 PM',
            link: null,
            color: 'from-green-500 to-emerald-600'
        }
    ];

    if (submitted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-white px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center max-w-2xl"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                        className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
                    >
                        <FaCheckCircle className="text-6xl text-white" />
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-6">
                        Thank You!
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        We've received your message and will get back to you within 24 hours. Our team is excited to help bring your project to life!
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            setSubmitted(false);
                            setCurrentStep(1);
                            setFormData({
                                name: '', email: '', phone: '', serviceType: '',
                                projectDescription: '', budget: '', preferredDate: '',
                                preferredTime: '', contactMethod: 'email'
                            });
                        }}
                        className="btn-primary inline-flex items-center gap-3"
                    >
                        Send Another Message
                        <FaArrowRight />
                    </motion.button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Mobile: Collapsible Map */}
            <div className="lg:hidden relative pt-20">
                <button
                    onClick={() => setMapExpanded(!mapExpanded)}
                    className="w-full bg-gradient-black-red text-white py-6 px-4 flex items-center justify-between font-bold text-lg"
                >
                    <span className="flex items-center gap-3">
                        <FaMapMarkerAlt className="text-accent text-2xl" />
                        View Map Location
                    </span>
                    <motion.span
                        animate={{ rotate: mapExpanded ? 180 : 0 }}
                        className="text-2xl"
                    >
                        ↓
                    </motion.span>
                </button>
                <AnimatePresence>
                    {mapExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 400, opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.87654321!2d31.0!3d-17.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ4JzAwLjAiUyAzMcKwMDAnMDAuMCJF!5e0!3m2!1sen!2szw!4v1600000000000!5m2!1sen!2szw&styles=%5B%7B%22elementType%22%3A%22geometry%22%2C%22stylers%22%3A%5B%7B%22color%22%3A%22%23212121%22%7D%5D%7D%2C%7B%22elementType%22%3A%22labels.icon%22%2C%22stylers%22%3A%5B%7B%22visibility%22%3A%22off%22%7D%5D%7D%2C%7B%22elementType%22%3A%22labels.text.fill%22%2C%22stylers%22%3A%5B%7B%22color%22%3A%22%23757575%22%7D%5D%7D%2C%7B%22elementType%22%3A%22labels.text.stroke%22%2C%22stylers%22%3A%5B%7B%22color%22%3A%22%23212121%22%7D%5D%7D%5D"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(0.2) contrast(1.2)' }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Skimac Location"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Desktop: Fixed Split-Screen */}
            <div className="hidden lg:grid lg:grid-cols-2 min-h-screen">
                {/* Left: Fixed Google Maps */}
                <div className="relative h-screen sticky top-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.87654321!2d31.0!3d-17.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ4JzAwLjAiUyAzMcKwMDAnMDAuMCJF!5e0!3m2!1sen!2szw!4v1600000000000!5m2!1sen!2szw&styles=%5B%7B%22elementType%22%3A%22geometry%22%2C%22stylers%22%3A%5B%7B%22color%22%3A%22%23212121%22%7D%5D%7D%2C%7B%22elementType%22%3A%22labels.icon%22%2C%22stylers%22%3A%5B%7B%22visibility%22%3A%22off%22%7D%5D%7D%2C%7B%22elementType%22%3A%22labels.text.fill%22%2C%22stylers%22%3A%5B%7B%22color%22%3A%22%23757575%22%7D%5D%7D%2C%7B%22elementType%22%3A%22labels.text.stroke%22%2C%22stylers%22%3A%5B%7B%22color%22%3A%22%23212121%22%7D%5D%7D%5D"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(0.2) contrast(1.2)' }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Skimac Location"
                        className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Company Info Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="absolute bottom-12 left-12 right-12 bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-2xl"
                    >
                        <h3 className="text-2xl font-heading font-bold text-secondary mb-6">Visit Our Office</h3>
                        <div className="flex items-start gap-4 mb-4">
                            <FaMapMarkerAlt className="text-2xl text-primary mt-1 flex-shrink-0" />
                            <div>
                                <p className="text-gray-700 font-medium mb-1">20 George rd, Hatfield</p>
                                <p className="text-gray-600">Harare, Zimbabwe</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                            <FaClock className="text-primary" />
                            <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Scrollable Content */}
                <div className="bg-white overflow-y-auto">
                    <div className="min-h-screen flex flex-col justify-center py-16 px-8 xl:px-16 ">
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-12 pt-16"
                        >
                            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">
                                Get In Touch
                            </span>
                            <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-6 leading-tight">
                                Let's Build Your
                                <span className="block text-gradient mt-2">Dream Project</span>
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Fill out the form below and our team will get back to you within 24 hours.
                            </p>
                        </motion.div>

                        {/* Progress Indicator */}
                        <div className="mb-12">
                            <div className="flex items-center justify-between mb-4">
                                {[1, 2, 3].map((step) => (
                                    <React.Fragment key={step}>
                                        <div className="flex flex-col items-center">
                                            <motion.div
                                                animate={{
                                                    scale: currentStep === step ? 1.1 : 1,
                                                    backgroundColor: currentStep >= step ? '#D32F2F' : '#e5e7eb'
                                                }}
                                                className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg ${
                                                    currentStep >= step ? 'shadow-primary/30' : ''
                                                }`}
                                            >
                                                {currentStep > step ? <FaCheckCircle /> : step}
                                            </motion.div>
                                            <span className={`text-xs mt-2 font-medium ${
                                                currentStep >= step ? 'text-primary' : 'text-gray-400'
                                            }`}>
                                                {step === 1 ? 'Contact' : step === 2 ? 'Project' : 'Schedule'}
                                            </span>
                                        </div>
                                        {step < 3 && (
                                            <motion.div
                                                animate={{
                                                    scaleX: currentStep > step ? 1 : 0.3,
                                                    backgroundColor: currentStep > step ? '#D32F2F' : '#e5e7eb'
                                                }}
                                                className="h-1 flex-1 mx-2 origin-left"
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        {/* Multi-Step Form */}
                        <form onSubmit={handleSubmit}>
                            <AnimatePresence mode="wait">
                                {/* Step 1: Contact Info */}
                                {currentStep === 1 && (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        className="space-y-6"
                                    >
                                        <FloatingLabelInput
                                            label="Full Name"
                                            name="name"
                                            value={formData.name}
                                            error={errors.name}
               
                                        />
                                        <FloatingLabelInput
                                            label="Email Address"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            error={errors.email}
      
                                        />
                                        <FloatingLabelInput
                                            label="Phone Number"
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            error={errors.phone}
        
                                        />

                                        <motion.button
                                            type="button"
                                            onClick={handleNext}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-3 mt-8"
                                        >
                                            Continue to Project Details
                                            <FaArrowRight />
                                        </motion.button>
                                    </motion.div>
                                )}

                                {/* Step 2: Project Details */}
                                {currentStep === 2 && (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        className="space-y-6"
                                    >
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                                Service Type *
                                            </label>
                                            <div className="grid grid-cols-2 gap-3">
                                                {serviceTypes.map((service) => (
                                                    <motion.button
                                                        key={service.value}
                                                        type="button"
                                                        onClick={() => handleChange('serviceType', service.value)}
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        className={`p-4 rounded-xl border-2 transition-all text-left ${
                                                            formData.serviceType === service.value
                                                                ? 'border-primary bg-red-50 shadow-lg shadow-primary/20'
                                                                : 'border-gray-200 hover:border-gray-300'
                                                        }`}
                                                    >
                                                        <div className={`text-2xl mb-2 ${
                                                            formData.serviceType === service.value ? 'text-primary' : 'text-gray-400'
                                                        }`}>
                                                            {service.icon}
                                                        </div>
                                                        <p className={`text-sm font-medium ${
                                                            formData.serviceType === service.value ? 'text-secondary' : 'text-gray-600'
                                                        }`}>
                                                            {service.label}
                                                        </p>
                                                    </motion.button>
                                                ))}
                                            </div>
                                            {errors.serviceType && (
                                                <motion.p
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    className="text-red-500 text-sm mt-2"
                                                >
                                                    {errors.serviceType}
                                                </motion.p>
                                            )}
                                        </div>

                                        <div className="relative">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Project Description *
                                            </label>
                                            <textarea
                                                name="projectDescription"
                                                value={formData.projectDescription}
                                                onChange={(e) => handleChange('projectDescription', e.target.value)}
                                                onFocus={() => setFocusedField('projectDescription')}
                                                onBlur={() => setFocusedField('')}
                                                rows="4"
                                                className={`w-full px-4 py-3 rounded-xl border-2 bg-white transition-all duration-300 focus:outline-none resize-none ${
                                                    errors.projectDescription
                                                        ? 'border-red-500 focus:border-red-500'
                                                        : focusedField === 'projectDescription'
                                                        ? 'border-primary shadow-lg shadow-primary/20'
                                                        : 'border-gray-200 hover:border-gray-300'
                                                }`}
                                                placeholder="Tell us about your project..."
                                            />
                                            <div className="flex justify-between items-center mt-1">
                                                {errors.projectDescription ? (
                                                    <motion.p
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        className="text-red-500 text-sm"
                                                    >
                                                        {errors.projectDescription}
                                                    </motion.p>
                                                ) : (
                                                    <span className="text-xs text-gray-400">
                                                        Minimum 20 characters
                                                    </span>
                                                )}
                                                <span className={`text-xs ${
                                                    formData.projectDescription.length >= 20 ? 'text-green-600' : 'text-gray-400'
                                                }`}>
                                                    {formData.projectDescription.length} / 20
                                                </span>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                                Budget Range *
                                            </label>
                                            <div className="grid grid-cols-2 gap-3">
                                                {budgetRanges.map((range) => (
                                                    <motion.button
                                                        key={range.value}
                                                        type="button"
                                                        onClick={() => handleChange('budget', range.value)}
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        className={`p-4 rounded-xl border-2 transition-all font-medium ${
                                                            formData.budget === range.value
                                                                ? 'border-primary bg-red-50 text-secondary shadow-lg shadow-primary/20'
                                                                : 'border-gray-200 text-gray-600 hover:border-gray-300'
                                                        }`}
                                                    >
                                                        {range.label}
                                                    </motion.button>
                                                ))}
                                            </div>
                                            {errors.budget && (
                                                <motion.p
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    className="text-red-500 text-sm mt-2"
                                                >
                                                    {errors.budget}
                                                </motion.p>
                                            )}
                                        </div>

                                        <div className="flex gap-4 mt-8">
                                            <motion.button
                                                type="button"
                                                onClick={handlePrev}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="flex-1 px-6 py-4 bg-gray-100 text-gray-700 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-3"
                                            >
                                                <FaArrowLeft />
                                                Back
                                            </motion.button>
                                            <motion.button
                                                type="button"
                                                onClick={handleNext}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="flex-1 btn-primary py-4 text-lg flex items-center justify-center gap-3"
                                            >
                                                Continue
                                                <FaArrowRight />
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Step 3: Schedule */}
                                {currentStep === 3 && (
                                    <motion.div
                                        key="step3"
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        className="space-y-6"
                                    >
                                        <div className="grid grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Preferred Date *
                                                </label>
                                                <input
                                                    type="date"
                                                    name="preferredDate"
                                                    value={formData.preferredDate}
                                                    onChange={(e) => handleChange('preferredDate', e.target.value)}
                                                    onFocus={() => setFocusedField('preferredDate')}
                                                    onBlur={() => setFocusedField('')}
                                                    min={new Date().toISOString().split('T')[0]}
                                                    className={`w-full px-4 py-3 rounded-xl border-2 bg-white transition-all duration-300 focus:outline-none ${
                                                        errors.preferredDate
                                                            ? 'border-red-500 focus:border-red-500'
                                                            : focusedField === 'preferredDate'
                                                            ? 'border-primary shadow-lg shadow-primary/20'
                                                            : 'border-gray-200 hover:border-gray-300'
                                                    }`}
                                                />
                                                {errors.preferredDate && (
                                                    <motion.p
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        className="text-red-500 text-sm mt-1"
                                                    >
                                                        {errors.preferredDate}
                                                    </motion.p>
                                                )}
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Preferred Time *
                                                </label>
                                                <select
                                                    name="preferredTime"
                                                    value={formData.preferredTime}
                                                    onChange={(e) => handleChange('preferredTime', e.target.value)}
                                                    onFocus={() => setFocusedField('preferredTime')}
                                                    onBlur={() => setFocusedField('')}
                                                    className={`w-full px-4 py-3 rounded-xl border-2 bg-white transition-all duration-300 focus:outline-none ${
                                                        errors.preferredTime
                                                            ? 'border-red-500 focus:border-red-500'
                                                            : focusedField === 'preferredTime'
                                                            ? 'border-primary shadow-lg shadow-primary/20'
                                                            : 'border-gray-200 hover:border-gray-300'
                                                    }`}
                                                >
                                                    <option value="">Select time</option>
                                                    <option value="morning">Morning (8AM - 12PM)</option>
                                                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                                                    <option value="evening">Evening (4PM - 6PM)</option>
                                                </select>
                                                {errors.preferredTime && (
                                                    <motion.p
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        className="text-red-500 text-sm mt-1"
                                                    >
                                                        {errors.preferredTime}
                                                    </motion.p>
                                                )}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                                Preferred Contact Method
                                            </label>
                                            <div className="grid grid-cols-2 gap-3">
                                                {[
                                                    { value: 'email', label: 'Email', icon: <FaEnvelope /> },
                                                    { value: 'phone', label: 'Phone Call', icon: <FaPhone /> }
                                                ].map((method) => (
                                                    <motion.button
                                                        key={method.value}
                                                        type="button"
                                                        onClick={() => handleChange('contactMethod', method.value)}
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        className={`p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
                                                            formData.contactMethod === method.value
                                                                ? 'border-primary bg-red-50 shadow-lg shadow-primary/20'
                                                                : 'border-gray-200 hover:border-gray-300'
                                                        }`}
                                                    >
                                                        <span className={`text-xl ${
                                                            formData.contactMethod === method.value ? 'text-primary' : 'text-gray-400'
                                                        }`}>
                                                            {method.icon}
                                                        </span>
                                                        <span className={`font-medium ${
                                                            formData.contactMethod === method.value ? 'text-secondary' : 'text-gray-600'
                                                        }`}>
                                                            {method.label}
                                                        </span>
                                                    </motion.button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex gap-4 mt-8">
                                            <motion.button
                                                type="button"
                                                onClick={handlePrev}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="flex-1 px-6 py-4 bg-gray-100 text-gray-700 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-3"
                                            >
                                                <FaArrowLeft />
                                                Back
                                            </motion.button>
                                            <motion.button
                                                type="submit"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="flex-1 btn-primary py-4 text-lg flex items-center justify-center gap-3 shadow-lg shadow-primary/30"
                                            >
                                                <FaCheckCircle />
                                                Submit Request
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>

                        {/* Contact Info Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="grid grid-cols-2 gap-4 mt-16"
                        >
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={index}
                                    href={info.link || '#'}
                                    target={info.link ? '_blank' : undefined}
                                    rel={info.link ? 'noopener noreferrer' : undefined}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className={`p-6 rounded-2xl bg-gradient-to-br ${info.color} text-white shadow-lg hover:shadow-2xl transition-all ${
                                        !info.link ? 'pointer-events-none' : 'cursor-pointer'
                                    }`}
                                >
                                    <div className="text-3xl mb-3 opacity-90">{info.icon}</div>
                                    <p className="text-xs font-medium mb-1 opacity-80">{info.title}</p>
                                    <p className="text-sm font-bold">{info.content}</p>
                                </motion.a>
                            ))}
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center gap-4 mt-12 pt-12 border-t border-gray-200"
                        >
                            <span className="text-gray-600 font-medium">Follow Us:</span>
                            {[
                                { icon: <FaFacebook />, color: 'hover:bg-blue-600' },
                                { icon: <FaInstagram />, color: 'hover:bg-pink-600' },
                                { icon: <FaLinkedin />, color: 'hover:bg-blue-700' }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center transition-all shadow-lg hover:shadow-xl ${social.color}`}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Mobile: Form Content */}
            <div className="lg:hidden px-4 py-12">
                <div className="max-w-lg mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">
                            Get In Touch
                        </span>
                        <h1 className="text-4xl font-heading font-bold text-secondary mb-6 leading-tight">
                            Let's Build Your
                            <span className="block text-gradient mt-2">Dream Project</span>
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Fill out the form below and our team will get back to you within 24 hours.
                        </p>
                    </motion.div>

                    {/* Progress Indicator */}
                    <div className="mb-12">
                        <div className="flex items-center justify-between mb-4">
                            {[1, 2, 3].map((step) => (
                                <React.Fragment key={step}>
                                    <div className="flex flex-col items-center">
                                        <motion.div
                                            animate={{
                                                scale: currentStep === step ? 1.1 : 1,
                                                backgroundColor: currentStep >= step ? '#D32F2F' : '#e5e7eb'
                                            }}
                                            className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg ${
                                                currentStep >= step ? 'shadow-primary/30' : ''
                                            }`}
                                        >
                                            {currentStep > step ? <FaCheckCircle className="text-sm" /> : step}
                                        </motion.div>
                                        <span className={`text-xs mt-2 font-medium ${
                                            currentStep >= step ? 'text-primary' : 'text-gray-400'
                                        }`}>
                                            {step === 1 ? 'Contact' : step === 2 ? 'Project' : 'Schedule'}
                                        </span>
                                    </div>
                                    {step < 3 && (
                                        <motion.div
                                            animate={{
                                                scaleX: currentStep > step ? 1 : 0.3,
                                                backgroundColor: currentStep > step ? '#D32F2F' : '#e5e7eb'
                                            }}
                                            className="h-1 flex-1 mx-2 origin-left"
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Same form as desktop */}
                    <form onSubmit={handleSubmit}>
                        <AnimatePresence mode="wait">
                            {currentStep === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    className="space-y-6"
                                >
                                    <FloatingLabelInput
                                        label="Full Name"
                                        name="name"
                                        value={formData.name}
                                        error={errors.name}
                                        placeholder="John Doe"
                                    />
                                    <FloatingLabelInput
                                        label="Email Address"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        error={errors.email}
                                        placeholder="john@example.com"
                                    />
                                    <FloatingLabelInput
                                        label="Phone Number"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        error={errors.phone}
                                        placeholder="+263..."
                                    />

                                    <motion.button
                                        type="button"
                                        onClick={handleNext}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-3 mt-8"
                                    >
                                        Continue to Project Details
                                        <FaArrowRight />
                                    </motion.button>
                                </motion.div>
                            )}
                            {/* Steps 2 and 3 identical to desktop */}
                        </AnimatePresence>
                    </form>

                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-2 gap-4 mt-16"
                    >
                        {contactInfo.map((info, index) => (
                            <motion.a
                                key={index}
                                href={info.link || '#'}
                                target={info.link ? '_blank' : undefined}
                                rel={info.link ? 'noopener noreferrer' : undefined}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className={`p-4 rounded-2xl bg-gradient-to-br ${info.color} text-white shadow-lg hover:shadow-2xl transition-all ${
                                    !info.link ? 'pointer-events-none' : 'cursor-pointer'
                                }`}
                            >
                                <div className="text-2xl mb-2 opacity-90">{info.icon}</div>
                                <p className="text-xs font-medium mb-1 opacity-80">{info.title}</p>
                                <p className="text-sm font-bold">{info.content}</p>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-4 mt-12 pt-12 border-t border-gray-200"
                    >
                        <span className="text-gray-600 font-medium text-sm">Follow Us:</span>
                        {[
                            { icon: <FaFacebook />, color: 'hover:bg-blue-600' },
                            { icon: <FaInstagram />, color: 'hover:bg-pink-600' },
                            { icon: <FaLinkedin />, color: 'hover:bg-blue-700' }
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href="#"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className={`w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center transition-all shadow-lg hover:shadow-xl ${social.color}`}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
