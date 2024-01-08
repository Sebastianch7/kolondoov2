import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';
function TarjetaBlogFull({ data }) {
    const { fecha_publicacion, imagen_principal_escritorio, titulo, button, url_amigable } = data
    return (
        <Col className='mx-3'>
            <Card className='tarjeta tarjeta-blog'>
                <Card.Img src={`/img/blog/${isMobile ? 'mobile' : 'desktop'}/${imagen_principal_escritorio}`} alt={`/img/blog/${isMobile ? 'mobile' : 'desktop'}/${imagen_principal_escritorio}`} />
                <Card.ImgOverlay>
                    <div className='info-card p-3'>
                        <span>{fecha_publicacion}</span>
                        <p><Link to={`blog/${url_amigable}`}>{titulo}</Link></p>
                        <Link to={`blog/${url_amigable}`}>ver más</Link>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );
}

export default TarjetaBlogFull;