import { useState, FormEvent } from 'react';
import { Send, X, Users } from 'lucide-react';
import PageBanner from '../components/PageBanner';

const ClientDirectory = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    country: '',
    message: '',
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.contact,
        message: `Country: ${formData.country}\n\nEnquiry Details:\n${formData.message}`,
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
        setShowConfirmation(true);
        setFormData({
          name: '',
          contact: '',
          email: '',
          country: '',
          message: '',
        });
      } else {
        throw new Error(result.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Failed to submit enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-honey-50/30">
      <PageBanner
        title="Client Directory"
        subtitle="Verification of certification status for organizations"
        icon={Users}
        theme="directory"
      />

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-honey-400 via-honey-500 to-honey-400"></div>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-honey-600 mb-4">Certification Status Enquiry</h2>
              <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
                To verify the certification status of an organization, please complete the form below.
                Our team will respond to your enquiry within 2-3 business days.
              </p>
            </div>

            {submitError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-300 rounded-lg">
                <p className="text-red-700 font-medium">{submitError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-honey-600 mb-2 uppercase tracking-wide">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-honey-400 focus:border-honey-500 transition-all outline-none bg-gray-50 focus:bg-white"
                />
              </div>

              <div>
                <label htmlFor="contact" className="block text-sm font-semibold text-honey-600 mb-2 uppercase tracking-wide">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="+65 1234 5678"
                  required
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-honey-400 focus:border-honey-500 transition-all outline-none bg-gray-50 focus:bg-white"
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
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-honey-400 focus:border-honey-500 transition-all outline-none bg-gray-50 focus:bg-white"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-semibold text-honey-600 mb-2 uppercase tracking-wide">
                  Country <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Singapore"
                  required
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-honey-400 focus:border-honey-500 transition-all outline-none bg-gray-50 focus:bg-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-honey-600 mb-2 uppercase tracking-wide">
                  Enquiry Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please provide the organization name and any specific certification details you would like to verify"
                  rows={5}
                  required
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-honey-400 focus:border-honey-500 transition-all resize-none outline-none bg-gray-50 focus:bg-white"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black hover:bg-gray-900 text-honey-500 py-4 px-6 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform hover:scale-[1.02] duration-200 uppercase tracking-wide text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {showConfirmation && (
        <div className="fixed inset-0 bg-charcoal-900 bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fade-in border-2 border-honey-500/20">
            <button
              onClick={() => setShowConfirmation(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br bg-honey-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-honey-600 mb-2">Enquiry Submitted Successfully</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Thank you for your certification status enquiry. Our team will review your request and respond within 2-3 business days.
              </p>
              <button
                onClick={() => setShowConfirmation(false)}
                className="bg-honey-500 hover:bg-honey-600 text-honey-600 px-8 py-3 rounded-lg transition-all font-bold shadow-md uppercase tracking-wide text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientDirectory;
