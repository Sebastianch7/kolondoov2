import { React, useEffect, useState } from 'react';
import { Container, Row, Col, Stack, Carousel, CarouselItem } from 'react-bootstrap';
import TitleSection from '../Text/TitleSection';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ContenedorContratacion({ children, imagen }) {
    const [fetchBlog, setFetchBlog] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [lang, setLang] = useState(null)
    const location = useLocation();

    useEffect(() => {
        setLang(location.pathname.split('/')[1])
    }, [location])

    const { t } = useTranslation();

    return (
        <Container className="bg-secundary-10" fluid>
            <Row className='d-flex justify-content-center align-items-end'>
                <Col xs={12} md={5} className='text-center p-5 bg-secundary-contratacion'>
                    <img className='img-fluid mt-5 mt-md-0 p-5' src={imagen} />
                </Col>
                <Col xs={12} md={7} className="d-flex align-items-center p-5">
                    <Col xs={12} md={8}>
                        <TitleSection
                            btnLeft
                            title={t('contenedroContratacionTitle')}
                            titleAlt={t('contenedroContratacionTitleAlt')}
                            titleBottom={t('contenedroContratacionTitleBottom')}
                            /* imagen={'/img/compromiso-calidad.svg'} */
                            buttons={[
                                {
                                    title: 'Contacta con nosotros',
                                    url: 'contactanos',
                                }
                            ]}
                        />
                    </Col>
                </Col>
            </Row>
        </Container>
    );
}

export default ContenedorContratacion;