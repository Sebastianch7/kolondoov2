import React from 'react'
import { Row, Col } from 'react-bootstrap'
export default function ItemTarifaLuz({title, value, extension}) {
    return (
        <Row className='d-flex my-2'>
            <Col md={4}>{title}</Col>
            <Col md={8}><b>{value}</b>{extension}</Col>
        </Row>
    )
}
