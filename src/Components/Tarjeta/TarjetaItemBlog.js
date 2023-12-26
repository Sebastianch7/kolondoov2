import React from 'react'
import { Col, Card, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'

export default function TarjetaItemBlog({ data }) {
    const { id, fecha_publicacion, visitas, categoria_id, hashtags, imagen_principal_escritorio, imagen_principal_movil, titulo, entradilla, url_amigable } = data
    
    return (
        <>
            <Col xs={12} md={6}>
                <Card className='m-2 tarjeta tarjeta-blog tarjeta-blog-blog  border-0'>
                    <Card.Img variant="top" className='img-fluid' src={`/img/blog/${isMobile ? 'mobile' : 'desktop'}/${imagen_principal_escritorio}`} alt={`/img/blog/${isMobile ? 'mobile' : 'desktop'}/${imagen_principal_escritorio}`}/>
                    <Card.Body className='bg-gray'>
                        <span>{fecha_publicacion}</span>
                        <Card.Title><b>{titulo}</b></Card.Title>
                        <Card.Text className='font-09'>
                        <span dangerouslySetInnerHTML={{ __html: `${entradilla}` }}></span>
                        <small className='font-09'>{hashtags?.replaceAll('[','').replaceAll(']','').replaceAll('"','').replaceAll(',',' ')}</small>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='bg-gray border-0 bg-white d-flex justify-content-between'>
                        <Link className='font-09' to={`/noticia/${url_amigable}`}>Ver más</Link>
                    </Card.Footer>
                </Card>
            </Col>
        </>
    )
}
