import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaBuilding, FaTools, FaHardHat, FaPaintRoller, FaDraftingCompass } from 'react-icons/fa';

const services = [
  {
    icon: <FaHome />,
    title: 'Residential Construction',
    description: 'Building dream homes with attention to detail and personal touch.',
  },
  {
    icon: <FaBuilding />,
    title: 'Commercial Construction',
    description: 'Scalable and durable solutions for businesses and commercial spaces.',
  },
  {
    icon: <FaPaintRoller />,
    title: 'Plastering & Finishing',
    description: 'Expert plastering services using our premium PlasterSET products.',
  },
  {
    icon: <FaTools />,
    title: 'Renovations',
    description: 'Transforming existing spaces into modern, functional environments.',
  },
  {
    icon: <FaHardHat />,
    title: 'Project Management',
    description: 'End-to-end management ensuring projects are on time and within budget.',
  },
  {
    icon: <FaDraftingCompass />,
    title: 'Architectural Design',
    description: 'Collaborating to create stunning and practical architectural designs.',
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-neutral-100">
      <div className="text-center mb-16">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-bold uppercase tracking-wider mb-2"
        >
          Our Services
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-heading font-bold text-secondary"
        >
          Comprehensive Construction Solutions
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group border-b-4 border-transparent hover:border-primary"
          >
            <div className="text-4xl text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-secondary mb-4">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
