import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Zap, Code, Search } from 'lucide-react';
import './css/error.css';

const ErrorPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className={`error-container ${isVisible ? 'visible' : ''}`}>
      {/* Main Error Content */}
      <div className="error-content">
        {/* Animated 404 */}
        <div className="error-code">
          <span className="digit">4</span>
          <span className="digit">0</span>
          <span className="digit">4</span>
        </div>

        {/* Error Message */}
        <div className="error-message">
          <h1 className="error-title">Oops! Page Not Found</h1>
          <p className="error-description">
            The page you're looking for seems to have wandered off into the digital void. 
            Don't worry, even the best freelancers sometimes take a wrong turn!
          </p>
        </div>

        {/* Minimal Icons */}
        <div className="error-icons">
          <div className="error-icon">
            <Code size={24} />
          </div>
          <div className="error-icon">
            <Zap size={24} />
          </div>
          <div className="error-icon">
            <Search size={24} />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="error-actions">
          <Link to="/" className="btn btn-primary">
            <Home size={18} />
            Go Home
          </Link>
          
          <button onClick={handleGoBack} className="btn btn-secondary">
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        {/* Quick Navigation - All in One Line */}
        <div className="quick-navigation">
          <h3>Quick Navigation:</h3>
          <div className="nav-links-row">
            <Link to="/courses" className="nav-link-item">
              📚 Courses
            </Link>
            <Link to="/blog" className="nav-link-item">
              📝 Blog
            </Link>
            <Link to="/contact" className="nav-link-item">
              📞 Contact
            </Link>
            <Link to="/about" className="nav-link-item">
              👥 About Us
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle Background Effect */}
      <div className="bg-pattern"></div>
    </div>
  );
};

export default ErrorPage;