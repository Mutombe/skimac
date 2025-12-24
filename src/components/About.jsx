import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="section-padding bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center -mt-20">
                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative "
                >
                    <div className="relative rounded-lg overflow-hidden shadow-2xl -top-20">
                        <img
                            src="/assets/3.jpg"
                            alt="Skimac Team"
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                    </div>
                    {/* Decorative Element */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-lg -z-10" />
                    <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-primary rounded-lg -z-10" />
                </motion.div>

                {/* Text Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h4 className="text-primary font-bold uppercase tracking-wider mb-2">About Us</h4>
                    <h2 className="text-4xl font-heading font-bold text-secondary mb-6">
                        We Build Your Dreams With Precision
                    </h2>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                        Skimac Investments is a premier construction company dedicated to transforming visions into reality. With years of experience and a team of skilled professionals, we deliver top-tier construction services that stand the test of time.
                    </p>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        From residential homes to commercial complexes, we handle every project with the same level of commitment and excellence. Our focus on quality materials, innovative design, and client satisfaction sets us apart.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {['Expert Team', 'Quality Materials', 'On-Time Delivery', 'Modern Design'].map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <FaCheckCircle className="text-primary text-xl" />
                                <span className="font-medium text-secondary">{item}</span>
                            </div>
                        ))}
                    </div>

                    <a href="#contact" className="btn-primary inline-block">
                        Learn More
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
