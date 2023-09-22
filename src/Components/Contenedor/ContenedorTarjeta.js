import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import AcordionItem from '../Acordion/AcordionItem';
import Accordion from 'react-bootstrap/Accordion';


function ContenedorTarjeta({ children }) {
    return (
        <section>
            <Container className='container-tarjeta'>
                <Row>
                    <Col lg={12}>
                        {!isMobile ?
                            <Row className="justify-content-center mx-auto container-tarjeta-producto">
                                {children}
                            </Row> :
                            <Accordion defaultActiveKey="0">
                                {children}
                            </Accordion>
                            }
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default ContenedorTarjeta;