import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TarjetaItemBlog from '../Tarjeta/TarjetaItemBlog'
import ContenedorDestacados from '../Blog/ContenedorDestacados'

export default function ContenedorBlog() {
    return (
        <Container className='my-4'>
            <Row>
                <Col xs={12} md={8}>
                    <Row>
                        <TarjetaItemBlog />
                        <TarjetaItemBlog />
                        <TarjetaItemBlog />
                        <TarjetaItemBlog />
                    </Row>
                </Col>
                <ContenedorDestacados />
            </Row>
        </Container>
    )
}
