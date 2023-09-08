import React from 'react';
import { Card, Col } from 'react-bootstrap';
function TarjetaBlogFull({ data }) {
    const { date, img, title, button, url, type, content } = data
    return (
        <Col md={4}>
            <Card className='tarjeta tarjeta-blog-max'>
                <Card.Img src={img} alt={img} />
                <Card.ImgOverlay>
                    <div className='info-card'>
                        <Card.Text>{date}</Card.Text>
                        <Card.Text>{title}</Card.Text>
                        <Card.Link href="#">{button}</Card.Link>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );
}

export default TarjetaBlogFull;