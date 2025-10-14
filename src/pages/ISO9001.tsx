import { Target } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { usePageTitle } from '../hooks/usePageTitle';

const ISO9001 = () => {
  usePageTitle('ISO 9001:2015');

  return (
    <div className="min-h-screen bg-honey-50/30">
      <PageBanner
        title="ISO 9001:2015 Quality Management System"
        subtitle="Setting the global standard for quality excellence and continuous improvement"
        icon={Target}
        theme="iso"
      />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-10 md:px-12 md:py-14">
              <div className="space-y-12">
                <section className="bg-gradient-to-r from-honey-50 to-amber-50 p-6 md:p-8 rounded-xl border-l-4 border-honey-500 shadow-sm">
                  <h2 className="text-3xl font-bold text-honey-600 mb-4">Overview</h2>
                  <div className="text-charcoal-700 leading-relaxed text-base space-y-4">
                    <p>
                      ISO 9000 is a series of standards for Quality Management System. While ISO 9001 is meant for certification purpose, ISO 9000 and ISO 9004 provide vocabulary and guidelines respectively. The latest revision of the standard has taken place in September 2015. The ISO 9001 (Version 2000) replaced the older version (1994 version) of ISO 9001, ISO 9002 and ISO 9003. Now, the 5th edition of the standard (ISO 9001:2015) replaces ISO 9001:2008.
                    </p>
                    <p>
                      ISO 9001:2015 is based on the new seven principles of quality management, and is modelled on 'process approach'. It advocates the P-D-C-A (Plan-Do-Check-Act) cycle for continual improvement and customer satisfaction. ISO 9001:2015 certification is for quality management system, and NOT a product certification scheme.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-honey-600 mb-6 pb-2 border-b-2 border-honey-500">Why adopt ISO 9001?</h2>
                  <div className="space-y-4 mb-6">
                    <p className="text-charcoal-700 leading-relaxed text-base">
                      With practical implementation, ISO 9001 benefits any type of business and organization including public sector and non-profit organization. It provides a better visibility of how a business or organization operates by placing appropriate emphasis on aspects such as customer satisfaction, continuous improvement etc. ISO 9001 also helps a business or organization to reach a new height of success by promoting work efficiency practices which can lead to less waste, more productivity and therefore potential cost savings.
                    </p>
                  </div>

                  <h3 className="text-xl font-bold text-honey-600 mb-4">Other benefits of ISO 9001 registration are:</h3>
                  <div className="grid gap-3">
                    {[
                      "Clarity in definition of authorities and responsibilities",
                      "Enhanced corporate image and market positioning",
                      "Better records and documentation in case of litigation",
                      "Use of recognized mark (of certifying agency) on stationary and advertisement",
                      "Reduction in the need for multiple second party assessments",
                      "Better traceability to root causes of quality problems",
                      "Rectification of errors at the earliest stage",
                      "Reduced repetition of errors"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start p-3 bg-honey-50/30 rounded-lg hover:bg-honey-50 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-honey-600 mb-6 pb-2 border-b-2 border-honey-500">Seven Quality Management Principles</h2>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Customer Focus",
                        description: "Understanding and meeting customer needs and striving to exceed customer expectations"
                      },
                      {
                        title: "Leadership",
                        description: "Creating unity of purpose and direction, enabling people to contribute to organizational objectives"
                      },
                      {
                        title: "Engagement of People",
                        description: "Competent, empowered and engaged people enhance organizational capability"
                      },
                      {
                        title: "Process Approach",
                        description: "Understanding activities as interrelated processes that function as a coherent system"
                      },
                      {
                        title: "Improvement",
                        description: "Successful organizations focus on continuous improvement and innovation"
                      },
                      {
                        title: "Evidence-based Decision Making",
                        description: "Decisions based on the analysis and evaluation of data and information"
                      },
                      {
                        title: "Relationship Management",
                        description: "Managing relationships with interested parties to optimize their impact on performance"
                      }
                    ].map((principle, index) => (
                      <div key={index} className="bg-gradient-to-r from-honey-50 to-amber-50 p-6 rounded-lg border-l-4 border-honey-500 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-honey-600 mb-2">{index + 1}. {principle.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{principle.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-honey-600 mb-6 pb-2 border-b-2 border-honey-500">What is required from ISO 9001:2015?</h2>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-honey-600 mb-4">Required Documents</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      In ISO 9001:2015 there are only a few required documents – or "documented information that must be maintained:
                    </p>
                    <div className="space-y-2">
                      {[
                        "Scope of the management system",
                        "Quality Policy",
                        "Quality Objectives",
                        "plus information that is necessary to support operation of your processes. Typical examples would be procedures, inspection and test plans, forms, checklists, work instructions."
                      ].map((item, index) => (
                        <div key={index} className="flex items-start p-3 bg-honey-50/30 rounded-lg">
                          <div className="w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-700 leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-honey-600 mb-4">Required Records</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      To support the implementation of the ISO 9001:2015 Quality Management System, records – or documented information including but not limited to the following must be retained:
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "Review of requirements for products and services",
                        "Design and development: inputs, reviews, controls, verification, outputs, validation, change control.",
                        "Supplier evaluation",
                        "Unique identification – (e.g. serial / batch number) if traceability is required",
                        "Customer property – lost, damaged or found unsuitable for use and communication to the owner",
                        "Change control – reviews, actions, authorisations",
                        "Criteria and authorisation for release of products and services for delivery to the customer",
                        "Calibration of monitoring and measuring equipment",
                        "Training records",
                        "Nonconformities",
                        "Corrective Actions and results",
                        "Monitoring and measurement activities",
                        "Audit findings and actions",
                        "Management reviews"
                      ].map((record, index) => (
                        <div key={index} className="flex items-start p-3 bg-honey-50/30 rounded-lg hover:bg-honey-50 transition-colors">
                          <div className="w-2 h-2 rounded-full bg-honey-500 mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-700 leading-relaxed text-sm">{record}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-honey-600 mb-6 pb-2 border-b-2 border-honey-500">Who Should Get Certified?</h2>
                  <p className="text-gray-700 leading-relaxed text-base mb-6">
                    ISO 9001:2015 certification is suitable for organizations of any size or sector, including:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      "Manufacturing companies",
                      "Service providers",
                      "Healthcare organizations",
                      "Educational institutions",
                      "Government agencies",
                      "Technology companies",
                      "Construction firms",
                      "Hospitality businesses",
                      "Retail organizations"
                    ].map((org, index) => (
                      <div key={index} className="flex items-center p-4 bg-honey-50/30 rounded-lg hover:bg-honey-50 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-honey-500 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-700 font-medium">{org}</p>
                      </div>
                    ))}
                  </div>
                </section>

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ISO9001;
