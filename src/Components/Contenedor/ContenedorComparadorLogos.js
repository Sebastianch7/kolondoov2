import { React, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Stack, CarouselItem } from 'react-bootstrap';
import TitleSection from '../Text/TitleSection';
import { fetchOperadoras, fetchComercializadoras } from '../../services/ApiServices';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "semantic-ui-react";


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

function ContenedorComparadorLogos({ children }) {
    const location = useLocation();
    const [infoLogo, setInfoLogo] = useState();
    let response;
    useEffect(() => {
        const fechtData = async () => {
            try {
                switch (location.pathname.replace('/','')) {
                    case 'Internet_y_telefonia':
                        console.log('aa')
                        response = await fetchOperadoras()
                        break;
                    case 'energia':
                        console.log('bb')
                        response = await fetchComercializadoras()
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
                title={'Comparamos las'}
                titleAlt={'mejores compañías'}
                subtitle={'Cada compañía telefónica es única y brilla con luz propia, de hecho por eso es tan difícil decantarnos por una u otra. Lo importante es <b>tener claro qué aspectos son los que más valoras dentro de un operador y comparar entre ellos</b> para saber con certeza en qué es mejor cada uno. Aquí te mostramos los principales y sus peculiaridades. ¿Cuál consideras el más afín a ti?'}
                center
            />
            <Container>
                <Row>
                    <Col xs={12} md={8} className='mx-auto'>
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
                                    autoPlaySpeed={2000}
                                    arrows
                                    centerMode={true}
                                    containerClass="container"
                                    dotListClass=""
                                    draggable
                                    focusOnSelect={false}
                                    infinite
                                    keyBoardControl
                                    pauseOnHover
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