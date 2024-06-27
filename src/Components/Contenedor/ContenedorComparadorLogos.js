import { React, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Stack, CarouselItem } from 'react-bootstrap';
import TitleSection from '../Text/TitleSection';
import { fetchOperadoras, fetchComercializadoras } from '../../services/ApiServices';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "semantic-ui-react"
import { useTranslation } from 'react-i18next';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,

    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,

    }
};

const DataStreaming = [
    {
        logo: '/img/logos/hbomax.svg'
    },
    {
        logo: '/img/logos/prime.svg'
    },
    {
        logo: '/img/logos/netflix.svg'
    }
]

function ContenedorComparadorLogos({ subtitle }) {
    const [infoLogo, setInfoLogo] = useState();
    const [lang, setLang] = useState(null)
    const location = useLocation();

    useEffect(() => {
        setLang(location.pathname.split('/')[1])
    }, [location]);

    const { t } = useTranslation();
    
    let response;
    useEffect(() => {

        const fechtData = async () => {
            try {
                switch (location.pathname.replace('/', '')) {
                    case 'internet_y_telefonia':
                        response = await fetchOperadoras()
                        break;
                    case 'energia':
                        response = await fetchComercializadoras()
                        break;
                    case 'television_y_streaming':
                        response = DataStreaming;
                        break;
                }
                setInfoLogo(response);
            } catch (error) {
                console.error("Error al obtener información", error);
            }
        };

        fechtData();
    }, []);

    return (
        <div className=''>
            <TitleSection
                title={t('ComparadorLogosTitle')}
                titleAlt={t('ComparadorLogosAlt')}
                subtitle={subtitle}
                center
            />
            <Container>
                <Row>
                    <Col xs={12} md={8} className='mx-auto mt-md-4'>
                        <div
                            style={{
                                paddingBottom: '30px',
                                position: 'relative'
                            }}
                        >
                            {infoLogo?.length > 0 &&
                                <Carousel
                                    className="text-center"
                                    additionalTransfrom={0}
                                    autoPlay
                                    autoPlaySpeed={1500}
                                    arrows={false}
                                    centerMode={false}
                                    containerClass="container"
                                    dotListClass=""
                                    draggable
                                    focusOnSelect={false}
                                    infinite
                                    keyBoardControl
                                    minimumTouchDrag={80}
                                    renderDotsOutside={false}
                                    responsive={responsive}
                                    rewind={false}
                                    rewindWithAnimation={false}
                                    rtl={false}
                                    shouldResetAutoplay
                                    showDots={false}
                                    sliderClass=""
                                    slidesToSlide={1}
                                    swipeable
                                >
                                    {infoLogo?.map((data) => {
                                        return (
                                            <Image
                                                style={{ width: "100px", height: "100%" }}
                                                draggable={false}
                                                src={data.logo}
                                            />
                                        );
                                    })}
                                </Carousel>
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContenedorComparadorLogos;