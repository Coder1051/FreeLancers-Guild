import React from 'react'
import '../pages/css/home.css'

import { Col, Row } from 'react-bootstrap';
const Community = () => {
  return (
    <div>
        <section className='community-partners-section'>
                <div className='container'>
                    <div className='partners-header text-center mb-5'>
                        <h1 className='partners-title'>Our Collaborators and Clients</h1>
                        <div className='partners-divider'></div>
                        <p className='partners-subtitle'>Trusted collaborations that drive innovation and excellence</p>
                    </div>

                    <Row className='partners-grid g-4'>
                        <Col md={4} className='partner-col'>
                            <div className='partner-card'>
                                <div className='partner-image-wrapper'>
                                    <img src="./images/technoverse.jpeg" alt="Techno Verse" className='partner-image' />
                                    <div className='image-overlay'>
                                        <div className='overlay-content'>
                                            <i className="fas fa-external-link-alt"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className='partner-info'>
                                    <h4 className='partner-name'>Techno Verse</h4>
                                    <p className='partner-descriptions'>Innovation & Technology Solutions</p>
                                    <div className='partner-badge'>Strategic Partner</div>
                                </div>
                            </div>
                        </Col>

                        <Col md={4} className='partner-col'>
                            <div className='partner-card'>
                                <div className='partner-image-wrapper'>
                                    <img src="./images/bloombea.jpeg" alt="Bloombea" className='partner-image' />
                                    <div className='image-overlay'>
                                        <div className='overlay-content'>
                                            <i className="fas fa-external-link-alt"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className='partner-info'>
                                    <h4 className='partner-name'>Bloombea</h4>
                                    <p className='partner-descriptions'>Creative Design & Branding</p>
                                    <div className='partner-badge'>Premium Partner</div>
                                </div>
                            </div>
                        </Col>

                        <Col md={4} className='partner-col'>
                            <div className='partner-card'>
                                <div className='partner-image-wrapper'>
                                    <img src="./images/softecnu.jpeg" alt="Softec" className='partner-image' />
                                    <div className='image-overlay'>
                                        <div className='overlay-content'>
                                            <i className="fas fa-external-link-alt"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className='partner-info'>
                                    <h4 className='partner-name'>Softec_Nu</h4>
                                    <p className='partner-descriptions'>Software Development Excellence</p>
                                    <div className='partner-badge'>Gold Partner</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

    </div>
  )
}

export default Community
