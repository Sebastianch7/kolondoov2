import { React, useEffect, useState } from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import { isMobile } from 'react-device-detect'
import TitleSection from '../Text/TitleSection';
import {  useLocation } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import { useTranslation } from 'react-i18next';

function ContenedorServiciosCalidad({ children }) {
    const [lang, setLang] = useState(null)
    const [logos, setLogos] = useState([])
    const location = useLocation();

    useEffect(() => {
        setLang(location.pathname.split('/')[1])
    }, [location])

    const { t } = useTranslation();

    useEffect(() => {
        switch (lang) {
            case 'es':
                setLogos([
                    '/img/logos/masmovil_slider.svg',
                    '/img/logos/movistar_slider.svg',
                    '/img/logos/pepe_slider.svg',
                    '/img/logos/virgin_slider.svg',
                    '/img/logos/vodafone_slider.svg',
                ]);
                break;
            case 'co':
                setLogos([
                    '/img/logos/tigo_slider.svg',
                    '/img/logos/movistar_slider.svg',
                    '/img/logos/claro_slider.svg',
                    '/img/logos/virgin_slider.svg',
                ]);
                break;
        }
    }, [lang])

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: logos.length
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (
        <Container className={`py-5 ${isMobile && 'bg-gray'}`}>
            <Row>
                <Col xs={12} md={7} className="text-center mx-auto">
                    <TitleSection
                        title={t('ContenedorServiciosCalidadTitle')}
                        titleAlt={t('ContenedorServiciosCalidadAlt')}
                        titleBottom={t('ContenedorServiciosCalidadBottom')}
                    />
                </Col>
            </Row>
            <Row className='mx-1 mx-md-0'>
                <Col xs={12} className="slider-icons-marcas mx-auto mt-4 br-36 bg-gray p-4">
                    <Carousel
                        arrows={false}
                        centerMode={false}
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        keyBoardControl
                        interval={1000}
                        controls={true}
                        indicators={true}
                        renderDotsOutside={false}
                        responsive={responsive}
                        rewind={true}
                        showDots={false}
                        slidesToSlide={1}
                        autoPlay
                    >
                        {logos &&
                            logos.map((item, index) => {
                                return <img key={index} className='slider-icons-marcas_img mx-2' src={item} alt={item} />
                            })

                        }
                    </Carousel>
                </Col>
            </Row >
        </Container >
    );
}

export default ContenedorServiciosCalidad;