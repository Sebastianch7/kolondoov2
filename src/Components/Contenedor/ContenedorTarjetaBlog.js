import React from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import ButtonPrimary from '../Button/ButtonPrimary';
import InterSection from '../Utils/InterSection';

function ContenedorTarjetaBlog({ children }) {
    return (
        <section>
            <Container fluid className='container-tarjeta-blog'>
                <Row>
                    <Col md={10} className='mx-auto'>
                        <Row className="align-items-center justify-content-center">
                            {children}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default ContenedorTarjetaBlog;