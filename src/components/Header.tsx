import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const currentPage = location.pathname === '/' ? 'home' : location.pathname.slice(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [clickedMenu, setClickedMenu] = useState<string | null>(null);

  const navigation = [
    { name: 'Home', key: 'home' },
    { name: 'About Us', key: 'about-us' },
    { name: 'Certificate', key: 'certificate' },
    { name: 'Client Directory', key: 'client-directory' },
    { name: 'Assessment Regulation', key: 'assessment-regulation' },
    {
      name: 'Certification Process',
      key: 'certification-process',
      submenu: [
        { name: 'Initial Audit', key: 'initial-audit' },
        { name: 'Surveillance Audit', key: 'surveillance-audit' },
        { name: 'Recertification Audit', key: 'recertification-audit' },
      ],
    },
    {
      name: 'Management Standards',
      key: 'management-standards',
      submenu: [
        { name: 'ISO 9001:2015', key: 'iso9001' },
      ],
    },
    { name: 'Contact Us', key: 'contact-us' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    setHoveredMenu(null);
    setClickedMenu(null);
  };

  const handleParentMenuClick = (key: string) => {
    setClickedMenu(clickedMenu === key ? null : key); // Toggle clicked state
  };

  // Check if current page belongs to a parent menu's submenu
  const isParentActive = (item: typeof navigation[0]) => {
    if (item.submenu) {
      return item.submenu.some(subitem => subitem.key === currentPage);
    }
    return false;
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-t-4 border-t-honey-500 relative">
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-honey-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-honey-400 via-amber-500 to-honey-400 opacity-60"></div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center flex-1">
            <div className="flex-shrink-0 mr-8">
              <Link
                to="/"
                className="group transition-all duration-300"
              >
                <img
                  src="/title.png"
                  alt="TO-CERT Logo"
                  className="h-16 transform group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>

            <nav className="hidden lg:flex lg:items-center lg:space-x-1 xl:space-x-2 flex-1">
          {navigation.map((item) => {
            const isMenuOpen = hoveredMenu === item.key || clickedMenu === item.key;
            const isActive = currentPage === item.key || isParentActive(item) || clickedMenu === item.key;

            return (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => item.submenu && setHoveredMenu(item.key)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                {item.submenu ? (
                  <button
                    onClick={() => handleParentMenuClick(item.key)}
                    className={`px-3 xl:px-5 py-2.5 text-xs xl:text-sm font-semibold rounded-lg transition-all duration-300 relative overflow-hidden group ${
                      isActive
                        ? 'bg-honey-500 text-charcoal-900 shadow-md'
                        : 'text-charcoal-700 hover:text-charcoal-900 hover:bg-honey-50'
                    }`}
                  >
                    <span className="relative z-10 whitespace-nowrap">{item.name}</span>
                  </button>
                ) : (
                  <Link
                    to={item.key === 'home' ? '/' : `/${item.key}`}
                    onClick={handleNavClick}
                    className={`px-3 xl:px-5 py-2.5 text-xs xl:text-sm font-semibold rounded-lg transition-all duration-300 relative overflow-hidden group ${
                      isActive
                        ? 'bg-honey-500 text-charcoal-900 shadow-md'
                        : 'text-charcoal-700 hover:text-charcoal-900 hover:bg-honey-50'
                    }`}
                  >
                    <span className="relative z-10 whitespace-nowrap">{item.name}</span>
                  </Link>
                )}

                {item.submenu && isMenuOpen && (
                  <div
                    className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-honey-200 py-2 animate-fade-in"
                    onMouseEnter={() => setHoveredMenu(item.key)}
                    onMouseLeave={() => setHoveredMenu(null)}
                  >
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.key}
                        to={`/${subitem.key}`}
                        onClick={handleNavClick}
                        className={`block w-full text-left px-5 py-3 text-sm font-medium transition-all duration-200 ${
                          currentPage === subitem.key
                            ? 'bg-honey-50 text-honey-700 border-l-4 border-honey-500'
                            : 'text-charcoal-700 hover:bg-honey-50 hover:text-charcoal-900 border-l-4 border-transparent'
                        }`}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
            </nav>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-honey-600 hover:bg-honey-50 transition-colors duration-200"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            {navigation.map((item) => (
              <div key={item.key}>
                {item.submenu ? (
                  <div className={`w-full text-left px-4 py-3 text-sm font-semibold transition-colors ${
                    isParentActive(item)
                      ? 'bg-honey-50 text-honey-700'
                      : 'text-charcoal-700'
                  }`}>
                    {item.name}
                  </div>
                ) : (
                  <Link
                    to={item.key === 'home' ? '/' : `/${item.key}`}
                    onClick={handleNavClick}
                    className={`block w-full text-left px-4 py-3 text-sm font-semibold transition-colors ${
                      currentPage === item.key
                        ? 'bg-honey-50 text-honey-700'
                        : 'text-charcoal-700 hover:bg-honey-50 hover:text-charcoal-900'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
                {item.submenu && (
                  <div className="pl-4 bg-honey-50/50">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.key}
                        to={`/${subitem.key}`}
                        onClick={handleNavClick}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          currentPage === subitem.key
                            ? 'text-honey-700 font-semibold'
                            : 'text-charcoal-600 hover:text-charcoal-900'
                        }`}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
