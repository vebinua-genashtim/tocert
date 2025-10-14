import { createBrowserRouter } from 'react-router-dom';
import App from './App';
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

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
      {
        path: 'certificate',
        element: <Certificate />,
      },
      {
        path: 'client-directory',
        element: <ClientDirectory />,
      },
      {
        path: 'assessment-regulation',
        element: <AssessmentRegulation />,
      },
      {
        path: 'initial-audit',
        element: <InitialAudit />,
      },
      {
        path: 'surveillance-audit',
        element: <SurveillanceAudit />,
      },
      {
        path: 'recertification-audit',
        element: <RecertificationAudit />,
      },
      {
        path: 'iso9001',
        element: <ISO9001 />,
      },
      {
        path: 'contact-us',
        element: <ContactUs />,
      },
    ],
  },
]);
