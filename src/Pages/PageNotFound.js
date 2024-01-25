import React from 'react'
import Header from '../Components/Header/Header'
import { Container, Row, Col } from 'react-bootstrap'
import Load from '../Components/Utils/Load'
import { Link } from 'react-router-dom'
import InterSection from '../Components/Utils/InterSection'
import MetaData from '../Components/Header/SeoMetadata';

export default function PageNotFound() {
    return (
        <>
        <MetaData titulo={''} descripcion={''}/>
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
                    <InterSection></InterSection>
                    <Col xs={12} className='text-center'>
                        <Link className='btn btn-primary' to={'/'}>Volver a vuskoo</Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
