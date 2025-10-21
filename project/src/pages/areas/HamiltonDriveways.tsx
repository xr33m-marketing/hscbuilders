import React, { useState, useEffect } from 'react';
import { Star, Phone, MessageCircle, ChevronDown, Award, Shield, CheckCircle, Clock } from 'lucide-react';
import { Button } from '../../components/MovingBorderButton';
import LogoSlider from '../../components/LogoSlider';
import ProjectCard, { Project } from '../../components/ProjectCard';

const HamiltonDriveways: React.FC = () => {
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem('hamiltonDrivewaysFormSubmitted')) {
      setShowThankYouMessage(true);
      sessionStorage.removeItem('hamiltonDrivewaysFormSubmitted');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      formData.append('area', 'Hamilton');
      formData.append('service', 'Driveways & Hardscaping');

      const response = await fetch('https://formspree.io/f/xvgqzbeo', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        sessionStorage.setItem('hamiltonDrivewaysFormSubmitted', 'true');
        window.location.reload();
      } else {
        alert('There was an error submitting your form. Please try again.');
      }
    } catch (error) {
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const hamiltonProjects: Project[] = [
    {
      title: "Block Paving Project 1",
      after: "/HSC-Block-Paving-Hardscaping (1) copy.webp",
      alt: "Professional block paving driveway"
    },
    {
      title: "Block Paving Project 2",
      after: "/Hardscaping-HSC-Block-Paving (1) copy.webp",
      alt: "Quality block paving installation"
    },
    {
      title: "Block Paving Project 3",
      after: "/Block-paving-HSC-Hardscaping (1) copy.webp",
      alt: "Expert block paving work"
    },
    {
      title: "Block Paving Project 4",
      after: "/HSC-Hardscaping-Block-Paving (1) copy.webp",
      alt: "Premium driveway construction"
    },
    {
      title: "Block Paving Project 5",
      after: "/Block-paving-Hardscaping-HSC (1) copy.webp",
      alt: "Durable hardscaping installation"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-6 h-6 text-primary-accent" />,
      title: "Hamilton's Trusted Specialists",
      description: "Over 16 years creating quality driveways for Hamilton properties."
    },
    {
      icon: <Shield className="w-6 h-6 text-primary-accent" />,
      title: "Quality Materials",
      description: "High-grade materials and expert installation."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary-accent" />,
      title: "Property Value",
      description: "Professional driveways that boost your property value."
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-accent" />,
      title: "Reliable Service",
      description: "Efficient installation with clear communication."
    }
  ];

  const faqs = [
    {
      question: "What driveway materials work best in Hamilton?",
      answer: "For Hamilton properties, we recommend durable block paving, natural stone, or quality concrete finishes."
    }
  ];

  return (
    <div className="min-h-screen bg-primary-bg text-text-primary">
      <section className="py-16 px-4">
        <h1 className="text-4xl font-bold text-center">Driveways in Hamilton</h1>
        <p className="text-center mt-4">Professional driveway services for Hamilton properties.</p>
      </section>
      <LogoSlider />
    </div>
  );
};

export default HamiltonDriveways;