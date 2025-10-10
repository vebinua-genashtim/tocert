import { FileCheck } from 'lucide-react';
import PageBanner from '../components/PageBanner';

const InitialAudit = () => {
  return (
    <div className="min-h-screen bg-honey-50/30">
      <PageBanner
        title="Initial Audit"
        subtitle="The first step toward achieving certification excellence"
        icon={FileCheck}
        theme="audit"
      />

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-center mb-8 leading-relaxed text-lg">
              The initial audit process is the first step toward achieving certification.
              This comprehensive assessment verifies that your management system meets all requirements
              of the applicable standard.
            </p>
          <div className="flex justify-center">
            <img
              src="/Initial.png"
              alt="Initial Audit Process Flowchart"
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitialAudit;
