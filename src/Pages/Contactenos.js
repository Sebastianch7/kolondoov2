import React from 'react'
import Header from '../Components/Header/Header'
import { Container, Row, Col } from 'react-bootstrap'
import FormContactenos from '../Components/Forms/FormContactenos'
import TitleSection from '../Components/Text/TitleSection'
import Footer from '../Components/Footer/Footer'

export default function Contactenos() {
    return (
        <>
            <Header></Header>
            <Container className='mb-5'>
                <Row>
                    <Col sm={12} md={6} className='d-none d-md-block'>
                        <div>
                            <img className='img-fluid' src={'/img/banner_contactenos.png'} />
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <TitleSection
                            title={'¿Algo que decir? Contacta con nosotros'}
                            text1={'Si tienes alguna duda acerca del funcionamiento de Kolondoo, necesitas que te ayudemos a resolver algún problemilla, o simplemente quieres dejarnos una reseña o sugerencia, no lo dudes, ponte en contacto con nosotros rellenando el siguiente formulario, o bien enviando un email a hola@kolondoo.com. ¡Te atenderemos lo antes posible de forma personalizada!'}
                        />
                        <FormContactenos></FormContactenos>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    )
}
