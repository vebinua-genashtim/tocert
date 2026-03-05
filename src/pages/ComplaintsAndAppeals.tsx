import { MessageSquare } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { usePageTitle } from '../hooks/usePageTitle';

const ComplaintsAndAppeals = () => {
  usePageTitle('Complaints and Appeals');

  return (
    <div className="min-h-screen bg-honey-50/30">
      <PageBanner
        title="Complaints and Appeals"
        subtitle="Transparent and fair resolution of concerns"
        icon={MessageSquare}
        theme="certificate"
      />

    </div>
  );
};

export default ComplaintsAndAppeals;
