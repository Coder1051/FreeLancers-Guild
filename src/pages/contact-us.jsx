import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaUsers, FaPaperPlane } from 'react-icons/fa';
import './css/contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    serviceType: ''
  });

  const [activeAccordion, setActiveAccordion] = useState('faq1');
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');


  // Load environment variables
  // ✅ Use these instead (temporary solution)
  const EMAIL_SERVICE_ID = 'service_2390zgb';
  const EMAIL_TEMPLATE_ID = 'template_2w02tnb';
  const EMAIL_USER_ID = 'dY92STVe2URsxbn20';

  // Debug: Check if environment variables are loaded
  // console.log('Environment variables:', {
  //   SERVICE_ID: EMAIL_SERVICE_ID,
  //   TEMPLATE_ID: EMAIL_TEMPLATE_ID,
  //   USER_ID: EMAIL_USER_ID
  // });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // SINGLE handleSubmit function with EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          service_type: formData.serviceType,
          time: new Date().toLocaleString(),
        },
        EMAIL_USER_ID
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success: Thank you! Your message has been sent successfully.');

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        serviceType: ''
      });

    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error: Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleAccordion = (faqId) => {
    setActiveAccordion(activeAccordion === faqId ? '' : faqId);
  };

  const scrollToContact = () => {
    document.getElementById('contact-form').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className={`contact-page ${isVisible ? 'page-loaded' : ''}`}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="row justify-content-center align-items-center min-vh-50">
            <div className="col-lg-8 text-center">
              <div className="hero-content">
                <h1 className="hero-title">Let's Connect</h1>
                <div className="hero-divider"></div>
                <p className="hero-subtitle">
                  Transform your ideas into reality with our expert freelancers.
                  Join our community or start your next project today.
                </p>
                <div className="hero-actions">
                  <button className="btn btn-primary btn-hero" onClick={scrollToContact}>
                    <FaEnvelope className="me-2" />
                    Get In Touch
                  </button>
                  <a href="https://forms.gle/b3Dbs7sxmU6ZoD119"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light btn-hero ms-3">
                    Join Guild
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-down" onClick={scrollToContact}>
          <div className="scroll-arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="contact-section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-subtitle">Ready to start your project? Send us a message and we'll get back to you within 24 hours.</p>
            </div>
          </div>

          <div className="row g-5">
            {/* Contact Form */}
            <div className="col-lg-8">
              <div className="contact-form-wrapper">
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          required
                        />
                        <label htmlFor="name">Full Name *</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                        />
                        <label htmlFor="email">Email Address *</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select
                          className="form-select"
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                        >
                          <option value="">Choose a service</option>
                          <option value="web-development">Web Development</option>
                          <option value="graphic-design">Graphic Design</option>
                          <option value="content-writing">Content Writing</option>
                          <option value="digital-marketing">Digital Marketing</option>
                          <option value="mobile-app">Mobile App Development</option>
                          <option value="consulting">Business Consulting</option>
                          <option value="other">Other Services</option>
                        </select>
                        <label htmlFor="serviceType">Service Type</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Project Subject"
                          required
                        />
                        <label htmlFor="subject">Subject *</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control message-textarea"
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your project..."
                          rows="6"
                          required
                        ></textarea>
                        <label htmlFor="message">Project Details *</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary btn-submit"
                        disabled={isSubmitting}
                      >
                        <FaPaperPlane className="me-2" />
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        <div className="btn-shine"></div>
                      </button>

                      {/*  Show status message: */}
                      {submitStatus && (
                        <div className={`alert ${submitStatus.includes('success') ? 'alert-success' : 'alert-danger'} mt-3`}>
                          {submitStatus}
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="col-lg-4">
              <div className="contact-info-sidebar">
                <div className="contact-info-card">
                  <h3 className="info-title">Contact Information</h3>
                  <p className="info-subtitle">We're here to help bring your vision to life</p>

                  <div className="contact-details">
                    <div className="contact-item">
                      <div className="contact-icon">
                        <FaPhone />
                      </div>
                      <div className="contact-text text">
                        <h5>Phone</h5>
                        <p>+923335722463</p>
                        <span>Available 24/7</span>
                      </div>
                    </div>

                    <div className="contact-item">
                      <div className="contact-icon">
                        <FaEnvelope />
                      </div>
                      <div className="contact-text">
                        <h5>Email</h5>
                        <p>freelancersguild.tm@gmail.com</p>
                        <span>Quick response guaranteed</span>
                      </div>
                    </div>

                    <div className="contact-item">
                      <div className="contact-icon">
                        <FaMapMarkerAlt />
                      </div>
                      <div className="contact-text">
                        <h5>Location</h5>
                        <p>Remote & Worldwide</p>
                        <span>Global team, local expertise</span>
                      </div>
                    </div>

                    <div className="contact-item">
                      <div className="contact-icon">
                        <FaClock />
                      </div>
                      <div className="contact-text">
                        <h5>Working Hours</h5>
                        <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                        <span>Saturday: 10:00 AM - 4:00 PM</span>
                      </div>
                    </div>
                  </div>

                  <div className="social-connect">
                    <h5>Connect With Us</h5>
                    <div className="social-links">
                      <a href="https://www.facebook.com/share/1CYxALQz6U/" target="_blank" className="social-link facebook">
                        <FaFacebookF />
                      </a>
                      <a href="#" className="social-link twitter">
                        <FaTwitter />
                      </a>
                      <a href="https://www.linkedin.com/company/free-lancers-guild/" target="_blank" className="social-link linkedin">
                        <FaLinkedinIn />
                      </a>
                      <a href="https://www.instagram.com/free_lancers_guild?igsh=aGx4N21sd3JicHRt" target="_blank" className="social-link instagram">
                        <FaInstagram />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-5">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">Everything you need to know about working with us</p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="faq-accordion">
                <div className="faq-item">
                  <div className="faq-header" onClick={() => toggleAccordion('faq1')}>
                    <h5>How do I join the Freelancers Guild?</h5>
                    <div className={`faq-icon ${activeAccordion === 'faq1' ? 'active' : ''}`}>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className={`faq-content ${activeAccordion === 'faq1' ? 'active' : ''}`}>
                    <p>Simply click the "Join Guild" button and complete our streamlined application process. We review all applications within 24-48 hours and welcome skilled freelancers from diverse backgrounds. Our vetting process ensures quality while providing opportunities for talented professionals to grow their careers.</p>
                  </div>
                </div>

                <div className="faq-item">
                  <div className="faq-header" onClick={() => toggleAccordion('faq2')}>
                    <h5>How can I contact admins or support team?</h5>
                    <div className={`faq-icon ${activeAccordion === 'faq2' ? 'active' : ''}`}>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className={`faq-content ${activeAccordion === 'faq2' ? 'active' : ''}`}>
                    <p>You can reach us anytime through the Contact page or by emailing us at <strong>freelancersguild.rm@gmail.com</strong> . We're here to help with any questions or issues.</p>
                  </div>
                </div>

                <div className="faq-item">
                  <div className="faq-header" onClick={() => toggleAccordion('faq3')}>
                    <h5>Is there any membership fees?</h5>
                    <div className={`faq-icon ${activeAccordion === 'faq3' ? 'active' : ''}`}>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className={`faq-content ${activeAccordion === 'faq3' ? 'active' : ''}`}>
                    <p>No, membership is completely free. We believe in supporting freelancers without financial barriers.</p>
                  </div>
                </div>

                <div className="faq-item">
                  <div className="faq-header" onClick={() => toggleAccordion('faq4')}>
                    <h5>Can I promote my services here?</h5>
                    <div className={`faq-icon ${activeAccordion === 'faq4' ? 'active' : ''}`}>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className={`faq-content ${activeAccordion === 'faq4' ? 'active' : ''}`}>
                    <p>Yes! Members can share their work, promote services, and even get featured on our community highlights and project boards.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;