import React from 'react';
import { Container, Row, Col, Stack, Carousel, CarouselItem } from 'react-bootstrap';
import ButtonPrimary from '../Button/ButtonPrimary';
import { isMobile } from 'react-device-detect'
import Blog from '../../Content/Blog.json'
import TarjetaBlogFull from '../Tarjeta/TarjetaBlogFull';
import { CardGroup } from 'react-bootstrap';

function ContenedorTarjetaBlog({ children }) {
    return (
        <Container fluid className='container-tarjeta-blog'>
            <Container>
                {children}
                <Row className="d-flex justify-content-center align-items-center">
                    <Col md={12}>
                        {/* <Row className="justify-content-center mx-auto"> */}
                        {!isMobile ? (
                            <CardGroup>
                                {Blog.map((data, index) => {
                                    return <TarjetaBlogFull key={index} data={data} />;
                                })}
                            </CardGroup>
                        ) : (
                            <Carousel className="p-0">
                                {Blog.map((data, index) => {
                                    return (
                                        <Carousel.Item key={index}>
                                            <img
                                                className="carrusel-img"
                                                src={data.imgMobile}
                                                alt={data.imgMobile}
                                            />
                                            <Carousel.Caption>
                                                <div className="carrusel-caption">
                                                    <h6>{data.date}</h6>
                                                    <h2>{data.title}</h2>
                                                    <a href="">{data.button}</a>
                                                </div>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    );
                                })}
                            </Carousel>
                        )}
                        <Col md={12} className='mx-auto text-center py-5'>
                            <ButtonPrimary text={'Descubre más noticias'} />
                        </Col>
                        {/* </Row> */}
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default ContenedorTarjetaBlog;