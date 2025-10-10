import { Award } from 'lucide-react';
import PageBanner from '../components/PageBanner';

const Certificate = () => {
  return (
    <div className="min-h-screen bg-honey-50/30">
      <PageBanner
        title="Use of Certification Logo"
        subtitle="Verification and validation of certification credentials"
        icon={Award}
        theme="certificate"
      />

    </div>
  );
};

export default Certificate;
