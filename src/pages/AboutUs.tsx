import { Shield, Scale, Info } from 'lucide-react';
import PageBanner from '../components/PageBanner';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-honey-50/30">
      <PageBanner
        title="About Us"
        subtitle="Our commitment to professional and independent certification services"
        icon={Info}
        theme="about"
      />

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br bg-honey-500 rounded-2xl flex items-center justify-center shadow-2xl">
              <Shield className="w-10 h-10 text-black" />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-honey-600 mb-8 text-center">Policy Statement</h2>
          <div className="h-1 w-24 bg-gradient-to-r bg-honey-500 mx-auto rounded-full mb-12" />

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border-l-4 border-honey-500">
              TO-Cert Pte Ltd, Singapore ("TO-CERT") is committed to provide professional and independent
              certification services to the Quality Management System (QMS).
            </p>

            <p className="text-lg bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border-l-4 border-honey-500">
              TO-CERT believe in providing value added audits and highest standard of services to customers
              yet maintaining impartialities.
            </p>

            <p className="text-lg bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border-l-4 border-honey-500">
              TO-CERT operates in accordance with the requirements as set out in the latest ISO/IEC 17021-1
              standard, current International Forum Guides and Accreditation Bodies' specific requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-honey-50/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br bg-honey-500 rounded-2xl flex items-center justify-center shadow-2xl">
              <Scale className="w-10 h-10 text-black" />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-honey-600 mb-8 text-center">Code of Ethics</h2>
          <div className="h-1 w-24 bg-gradient-to-r bg-honey-500 mx-auto rounded-full mb-12" />

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 border-2 border-honey-200 hover:border-honey-500 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br bg-honey-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-xl font-bold text-black">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-honey-600 mb-3">
                    Acceptance and Offer of Advantage/Benefit/Gratification
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    All TO-CERT personnel shall not solicit or receive any advantage to any person or organization.
                    All the certification activities undertaken shall be carried out strictly in accordance with the
                    accreditation ISO 9001 standard and TO-CERT documented management system.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-honey-200 hover:border-honey-500 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br bg-honey-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-xl font-bold text-black">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-honey-600 mb-3">
                    Gift and Entertainment
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    All TO-CERT personnel shall not accept any gift or entertainment offered by customer or related
                    party. In the event that it is unavoidable, TO-CERT personnel shall report to the management on
                    any gift or entertainment received.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-honey-200 hover:border-honey-500 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br bg-honey-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-xl font-bold text-black">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-honey-600 mb-3">
                    Confidentiality of Information & Conflict of Interest
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    As part of TO-CERT documented requirement, all TO-CERT personnel shall sign the Confidentiality
                    & Conflict of Interest & Impartiality Agreement as a commitment not to disclose any confidential
                    information relating to TO-CERT, the customer and/or any other related party. It is the
                    responsibility of each individual TO-CERT personnel to declare any potential conflict of interest
                    that may arise when undertaking the assigned task.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-honey-200 hover:border-honey-500 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br bg-honey-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-xl font-bold text-black">4</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-honey-600 mb-3">
                    Act Honestly, and In Good faith, Due Diligence to Fulfil Work Function
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    All TO-CERT personnel shall perform their work function professionally with the highest level of
                    integrity. TO-CERT does not accept falsification of any kind and shall be responsible for the
                    accuracy and completeness of any audit document produced.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-honey-200 hover:border-honey-500 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br bg-honey-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-xl font-bold text-black">5</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-honey-600 mb-3">
                    Relationship with Subcontractors or Agents
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    As part of the effort to alleviate the risk of the certification business, in the event that
                    TO-CERT engage any agent(s) to conduct audit(s), TO-CERT shall ensure that the prospective party
                    is a legal entity and a legally enforceable agreement shall be incorporated. All TO-CERT
                    subcontracted auditors are treated as fulltime TO-CERT personnel and shall strictly carry out
                    certification activities in accordance with the ISO 9001 standard and TO-CERT documented
                    management system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
