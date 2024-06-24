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
import { number } from 'react-i18next/icu.macro';

const data = [
    {
        number: '01.',
        title: 'Ahorro inteligente',
        content: 'Quieres ahorrar y cambiar de cualquier suministro sin complicaciones. Nuestro proceso simple te ayuda a tomar la decisión correcta.'

    },
    {
        number: '02.',
        title: 'Orientación experta',
        content: 'Quieres tomar la decisión correcta. Nuestro equipo de atención al cliente está aquí para ayudarte.'

    },
    {
        number: '03.',
        title: 'Ofertas exclusivas',
        content: 'Quieres el trato perfecto. Ofrecemos ofertas que no puedes encontrar en ningún otro lugar.'

    }
]

function ContenedorElegirVuskoo({ children }) {
    const [lang, setLang] = useState(null)
    const location = useLocation();

    useEffect(() => {
        setLang(location.pathname.split('/')[1])
    }, [])


    return (
        <Container>
            <Row className='my-md-5'>
                <Col xs={12} md={8} className={!isMobile ? 'text-end text-right' : 'px-0 text-start'}>
                    <Row>
                        <Col xs={12}>
                            <TitleSection
                                title={'¿Por qué elegir '}
                                titleAlt={'Vuskoo'}
                                titleThird={'?'}
                            />
                        </Col>
                        <Col className='mx-3 '>
                            <Row>
                                {
                                    data?.length > 0 &&
                                    data.map((item, index) => {
                                        return <><Col md={4} className='mb-4 mb-md-0'>
                                            <Col xs={12} className='vuskoo-eleccion-number'>{item.number}</Col>
                                            <Col xs={12} className='vuskoo-eleccion-title'>{item.title}</Col>
                                            <Col xs={12} className='vuskoo-eleccion-content'>{item.content}</Col>
                                        </Col>
                                        </>
                                    })
                                }
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={4} className='bg-blueContrast br-36 py-4 mt-5 mt-md-0 d-none d-sm-block'>
                    <TitleSection
                        title={'Únete a los millones usuarios que ya han '}
                        titleAlt={'ahorrado'}
                        titleBottom={'Cada día más personas nos eligen para comparar y encontrar los servicios que mas se adecuan a las necesidades de cada uno'}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default ContenedorElegirVuskoo;