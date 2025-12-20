import React from 'react'
import './css/course.css'
import {
  Code,
  Brain,
  PenTool,
  Palette,
  ShoppingBag,
  Video,
  TrendingUp,
  MessageCircleCode
} from 'lucide-react';

const Course = () => {

  const services = [
    {
      id: 1,
      icon: MessageCircleCode,
      title: 'App Development',
      description: 'Native and cross-platform mobile apps focused on performance and delightful UX across iOS and Android devices. Modern, performant web applications built with best-in-class frameworks and progressive enhancement for broad reach and accessibility. Desktop applications using Electron, Tauri or native toolchains to deliver powerful offline-capable experiences. Robust server-side solutions with microservices architecture, API development, and database optimization.'
    },
    {
      id: 2,
      icon: Code,
      title: 'Web Development',
      description: 'Freelancers Guild excels in modern web development technologies. We provide comprehensive training in React, Node.js, and full-stack development to help freelancers build dynamic, responsive websites and applications that meet industry standards.'
    },
    {
      id: 3,
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Stay ahead of the curve with our AI and machine learning courses. We teach practical applications of AI, including chatbots, data analysis, and automation tools that are revolutionizing the freelancing landscape.'
    },
    {
      id: 4,
      icon: PenTool,
      title: 'Blogging',
      description: 'Master the art of content creation and storytelling. Our blogging courses cover SEO optimization, content strategy, and monetization techniques to help freelancers build successful content-driven businesses.'
    },
    {
      id: 5,
      icon: Palette,
      title: 'Graphic Designing',
      description: 'Transform your creative vision into professional designs. We offer training in Adobe Creative Suite, UI/UX principles, and brand identity creation to help designers deliver impactful visual solutions for clients.'
    },
    {
      id: 6,
      icon: ShoppingBag,
      title: 'E-commerce',
      description: 'Build and optimize online stores that convert. Our e-commerce training covers platform development, digital marketing strategies, and conversion optimization to help freelancers succeed in the growing online marketplace.'
    },
    {
      id: 7,
      icon: Video,
      title: 'Video Editing',
      description: 'Create compelling visual stories through professional video editing. We teach industry-standard software and techniques for motion graphics, color grading, and post-production to elevate your video content.'
    },
    {
      id: 8,
      icon: TrendingUp,
      title: 'SEO & Digital Marketing',
      description: 'Freelancers Guild provides comprehensive SEO and digital marketing training covering keyword research, content optimization, social media strategy, and analytics. Our students master Google Ads, Facebook marketing, email campaigns, and conversion optimization to help businesses grow their online presence and drive measurable results.'
    }
  ];

  return (
    <div>
      <section className="services-section">
        <div className="container">
          <h1 className='text-center mb-5 hdr1 ' style={{ fontWeight: 'bolder' }}  >
            Our Courses
          </h1>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  <service.icon size={32} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Course
