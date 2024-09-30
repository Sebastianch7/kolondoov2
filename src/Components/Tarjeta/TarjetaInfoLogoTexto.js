import React from 'react'
import { Card, Col } from 'react-bootstrap'

export default function TarjetaInfoLogoTexto({icono, contenido}) {
    return (
        <Col md={4} className='my-2'>
            <Card className='tarjeta-info-logo-texto'>
                <Card.Body className='p-4'>
                    <img className='tarjeta-info-logo-texto-img pb-4' src={icono} />
                    <p dangerouslySetInnerHTML={{ __html: contenido }}></p>
                </Card.Body>
            </Card>
        </Col>
    )
}
