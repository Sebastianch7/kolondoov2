import React from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import TitleSection from '../Text/TitleSection';
import CardGroup from 'react-bootstrap/CardGroup';


function ContenedorTarjeta({ children, media, title, subtitle, fluid, cols = 12 }) {
    return (
        <Container>
            {title && <Col sm={12} md={6} className='text-center mx-auto'>
                <TitleSection
                    title={title}
                    subtitle={subtitle}
                />
            </Col>}
            
                <Row className='mx-auto justify-content-center'>
                    <Col lg={!isMobile ? cols : 12}>
                        {!isMobile ?
                            <CardGroup>
                                {children}
                            </CardGroup>
                            :
                            <Stack gap={3} className='my-4 stack'>
                                {children}
                            </Stack>
                        }
                    </Col>
                </Row >
            
        </Container>
    );
}

export default ContenedorTarjeta;