import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TarjetaBlogMin({ data }) {
    /* const { date = '', img = '', title = '', button = '', url = '', type = '', content = '' } = data */
    return (
        <Col xs={12} md={12}>
            <Card className='m-2 tarjeta tarjeta-blog tarjeta-blog-min'>
                <Card.Body>
                    <Card.Title><span>{'18 de mayo'}</span></Card.Title>
                    <Card.Title><b>{'Ofertas'}</b></Card.Title>
                    <Card.Text className='font-09'>
                        Las mejores ofertas móviles - Agosto 2023
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='border-0 bg-white d-flex justify-content-between'>
                    <Link className='font-09' to={'/'}>Ver más</Link>
                </Card.Footer>
            </Card>
        </Col>
    );
}

export default TarjetaBlogMin;