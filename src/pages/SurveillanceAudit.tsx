import { Eye } from 'lucide-react';
import PageBanner from '../components/PageBanner';

const SurveillanceAudit = () => {
  return (
    <div className="min-h-screen bg-honey-50/30">
      <PageBanner
        title="Surveillance Audit"
        subtitle="Maintaining certification excellence throughout your journey"
        icon={Eye}
        theme="audit"
      />

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-center mb-8 leading-relaxed text-lg">
              Annual surveillance audits ensure that your certified management system continues to meet
              standard requirements and remains effective. These audits help maintain your certification
              throughout the certification cycle.
            </p>
            <div className="flex justify-center">
              <img
                src="/Surveillance.jpg"
                alt="Surveillance Audit Process Flowchart"
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveillanceAudit;
