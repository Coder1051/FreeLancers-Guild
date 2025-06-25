// navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu,
  X
} from 'lucide-react';
import { FaInstagram, FaTwitter, FaFacebook ,FaTiktok ,FaLinkedinIn  } from 'react-icons/fa';
import './css/navigation.css';

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    about: false,
    services: false
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleDropdown = (dropdown) => {
    setIsDropdownOpen(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

  const closeAllDropdowns = () => {
    setIsDropdownOpen({
      about: false,
      services: false
    });
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`header ${isVisible ? 'header-visible' : 'header-hidden'}`}>


      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="container">
          <div className="nav-content">
            {/* Logo */}
            <Link to="/" className="logo" onClick={closeAllDropdowns}>
              <span className="logo-text">
                <span className="logo-f">F</span>ree<span className="logo-l">L</span>ancers 
              </span>
              <span className="logo-subtitle">GUILD</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="nav-menu ms-auto ">
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={closeAllDropdowns}
              >
                HOME
              </Link>
              <Link 
                to="/about-us" 
                className={`nav-link ${isActive('/about-us') ? 'active' : ''}`}
                onClick={closeAllDropdowns}
              >
                ABOUT US
              </Link>
              
              {/* Services Dropdown */}
              <div className="nav-dropdown">
                <button 
                  className={`nav-link dropdown-trigger ${
                    isActive('/services') || isActive('/courses') ? 'active' : ''
                  }`}
                  onClick={() => toggleDropdown('services')}
                >
                  SERVICES
                  <ChevronDown 
                    size={16} 
                    className={`dropdown-icon ${isDropdownOpen.services ? 'open' : ''}`} 
                  />
                </button>
                {isDropdownOpen.services && (
                  <div className="dropdown-menu">
                    <Link to="/courses" className="dropdown-item" onClick={closeAllDropdowns}>
                      Courses
                    </Link>
                    <Link to="/team" className="dropdown-item" onClick={closeAllDropdowns}>
                      Our Team
                    </Link>
                    <Link to="/consulting" className="dropdown-item" onClick={closeAllDropdowns}>
                      Consulting
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/blog" 
                className={`nav-link ${isActive('/blog') ? 'active' : ''}`}
                onClick={closeAllDropdowns}
              >
                BLOGS
              </Link>
              
              <Link 
                to="/contact" 
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                onClick={closeAllDropdowns}
              >
                CONTACT US
              </Link>
            </div>

            {/* Search and Mobile Menu */}
            <div className="nav-actions">
              <button 
                className="mobile-menu-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            <Link to="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              HOME
            </Link>
            <Link to="/about-us" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              ABOUT US
            </Link>
            
            <div className="mobile-dropdown">
              <button 
                className="mobile-nav-link dropdown-trigger"
                onClick={() => toggleDropdown('services')}
              >
                SERVICES
                <ChevronDown size={16} className={`dropdown-icon ${isDropdownOpen.services ? 'open' : ''}`} />
              </button>
              {isDropdownOpen.services && (
                <div className="mobile-dropdown-menu">
                  <Link to="/courses" className="mobile-dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                    Courses
                  </Link>
                  <Link to="/team" className="mobile-dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                    Our Team
                  </Link>
                  <Link to="/consulting" className="mobile-dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>
                    Consulting
                  </Link>
                </div>
              )}
            </div>

            <Link to="/blog" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              BLOGS
            </Link>
            
            <Link to="/contact" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              CONTACT US
            </Link>
          </div>
        </div>
      )}
      
    </header>
  );
};

export default Navigation;

