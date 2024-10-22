import React from 'react'
import { Row, Col } from 'react-bootstrap'
export default function ItemTarifaLuz({title, value, extension, destacada}) {
    return (
        <Row className={`d-flex my-2 ${destacada && 'border-secundary'}`}>
            <Col md={5}>{title}</Col>
            <Col md={7}><b>{value}</b>{extension}</Col>
        </Row>
    )
}
