import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, ArrowRight, Users, BookOpen, Award } from 'lucide-react';
import './css/carousel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState({});

  const slides = [
    {
      id: 1,
      backgroundImage: {
        desktop: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop',
        mobile: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=768&h=1024&fit=crop'
      },
      title: 'Transform Your Freelancing Career',
      subtitle: 'Master In-Demand Skills',
      description: 'Join thousands of successful freelancers who have accelerated their careers with our comprehensive training programs and expert guidance.',
      primaryBtn: 'Start Your Journey',
      secondaryBtn: 'Watch Demo',
      stats: [
        { icon: Users, number: '5,000+', label: 'Students Trained' },
        { icon: BookOpen, number: '50+', label: 'Expert Courses' },
        { icon: Award, number: '95%', label: 'Success Rate' }
      ]
    },
    {
      id: 2,
      backgroundImage: {
        desktop: 'https://images.unsplash.com/photo-1669173034261-f1a595981815?w=1920&h=1080&fit=crop',
        mobile: 'https://images.unsplash.com/photo-1669173034261-f1a595981815?w=768&h=1024&fit=crop'
      },
      title: 'Premium Courses for Professionals',
      subtitle: 'Learn From Industry Experts',
      description: 'Access cutting-edge curriculum designed by industry leaders. From web development to digital marketing, master the skills that clients are looking for.',
      primaryBtn: 'Browse Courses',
      secondaryBtn: 'Free Preview',
      stats: [
        { icon: BookOpen, number: '20+', label: 'Course Categories' },
        { icon: Users, number: '1,000+', label: 'Active Learners' },
        { icon: Award, number: '4.9/5', label: 'Student Rating' }
      ]
    },
    {
      id: 3,
      backgroundImage: {
        desktop: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&h=1080&fit=crop',
        mobile: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=768&h=1024&fit=crop'
      },
      title: 'Build Your Freelancing Empire',
      subtitle: 'From Beginner to Expert',
      description: 'Our step-by-step approach takes you from learning fundamental skills to building a thriving freelance business with consistent high-paying clients.',
      primaryBtn: 'Get Started',
      secondaryBtn: 'Success Stories',
      stats: [
        { icon: Award, number: '$500K+', label: 'Student Earnings' },
        { icon: Users, number: '2,500+', label: 'Alumni Network' },
        { icon: BookOpen, number: '100%', label: 'Job Support' }
      ]
    }
  ];

  // Get responsive background image
  const getBackgroundImage = (slide) => {
    if (window.innerWidth <= 768) {
      return slide.backgroundImage.mobile;
    } else {
      return slide.backgroundImage.desktop;
    }
  };

  // Preload images to avoid loading flicker
  useEffect(() => {
    const preloadImages = async () => {
      const loadPromises = slides.map(slide => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            setImagesLoaded(prev => ({
              ...prev,
              [slide.id]: true
            }));
            resolve();
          };
          img.onerror = () => {
            // Even if image fails, mark as loaded to show fallback
            setImagesLoaded(prev => ({
              ...prev,
              [slide.id]: true
            }));
            resolve();
          };
          img.src = getBackgroundImage(slide);
        });
      });
      
      await Promise.all(loadPromises);
    };

    preloadImages();
  }, []);

  // FIXED: Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 4000); // 4 second intervals

    return () => clearInterval(interval);
  }, [isAutoPlaying]); // Removed slides.length dependency - this was causing the issue!

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    // Resume auto-play after 8 seconds
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <div className="hero-carousel">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''} ${
              imagesLoaded[slide.id] ? 'loaded' : 'loading'
            }`}
            style={{ 
              backgroundImage: imagesLoaded[slide.id] ? `url(${getBackgroundImage(slide)})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Loading spinner - only shows until image loads */}
            {!imagesLoaded[slide.id] && (
              <div className="slide-loader">
                <div className="loader-spinner"></div>
              </div>
            )}
            
            <div className="slide-overlay"></div>
            <div className="container">
              <div className="slide-content">
                <div className="content-left">
                  <div className="slide-text">
                    <span className="slide-subtitle">{slide.subtitle}</span>
                    <h1 className="slide-title">{slide.title}</h1>
                    <p className="slide-description">{slide.description}</p>
                    
                    <div className="slide-actions">
                      <button className="btn-primary">
                        {slide.primaryBtn}
                        <ArrowRight size={18} />
                      </button>
                      <button className="btn-secondary">
                        <Play size={16} />
                        {slide.secondaryBtn}
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="content-right">
                  <div className="stats-grid">
                    {slide.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="stat-items">
                        <div className="stat-icon">
                          <stat.icon size={24} />
                        </div>
                        <div className="stat-contents">
                          <span className="stat-numbers">{stat.number}</span>
                          <span className="stat-labels">{stat.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="carousel-arrow prev" onClick={prevSlide}>
        <ChevronLeft size={20} />
      </button>
      <button className="carousel-arrow next" onClick={nextSlide}>
        <ChevronRight size={20} />
      </button>

      {/* Dots Navigation */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="carousel-progress">
        <div 
          className="progress-bar"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
            transition: 'width 0.3s ease'
          }}
        />
      </div>
    </div>
  );
};

export default Carousel;