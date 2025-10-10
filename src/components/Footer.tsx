import { Mail, Phone, MapPin, Award, Shield, FileCheck } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer = ({ setCurrentPage }: FooterProps) => {
  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-charcoal-900 to-black text-gray-200 border-t-4 border-t-honey-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Company Info - Spans 3 columns */}
          <div className="lg:col-span-3">
            <div className="mb-2">
              <button
                onClick={() => handleNavClick('home')}
                className="group transition-all duration-300"
              >
                <img
                  src="/tc logo_01_white 1 copy.png"
                  alt="TO-CERT Logo"
                  className="h-16 mb-4 transform group-hover:scale-105 transition-transform duration-300"
                />
              </button>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm">
              Global third-party assurance provider specialized in internationally recognized sustainability
              standards.
            </p>
            <p className="text-gray-400 italic text-xs mb-6 border-l-2 border-honey-500 pl-3">
              To-Cert is a subsidiary of Genashtim
            </p>

          </div>

          {/* Quick Links - Spans 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-honey-400 font-bold text-base mb-6 uppercase tracking-wider flex items-center gap-2">
              <div className="w-1 h-5 bg-honey-500 rounded-full"></div>
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-gray-300 hover:text-honey-400 transition-colors duration-200 text-left text-sm group flex items-center"
                >
                  <span className="w-0 group-hover:w-1.5 h-1.5 bg-honey-500 rounded-full transition-all duration-200 mr-0 group-hover:mr-2"></span>
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about-us')}
                  className="text-gray-300 hover:text-honey-400 transition-colors duration-200 text-left text-sm group flex items-center"
                >
                  <span className="w-0 group-hover:w-1.5 h-1.5 bg-honey-500 rounded-full transition-all duration-200 mr-0 group-hover:mr-2"></span>
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('certificate')}
                  className="text-gray-300 hover:text-honey-400 transition-colors duration-200 text-left text-sm group flex items-center"
                >
                  <span className="w-0 group-hover:w-1.5 h-1.5 bg-honey-500 rounded-full transition-all duration-200 mr-0 group-hover:mr-2"></span>
                  Certificate
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('client-directory')}
                  className="text-gray-300 hover:text-honey-400 transition-colors duration-200 text-left text-sm group flex items-center"
                >
                  <span className="w-0 group-hover:w-1.5 h-1.5 bg-honey-500 rounded-full transition-all duration-200 mr-0 group-hover:mr-2"></span>
                  Client Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact-us')}
                  className="text-gray-300 hover:text-honey-400 transition-colors duration-200 text-left text-sm group flex items-center"
                >
                  <span className="w-0 group-hover:w-1.5 h-1.5 bg-honey-500 rounded-full transition-all duration-200 mr-0 group-hover:mr-2"></span>
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Certification Services - Spans 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="text-honey-400 font-bold text-base mb-6 uppercase tracking-wider flex items-center gap-2">
              <div className="w-1 h-5 bg-honey-500 rounded-full"></div>
              Certification Process
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group cursor-pointer" onClick={() => handleNavClick('initial-audit')}>
                <div className="w-8 h-8 bg-charcoal-800 group-hover:bg-honey-500 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <Award className="w-4 h-4 text-honey-400 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <div className="text-gray-200 font-semibold text-sm mb-0.5 group-hover:text-honey-400 transition-colors">Initial Audit</div>
                  <p className="text-gray-400 text-xs leading-relaxed">Comprehensive first-time certification assessment</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group cursor-pointer" onClick={() => handleNavClick('surveillance-audit')}>
                <div className="w-8 h-8 bg-charcoal-800 group-hover:bg-honey-500 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <Shield className="w-4 h-4 text-honey-400 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <div className="text-gray-200 font-semibold text-sm mb-0.5 group-hover:text-honey-400 transition-colors">Surveillance Audit</div>
                  <p className="text-gray-400 text-xs leading-relaxed">Ongoing compliance verification and monitoring</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group cursor-pointer" onClick={() => handleNavClick('recertification-audit')}>
                <div className="w-8 h-8 bg-charcoal-800 group-hover:bg-honey-500 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <FileCheck className="w-4 h-4 text-honey-400 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <div className="text-gray-200 font-semibold text-sm mb-0.5 group-hover:text-honey-400 transition-colors">Recertification Audit</div>
                  <p className="text-gray-400 text-xs leading-relaxed">Renewal assessment for continued certification</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information - Spans 4 columns */}
          <div className="lg:col-span-4">
            <h3 className="text-honey-400 font-bold text-base mb-6 uppercase tracking-wider flex items-center gap-2">
              <div className="w-1 h-5 bg-honey-500 rounded-full"></div>
              Contact Information
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-9 h-9 bg-honey-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-honey-500/50 transition-all duration-300">
                  <Mail className="w-4 h-4 text-black" />
                </div>
                <div>
                  <div className="text-honey-400 font-semibold text-xs uppercase mb-1 tracking-wide">Email</div>
                  <a
                    href="mailto:info@to-cert.com"
                    className="text-gray-300 hover:text-honey-400 transition-colors duration-200 text-sm"
                  >
                    info@to-cert.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-9 h-9 bg-honey-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-honey-500/50 transition-all duration-300">
                  <Phone className="w-4 h-4 text-black" />
                </div>
                <div>
                  <div className="text-honey-400 font-semibold text-xs uppercase mb-1 tracking-wide">Phone</div>
                  <a
                    href="tel:+6531051567"
                    className="text-gray-300 hover:text-honey-400 transition-colors duration-200 text-sm"
                  >
                    +65 3105 1567
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-9 h-9 bg-honey-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-honey-500/50 transition-all duration-300">
                  <MapPin className="w-4 h-4 text-black" />
                </div>
                <div>
                  <div className="text-honey-400 font-semibold text-xs uppercase mb-1 tracking-wide">Address</div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    1 Coleman Street #10-10
                    <br />
                    The Adelphi Singapore
                    <br />
                    179803
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-800/50 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} TO-CERT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
