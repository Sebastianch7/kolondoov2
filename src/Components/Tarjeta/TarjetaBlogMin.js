import React from 'react';
import { Card, Col } from 'react-bootstrap';

function TarjetaBlogMin({ categorias, data }) {
    const { url_amigable, titulo } = data
    let ruta = '';
    switch (categorias.toLowerCase()) {
        case 'suministros':
            ruta = '/es-es/herramientas/suministros/';
            break;

            case 'oferta':
            ruta = '/es-es/blog/destacados/';
            break;
    }

    return (
        <Col xs={12} md={12}>
            <Card className='m-2 tarjeta tarjeta-blog tarjeta-blog-min'>
                <Card.Body>
                    <Card.Title><b className='font-09'>{categorias}</b></Card.Title>
                    <Card.Text className='font-09'>
                        {titulo}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='border-0 bg-white d-flex justify-content-between'>
                    <a className='font-09' href={`${ruta}${url_amigable}`}>Ver más</a>
                </Card.Footer>
            </Card>
        </Col>
    );
}

export default TarjetaBlogMin;