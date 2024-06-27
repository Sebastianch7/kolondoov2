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
import { useTranslation } from 'react-i18next';

function ContenedorContratacion({ children }) {
    const [fetchBlog, setFetchBlog] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [lang, setLang] = useState(null)
    const location = useLocation();

    useEffect(() => {
        setLang(location.pathname.split('/')[1])
    }, [location])

    const { t } = useTranslation();

    return (
        <Container className='my-5'>
            <Row>
                <Col xs={12} md={7} className='text-center'>
                    <img className='img-fluid h-500' src='/img/banner-home-es.png' />
                </Col>
                <Col xs={12} md={5} className="d-flex justify-content-center align-items-center">
                    <TitleSection
                        btnLeft
                        title={t('contenedroContratacionTitle')}
                        titleAlt={t('contenedroContratacionTitleAlt')}
                        titleBottom={t('contenedroContratacionTitleBottom')}
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