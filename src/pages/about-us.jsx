// about.jsx
import { 
  Code, 
  Brain, 
  PenTool, 
  Palette, 
  ShoppingBag, 
  Video, 
  Users, 
  Target,
  Award
} from 'lucide-react';
import './css/about.css';

const About = () => {
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
    }
  ];

  const stats = [
    { icon: Users, number: '5,000+', label: 'Active Students' },
    { icon: Target, number: '95%', label: 'Success Rate' },
    { icon: Award, number: '50+', label: 'Expert Courses' }
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title mt-5">Freelancers Guild</h1>
            <p className="hero-description">
              Freelancers Guild have an art to design and manage excellent digital marketing campaigns in measurable and cost-effective 
              manner. We are proficient in approaching the right customers at right time in more efficient way
            </p> 
            <div className="hero-divider"></div>
            
            {/* Stats Section */}
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-icon">
                    <stat.icon size={24} />
                  </div>
                  <div className="stat-content">
                    <span className="stat-number">{stat.number}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
 

    </div>
  );
};

export default About;