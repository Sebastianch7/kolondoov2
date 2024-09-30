import React from 'react'
import { Row, Col } from 'react-bootstrap'

export default function ItemImagenRedonda({ titulo, imagen }) {
    return (
        <Row className='text-center mx-1 p-2'>
            <Col xs={12} className='text-bold'>{titulo}</Col>
            <Col xs={12}>
                <img className='card-banner-seguros-img' src={imagen} ></img>
            </Col>
        </Row>
    )
}

