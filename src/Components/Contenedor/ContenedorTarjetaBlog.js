import React from 'react';
import { Container, Row, Col, Stack, Carousel, CarouselItem } from 'react-bootstrap';
import ButtonPrimary from '../Button/ButtonPrimary';
import { isMobile } from 'react-device-detect'
import Blog from '../../Content/Blog.json'
import TarjetaBlogFull from '../Tarjeta/TarjetaBlogFull';
import { CardGroup } from 'react-bootstrap';
import TitleSection from '../Text/TitleSection';
import { Link } from 'react-router-dom';

function ContenedorTarjetaBlog({ children }) {
    return (
        <div className='my-md-5 container-tarjeta-blog'>
            <TitleSection
                title={'últimas noticias'}
                subtitle={'¡Échale un vistazo a nuestro blog y mantente siempre actualizado!'}
                center
            />
            <Container fluid>
                <Container>
                    <Row>
                        <Col md={12}>
                            {!isMobile ? (
                                <CardGroup>
                                    {Blog.map((data, index) => {
                                        return <TarjetaBlogFull key={index} data={data} />;
                                    })}
                                </CardGroup>
                            ) : (
                                <Carousel>
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
                            <Link to={'/blog'} className='btn btn-primary'>Descubre más noticias</Link>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}

export default ContenedorTarjetaBlog;