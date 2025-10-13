import { Target, CheckCircle, Settings, Lock, Globe, Users, Shield, Briefcase, BookOpen, Building2, ShieldCheck, ArrowRight, Award, TrendingUp, FileCheck } from 'lucide-react';
import { useCountAnimation } from '../hooks/useCountAnimation';
import { useInView } from '../hooks/useInView';
import PageBanner from '../components/PageBanner';
import { Link } from 'react-router-dom';

const Home = () => {
  const { ref: statsRef, isInView } = useInView(0.3);

  const years = useCountAnimation(4, 2000, 0, isInView);
  const companies = useCountAnimation(11000, 2500, 0, isInView);
  const countries = useCountAnimation(90, 2000, 0, isInView);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white text-white overflow-hidden">
        {/* Background Image - Full quality, no filters */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/globe.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 60%",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
              Helping Organizations Showcase Their ESG Impact
            </h1>

            <p className="text-xl md:text-2xl text-white font-bold leading-relaxed drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
              Global third-party assurance provider specialized in sustainability standards and B Corp certification
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-12 -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-charcoal-900 to-gray-900 border-2 border-honey-500/20 rounded-2xl p-6 text-center hover:border-honey-500 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-honey-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-1">{years}+</div>
              <div className="text-sm text-honey-400 font-semibold uppercase tracking-wider mb-2">Years</div>
              <div className="text-xs text-gray-400">as B Lab Global assurance provider</div>
            </div>

            <div className="bg-gradient-to-br from-charcoal-900 to-gray-900 border-2 border-honey-500/20 rounded-2xl p-6 text-center hover:border-honey-500 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-honey-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-1">{companies.toLocaleString()}+</div>
              <div className="text-sm text-honey-400 font-semibold uppercase tracking-wider mb-2">Companies</div>
              <div className="text-xs text-gray-400">verified worldwide</div>
            </div>

            <div className="bg-gradient-to-br from-charcoal-900 to-gray-900 border-2 border-honey-500/20 rounded-2xl p-6 text-center hover:border-honey-500 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-honey-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-1">{countries}+</div>
              <div className="text-sm text-honey-400 font-semibold uppercase tracking-wider mb-2">Countries</div>
              <div className="text-xs text-gray-400">served globally</div>
            </div>

            <div className="bg-gradient-to-br from-charcoal-900 to-gray-900 border-2 border-honey-500/20 rounded-2xl p-6 text-center hover:border-honey-500 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-honey-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-honey-400 font-semibold uppercase tracking-wider mb-2">Remote</div>
              <div className="text-xs text-gray-400">distributed team</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-12 bg-gradient-to-br from-honey-50 via-amber-50 to-honey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-honey-500/10 border border-honey-500/20 rounded-full px-4 py-1.5 mb-3">
              <TrendingUp className="w-4 h-4 text-honey-600" />
              <span className="text-sm font-semibold text-honey-700">Our Approach</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-honey-600">
              Why Organizations Choose TO-CERT
            </h2>
            <p className="text-lg text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
              We deliver independent, rigorous assurance services that help you build credibility and demonstrate your commitment to sustainability
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-honey-500">
              <div className="w-14 h-14 bg-gradient-to-br from-honey-500 to-amber-600 rounded-2xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-honey-600 mb-3">Unbiased & Independent</h3>
              <p className="text-charcoal-600 leading-relaxed">
                As a trusted third-party assurance provider with no conflicts of interest, we ensure fair, transparent, and credible certification processes.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-honey-500">
              <div className="w-14 h-14 bg-gradient-to-br from-honey-500 to-amber-600 rounded-2xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-honey-600 mb-3">Standards-Aligned</h3>
              <p className="text-charcoal-600 leading-relaxed">
                Our assurance process adheres to internationally recognized standards, ensuring rigorous, consistent, and globally respected reviews.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-honey-500">
              <div className="w-14 h-14 bg-gradient-to-br from-honey-500 to-amber-600 rounded-2xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-honey-600 mb-3">Tailored Expertise</h3>
              <p className="text-charcoal-600 leading-relaxed">
                We offer certification-specific expertise across sectors, bringing deep contextual knowledge to every verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Dark Theme */}
      <section className="relative bg-gradient-to-br from-charcoal-900 via-gray-900 to-charcoal-800 py-12 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-honey-500/20 border border-honey-500/30 rounded-full px-4 py-1.5 mb-3">
              <Briefcase className="w-4 h-4 text-honey-400" />
              <span className="text-sm font-semibold text-yellow-400">What We Offer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-yellow-400">
              Comprehensive Assurance Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Expert certification and verification services tailored to your sustainability journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-6xl mx-auto">
            <div className="group bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-honey-500/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-honey-500 to-amber-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-yellow-400">B Corp Certification Assurance</h3>
              <p className="text-gray-300 leading-relaxed">
                Independent auditor for new certifications and recertifications, from start-ups to large enterprises and multinational companies.
              </p>
            </div>

            <div className="group bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-honey-500/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-honey-500 to-amber-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Virtual & Multi-site Assessments</h3>
              <p className="text-gray-300 leading-relaxed">
                Scalable process that keeps evidence organized across hundreds of locations with efficiency and consistency.
              </p>
            </div>

            <div className="group bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-honey-500/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-honey-500 to-amber-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Training & Capacity Building</h3>
              <p className="text-gray-300 leading-relaxed">
                Expert-led training and workshops to prepare your team for successful B Corp certification pursuit.
              </p>
            </div>

            <div className="group bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-honey-500/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-honey-500 to-amber-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-yellow-400">ISO 9001 Quality Assurance</h3>
              <p className="text-gray-300 leading-relaxed">
                Independent verification services ensuring your Quality Management System meets global standards for excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Detailed */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-honey-500/10 border border-honey-500/20 rounded-full px-4 py-1.5 mb-3">
              <Award className="w-4 h-4 text-honey-600" />
              <span className="text-sm font-semibold text-honey-700">Our Advantages</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-honey-600">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
              Discover the expertise and commitment that makes TO-CERT your ideal certification partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <Briefcase className="w-7 h-7 text-white" />,
                title: "Sector-Specific Expertise",
                description: "Deep industry knowledge from consumer goods to tech, finance, and manufacturing—ensuring relevance and accuracy in every review."
              },
              {
                icon: <Users className="w-7 h-7 text-white" />,
                title: "Experienced ESG Auditors",
                description: "Seasoned professionals with backgrounds in sustainability, corporate responsibility, and impact assessment bring technical and ethical expertise."
              },
              {
                icon: <Lock className="w-7 h-7 text-white" />,
                title: "Confidential & Secure",
                description: "Strict data privacy, confidentiality, and transparency throughout the verification process with utmost professionalism."
              },
              {
                icon: <Globe className="w-7 h-7 text-white" />,
                title: "Global Workforce",
                description: "Auditors in 90+ countries speaking multiple languages with expertise in regional and local contexts worldwide."
              },
              {
                icon: <FileCheck className="w-7 h-7 text-white" />,
                title: "Proven Track Record",
                description: "Over 11,000 companies verified with consistent excellence and attention to detail in every engagement."
              },
              {
                icon: <TrendingUp className="w-7 h-7 text-white" />,
                title: "Continuous Support",
                description: "Ongoing guidance and support throughout your certification journey and beyond, ensuring long-term success."
              }
            ].map((item, index) => (
              <div key={index} className="group bg-gradient-to-br from-honey-50 to-amber-50 border-2 border-honey-200 rounded-2xl p-6 hover:border-honey-500 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-honey-500 to-amber-600 rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-honey-600 mb-2">{item.title}</h3>
                <p className="text-charcoal-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-charcoal-900 via-gray-900 to-charcoal-800 py-12 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-honey-500/20 border border-honey-500/30 rounded-full px-4 py-1.5 mb-4">
            <CheckCircle className="w-4 h-4 text-honey-400" />
            <span className="text-sm font-semibold text-honey-400">Ready to Get Started?</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-yellow-400">
            Begin Your Certification Journey Today
          </h2>

          <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto">
            Partner with TO-CERT for independent, rigorous assurance services that build credibility and demonstrate your commitment to sustainability and quality excellence
          </p>

          <div className="flex justify-center items-center">
            <Link
              to="/contact-us"
              className="group bg-honey-500 hover:bg-honey-600 text-charcoal-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 flex items-center gap-2 text-base"
            >
              Contact Us Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;