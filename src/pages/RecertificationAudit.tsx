import { RefreshCw } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { usePageTitle } from '../hooks/usePageTitle';

const RecertificationAudit = () => {
  usePageTitle('Recertification Audit');

  return (
    <div className="min-h-screen bg-honey-50/30">
      <PageBanner
        title="Recertification Audit"
        subtitle="Renewing your commitment to excellence and continuous improvement"
        icon={RefreshCw}
        theme="audit"
      />

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-center mb-8 leading-relaxed text-lg">
              Recertification audits are conducted before your current certification expires, typically
              every three years. This comprehensive assessment evaluates the overall performance and
              continued effectiveness of your management system.
            </p>
            <div className="flex justify-center">
              <img
                src="/Recertification.png"
                alt="Recertification Audit Process Flowchart"
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecertificationAudit;
