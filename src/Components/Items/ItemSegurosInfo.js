import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function ItemSegurosInfo({icon, content}) {
    return (
        <Col xs={12} md={4} className='text-left align-items-center mb-5 mb-md-0'>
            <Row style={{'height':'150px'}}>
                <Col md={4} className='d-flex align-items-center justify-content-center icon-seguro'><img src={icon} /></Col>
                <Col md={8} className='border-seguros'>{content}</Col>
            </Row>
        </Col>
    )
}
