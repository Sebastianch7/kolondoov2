import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { Container, Row, Col, Card } from 'react-bootstrap'
import TitleSection from '../../Components/Text/TitleSection'
import MetaData from '../../Components/Header/SeoMetadata';
import Title from '../../Components/Text/Title';
import Load from '../../Components/Utils/Load';
import FormSuscripcion from '../../Components/Forms/FormSuscripcion';
import { getGestion } from '../../services/ApiServices';
import ContenedorDestacados from '../../Components/Blog/ContenedorDestacados';
import Accordion from 'react-bootstrap/Accordion';

export default function HerramientasCobertura() {

    const [fetchFibra, setFetchFibra] = useState([])
    const [fetchMovil, setFetchMovil] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchBlogList = async () => {
            setIsLoading(true);
            try {
                const response = await getGestion('coberturaFibra');
                setFetchFibra(response);
                setIsLoading(false);
            } catch (error) {
                console.error('Error al obtener blog:', error);

            }
        };
        fetchBlogList();
    }, []);

    useEffect(() => {
        const fetchBlogList = async () => {
            setIsLoading(true);
            try {
                const response = await getGestion('coberturaMovil');
                setFetchMovil(response);
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
                                    titleAlt={'Cobertura'}
                                />
                                <p className='my-md-3 px-2 p-md-0'>Aunque España es uno de los países que posee mayor <b>cobertura de <a href='/es/blog/internet/fibra-optica-simetrica-que-es'>fibra óptica</a></b> (<b>más del 80% del territorio</b> goza de este servicio), todavía existen zonas donde su alcance no es efectivo.</p>
                                <p className='my-md-3 px-2 p-md-0'>De hecho, es posible que <b>en una misma ciudad o barrio haya zonas o edificios que sí tengan cobertura y otros que no</b> porque no se haya instalado aún.</p>
                                <p className='my-md-3 px-2 p-md-0'>Por tanto, <b>si estás pensando en contratar un servicio de Internet, necesitarás saber si tu domicilio tiene <a className='' href='/es/blog/internet/descubre-como-saber-si-tienes-cobertura-de-fibra-en-tu-hogar'>cobertura de fibra.</a></b> Este paso será esencial para poder disfrutar de la mejor conexión a Internet.</p>
                                <p className='my-md-3 px-2 p-md-0'>A continuación te <b>desvelamos qué cobertura de fibra tiene cada una de las compañías que operan en nuestro país,</b> así como sus ventajas y desventajas y el alcance de dicha cobertura a las distintas zonas de España. Y tú, ¿con qué cobertura de fibra te quedas? ;)</p>
                            </Col>
                            <Col xs={12} className='mb-md-5'>
                                <Accordion>
                                    <Accordion.Item eventKey="0" >
                                        <Accordion.Header>Cobertura Fibra por compañía</Accordion.Header>
                                        <Accordion.Body>
                                            <ul className='icon-list'>

                                                {fetchFibra?.map((item, index) => {
                                                    return <a key={index} href={`/es/herramientas/coberturaFibra/${item.url_amigable}`}><li className='m-3 font-semibold'>{`${item.titulo}`}</li></a>
                                                })
                                                }
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <p className='my-md-3 px-2 p-md-0'>En España hoy en día podemos encontrar una gran cantidad de compañías, lo que <b>hace que cada vez sea más complicado elegir una tarifa de telefonía móvil</b> que mejor se adapte a nuestras necesidades.</p>
                                <p className='my-md-3 px-2 p-md-0'>Por un lado, <b>podemos encontrar a las grandes compañías (Movistar, Vodafone, Orange o Yoigo) y, por otro, a los <a href='/es/blog/movil/que-es-un-operador-movil-virtual'>OMV (Operadores de Móvil Virtuales)</a>, que se han convertido a día de hoy en la opción más económica y cómoda</b> para disfrutar de una tarifa de contrato o prepago.;</p>
                                <p className='my-md-3 px-2 p-md-0'><b>Comprueba cuál es el alcance de cobertura móvil que tiene cada una de las operadoras actuales en nuestro país.</b> ¿Llega la cobertura de MásMóvil a la zona en la que vives? ¿Y la de Finetwork? ¡Te lo contamos!</p>
                            </Col>
                            <Col xs={12} className='mb-md-5'>
                                <Accordion>
                                    <Accordion.Item eventKey="0" >
                                        <Accordion.Header>Cobertura Móvil por compañía</Accordion.Header>
                                        <Accordion.Body>
                                            <ul className='icon-list'>

                                                {fetchMovil?.map((item, index) => {
                                                    return < a key={index} href={`/es/herramientas/coberturaMovil/${item.url_amigable}`}><li className='m-3 font-semibold'>{`${item.titulo}`}</li></a>
                                                })
                                                }
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} xl={4} className='d-none d-md-none d-xl-block'>
                        <ContenedorDestacados />
                    </Col>
                </Row >
            </Container >
            <FormSuscripcion />
            <Footer></Footer>
        </>
    )
}
