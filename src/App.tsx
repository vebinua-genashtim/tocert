import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/client-directory" element={<ClientDirectory />} />
            <Route path="/assessment-regulation" element={<AssessmentRegulation />} />
            <Route path="/initial-audit" element={<InitialAudit />} />
            <Route path="/surveillance-audit" element={<SurveillanceAudit />} />
            <Route path="/recertification-audit" element={<RecertificationAudit />} />
            <Route path="/iso9001" element={<ISO9001 />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
