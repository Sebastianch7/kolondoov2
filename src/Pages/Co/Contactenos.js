import React from 'react'
import Header from '../../Components/Header/Header'
import { Container, Row, Col } from 'react-bootstrap'
import FormContactenos from '../../Components/Forms/FormContactenos'
import TitleSection from '../../Components/Text/TitleSection'
import Footer from '../../Components/Footer/Footer'
import MetaData from '../../Components/Header/SeoMetadata';
import FooterCo from '../../Components/Footer/FooterCo'
import FormContactenosCo from '../../Components/Forms/FormContactenosCo'

export default function ContactenosCo() {
    return (
        <>
        <MetaData titulo={'¡Conéctate con Nosotros! Contáctanos | Vuskoo'} descripcion={'¿Tienes preguntas o necesitas asistencia? ¡Contacta con nosotros en Vuskoo! Estamos aquí para ayudarte a aprovechar al máximo nuestros comparadores de servicios'}/>
            <Header></Header>
            <Container className='mb-5'>
                <Row>
                    <Col sm={12} md={6} className='d-none d-md-block'>
                        <div>
                            <img className='img-fluid' src={'/img/banner_contactenos-co.png'} />
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <TitleSection
                            title={'¿Algo que decir? Contacta con nosotros'}
                            text1={'Si tienes alguna duda acerca del funcionamiento de Vuskoo, necesitas que te ayudemos a resolver algún problemilla, o simplemente quieres dejarnos una reseña o sugerencia, no lo dudes, ponte en contacto con nosotros rellenando el siguiente formulario, o bien enviando un email a hola@Vuskoo.com. ¡Te atenderemos lo antes posible de forma personalizada!'}
                        />
                        <FormContactenosCo />
                    </Col>
                </Row>
            </Container>
            <FooterCo />
        </>
    )
}
