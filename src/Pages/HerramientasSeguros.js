import React, { useState, useEffect } from 'react';
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Container, Row, Col, Card } from 'react-bootstrap'
import TitleSection from '../Components/Text/TitleSection'
import MetaData from '../Components/Header/SeoMetadata';
import Title from '../Components/Text/Title';
import FormSuscripcion from '../Components/Forms/FormSuscripcion';
import { getGestion } from '../services/ApiServices';
import ContenedorDestacados from '../Components/Blog/ContenedorDestacados';
import Banner from '../Components/Banner/Banner';
import BannerImageFull from '../Components/Banner/BannerImageFull';

export default function HerramientasSeguros() {

    const [fetchBlog, setFetchBlog] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        const fetchBlogList = async () => {
            setIsLoading(true);
            try {
                const response = await getGestion('seguros');
                setFetchBlog(response);
                setIsLoading(false);
            } catch (error) {
                console.error('Error al obtener blog:', error);

            }
        };
        fetchBlogList();
    }, []);

    return (
        <>
            <MetaData titulo={'Contratar y dar de baja tus suministros | Vuskoo '} descripcion={'Descubre cómo dar de alta y de baja la luz, el gas, el agua…Te explicamos en Kolondoo todas las gestiones relacionadas con tus suministros del hogar.'} />
            <Header breadCrumb></Header>
            <Container>
                <Row>
                    <Col xs={12} md={12} xl={8}>
                        <Row>
                            <Col xs={12}>
                                <TitleSection
                                    center
                                    title={'Gestiones'}
                                    titleAlt={'Seguros'}
                                />
                                <p className='my-md-3 px-2 p-md-0'><b>Evitar situaciones perjudiciales,</b> que tu <b>patrimonio</b> esté <b>en perfecto estado,</b> fomentar el ahorro de cara a futuros inciertos o mantenerte a ti y a los tuyos sanos. Estos son algunos de los <b>beneficios más señalados de los seguros.</b></p>
                                <p className='my-md-3 px-2 p-md-0'>Si estás pensando en adquirir una póliza de seguros, debes saber que <b>no todos los tipos de riesgo son asegurables. Tampoco será una protección 100% eficaz.</b> No obstante, sus ventajas son más que evidentes, sobre todo para tu bolsillo ;).</p>
                                <p className='my-md-3 px-2 p-md-0'>A continuación te mostramos los <b>principales tipos de seguros. ¿Qué son y qué incluyen?</b> ¿Cuánto cuestan? <b>¿Cómo contratarlo?</b> ¿Y si quiero cambiarme o darme de baja? En Kolondoo te lo contamos todo. <b>¡Descúbrelo aquí!</b></p>
                            </Col>
                            <Col xs={12} className='mb-md-5'>
                                <Card>
                                    <Card.Body>
                                        <ul className='icon-list'>

                                            {fetchBlog?.map((item, index) => {
                                                return < a target='_blank' key={index} href={`/es/herramientas/seguros/${item.url_amigable}`}><li className='m-3 font-semibold'>{`${item.titulo}`}</li></a>
                                            })
                                            }
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} xl={4} className='d-block d-md-none d-xl-block'>
                        <ContenedorDestacados />
                    </Col>
                </Row >
            </Container >
            <FormSuscripcion />
            <Footer></Footer>
        </>
    )
}
