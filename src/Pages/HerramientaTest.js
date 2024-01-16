import React, { useState, useEffect } from 'react';
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Container, Row, Col, Card } from 'react-bootstrap'
import TitleSection from '../Components/Text/TitleSection'
import { getExtraOffer } from '../services/ApiServices'
import TarjetaTarifa from '../Components/Tarjeta/TarjetaTarifa'
import ContenedorPreguntasFrecuentes from '../Components/Contenedor/ContenedorPreguntasFrecuentes';
import ToolSpeedTest from '../Components/Utils/ToolSpeedTest';

const data = [
    {
        title: '¿Qué significa el ping o latencia?',
        texto: 'El ping, <b>también conocido como latencia,</b> hace referencia al tiempo que se invierte en transmitir los datos en la red. Es decir, cuanto más bajo es su valor, menor es la latencia, y por tanto disfrutas de una mejor velocidad en tu conexión.'
    },
    {
        title: '¿Y la fluctuación?',
        texto: 'Mauris luctus semper sapien, vel sagittis diam eleifend non. Phasellus viverra metus at rhoncus mollis. Phasellus et tincidunt diam. Proin sed semper mauris. Sed ut nulla at lacus commodo porta. Quisque commodo, mauris eu vehicula condimentum, arcu nunc lobortis augue, in mollis tortor orci in ex.'
    },
    {
        title: 'A mi WiFi siempre llega menos velocidad, ¿a qué se debe?',
        texto: 'Mauris luctus semper sapien, vel sagittis diam eleifend non. Phasellus viverra metus at rhoncus mollis. Phasellus et tincidunt diam. Proin sed semper mauris. Sed ut nulla at lacus commodo porta. Quisque commodo, mauris eu vehicula condimentum, arcu nunc lobortis augue, in mollis tortor orci in ex.'
    },
    {
        title: '¿Cómo hacer que mi conexión a Internet mejore?',
        texto: 'Mauris luctus semper sapien, vel sagittis diam eleifend non. Phasellus viverra metus at rhoncus mollis. Phasellus et tincidunt diam. Proin sed semper mauris. Sed ut nulla at lacus commodo porta. Quisque commodo, mauris eu vehicula condimentum, arcu nunc lobortis augue, in mollis tortor orci in ex.'
    },
    {
        title: '¿Puede ocurrir que los resultados del test de velocidad varíen de un dispositivo a otro?',
        texto: 'Mauris luctus semper sapien, vel sagittis diam eleifend non. Phasellus viverra metus at rhoncus mollis. Phasellus et tincidunt diam. Proin sed semper mauris. Sed ut nulla at lacus commodo porta. Quisque commodo, mauris eu vehicula condimentum, arcu nunc lobortis augue, in mollis tortor orci in ex.'
    },
    {
        title: '¿Los datos del test de velocidad se quedan guardados?',
        texto: 'Mauris luctus semper sapien, vel sagittis diam eleifend non. Phasellus viverra metus at rhoncus mollis. Phasellus et tincidunt diam. Proin sed semper mauris. Sed ut nulla at lacus commodo porta. Quisque commodo, mauris eu vehicula condimentum, arcu nunc lobortis augue, in mollis tortor orci in ex.'
    },
    {
        title: '¿Por qué a veces varían los datos del test de velocidad?',
        texto: 'Mauris luctus semper sapien, vel sagittis diam eleifend non. Phasellus viverra metus at rhoncus mollis. Phasellus et tincidunt diam. Proin sed semper mauris. Sed ut nulla at lacus commodo porta. Quisque commodo, mauris eu vehicula condimentum, arcu nunc lobortis augue, in mollis tortor orci in ex.'
    },
]


export default function HerramientaTest() {

    const [isLoading, setIsLoading] = useState(true);
    const [infoOffer, setInfoOffer] = useState([]);
    const [extraOffer, setExtraOffer] = useState([]);

    useEffect(() => {
        const fetchTariffs = async () => {
            try {
                const response = await getExtraOffer('fibra')
                setExtraOffer(response);
                setIsLoading(false);
            } catch (error) {
                console.error("Error al obtener oferta extra:", error);
            }
        };

        fetchTariffs();
    }, []);


    return (
        <>
            <Header></Header>
            <Container>
                <TitleSection
                    center
                    title={'Test de velocidad'}
                    titleAlt={'de Vuskoo'}
                    text1={'Te averiguamos en un pispás cuál es la velocidad real de tu conexión a Internet :)'}
                />
                <Card className='tarjeta shadow'>
                    <ToolSpeedTest></ToolSpeedTest>
                </Card>

                <Card className='tarjeta shadow'>
                    
                </Card>
                <Row className='justify-content-md-center mb-md-5'>
                    <Col md={9}>
                        {extraOffer.length > 0 &&
                            extraOffer.map((item, index) => {
                                return <TarjetaTarifa key={index} data={item} />;
                            })
                        }
                    </Col>
                </Row>
                <Row>

                    <Col md={12}>
                        <TitleSection
                            center
                            title={'¿Qué necesito saber antes'}
                            titleAlt={'de hacer un test de velocidad?'}
                        />
                        <p className='font-09 my-md-3 px-2 p-md-0'>
                            Sabemos que pueden surgirte ciertas dudas antes de realizar el test de velocidad de Vuskoo. Estas son algunas de nuestras recomendaciones que pueden servirte de ayuda:
                            <ol type='1' className='font-09 my-4'>
                                <li>Para hacer nuestro test de velocidad, <b>asegúrate de tener siempre un cable de red conectado a tu dispositivo.</b> En caso de que lo realices solo con WiFi correrás el riesgo de no recibir los datos reales de tu <u>velocidad de Internet.</u></li>
                                <li><b>Procura cerrar todos y cada uno de los programas</b> que estén abiertos y <b>cerciórate de que no tienes más dispositivos conectados</b> a la red sobre la que vas a hacer el test. Estos dos chequeos se traducirán en una mayor precisión de la prueba.</li>
                                <li><b>El tercer paso que te proponemos es que desactives el antivirus,</b> ya que esta herramienta absorbe bastante capacidad de conexión de tu línea.</li>
                            </ol>
                            Por último, <b>es importante que sepas que la mayoría de sistemas operativos emplean un bajo porcentaje</b> (alrededor de un 5%) de la capacidad de tu línea, por lo que <b>esto puede afectar a los resultados finales de tu test de velocidad.</b>
                        </p>
                    </Col>
                </Row>
            </Container >
            <ContenedorPreguntasFrecuentes data={data} image={'/img/preguntas-test.png'} />
            <Footer></Footer>
        </>
    )
}
