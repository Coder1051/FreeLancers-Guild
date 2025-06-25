import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import './css/blog.css';

const Blog = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [visibleBlogs, setVisibleBlogs] = useState([]);
    const blogRefs = useRef([]);

    // JSON Blog Data
    const blogData = [
        {
            id: 1,
            title: "The Freelance Revolution: Why Pakistan's Youth is Choosing Independence",
            excerpt: "Pakistan's freelance sector is exploding at 47% annually. Discover how students are bypassing traditional careers to build empires from dorm rooms. Your independence starts here.....",
            content: [
                "Every year, thousands of students graduate with high hopes of starting their careers, but many quickly realize that academic knowledge alone isn't enough. In fact, more than half of fresh graduates feel unprepared for real-world work. This lack of preparedness isn't due to a shortage of talent, but because traditional education often doesn't equip students with the practical experience and industry exposure they truly need. Most students enter the workforce without ever dealing with real clients, managing timelines, or negotiating project scopes — critical skills for success in today's fast-paced digital economy.",

                "Freelancers Guild (FLG) is solving this problem by creating a space where students can develop professionally while still studying. At FLG, students are introduced to real-world projects under mentor supervision. This gives them the freedom to make mistakes, learn from them, and improve — without the fear of messing up on a big job. They're also able to earn money while learning through a structured system that offers paid project opportunities matched to their skill level. This not only boosts confidence but helps them build a portfolio they can proudly showcase to future clients or employers.",

                "The environment is collaborative and supportive, with hundreds of students across Lahore sharing ideas, resources, and motivation. Through this community, students don't feel like they're learning alone — they grow together. Many even complete graduation with a solid portfolio and real earning history, far ahead of their peers.",

                "A great example is Khubaib Meo, a computer science student at LUMS, who earned over Rs. 150,000 from FLG web development projects in her final year. She says FLG helped her learn how to communicate with clients, manage expectations, and deliver confidently — things that no classroom ever taught her.",

                "In a world that's changing fast, the students who thrive are the ones who take action early. FLG is helping build that mindset, one student at a time. If you're serious about your future and want to start building it now, FLG is your chance to begin."
            ],
            image: "./images/blog6.jpg",
            author: "Arham Ibrahim",
            date: "2025-06-15",
            category: "The Freelance Revolution",
            readTime: "5 min read",
            tags: ["Youth Empowerment", "Career Independence", "Freelance Economy", "Skills Monetization", "Student Success Stories"]
        },
        {
            id: 2,
            title: "Top 5 Marketable Skills You Can Master in 3 Months",
            excerpt: "Transform your income in 90 days: AI, video editing, and digital marketing secrets that pay up to ₹80k/project. No degree required – just actionable strategies...",
            content: [
                "In today's fast-paced digital economy, the ability to acquire new skills quickly can be the difference between staying ahead or falling behind. While traditional education takes years to complete, there are specific high-demand skills that can be mastered in just 3 months, opening doors to substantial earning opportunities. At Freelancers Guild, we've identified the top 5 marketable skills that not only have incredible earning potential but also boast exceptional success rates among our students.",

                "Leading the pack is AI Prompt Engineering, a cutting-edge skill that commands between Rs 25,000 to Rs 80,000 per project, with an impressive 92% placement rate among FLG graduates. Video Editing follows closely, offering Rs 15,000 to Rs 60,000 per project with an 87% placement success rate. Digital Marketing rounds out the top skills, providing stable retainer opportunities starting at Rs 20,000+ monthly with an 85% placement rate. These aren't just numbers on paper – they represent real earning potential that our students are achieving every month.",

                "What sets FLG apart is our Accelerated Learning Framework, designed specifically for rapid skill acquisition and immediate application. Our project-based curriculum ensures students learn by doing real client work from day one, not just theoretical concepts. We provide access to premium industry tools that would otherwise cost thousands, and every student receives weekly one-on-one mentoring sessions for personalized feedback and guidance. Most importantly, we guarantee 3 client projects during the course, ensuring students graduate with a portfolio that showcases real-world experience.",

                "The results speak for themselves through our student success stories. Hassan T., a BZU graduate, perfectly captures the FLG experience: 'FLG's video editing course taught me more in 12 weeks than my 2-year diploma. I landed my first international client before course completion!' This isn't an isolated case – it's the standard outcome we've come to expect from our intensive, results-driven approach to skill development.",

                "The opportunity cost of waiting is higher than ever. While others spend years in traditional programs, FLG students are earning, learning, and building their freelance careers in just 3 months. Our July cohort is filling fast, and seats are limited to maintain the quality of mentorship and attention each student receives. Stop waiting for opportunities to come to you – create them. Your future self will thank you for taking action today."
            ],
            image: "./images/blog4.jpg",
            author: "Arham Ibrahim",
            date: "2025-06-12",
            category: "Top 5 Marketable Skills in 3 Months",
            readTime: "7 min read",
            tags: ["AI", "Machine Learning", "Business"]
        },
        {
            id: 3,
            title: "Client Confidential: What Businesses Really Want from Freelancers",
            excerpt: "94% of clients prioritize THIS over technical skills. Unlock the hidden expectations businesses won't tell you – straight from 500+ corporate projects...",
            content: [
                "Behind every successful freelancer lies a deep understanding of what clients truly value. Having worked with leading companies like BloomBae and HighTech Networks, we've gained unprecedented insights into the corporate mindset and what separates amateur freelancers from industry professionals. The reality is that most freelancers focus on technical skills while completely missing the business fundamentals that clients actually care about. Understanding these expectations isn't just helpful – it's the difference between struggling for projects and having clients compete for your services.",

                "Through extensive client research and feedback analysis, we've identified the top expectations that drive hiring decisions. Communication discipline tops the list, with 94% of clients valuing responsiveness over perfection – they'd rather work with someone who keeps them informed than someone who disappears for weeks to deliver flawless work. Process transparency follows closely, as milestone tracking consistently beats final deliverables in client satisfaction surveys. Clients want to see progress, understand challenges, and feel involved in the journey. Additionally, successful freelancers adopt a solution mindset, recognizing that clients pay for problems solved, not hours worked. Finally, cultural alignment and understanding brand voice has become non-negotiable in today's competitive marketplace.",

                "Recognizing these gaps in traditional freelancer preparation, FLG has developed comprehensive training that goes far beyond technical skills. Our Client Simulation Labs provide hands-on practice with real corporate briefs, allowing students to experience authentic client interactions before entering the marketplace. Negotiation Workshops teach the art of value-based pricing, helping freelancers command premium rates by demonstrating ROI rather than competing on cost. Professional Etiquette training covers the nuances of business communication, from email tone to meeting protocols. Perhaps most importantly, our Contract Literacy program ensures freelancers understand legal protections and can confidently navigate complex client agreements.",

                "The results of this comprehensive approach are evident in client feedback and retention rates. Sarah K., CMO at Gearup International, perfectly captures the market response: 'FLG freelancers stand out because they understand commercial realities. Their structured approach reduces management overhead by 40%.' This isn't just a testimonial – it's validation of our methodology. When clients can trust freelancers to operate at a business level, projects become partnerships, leading to higher rates, longer relationships, and consistent referrals.",

                "Success in freelancing isn't about being the most talented person in the room – it's about being the most prepared and professional. The gap between where most freelancers are and where clients need them to be represents a massive opportunity for those willing to invest in proper preparation. To help you assess your current readiness, we've developed a comprehensive 'Client Readiness Checklist' that audits your professional preparedness across all critical areas. Download it today and discover exactly what stands between you and premium client relationships."
            ],
            image: "./images/blog2.jpg",
            author: "Arham Ibrahim",
            date: "2025-07-10",
            category: "Client Confidential",
            readTime: "6 min read",
            tags: ["Marketing", "SEO", "Social Media"]
        },
        {
            id: 4,
            title: "Financial Freedom Blueprint: How Lahore's Students Are Earning RS 50k/Month",
            excerpt: "From hostel rooms to ₹50k/month: The exact models Lahore's students use to pay tuition fees. See real earnings breakdowns and tools you can steal...",
            content: [
                "Financial independence isn't just a dream for students in Lahore – it's becoming a reality through strategic freelancing. While their peers struggle with traditional part-time jobs earning minimal wages, a growing community of student freelancers is consistently generating Rs 50,000+ monthly through smart service positioning and market understanding. This isn't about working more hours; it's about working smarter and leveraging proven income generation models that maximize earning potential while maintaining academic commitments.",

                "The secret lies in understanding diverse income generation models that can be scaled based on skill level and time availability. Tiered Service Packages form the foundation, allowing students to start with Rs 5,000 micro-tasks and gradually build toward Rs 50,000 premium solutions as expertise grows. Retainer Magic represents the holy grail of freelancing stability – three of our students have successfully secured Rs 120,000 monthly retainers by positioning themselves as essential business partners rather than project-based contractors. International Arbitrage amplifies earning potential by targeting clients who pay in USD while maintaining local PKR living costs, effectively multiplying purchasing power. Finally, Skill Stacking enables students to combine complementary services, commanding premium rates by offering comprehensive solutions rather than isolated tasks.",

                "Real earnings data from our active students demonstrates the practical viability of these models. Social Media Management, requiring just 10 hours per week, consistently generates Rs 25,000 monthly for students who master platform algorithms and content strategy. AI Content Creation represents an even more lucrative opportunity, with students earning Rs 42,000 monthly through just 15 hours of weekly commitment. These aren't outlier cases – they represent standard outcomes for students who complete our structured training and apply the methodologies systematically.",

                "Success in student freelancing requires more than just skills; it demands proper tools and systems. FLG's Client Portal provides access to pre-vetted projects, eliminating the time typically wasted on unreliable clients or poorly defined scopes. Our Payment Protection System ensures students receive compensation promptly and securely, while Collaborative Workspaces facilitate seamless project management and communication. Perhaps most importantly, our Financial Literacy Workshops teach students how to manage irregular income, set aside taxes, and build long-term wealth from freelancing profits.",

                "The transformation stories emerging from our student community validate the effectiveness of this comprehensive approach. CS student Ali J. exemplifies the potential, having paid his entire semester fees through FLG app development projects. 'The guild's escrow system ensured I got paid promptly while focusing on deliverables,' he explains, highlighting how proper systems eliminate common freelancing frustrations. His success isn't unique – it's replicable for any student willing to invest in proper preparation and systematic implementation. Ready to start your own financial freedom journey? Join our Freelance Finance webinar this Thursday to learn pricing strategies that can transform your earning potential."
            ],
            image: "./images/blog5.webp",
            author: "Arham Ibrahim",
            date: "2025-06-08",
            category: "Financial Freedom Blueprint",
            readTime: "8 min read",
            tags: ["Cloud", "Infrastructure", "DevOps"]
        },
        {
            id: 5,
            title: "The Portfolio Power Play: How to Showcase Skills Without Experience",
            excerpt: "Zero experience? Win clients anyway. How FLG members land retainers with fictional projects and Pro-bono work. (Includes the 'Brand Makeover Mondays' strategy)...",
            content: [
                "The greatest challenge facing new freelancers isn't lack of talent – it's the impossible catch-22 of needing experience to get work, but needing work to gain experience. Traditional portfolio advice falls flat when you're starting from scratch, leaving talented individuals frustrated and clients skeptical. However, the most successful freelancers have cracked this code by understanding that portfolios aren't about showing what you've done for previous clients; they're about demonstrating what you can do for future ones. The key lies in strategic portfolio construction that showcases capability, creativity, and problem-solving skills regardless of formal work history.",

                "Our comprehensive Portfolio Framework addresses this challenge through four proven strategies that build credibility from day one. The Spec Work Strategy involves redesigning existing brands with fully documented processes, allowing newcomers to demonstrate professional thinking and execution standards. Pro Bono Power leverages strategic charity projects that create measurable impact while building genuine testimonials and case studies. Conceptual Projects tackle hypothetical industry problems, showing potential clients how you approach real-world challenges they face daily. Finally, Skill Demonstrations through micro-projects provide focused showcases of specific abilities, making it easy for clients to understand exactly what you bring to their projects.",

                "Recognizing that execution quality separates amateur portfolios from professional presentations, FLG's Portfolio Lab provides the infrastructure and guidance needed for portfolio excellence. Our Industry-Standard Templates ensure presentations meet professional expectations from day one, while Before/After Storytelling Techniques help freelancers articulate their problem-solving process compellingly. Metrics-Driven Results Presentation teaches students how to quantify impact and communicate value in business terms that resonate with decision-makers. Client Testimonial Integration strategies help students gather and present social proof effectively, even from pro bono and conceptual work.",

                "The results speak for themselves through client feedback and hiring decisions. A tech startup founder perfectly captures the market response: 'We hired an FLG designer solely based on their reimagined UX for our app. The problem-solving approach outweighed their lack of formal experience.' This testimonial illustrates a crucial truth – clients care more about demonstrated capability than extensive résumés. When portfolios effectively communicate strategic thinking, creative execution, and results orientation, experience becomes secondary to proven potential.",

                "Real student success stories validate this portfolio-first approach to freelance career building. Graphic design student Aisha created 'Brand Makeover Mondays' – a series of eight fictional brand transformations that showcased her design thinking process and execution skills. Each makeover included detailed strategy rationale, visual execution, and projected business impact metrics. The series was so compelling that it landed her three retainer clients before she graduated, proving that strategic portfolio development can accelerate career timelines dramatically. Her success demonstrates that when you can't show what you've done, you can absolutely show what you can do. Ready to build a portfolio that opens doors? Start with strategy, focus on problem-solving, and let your potential speak louder than your past."
            ],
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
            author: "Arham Ibrahim",
            date: "2025-07-05",
            category: "Portfolio Power Play",
            readTime: "9 min read",
            tags: ["Security", "Remote Work", "Privacy"]
        },
        {
            id: 6,
            title: "The Future of Work: Why Hybrid Skills Are Your Career Insurance",
            excerpt: "AI-proof your career: Hybrid-skill professionals earn 47% more. Become 'T-shaped' and dominate the 2027 job market with these 4 powerful combinations...",
            content: [
                "The traditional career model of deep specialization in a single field is rapidly becoming obsolete. As automation handles routine tasks and AI transforms entire industries, the professionals who thrive are those who combine multiple skill sets to create unique value propositions. Hybrid skills aren't just a competitive advantage anymore – they're career insurance against an uncertain future. The ability to bridge different disciplines, speak multiple professional languages, and adapt to evolving market demands has become the defining characteristic of recession-proof careers in the modern economy.",

                "The most lucrative opportunities are emerging at the intersection of traditionally separate fields, creating high-value hybrid combinations that command premium rates. Design combined with Psychology creates UX/UI specialists who understand both aesthetic principles and human behavior, making them invaluable for digital product development. Writing paired with SEO expertise produces content strategists who can create compelling narratives that also drive organic traffic and business results. Development skills merged with Marketing knowledge creates growth hackers who can build and optimize systems that directly impact revenue. Video production combined with Analytics expertise produces performance media experts who create content that not only engages but also delivers measurable business outcomes.",

                "Recognizing this shift toward interdisciplinary expertise, FLG has restructured our training approach to develop these crucial hybrid capabilities. Our Cross-Disciplinary Projects allow students to work across different departments, gaining exposure to diverse perspectives and methodologies. A robust Mentor Network of 30+ industry experts provides guidance from professionals who have successfully navigated these hybrid career paths. Our Emerging Tech Labs focus specifically on AI tools mastery, ensuring students stay ahead of technological disruption rather than becoming victims of it. Industry-recognized Skill Certification programs validate these combined competencies, giving freelancers credible proof of their multidisciplinary expertise.",

                "Industry forecasts validate this strategic focus on hybrid skill development, with research indicating that by 2027, 79% of high-value freelance work will require combined technical and soft skills. The most sought-after professionals will be 'T-shaped' – possessing deep expertise in one core area while maintaining broad competency across multiple disciplines. This prediction isn't speculative; it's already manifesting in current hiring patterns where clients increasingly seek professionals who can handle complex, multifaceted projects without requiring extensive team coordination or management overhead.",

                "Building a hybrid skill portfolio requires strategic planning and systematic execution across four key phases. Core Specialization forms the foundation – mastering one high-demand skill that serves as your primary value driver and market differentiator. Complementary Skills development involves adding adjacent capabilities that naturally enhance your core expertise and expand project scope potential. Business Acumen development teaches client management, project scoping, and commercial understanding that transforms technical skills into business solutions. Finally, Personal Branding establishes your reputation and market position within your chosen hybrid niche, making you the go-to professional for specific types of complex challenges. The future belongs to professionals who can think broadly while executing deeply – start building your hybrid advantage today."
            ],
            image: "./images/blog1.jpg",
            author: "Arham Ibrahim",
            date: "2025-07-03",
            category: "Future of Work",
            readTime: "7 min read",
            tags: ["Career Growth", "Skills Development", "Future of Work"]
        }
    ];

    // Intersection Observer for animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const blogId = parseInt(entry.target.dataset.blogId);
                        if (!visibleBlogs.includes(blogId)) {
                            setVisibleBlogs(prev => [...prev, blogId]);
                        }
                    }
                });
            },
            { threshold: 0.1, rootMargin: '50px' }
        );

        blogRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, [blogData, visibleBlogs]);

    const handleShowMore = (blog) => {
        setSelectedBlog(blog);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedBlog(null);
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="blog-page">
            <div className="blog-container">
                {/* Hero Section */}
                <section className="blog-hero">

                    <div className="hero-content">
                        <h1 className="hero-title">
                            Our <span className="highlightss">Blog</span>
                        </h1>
                        <div className="hero-divider"></div>
                        <p className="hero-subtitle">
                            Insights, trends, and expert knowledge from industry leaders
                        </p>
                    </div>

                </section>

                {/* Blog Grid */}
                <section className="blog-grid-section">
                    <Container>
                        <Row className="g-4">
                            {blogData.map((blog, index) => (
                                <Col lg={4} md={6} sm={12} key={blog.id}>
                                    <article
                                        className={`blog-card ${visibleBlogs.includes(blog.id) ? 'animate-in' : ''}`}
                                        ref={el => blogRefs.current[index] = el}
                                        data-blog-id={blog.id}
                                        style={{ animationDelay: `${(index % 3) * 0.2}s` }}
                                    >
                                        <div className="blog-card-inner">
                                            {/* Blog Image */}
                                            <div className="blog-image-container">
                                                <img
                                                    src={blog.image}
                                                    alt={blog.title}
                                                    className="blog-image"
                                                    loading="lazy"
                                                />
                                                <div className="blog-overlay">
                                                    <div className="blog-category">{blog.category}</div>
                                                </div>
                                            </div>

                                            {/* Blog Content */}
                                            <div className="blog-content">
                                                {/* Date and Time */}
                                                {/* <div className="blog-meta">
                                                    <span className="blog-date">{formatDate(blog.date)}</span>
                                                    <span className="blog-read-time">{blog.readTime}</span>
                                                </div> */}

                                                <h3 className="blog-title">{blog.title}</h3>
                                                <p className="blog-excerpt">{blog.excerpt}</p>

                                                <div className="blog-tags">
                                                    {blog.tags.map((tag, tagIndex) => (
                                                        <span key={tagIndex} className="blog-tag">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="blog-footer">
                                                    <div className="blog-author">
                                                        <div className="author-avatar">
                                                            {blog.author.split(' ').map(n => n[0]).join('')}
                                                        </div>
                                                        <span className="author-name">{blog.author}</span>
                                                    </div>

                                                    <Button
                                                        className="btn-read-more"
                                                        onClick={() => handleShowMore(blog)}
                                                    >
                                                        Read More
                                                        <i className="fas fa-arrow-right ml-2"></i>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
            </div>

            {/* Blog Modal */}
            <Modal
                show={showModal}
                onHide={handleCloseModal}
                size="lg"
                className="blog-modal"
                centered
            >
                <Modal.Header closeButton className="border-0">
                    <div className="modal-header-content">
                        {selectedBlog && (
                            <>
                                <div className="modal-category">{selectedBlog.category}</div>
                                <div className="modal-meta">
                                    <span>{formatDate(selectedBlog.date)}</span>
                                    <span>•</span>
                                    <span>{selectedBlog.readTime}</span>
                                </div>
                            </>
                        )}
                    </div>
                </Modal.Header>

                <Modal.Body className="p-0">
                    {selectedBlog && (
                        <div className="modal-blog-content">
                            <img
                                src={selectedBlog.image}
                                alt={selectedBlog.title}
                                className="modal-blog-image"
                            />

                            <div className="modal-content-wrapper">
                                <h2 className="modal-blog-title">{selectedBlog.title}</h2>

                                <div className="modal-author-info">
                                    <div className="author-avatar large">
                                        {selectedBlog.author.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div className="author-details">
                                        <div className="author-name">{selectedBlog.author}</div>
                                        <div className="author-role">Content Writer</div>
                                    </div>
                                </div>

                                <div className="modal-blog-tags">
                                    {selectedBlog.tags.map((tag, index) => (
                                        <span key={index} className="modal-blog-tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="modal-blog-text">
                                    {selectedBlog.content.map((paragraph, index) => (
                                        <p key={index} className="content-paragraph">{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Blog;