import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import TitleSection from '../Text/TitleSection';

function BannerReverse({ title = '', subtitle = '', buttons = false, children, image }) {
    return (
        <section className="clean-block about-us p-0 mb-0">
            <Container>
                <div className="row justify-content-center align-items-center mt-0">
                    <Col sm={12} md={5} className='d-none d-md-block'>
                        <div>
                            <img className='img-fluid' src={image} />
                        </div>
                    </Col>
                    <Col sm={12} md={5}>
                        <Row>
                            <Col sm={12} md={12}>
                                <TitleSection
                                    title={title}
                                    subtitle={subtitle}
                                    buttons={buttons}
                                />
                            </Col>
                            <Col sm={12} md={12}>
                                {children}
                            </Col>
                        </Row>
                    </Col>
                </div>
            </Container>
        </section >
    );
}

export default BannerReverse;