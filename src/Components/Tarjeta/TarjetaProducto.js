import React from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ButtonPrimary from '../Button/ButtonPrimary';

function TarjetaProducto({ data }) {
    const { icon, title, text, button } = data
    return (
        <Col sm={12} md={3} className=''>
            <Card className='tarjeta tarjeta-producto'>
                <Card.Body className='card-icon'>
                    <img src={icon} alt={icon} />
                </Card.Body>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
                <Card.Body className='py-0'>
                    <ul>
                        {
                            text.map((item, index) => {
                                return <li key={index}>{item.item}</li>
                            })
                        }
                    </ul>
                </Card.Body>
                {button && <Card.Body>
                    <ButtonPrimary text={button} />
                </Card.Body>}
            </Card>
        </Col>
    );
}

export default TarjetaProducto;
