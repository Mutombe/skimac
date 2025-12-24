import React from 'react';
import { motion } from 'framer-motion';

const projectImages = [
    '/assets/486145601_1169411721641605_3660278389802093808_n.jpg',
    '/assets/486279889_1169406424975468_363414213998524469_n.jpg',
    '/assets/486281502_1168267075089403_8802324942161279710_n.jpg',
    '/assets/486433436_1168286801754097_3956274653735992506_n.jpg',
    '/assets/486471289_1169400368309407_7649123009542693034_n.jpg',
    '/assets/486835232_1170224604893650_8694655587522864895_n.jpg',
];

const Projects = () => {
    return (
        <section id="projects" className="section-padding bg-neutral-900 text-white">
            <div className="text-center mb-16">
                <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-primary font-bold uppercase tracking-wider mb-2"
                >
                    Our Portfolio
                </motion.h4>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl font-heading font-bold mb-6"
                >
                    Recent Projects
                </motion.h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Take a look at some of our recent construction and renovation projects. We take pride in delivering high-quality results for every client.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectImages.map((src, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="relative group overflow-hidden rounded-lg aspect-video cursor-pointer"
                    >
                        <img
                            src={src}
                            alt={`Project ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-xl font-bold text-white mb-2">Project Title</h3>
                                <span className="text-primary font-medium">View Details</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a href="#contact" className="btn-primary inline-block">
                    Start Your Project
                </a>
            </div>
        </section>
    );
};

export default Projects;
