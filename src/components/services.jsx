import React from 'react'
import '../pages/css/about.css';
import {
    Code,
    Brain,
    PenTool,
    Palette,
    ShoppingBag,
    Video,
    TrendingUp
} from 'lucide-react';
const Services = () => {

    const services = [
        {
            id: 1,
            icon: Code,
            title: 'Web Development',
            description: 'Freelancers Guild excels in modern web development technologies. We provide comprehensive training in React, Node.js, and full-stack development to help freelancers build dynamic, responsive websites and applications that meet industry standards.'
        },
        {
            id: 2,
            icon: Brain,
            title: 'Artificial Intelligence',
            description: 'Stay ahead of the curve with our AI and machine learning courses. We teach practical applications of AI, including chatbots, data analysis, and automation tools that are revolutionizing the freelancing landscape.'
        },
        {
            id: 3,
            icon: PenTool,
            title: 'Blogging',
            description: 'Master the art of content creation and storytelling. Our blogging courses cover SEO optimization, content strategy, and monetization techniques to help freelancers build successful content-driven businesses.'
        },
        {
            id: 4,
            icon: Palette,
            title: 'Graphic Designing',
            description: 'Transform your creative vision into professional designs. We offer training in Adobe Creative Suite, UI/UX principles, and brand identity creation to help designers deliver impactful visual solutions for clients.'
        },
        {
            id: 5,
            icon: ShoppingBag,
            title: 'E-commerce',
            description: 'Build and optimize online stores that convert. Our e-commerce training covers platform development, digital marketing strategies, and conversion optimization to help freelancers succeed in the growing online marketplace.'
        },
        {
            id: 6,
            icon: Video,
            title: 'Video Editing',
            description: 'Create compelling visual stories through professional video editing. We teach industry-standard software and techniques for motion graphics, color grading, and post-production to elevate your video content.'
        },
        {
            id: 7,
            icon: TrendingUp,
            title: 'SEO & Digital Marketing',
            description: 'Freelancers Guild provides comprehensive SEO and digital marketing training covering keyword research, content optimization, social media strategy, and analytics. Our students master Google Ads, Facebook marketing, email campaigns, and conversion optimization to help businesses grow their online presence and drive measurable results.'
        }

    ];


    return (
        <>
            <section className="services-section">
                <div className="container">
                    <div className="abt-heading text-white text-center mb-3" style={{ fontWeight: 'bold' }}>
                        <h1 className='hdr2' >Free Lancers Guild</h1>
                        <div className='partners-divider'></div>
                        <p className="section-subtitles "> Freelancers Guild has mastered the art of delivering premium freelancing services including graphic design, video editing,
                            web development, AI solutions, blogging, and digital marketing completely free of cost, while expertly managing freelancer
                            careers through our efficient, zero-fee platform.</p>
                    </div>
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
        </>
    )
}

export default Services
