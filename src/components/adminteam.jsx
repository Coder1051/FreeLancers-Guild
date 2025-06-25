import React, { useEffect, useRef, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './css/admin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>
const AdminTeam = () => {
    const sectionRef = useRef(null);
    const statsRef = useRef(null);
    const [countersAnimated, setCountersAnimated] = useState(false);

    // Counter Animation Function
    const animateCounters = () => {
        const counters = document.querySelectorAll('.stat-number');

        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000; // 2 seconds
            const startTime = performance.now();

            const updateCounter = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const current = Math.floor(target * easeOutQuart);

                counter.textContent = current;

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            requestAnimationFrame(updateCounter);
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const adminCards = document.querySelectorAll('.admin-card');
        adminCards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    const adminData = [
        {
            id: 1,
            name: "Ubaid-ur-Rehman",
            role: "President Free Lancers Guild",
            bio: "Leading digital innovation with 1+ years in tech management and startup scaling.",
            image: "./images/ubaid.jpeg",
            skills: ["Strategic Planning", "Team Leadership & Planning", "Project Management "],
            // contact:[
            //     {
            //         email:"",
            //         Linkedin:""  
            //     }
            // ]

        },
        {
            id: 2,
            name: " MUHAMMAD FARHAN NOKHEZ ",
            role: "Chief Advisor & Co-Founder",
            bio: "I help guide the direction of our society, support members in skill-building, and make sure our goals stay clear and strong. I’m focused on long-term success and building something meaningful together.",
            image: "./images/farhan.jpeg",
            skills: ["AI Prompt handling", " Digital Marketing", "Excel Data Visualization", "Content Strategy", "Project management", "Team Leadership & Planning"],
            //    contact:[
            //     {
            //         email:"",
            //         Linkedin:""  
            //     }
            // ]

        },
        {
            id: 3,
            name: "Jawad Ur Rehman",
            role: "DG FLG",
            bio: [
                "Python app developer (kivy and flutter). I am 18 year passionate python developer. I am Nustian . I am looking forward to make FLG a great platform to learn and earn .",
                "The most effective way to do it , is to do it "],
            image: "./images/jawad.jpeg",
            skills: ["Python Developer", "Process Optimization", "Quality Assurance"],
            // contact: [
            //     {
            //         email: "",
            //         Linkedin: ""
            //     }
            // ]
        }
    ];

    return (
        <section className="admin-team-section" ref={sectionRef}>
            <Container>
                <div className="section-header text-center mb-5">
                    <h2 className="section-title">
                        Meet Our <span className="highlight">Admin Team</span>
                    </h2>
                    <div className="section-divider"></div>
                    <p className="section-subtitle">
                        Dedicated professionals driving innovation and excellence in freelancing platform management
                    </p>
                </div>

                <Row className="g-4 justify-content-center">
                    {adminData.map((admin, index) => (
                        <Col lg={4} md={6} sm={12} key={admin.id}>
                            <div
                                className={`admin-card ${index % 2 === 0 ? 'slide-left' : 'slide-right'}`}
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="admin-card-inner">
                                    <div className="admin-image-container">
                                        <img
                                            src={admin.image}
                                            alt={admin.name}
                                            className="admin-image"
                                        />
                                        <div className="image-overlays">
                                            <div className="social-links">
                                                {/* <a href={`mailto:${admin.contact.email}`} target='_blank' className="social-link">
                                                    <i className="fas fa-envelope"></i>
                                                </a>
                                                <a href={`https://${admin.contact.linkedin}`} target='_blank' className="social-link">
                                                    <i className="fab fa-linkedin"></i>
                                                </a> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="admin-content">
                                        <h3 className="admin-name">{admin.name}</h3>
                                        <h4 className="admin-role">{admin.role}</h4>
                                        <p className="admin-bio">{admin.bio}</p>

                                        <div className="admin-skills">
                                            <h5 className="skills-title">Expertise:</h5>
                                            <div className="skills-tags">
                                                {admin.skills.map((skill, skillIndex) => (
                                                    <span key={skillIndex} className="skill-tag">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container >
        </section >
    );
};

export default AdminTeam;