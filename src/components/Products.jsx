import React from 'react';
import { motion } from 'framer-motion';

const Products = () => {
  return (
    <section id="products" className="section-padding bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <h4 className="text-primary font-bold uppercase tracking-wider mb-2">Our Products</h4>
          <h2 className="text-4xl font-heading font-bold text-secondary mb-6">
            PlasterSET: The Ultimate Wall Finishing
          </h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Experience the difference with PlasterSET, our premium gypsum wall finishing plaster. Designed for superior quality and durability, it ensures a smooth, flawless finish for every project.
          </p>
          <ul className="space-y-4 mb-8">
            {['Superior Quality Guaranteed', 'Smooth Finish', 'Easy Application', 'Durable Results'].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-secondary font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-primary inline-block">
            Get a Quote
          </a>
        </motion.div>

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 relative flex justify-center"
        >
            {/* Using a placeholder or one of the uploaded images that might be the product */}
            {/* If the specific product image is identified, replace the src below */}
            <div className="relative z-10 bg-neutral-100 rounded-xl p-8 shadow-xl">
                <img
                src="/assets/486206529_1169400391642738_3962302499797392002_n.jpg" 
                alt="PlasterSET Product"
                className="max-w-xs md:max-w-sm w-full h-auto object-contain mx-auto transform hover:scale-105 transition-transform duration-500"
                />
            </div>
            
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-gray-100 to-gray-200 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
