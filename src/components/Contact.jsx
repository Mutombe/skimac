import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="section-padding bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-20">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="pt-20"
                >
                    <h4 className="text-primary font-bold uppercase tracking-wider mb-2">Get In Touch</h4>
                    <h2 className="text-4xl font-heading font-bold text-secondary mb-6">
                        Let's Build Something Great Together
                    </h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Ready to start your next construction project? Contact us today for a consultation and quote. We are here to answer any questions you may have.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-primary text-xl flex-shrink-0">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h5 className="font-bold text-secondary text-lg">Our Location</h5>
                                <p className="text-gray-600">20 George rd, Hatfield, Harare, Zimbabwe</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-primary text-xl flex-shrink-0">
                                <FaPhone />
                            </div>
                            <div>
                                <h5 className="font-bold text-secondary text-lg">Phone Number</h5>
                                <p className="text-gray-600">+263 77 504 0327</p>
                                <p className="text-gray-600">+263 (242) 570516</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-primary text-xl flex-shrink-0">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h5 className="font-bold text-secondary text-lg">Email Address</h5>
                                <p className="text-gray-600">info@skimac.co.zw</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-primary text-xl flex-shrink-0">
                                <FaClock />
                            </div>
                            <div>
                                <h5 className="font-bold text-secondary text-lg">Working Hours</h5>
                                <p className="text-gray-600">Open Now</p>
                                <p className="text-gray-600">Mon - Fri: 8:00 AM - 5:00 PM</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-primary transition-colors">
                            <FaFacebook />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-primary transition-colors">
                            <FaInstagram />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-primary transition-colors">
                            <FaLinkedin />
                        </a>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-neutral-100 p-8 rounded-xl shadow-lg"
                >
                    <h3 className="text-2xl font-bold text-secondary mb-6">Send Us a Message</h3>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea
                                rows="4"
                                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                placeholder="Tell us about your project..."
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full btn-primary">
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
