import React from 'react'
import Header from '../Components/Header/Header'
import { Container, Row, Col } from 'react-bootstrap'
import Load from '../Components/Utils/Load'

export default function PageNotFound() {
    return (
        <>
            <Header></Header>
            <Container>
                <Row>
                    <Col xs={12}>
                        <Load></Load>
                    </Col>
                    <Col xs={12} className='text-center'>
                        <h1>404</h1>
                        <h2>Pagina no encontrada</h2>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
