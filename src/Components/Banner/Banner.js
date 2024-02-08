import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import TitleSection from '../Text/TitleSection';
import InterSection from '../Utils/InterSection';

function Banner({ title = '', subtitle = '', buttons = false, children, image, logo = '', logo2 = '' }) {
    return (
        <section className="clean-block p-0 mb-0">
            <Container>
                <div className="row justify-content-center banner align-items-center mt-0">
                    <Col sm={12} md={12} xl={7}>
                        <Row>
                            {logo !== '' && <Col md={4} className='d-flex mx-auto'>
                                {logo && <div className='banner-icon'><img src={logo} alt={logo} /></div>}
                                {logo2 && <div className='banner-icon'><img src={logo2} alt={logo2} /></div>}
                            </Col>}
                            <Col sm={12} className='text-center'>
                                <TitleSection
                                    title={title}
                                    subtitle={subtitle}
                                    buttons={buttons}
                                />
                            </Col>
                            <Col sm={12} md={10} className='mx-auto'>
                                {children}
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} md={5} className='d-none d-md-none d-xl-block'>
                        <div>
                            <img className='img-fluid img-banner' src={image} />
                        </div>
                    </Col>
                </div>
            </Container>
            <InterSection></InterSection>
        </section >
    );
}

export default Banner;