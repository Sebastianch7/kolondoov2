import { React, useEffect, useState } from 'react';
import { Container, Row, Col, Stack, Carousel, CarouselItem } from 'react-bootstrap';
import { isMobile } from 'react-device-detect'
import TarjetaBlogFull from '../Tarjeta/TarjetaBlogFull';
import { CardGroup } from 'react-bootstrap';
import TitleSection from '../Text/TitleSection';
import { Link, useLocation } from 'react-router-dom';
import { getBlogHome } from '../../services/ApiServices';
import Load from '../Utils/Load'
import TitleSectionHome from '../Text/TitleSectionHome';

function ContenedorExplorar({ children }) {
    const [lang, setLang] = useState(null)
    const location = useLocation();

    useEffect(() => {
        setLang(location.pathname.split('/')[1])
    }, [])


    return (
        <Container fluid className=''>
            <Row className='bg-blueContrast seccion-explorar my-2'>
                <Col xs={12} md={8} className='p-0 col-md-7 col-8'>
                    <img className='img-fluid' src='/img/banner-Explorar.png' />
                </Col>
                <Col xs={12} md={4} className='text-left d-flex align-items-center text-center'>
                    <Col xs={12} md={8}>
                        <img src='/img/logos/logo.svg' className='mb-3' style={{'margin-left': '-13px'}} />
                        <p className='mb-5 mb-md-0'>Envíanos tu factura y uno de nuestros expertos revisará y te enviaremos un estudio para que puedas empezar a ahorrar.</p>
                        <a href='es/contactanos' className='btn btn-primary mt-5'>Explorar</a>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
}

export default ContenedorExplorar;