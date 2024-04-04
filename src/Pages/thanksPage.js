import React from 'react'
import Header from '../Components/Header/Header'
import { Container, Row, Col } from 'react-bootstrap'
import Load from '../Components/Utils/Load'
import { Link } from 'react-router-dom'
import InterSection from '../Components/Utils/InterSection'
import MetaData from '../Components/Header/SeoMetadata';

export default function ThanksPage() {
    return (
        <>
            <Header></Header>
            <Container className='mt-5'>
                <Row className='mt-5 justify-content-center'>
                    <Col xs={12} md={6}>
                        <Col xs={12} className='text-left'>
                            <h1 className='color-primary mb-5'>¡Muchas gracias por contactar!</h1>
                            <h5>En breve uno de nuestros agentes se pondrá en contacto contigo para ofrecerte nuestros mejores productos.</h5>
                            <h5>Gracias por confiar en Vuskoo :)</h5>
                            <Link className='btn btn-primary mt-5' to={'/'}>Volver a vuskoo</Link>
                        </Col>
                    </Col>
                    <Col xs={12} md={4} className='d-none d-md-block'>
                        <img className='img-fluid' src='/img/banner_thanks.png' alt='imagen error 404' />
                    </Col>

                </Row>
            </Container>
        </>
    )
}
