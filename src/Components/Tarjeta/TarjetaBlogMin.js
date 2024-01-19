import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TarjetaBlogMin({ data }) {
    const { blog_item_url_amigable, categoria_url, categoria, atributo_imagen_principal, titulo, cat_categoria, id, fecha_publicacion } = data
    return (
        <Col xs={12} md={12}>
            <Card className='m-2 tarjeta tarjeta-blog tarjeta-blog-min'>
                <Card.Body>
                    <Card.Title><b className='font-09'>{'Ofertas'}</b></Card.Title>
                    <Card.Text className='font-09'>
                        {titulo}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='border-0 bg-white d-flex justify-content-between'>
                    <a className='font-09' href={`/es-es/blog/destacados/${blog_item_url_amigable}`}>Ver más</a>
                </Card.Footer>
            </Card>
        </Col>
    );
}

export default TarjetaBlogMin;