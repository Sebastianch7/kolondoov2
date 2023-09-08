import React from 'react';
import { Card, Col } from 'react-bootstrap';

function TarjetaBlogMin({ data }) {
    const { date, img, title, button, url, type, content } = data
    return (
        <Col md={12}>
            <Card className='tarjeta tarjeta-blog-min'>
                <Card.Body>
                    <Card.Text>{date}</Card.Text>
                    <Card.Text>{title}</Card.Text>
                    <Card.Text>{content}</Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link href="#">{button}</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default TarjetaBlogMin;