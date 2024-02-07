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
                    <Col xs={12} md={8}>
                        <Row>
                            <Col xs={12}>
                                <TitleSection
                                    center
                                    title={'Gestiones'}
                                    titleAlt={'Suministros'}
                                />
                                <p className='my-md-3 px-2 p-md-0'>
                                    <b>Los suministros básicos de cada hogar son la <a href='/es/blog/energia/tarifa-indexada-y-pvpc-diferencias' target='_blank'>luz</a>, el <a href='/es/blog/energia/ahorrar-en-tarifa-de-gas-natural' target='_blank'>gas</a> y el agua potable.</b> En otras palabras, son los servicios más esenciales en una vivienda que cubren las necesidades más importantes de nuestro día a día.
                                </p>
                                <p className='my-md-3 px-2 p-md-0'><b>Además, a estos servicios podríamos sumarle en los últimos años Internet, ya que cada vez se vuelve más necesario contratar una <a href='/es/internet-telefonia/comparador-fibra' target='_blank'>tarifa de fibra óptica</a></b> (o ADSL si aún no tienes cobertura de fibra en tu edificio), y es que está normalizándose teletrabajar a tiempo parcial o completo.</p>
                                <p className='my-md-3 px-2 p-md-0'>Pero no nos engañemos, también nos sirve para comunicarnos, jugar online, ver nuestras series preferidas, estudiar…</p>
                                <p className='my-md-3 px-2 p-md-0'>Pero, volviendo a la luz, el agua y el gas, <b>¿cuánto consumimos al mes de cada uno de estos suministros?</b> Hay varios factores en juego, como las personas que viven en casa.</p>
                            </Col>
                            <Col xs={12}>
                                <Title title={'Consumo medio mensual de los suministros básicos del hogar'} />
                                <p className='my-md-3 px-2 p-md-0'>Empecemos por la luz. Según datos de la <a target='_blank' rel='nofollow noopener noreferrer' href='https://www.ree.es/es'>Red Eléctrica de España (REE)</a>, a fecha de septiembre de 2022, <b>el consumo medio al mes en las viviendas es de 270 kWh, lo que se traduce en un gasto medio mensual por consumo de electricidad de 86 euros.</b> A esto tenemos que añadir el importe por la potencia contratada y otros costes fijos.</p>
                                <p className='my-md-3 px-2 p-md-0'>Desde Kolondoo te recomendamos que <b>compruebes el <a href="/es/herramientas/precio-de-la-luz-hoy" target='_blank'>precio de la luz por horas</a></b>, para ser consciente de cuándo está más barata y más cara la electricidad y puedas ahorrar en tu factura.</p>
                                <p className='my-md-3 px-2 p-md-0'>Continuando por el gas, de acuerdo con el <a href='https://aprendecomoahorrarenergia.es/campus/index.php/' target='_blank' rel='nofollow noopener noreferrer'>Instituto para la Diversificación y Ahorro de la Energía (IDEA)</a>, en las viviendas de nuestro país que no disponen de <a href='/es/blog/hogar/ahorrar-calefaccion-gas-natural-trucos'><b>servicio de calefacción,</b></a> <b>el consumo medio mensual de gas natural es de 425,75 kWh, mientras que en los hogares que sí cuentan con calefacción de gas llega a 660 kWh.</b></p>
                                <p className='my-md-3 px-2 p-md-0'>Por último, <b>el consumo medio de agua en los hogares por persona y día es de 133 litros, según datos arrojados por <a href='https://www.ine.es/' target='_blank' rel='nofollow noopener noreferrer'>El Instituto Nacional de Estadística</a>.</b></p>
                                <p className='my-md-3 px-2 p-md-0'><b>Estos son datos de consumo medio, que varían en función de los hábitos que tenga cada persona o familia en su vivienda</b>, tales como tener todo el día la calefacción puesta o solo ponerla unas horas, dejar el grifo abierto en muchas ocasiones, bañarse o ducharse, los programas que utilizas en la lavadora o lavavajillas, etc.</p>
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
                    <Col xs={12} md={4}>
                    <ContenedorDestacados/>
                </Col>
                </Row >
            </Container >
            <FormSuscripcion />
            <Footer></Footer>
        </>
    )
}
