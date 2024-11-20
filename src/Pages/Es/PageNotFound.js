import React from 'react'
import Header from '../../Components/Header/Header'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MetaData from '../../Components/Header/SeoMetadata';

export default function PageNotFound() {
    return (
        <>
            <MetaData titulo={''} descripcion={''} />
            <Header></Header>
            <Container className='mt-5'>
                <Row className='mt-5 justify-content-center'>
                    <Col xs={12} md={6}>
                        <Col xs={12} className='text-left'>
                            <h1 className='title-404'>404</h1>
                            <h2>Página no encontrada</h2>
                            <h4>No podemos encontrar la página solicitada.</h4>
                            <Link className='btn btn-primary mt-5' to={'/'}>Volver a vuskoo</Link>
                        </Col>
                    </Col>
                    <Col xs={12} md={4} className='d-none d-md-block'>
                        <img className='img-fluid' src='/img/404.png' alt='imagen error 404' />
                    </Col>

                </Row>
            </Container>
        </>
    )
}
