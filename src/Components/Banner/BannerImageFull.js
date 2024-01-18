import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import TitleSection from '../Text/TitleSection';
import InterSection from '../Utils/InterSection';
import { isMobile } from 'react-device-detect';

function BannerImageFull({ title = '', text1 = '', text2 = '', buttons = false, children, image, logo = '', logo2 = '', imgFluid = false }) {
    return (
        <section className="clean-block">
            <Container fluid>
                <div className="row banner-full align-items-center mt-md-3">
                    <Col sm={12} md={{ span: 5, offset: 1 }} xxl={{ span: 5, offset: 1 }}>
                        <Row>
                            <Col sm={12} className='text-left'>
                                {!children ?
                                    <TitleSection
                                        title={title}
                                        text1={text1}
                                        text2={text2}
                                        buttons={buttons}
                                        btnLeft
                                    />
                                    :
                                    children}
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} md={6} className='d-none d-md-block'>
                        <div>
                            <img className={imgFluid && 'img-fluid'} src={image} alt={image} />
                        </div>
                    </Col>
                </div>
            </Container>
            {!isMobile && <InterSection></InterSection>}
        </section >
    );
}

export default BannerImageFull;