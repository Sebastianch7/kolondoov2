import React from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ButtonPrimary from '../Button/ButtonPrimary';

function TarjetaProducto({ data, media = 3, large }) {
    const { icon, title, list = null, button, text, } = data
    return (

        <Card className={`tarjeta tarjeta-producto m-1`}>
            <Card.Body className='card-icon'>
                <img src={icon} alt={icon} />
            </Card.Body>
            <Card.Title>
                <h6>{title}</h6>
            </Card.Title>
            <Card.Body className='p-0'>
                {list && <ul>
                    {
                        list?.map((item, index) => {
                            return <li key={index}>{item.item}</li>
                        })
                    }
                </ul>}
                {text &&
                    <p className='font-09'>{text}</p>
                }
            </Card.Body>
            {button && <Card.Body>
                <ButtonPrimary text={button} />
            </Card.Body>}
        </Card>

    );
}

export default TarjetaProducto;
