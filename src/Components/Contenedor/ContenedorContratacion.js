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

function ContenedorContratacion({ children }) {
    const [fetchBlog, setFetchBlog] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [lang, setLang] = useState(null)
    const location = useLocation();

    useEffect(() => {
        setLang(location.pathname.split('/')[1])
    }, [])


    return (
        <Container className='mb-5'>
            <Row>
                <Col xs={12} md={6} className='text-center'>
                    <img className='img-fluid' src='/img/banner-home-es.png' />
                </Col>
                <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                    <TitleSection
                        btnLeft
                        title={'Compara y contrata de forma'}
                        titleAlt={'inteligente'}
                        titleBottom={'Hemos ayudado y asesorado a más de 80.000 clientes a cambiar y mejorar sus ahorrar.'}
                        buttons={[
                            {
                                title: 'Contacta con nosotros',
                                url: 'contactanos',
                            }
                        ]}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default ContenedorContratacion;