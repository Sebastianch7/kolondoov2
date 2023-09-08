import React from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';

function ContenedorTarjeta({ children }) {
    return (
        <section>
            <Container className='container-tarjeta'>
                <Row>
                    <Col lg={12}>
                        <Row className="justify-content-center mx-auto container-tarjeta-producto">
                            {children}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default ContenedorTarjeta;