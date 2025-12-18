import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, FileText, ShieldCheck, MessageCircle, X } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { usePageTitle } from '../hooks/usePageTitle';

const ContactUs = () => {
  usePageTitle('Contact Us');
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const payload = {
        name: formData.fullName,
        email: formData.email,
        company: formData.companyName,
        message: formData.message,
      };

      const response = await fetch('/api/send-contact-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
        setShowPopup(true);
        setFormData({
          fullName: '',
          companyName: '',
          email: '',
          message: '',
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        throw new Error(result.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-honey-50/30">
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch with our certification experts"
        icon={MessageCircle}
        theme="contact"
      />

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 overflow-hidden animate-slideUp">
            <div className="bg-gradient-to-r from-honey-500 via-amber-500 to-honey-500 p-6 relative">
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                aria-label="Close notification"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-9 h-9 text-honey-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Success!</h3>
                  <p className="text-honey-100 text-sm">Enquiry submitted</p>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-6">
              <div>
                <h4 className="text-lg font-bold text-honey-600 mb-2">Thank you for reaching out!</h4>
                <p className="text-gray-700 leading-relaxed">
                  Your enquiry has been successfully submitted. Our certification experts will review your message and get back to you within 24-48 hours.
                </p>
              </div>

              <div className="bg-gradient-to-br from-honey-50 to-amber-50 rounded-xl p-5 border-2 border-honey-200">
                <h5 className="font-semibold text-honey-600 mb-3 text-sm uppercase tracking-wider">What happens next?</h5>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-honey-600 mt-0.5 flex-shrink-0" />
                    <span>You will receive a confirmation email shortly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-honey-600 mt-0.5 flex-shrink-0" />
                    <span>Our team will review your requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-honey-600 mt-0.5 flex-shrink-0" />
                    <span>We'll contact you to discuss next steps</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={closePopup}
                className="w-full bg-gradient-to-r from-honey-500 via-amber-500 to-honey-500 text-white font-bold py-4 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02] uppercase tracking-wide text-sm"
              >
                Got it, thanks!
              </button>
            </div>
          </div>
        </div>
      )}



      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-honey-400 via-honey-500 to-honey-400"></div>
                <h2 className="text-2xl font-bold text-honey-600 mb-8 pb-4 border-b-2 border-honey-400">Contact Information</h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 bg-honey-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                      <Mail className="w-6 h-6 text-honey-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-honey-600 mb-1.5 text-xs uppercase tracking-wider text-gray-600">Email</h3>
                      <a
                        href="mailto:info@to-cert.com"
                        className="text-charcoal-800 hover:text-honey-600 transition-colors text-lg font-medium block"
                      >
                        info@to-cert.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 bg-honey-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                      <Phone className="w-6 h-6 text-honey-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-honey-600 mb-1.5 text-xs uppercase tracking-wider text-gray-600">Phone</h3>
                      <a
                        href="tel:+6531051567"
                        className="text-charcoal-800 hover:text-honey-600 transition-colors text-lg font-medium block"
                      >
                        +65 3105 1567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 bg-honey-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                      <MapPin className="w-6 h-6 text-honey-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-honey-600 mb-1.5 text-xs uppercase tracking-wider text-gray-600">Address</h3>
                      <p className="text-charcoal-800 text-base leading-relaxed">
                        1 Coleman Street #10-10
                        <br />
                        The Adelphi Singapore 179803
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-honey-50 to-white rounded-2xl shadow-lg p-10 border border-honey-200 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-honey-400 via-honey-500 to-honey-400"></div>
                <h2 className="text-2xl font-bold text-honey-600 mb-8 pb-4 border-b-2 border-honey-400">Our Certification Process</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-white border-2 border-honey-400 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md group-hover:border-honey-500 transition-all duration-300">
                      <CheckCircle className="w-6 h-6 text-honey-600" />
                    </div>
                    <div className="flex-1 pt-1.5">
                      <p className="text-charcoal-800 text-base leading-relaxed">Engage us to understand your requirements and objectives</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-white border-2 border-honey-400 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md group-hover:border-honey-500 transition-all duration-300">
                      <FileText className="w-6 h-6 text-honey-600" />
                    </div>
                    <div className="flex-1 pt-1.5">
                      <p className="text-charcoal-800 text-base leading-relaxed">Comprehensive documentation review and assessment preparation</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-white border-2 border-honey-400 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md group-hover:border-honey-500 transition-all duration-300">
                      <ShieldCheck className="w-6 h-6 text-honey-600" />
                    </div>
                    <div className="flex-1 pt-1.5">
                      <p className="text-charcoal-800 text-base leading-relaxed">Independent verification and professional certification issuance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-honey-400 via-honey-500 to-honey-400"></div>
              <h2 className="text-2xl font-bold text-honey-600 mb-8 pb-4 border-b-2 border-honey-400">Get in Touch</h2>

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-300 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-800 font-medium">Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              {submitError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-300 rounded-lg">
                  <p className="text-red-700 font-medium">{submitError}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-honey-600 mb-2 uppercase tracking-wide">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-honey-400 focus:border-honey-500 outline-none transition-all bg-gray-50 focus:bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold text-honey-600 mb-2 uppercase tracking-wide">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    placeholder="Your company"
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-honey-400 focus:border-honey-500 outline-none transition-all bg-gray-50 focus:bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-honey-600 mb-2 uppercase tracking-wide">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-honey-400 focus:border-honey-500 outline-none transition-all bg-gray-50 focus:bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-honey-600 mb-2 uppercase tracking-wide">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us how we can help you"
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-honey-400 focus:border-honey-500 outline-none transition-all resize-none bg-gray-50 focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full bg-gradient-to-r from-honey-500 via-amber-500 to-honey-500 bg-size-200 hover:bg-pos-100 text-white font-bold py-5 rounded-xl transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-2xl transform hover:scale-[1.02] uppercase tracking-widest text-sm overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
