import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import AcordionItem from '../Acordion/AcordionItem';
import Accordion from 'react-bootstrap/Accordion';
import TitleSection from '../Text/TitleSection';
import CardGroup from 'react-bootstrap/CardGroup';


function ContenedorTarjeta({ children, media, title, subtitle, fluid, cols = 12 }) {
    return (
        <>
            {title && <Col sm={12} md={6} className='text-center mx-auto'>
                <TitleSection
                    title={title}
                    subtitle={subtitle}
                />
            </Col>}
            <Container fluid={false} className='container-tarjeta'>
                <Row className='mx-auto justify-content-center'>
                    <Col lg={cols}>
                        {!isMobile ?
                            <CardGroup>
                                {children}
                            </CardGroup>
                            :
                            <Accordion defaultActiveKey="0">
                                {children}
                            </Accordion>
                        }
                    </Col>
                </Row >
            </Container >
        </>
    );
}

export default ContenedorTarjeta;