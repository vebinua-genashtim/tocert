import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Certificate from './pages/Certificate';
import ClientDirectory from './pages/ClientDirectory';
import AssessmentRegulation from './pages/AssessmentRegulation';
import InitialAudit from './pages/InitialAudit';
import SurveillanceAudit from './pages/SurveillanceAudit';
import RecertificationAudit from './pages/RecertificationAudit';
import ISO9001 from './pages/ISO9001';
import ContactUs from './pages/ContactUs';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about-us':
        return <AboutUs />;
      case 'certificate':
        return <Certificate />;
      case 'client-directory':
        return <ClientDirectory />;
      case 'assessment-regulation':
        return <AssessmentRegulation />;
      case 'initial-audit':
        return <InitialAudit />;
      case 'surveillance-audit':
        return <SurveillanceAudit />;
      case 'recertification-audit':
        return <RecertificationAudit />;
      case 'iso9001':
        return <ISO9001 />;
      case 'contact-us':
        return <ContactUs />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
