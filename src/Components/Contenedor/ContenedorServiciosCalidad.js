import { React, useEffect, useState } from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import { isMobile } from 'react-device-detect'
import TarjetaBlogFull from '../Tarjeta/TarjetaBlogFull';
import { CardGroup } from 'react-bootstrap';
import TitleSection from '../Text/TitleSection';
import { Link, useLocation } from 'react-router-dom';
import { getBlogHome } from '../../services/ApiServices';
import Load from '../Utils/Load'
import TitleSectionHome from '../Text/TitleSectionHome';
import Carousel from "react-multi-carousel";

function ContenedorServiciosCalidad({ children }) {
    const [lang, setLang] = useState(null)
    const location = useLocation();

    useEffect(() => {
        setLang(location.pathname.split('/')[1])
    }, [])

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
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
        <Container className={`pb-5 ${isMobile && 'bg-gray'}`}>
            <Row>
                <Col xs={12} md={7} className="text-center mx-auto">
                    <TitleSection
                        title={'Nos apoyamos en servicios de calidad para'}
                        titleAlt={'adaptarnos a tus necesidades'}
                        titleBottom={'Nuestra misión es comprender tus requerimientos específicos y proporcionarte un servicio que supere tus expectativas'}
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
                        <img className='slider-icons-marcas_img mx-2' src="/img/logos/masmovil_slider.svg" alt="Masmovil" />
                        <img className='slider-icons-marcas_img mx-2' src="/img/logos/movistar_slider.svg" alt="Movistar" />
                        <img className='slider-icons-marcas_img mx-2' src="/img/logos/pepe_slider.svg" alt="Pepe" />
                        <img className='slider-icons-marcas_img mx-2' src="/img/logos/virgin_slider.svg" alt="Virgin" />
                        <img className='slider-icons-marcas_img mx-2' src="/img/logos/vodafone_slider.svg" alt="Vodafone" />
                    </Carousel>
                </Col>
            </Row >
        </Container >
    );
}

export default ContenedorServiciosCalidad;