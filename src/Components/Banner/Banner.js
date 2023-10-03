import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ButtonPrimary from '../Button/ButtonPrimary';
import TitleSection from '../Text/TitleSection';

function Banner({ title = '', subtitle = '', buttons = false, children, image }) {
    return (
        <section className="clean-block p-0 mb-0">
            <Container>
                <div className="row justify-content-center align-items-center mt-0">
                    <Col sm={12} md={6}>
                        <Row>
                            <Col sm={12}>
                                <TitleSection
                                    title={title}
                                    subtitle={subtitle}
                                    buttons={buttons}
                                />
                            </Col>
                            <Col sm={12} md={11}>
                                {children}
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} md={5} className='d-none d-md-block'>
                        <div>
                            <img className='img-fluid img-banner' src={image} />
                        </div>
                    </Col>
                </div>
            </Container>
        </section >
    );
}

export default Banner;