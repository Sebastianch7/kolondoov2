import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TarjetaItemBlog from '../Tarjeta/TarjetaItemBlog'
import TarjetaBlogMin from '../Tarjeta/TarjetaBlogMin'

export default function ContenedorBlog() {
    return (
        <Container className='mb-5'>
            <Row>
                <Col xs={12} md={8}>
                    <Row>
                        <TarjetaItemBlog />
                        <TarjetaItemBlog />
                        <TarjetaItemBlog />
                        <TarjetaItemBlog />
                    </Row>
                </Col>
                <Col xs={12} md={4}>
                    <TarjetaBlogMin />
                </Col>
            </Row>
        </Container>
    )
}
