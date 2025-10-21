import React from 'react';
import { motion } from 'framer-motion';
import { Boxes, Check } from 'lucide-react';
import Button from '../components/Button';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import ServiceProjectsSection from '../components/ServiceProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';

const Masonry = () => {
  const services = [
    'Brickwork & Block Work',
    'Stone Wall Construction',
    'Retaining Walls',
    'Garden Walls',
    'Wall Repairs & Restoration',
    'Repointing Services',
    'Chimney Repairs',
    'Decorative Stone Features'
  ];

  const beforeAfterProjects = [
    {
      beforeImage: '/wall-before-HSC-MASONRY.webp',
      afterImage: '/WALl-after-HSC_MASONRY.webp',
      title: 'Wall Restoration'
    },
    {
      beforeImage: '/before-restoration-HSC-Masonry.webp',
      afterImage: '/restoration-After-HSC-Masonry.webp',
      title: 'Masonry Restoration'
    },
    {
      beforeImage: '/repointing-HSC-before.webp',
      afterImage: '/HSC-repointing-After-MASONRY (1) copy.webp',
      title: 'Repointing Service'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Brickwork-hero.webp"
            alt="Professional Masonry Services Glasgow"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Boxes className="w-12 h-12 text-red-400" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Masonry Services
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Expert brickwork, stonework, and masonry repairs across Glasgow
            </p>
            <Button size="lg" onClick={() => window.location.hash = '/contact'}>
              Get Your Free Quote
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Masonry Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional masonry work built to last, combining traditional craftsmanship with modern techniques.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-3 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Check className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <span className="text-gray-800 font-medium">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Masonry Transformations
            </h2>
            <p className="text-xl text-gray-600">
              See our expert restoration and construction work
            </p>
          </motion.div>

          <div className="space-y-16">
            {beforeAfterProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <BeforeAfterSlider
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                  title={project.title}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ServiceProjectsSection
        title="Recent Masonry Projects"
        description="Explore our portfolio of completed masonry work"
        projects={[
          {
            image: '/restoration-After-HSC-Masonry.webp',
            title: 'Wall Restoration',
            category: 'Masonry'
          },
          {
            image: '/Restoration-MASONRY-HSC (1) copy.webp',
            title: 'Brick Repair',
            category: 'Masonry'
          },
          {
            image: '/WALl-after-HSC_MASONRY.webp',
            title: 'Garden Wall Construction',
            category: 'Masonry'
          },
          {
            image: '/wall-HSC-Landscaping-Glasgow.webp',
            title: 'Retaining Wall',
            category: 'Masonry'
          },
          {
            image: '/Glasgow-walls-HSC-landscaping.webp',
            title: 'Stone Wall',
            category: 'Masonry'
          },
          {
            image: '/HSC-repointing-After-MASONRY (1) copy.webp',
            title: 'Repointing Work',
            category: 'Masonry'
          }
        ]}
      />

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Why Choose HSC for Masonry?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Traditional Skills</h3>
              <p className="text-gray-300">
                Time-honored masonry techniques combined with modern knowledge
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Materials</h3>
              <p className="text-gray-300">
                Premium bricks, stones, and mortars for superior durability
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Structural Integrity</h3>
              <p className="text-gray-300">
                Every project built to the highest standards for long-lasting strength
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Expert Masonry Work?
            </h2>
            <p className="text-xl text-white mb-8">
              Contact us today for a free consultation and quote
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.location.hash = '/contact'}
            >
              Get Your Free Quote
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Masonry;
