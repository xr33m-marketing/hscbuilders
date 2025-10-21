import React from 'react';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Areas from './pages/Areas';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import FAQ from './pages/FAQ';
import Gallery from './pages/Gallery';
import Landscaping from './services/Landscaping';
import Hardscaping from './services/Hardscaping';
import MasonryBrickwork from './services/MasonryBrickwork';
import Groundskeeping from './services/Groundskeeping';
import BothwellDriveways from './pages/areas/BothwellDriveways';
import BothwellGroundskeeping from './pages/areas/BothwellGroundskeeping';
import BothwellHardscaping from './pages/areas/BothwellHardscaping';
import BothwellLandscaping from './pages/areas/BothwellLandscaping';
import BothwellMasonry from './pages/areas/BothwellMasonry';
import HamiltonDriveways from './pages/areas/HamiltonDriveways';
import HamiltonGroundskeeping from './pages/areas/HamiltonGroundskeeping';
import HamiltonHardscaping from './pages/areas/HamiltonHardscaping';
import HamiltonLandscaping from './pages/areas/HamiltonLandscaping';
import HamiltonMasonry from './pages/areas/HamiltonMasonry';
import JacktonDriveways from './pages/areas/JacktonDriveways';
import JacktonGroundskeeping from './pages/areas/JacktonGroundskeeping';
import JacktonLandscaping from './pages/areas/JacktonLandscaping';
import JacktonMasonry from './pages/areas/JacktonMasonry';
import NewtonFarmGroundskeeping from './pages/areas/NewtonFarmGroundskeeping';
import NewtonFarmHardscaping from './pages/areas/NewtonFarmHardscaping';
import NewtonFarmLandscaping from './pages/areas/NewtonFarmLandscaping';
import NewtonFarmMasonry from './pages/areas/NewtonFarmMasonry';

function App() {
  const [currentPath, setCurrentPath] = React.useState(window.location.hash.slice(1) || '/');

  // Update meta description based on current path
  React.useEffect(() => {
    const metaDescriptions: Record<string, string> = {
      '/': "HSC Builders – Expert landscaping, hardscaping & groundskeeping in Glasgow. Over 16 years' experience delivering beautiful, lasting outdoor spaces. Get a free quote today.",
      '/about': "Learn more about HSC Builders – trusted landscaping & building experts in Glasgow with 16+ years of experience. Quality, reliability & customer-first service.",
      '/services': "Professional landscaping, hardscaping & groundskeeping services in Glasgow by HSC Builders. Quality outdoor transformations with 16+ years experience.",
      '/gallery': "View HSC Builders' landscaping, hardscaping & groundskeeping projects across Glasgow. Real transformations with expert design & craftsmanship.",
      '/contact': "Contact HSC Builders in Glasgow today. Get a free consultation & quote for expert landscaping, hardscaping & groundskeeping services tailored to your needs.",
      '/reviews': "Read customer reviews for HSC Builders Glasgow. See why we're the trusted choice for landscaping, hardscaping & groundskeeping with 16+ years experience.",
      '/areas': "HSC Builders serves Greater Glasgow including Newton Farm, Jackton, Hamilton & East Kilbride. Professional landscaping & building services across Lanarkshire.",
      '/faq': "HSC Builders FAQ – Get answers about our landscaping, hardscaping & groundskeeping services in Glasgow. Pricing, timelines & service information."
    };

    const description = metaDescriptions[currentPath] || metaDescriptions['/'];

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }, [currentPath]);
  React.useEffect(() => {
    const handleHashChange = () => {
      const newPath = window.location.hash.slice(1) || '/';
      setCurrentPath(newPath);
      // Scroll to top when navigating to a new page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Also scroll to top on initial page load
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  const renderPage = () => {
    switch (currentPath) {
      case '/about':
        return <About />;
      case '/areas':
        return <Areas />;
      case '/services':
        return <Services />;
      case '/services/landscaping':
        return <Landscaping />;
      case '/services/hardscaping':
        return <Hardscaping />;
      case '/services/masonry':
        return <MasonryBrickwork />;
      case '/services/groundskeeping':
        return <Groundskeeping />;
      case '/contact':
        return <Contact />;
      case '/reviews':
        return <Reviews />;
      case '/faq':
        return <FAQ />;
      case '/gallery':
        return <Gallery />;
      case '/areas/bothwell-driveways':
        return <BothwellDriveways />;
      case '/areas/bothwell-groundskeeping':
        return <BothwellGroundskeeping />;
      case '/areas/bothwell-hardscaping':
        return <BothwellHardscaping />;
      case '/areas/bothwell-landscaping':
        return <BothwellLandscaping />;
      case '/areas/bothwell-masonry':
        return <BothwellMasonry />;
      case '/areas/hamilton-driveways':
        return <HamiltonDriveways />;
      case '/areas/hamilton-groundskeeping':
        return <HamiltonGroundskeeping />;
      case '/areas/hamilton-hardscaping':
        return <HamiltonHardscaping />;
      case '/areas/hamilton-landscaping':
        return <HamiltonLandscaping />;
      case '/areas/hamilton-masonry':
        return <HamiltonMasonry />;
      case '/areas/jackton-driveways':
        return <JacktonDriveways />;
      case '/areas/jackton-groundskeeping':
        return <JacktonGroundskeeping />;
      case '/areas/jackton-landscaping':
        return <JacktonLandscaping />;
      case '/areas/jackton-masonry':
        return <JacktonMasonry />;
      case '/areas/newton-farm-groundskeeping':
        return <NewtonFarmGroundskeeping />;
      case '/areas/newton-farm-hardscaping':
        return <NewtonFarmHardscaping />;
      case '/areas/newton-farm-landscaping':
        return <NewtonFarmLandscaping />;
      case '/areas/newton-farm-masonry':
        return <NewtonFarmMasonry />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout>
      {renderPage()}
    </Layout>
  );
}

export default App;