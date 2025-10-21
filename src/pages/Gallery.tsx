import React from 'react';
import { Star, Phone } from 'lucide-react';
import ServiceProjectsSection from '../components/ServiceProjectsSection';
import { Project } from '../components/ProjectCard';
import { Button } from '../components/MovingBorderButton';
import ReviewsSection from '../components/TestimonialsSection';

const Gallery: React.FC = () => {
  // Fencing Projects
  const fencing: Project[] = [
    { 
      title: "Composite Fencing Installation",
     before: "/fencing-BEFORE-HSC-Gallery (1) copy.webp",
     after: "/Compostite-fencing-HSC-home (1) copy.webp",
     alt: "Modern composite fencing installation transformation"
    },
    { 
      title: "Traditional Fencing Project", 
      before: "/Gallery-Before-HSC-fencing (1) copy.webp",
      after: "/fencing-home-projects-HSC (1) copy.webp",
      alt: "Traditional timber fencing installation transformation"
    },
    { 
      title: "Landscaping Fencing Services", 
      before: "/BEfore-HSC-Fencing-Gallery (1) copy.webp",
      after: "/HSC-fencing-SERVICES (1) copy.webp",
      alt: "Professional fencing as part of landscaping project transformation"
    },
    { 
      title: "Complete Fencing Solution", 
      before: "/HSC-fencing-BEFORE-GALLERY (1).webp",
      after: "/SERVICES-fencing-HSC (1).webp",
      alt: "Complete fencing installation with gates"
    },
    { 
      title: "Fencing Installation", 
      before: "/fencing-before-HSC-GAllery.webp",
      after: "/fencing-HSC-SERVICES-Landscaping (1) copy.webp",
      alt: "Professional fencing installation transformation"
    }
  ];

  // Patio & Hardscaping Projects
  const patios: Project[] = [
    { 
      title: "Natural Stone Patio", 
      after: "/HSC-patio-landscaping (1) copy.webp",
      alt: "Beautiful natural stone patio installation"
    },
    { 
      title: "Modern Patio Design", 
     before: "/HSC-Patio-Before-Gallery (1) copy.webp",
      after: "/Patio-HSC-Landscaping-services (1) copy.webp",
      alt: "Contemporary patio with professional finishing"
    },
    {
      title: "Garden Patio Project",
     before: "/HSC-Before-Gallery-Patios (1) copy.webp",
      after: "/patio-HSC_landscaping (1) copy.webp",
      alt: "Garden patio with surrounding landscaping"
    },
    { 
      title: "Outdoor Living Patio", 
      after: "/patio-landscaping-HSC.webp",
      alt: "Patio designed for outdoor entertaining"
    },
    { 
      title: "Integrated Patio & Landscaping", 
      images: [
        "/Before-PAtio-HSC-Gallery (2).webp",
        "/PAtio-Before-Gallery-HSC (1).webp",
        "/Gallery-Before-HSC-patio (1) copy.webp",
        "/After-Patios-HSC-Gallery (1) copy.webp",
        "/Gallery-HSC-Patios-After (1).webp",
        "/HSC-After-Patios-Gallery (1) copy.webp"
      ],
      after: "/After-Patios-HSC-Gallery (1) copy.webp",
      alt: "Patio seamlessly integrated with landscape design"
    },
    { 
      title: "Family Patio Space", 
     before: "/Before-patios-HSC-Gallery (1) copy.webp",
      after: "/Patios-hoe-projects-HSC (1) copy.webp",
      alt: "Family-friendly patio installation"
    },
    { 
      title: "Complete Patio Transformation", 
      images: [
        "/Before-PAtio-HSC-Gallery (1) copy.webp",
        "/During-HSC-Patios-GAllery (1) copy.webp",
        "/After-HSC-Gallery-Patios (1) copy.webp",
        "/after2-HSC-patios-Gallery (1) copy.webp",
        "/after3-Patios-HSC-GAllery (1) copy.webp"
      ],
      after: "/After-HSC-Gallery-Patios (1) copy.webp",
      alt: "Complete patio transformation showing before, during construction, and multiple after views"
    }
  ];

  // Block Paving & Driveways
  const driveways: Project[] = [
    { 
      title: "Expert Block Paving Project", 
      images: [
        "/HSC-Block-Paving-Hardscaping (1).webp",
        "/Block-paving-Hardscaping-HSC (1).webp",
        "/garden-bed-planting-HSC (1) copy.webp"
      ],
      after: "/HSC-Block-Paving-Hardscaping (1).webp",
      alt: "High-quality block paving driveway"
    },
    { 
      title: "Professional Block Paving", 
      images: [
        "/Pathway-monoblock-HSC-Landscaping (1) copy.webp",
        "/HSC-Hardscaping-Block-Paving.webp",
        "/Hardscaping-HSC-Block-Paving (1) copy.webp"
      ],
      after: "/Hardscaping-HSC-Block-Paving (1) copy.webp",
      alt: "Professional block paving installation"
    },
    { 
      title: "Driveway Block Paving", 
      after: "/Block-paving-HSC-Hardscaping.webp",
      alt: "Durable block paving driveway"
    },
  ];

  // Walls & Masonry
  const walls: Project[] = [
    {
      title: "Garden Wall Construction",
      after: "/HSC-wall-Glasgow-landscaping.webp",
      alt: "Professional garden wall construction"
    },
    {
      title: "Landscaping Wall Project",
      after: "/wall-HSC-Landscaping-Glasgow (1) copy.webp",
      alt: "Retaining wall as part of landscaping project"
    },
    {
      title: "Boundary Wall Installation",
      after: "/Glasgow-walls-HSC-landscaping (1) copy.webp",
      alt: "Boundary wall with integrated landscaping"
    },
    {
      title: "Masonry Wall Before",
      before: "/wall-before-HSC-MASONRY (1) copy.webp",
      after: "/WALl-after-HSC_MASONRY (2).webp",
      alt: "Masonry wall restoration transformation"
    }
  ];

  // Steps & Pathways
  const steps: Project[] = [
    { 
      title: "Garden Steps Installation", 
      after: "/HSC-STEPS-Services-Hardscaping (1) copy.webp",
      alt: "Professional garden steps construction"
    },
    { 
      title: "Pathway & Steps", 
      after: "/HSC-path-Hardscaping-Services (1) copy.webp",
      alt: "Pathway with integrated steps"
    },
    { 
      title: "Hardscaping Steps", 
     before: "/Steps-Before-HSC-Gallery (1) copy.webp",
      after: "/HSC-Hardscaping-Steps-Services (1) copy.webp",
      alt: "Hardscaping steps with professional finish"
    },
    { 
      title: "Quality Steps Installation", 
      after: "/Steps-Services-HArdscaping-HSC (1) copy.webp",
      alt: "Quality steps installation service"
    },
    { 
      title: "Professional Steps", 
      after: "/Steps-Hardscaping-Services-HSC (1) copy.webp",
      alt: "Professional steps and hardscaping"
    }
  ];

  // Artificial Turf & Landscaping
  const turf: Project[] = [
    { 
      title: "Artificial Turf Installation", 
     before: "/artificial-turf-HSC-Before-Gallery (1).webp",
      after: "/art-turf-home-projects-HSC (1).webp",
      alt: "Professional artificial turf installation"
    },
    { 
      title: "Quality Artificial Turf", 
      before: "/Art-tirf-Before-HSC-Gallery (1) copy.webp",
      after: "/artificial-turf-HSC-Service (1) copy.webp",
      alt: "High-quality artificial turf installation transformation"
    },
    { 
      title: "Turf Installation Service", 
     before: "/HSC-Art-turf-Before-Gallery (1) copy.webp",
      after: "/turf-artificial-HSC-Service (1) copy.webp",
      alt: "Professional turf installation service"
    }
  ];

  // Groundskeeping & Maintenance
  const maintenance: Project[] = [
    { 
      title: "Garden Maintenance", 
      before: "/HSC-Maintenance-before copy.webp",
      after: "/HSC-Maintenance-AFTER copy.webp",
      alt: "Professional garden maintenance transformation"
    },
    { 
      title: "Groundskeeping Cleanup", 
      before: "/groundskeepning-cleanup-HSC-BEFORE (1) copy.webp",
      after: "/Groundskeeping-HSC-cleanup-AFTER (1) copy.webp",
      alt: "Complete groundskeeping cleanup service"
    },
    { 
      title: "Garden Bed Maintenance", 
      after: "/garden-bed-planting-HSC (1) copy.webp",
      alt: "Professional garden bed planting and maintenance"
    },
  ];

  // Complete Transformations
  const transformations: Project[] = [
    { 
      title: "Complete Landscape Renovation", 
      after: "/Landscaping-Full-Renovation-HS (1) copy.webp",
      alt: "Complete landscape renovation project"
    },
    { 
      title: "Full Garden Transformation", 
      after: "/HSC-Landscaping-Full-Renovation (1) copy copy.webp",
      alt: "Full garden transformation by HSC Builders"
    },
    { 
      title: "Complete Garden Renovation",
      images: [
        "/Gallery-HSC-After-Landscaping (2).webp",
        "/After-HSC-full-landscapiing-GAllery (1) copy.webp",
        "/HSC-After-Landscaping-Gallery (1) copy.webp"
      ],
      after: "/Gallery-HSC-After-Landscaping (2).webp",
      alt: "Complete landscape renovation project"
    },
    { 
      title: "Complete Transformation", 
     before: "/full-transformation-HSC-Before (1) copy.webp",
      after: "/Landscaping-HSC-Full-Transformation (1) copy.webp",
     alt: "Complete landscape transformation project transformation"
    },
    {
      title: "Full Garden Transformation",
     before: "/HSC-full-transformation-Before (1) copy.webp",
      after: "/GAllery-HSC-After-Full-Transformation (1).webp",
      images: [
        "/Full-Transformation-HSC-After-Gallery (1) copy copy.webp",
        "/HSC-Gallery-Full-TRansformation (1) copy.webp",
        "/Full-Transformtation-HSC (1) copy.webp",
        "/restoration-After-HSC-Masonry (1) copy.webp",
        "/Full-Transfromation-HSC-Landscapinig (1) copy.webp",
        "/HSC-Full-Landscaping-Gallery (1) copy.webp"
      ],
     alt: "Full garden transformation project showing dramatic before and after results"
    },
    {
      title: "Complete Landscaping Project",
      before: "/Full-Landscaping-HSC-Gallery (1).webp",
      after: "/landscaping-hero-hsc (1) copy.webp",
      alt: "Complete landscaping transformation with modern outdoor design"
    }
  ];

  return (
    <div className="min-h-screen bg-primary-bg text-text-primary">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[300px] overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('/areas-hero-HSC (1) copy.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Our Project Gallery
              </h1>
              <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
                Explore our portfolio of professional landscaping, hardscaping, and building projects across Greater Glasgow
              </p>
              
              {/* Trust Indicators */}
              <div className="flex items-center space-x-3 mb-8 bg-black/30 backdrop-blur-sm rounded-full px-6 py-3 w-fit border border-white/20 mx-auto">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                  alt="Google" 
                  className="w-6 h-6"
                />
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary-accent text-primary-accent" />
                  ))}
                </div>
                <span className="text-white font-medium">22 Google Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service-Based Project Sections */}
      <div className="bg-secondary-bg">
        <ServiceProjectsSection 
          heading="Recent Fencing Projects" 
          intro="Professional fencing installations across Greater Glasgow with quality materials and expert craftsmanship."
          projects={fencing} 
        />
        
        <ServiceProjectsSection 
          heading="Recent Patio & Hardscaping Projects" 
          intro="Beautiful patios and hardscaping installations that create stunning outdoor living spaces."
          projects={patios} 
        />
        
        <ServiceProjectsSection 
          heading="Recent Driveway & Block Paving Projects" 
          intro="Durable driveways with proper foundations, drainage, and professional finishing."
          projects={driveways} 
        />
        
        <ServiceProjectsSection 
          heading="Recent Wall & Masonry Projects" 
          intro="Professional wall construction and masonry work for boundaries and landscaping features."
          projects={walls} 
        />
        
        <ServiceProjectsSection 
          heading="Recent Steps & Pathway Projects" 
          intro="Safe, attractive steps and pathways that enhance accessibility and garden flow."
          projects={steps} 
        />
        
        <ServiceProjectsSection 
          heading="Recent Artificial Turf Projects" 
          intro="Low-maintenance artificial turf installations perfect for Scottish weather conditions."
          projects={turf} 
        />
        
        <ServiceProjectsSection 
          heading="Recent Groundskeeping & Maintenance" 
          intro="Professional garden maintenance and groundskeeping services with dramatic before & after results."
          projects={maintenance} 
        />
        
        <ServiceProjectsSection 
          heading="Complete Landscape Transformations" 
          intro="Full garden renovations and landscape transformations that completely reimagine outdoor spaces."
          projects={transformations} 
        />
      </div>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-accent/10 to-hover-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-secondary-bg/80 backdrop-blur-sm border border-primary-accent/30 rounded-xl p-8 lg:p-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Transform your outdoor space with professional landscaping and building services. Get your free consultation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as="a"
                href="#/contact"
                containerClassName="w-auto h-16"
                className="px-8 py-4 text-lg font-bold"
              >
                Get Your Free Quote
              </Button>
              <Button
                as="a"
                href="tel:+447490738974"
                containerClassName="w-auto h-16"
                className="px-8 py-4 text-lg font-bold"
              >
                <span className="flex items-center gap-2">
                  Call Now <Phone className="w-5 h-5" />
                </span>
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-border-color">
              <p className="text-text-secondary text-sm">
                <strong className="text-primary-accent">Phone:</strong> 07490 738 974 | 
                <strong className="text-primary-accent"> Email:</strong> hscbuildersglasgow@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />
    </div>
  );
};

export default Gallery;