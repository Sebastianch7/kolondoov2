import React, { useState, useEffect } from 'react';
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Container, Row, Col, Card } from 'react-bootstrap'
import TitleSection from '../Components/Text/TitleSection'
import { getExtraOffer } from '../services/ApiServices'
import TarjetaTarifaLeadEnergia from '../Components/Tarjeta/TarjetaTarifaLeadEnergia'
import ContenedorPreguntasFrecuentes from '../Components/Contenedor/ContenedorPreguntasFrecuentes';
import { isMobile } from 'react-device-detect';

const data = [
    {
        title: '¿Qué tres franjas horarias de consumo tiene el mercado eléctrico en España?',
        texto: '<p>Desde el pasado 1 de junio de 2021 son tres las franjas horarias de consumo las que nos encontramos:<ul><li>Horario valle (de 0:00 a 8:00). En este periodo la electricidad es más barata. Este se aplica también los fines de semana completos y festivos.</li><li>Horario punta (de 10:00 a 14:00 y de 18:00 a 22:00). Este horario es en el que el precio de la luz es más elevado. Durante estas horas lo más recomendable es hacer el menor consumo posible de la electricidad.</li><li>Horario llano (de 8:00 a 10:00 y de 14:00 a 18:00): en esta etapa el valor es intermedio. En otras palabras, el coste es menor que en horario punta pero más alto que en valle.</li></ul>Con estos horarios en mente, podrás planificar mejor tus actividades y ahorrar en el consumo de tu hogar</p>'
    },
    {
        title: '¿Cómo puedo contratar la mejor tarifa de luz en España hoy?',
        texto: 'texto2'
    },
    {
        title: '¿Qué documentos necesito para dar de alta mi contrato de luz?',
        texto: 'texto3'
    },
    {
        title: '¿En qué conceptos tengo que fijarme en las facturas de luz?',
        texto: 'texto3'
    },
    {
        title: '¿Qué se tiene en cuenta para actualizar el precio de la electricidad en el mercado regulado?',
        texto: 'texto3'
    },
    {
        title: '¿Qué diferencia hay entre el mercado libre y el regulado?',
        texto: 'texto3'
    },
    {
        title: '¿Qué organismo es el encargado de fijar el precio de la luz en España?',
        texto: 'texto3'
    },
    {
        title: '¿Cuáles son los electrodomésticos que más energía consumen?',
        texto: 'texto3'
    },
    {
        title: '¿De dónde extraemos los datos del precio de la luz y cada cuánto se actualizan?',
        texto: 'texto3'
    },
    {
        title: '¿Qué es el kWh de luz y cómo afecta al precio de la electricidad?',
        texto: 'texto3'
    },

];

export default function HerramientaLuz() {

    const [isLoading, setIsLoading] = useState(true);
    const [infoOffer, setInfoOffer] = useState([]);
    const [extraOffer, setExtraOffer] = useState([]);

    useEffect(() => {
        const fetchTariffs = async () => {
            try {
                const response = await getExtraOffer('luz')
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
            <Container fluid className='p-0 m-0'>
                <Card className='tarjeta mb-4 px-4 p-sm-5 b-gray border-0'>
                    <TitleSection
                        center
                        title={'Precio de la luz'}
                        titleAlt={'hoy'}
                    />
                    <p>La media del <b>precio de la luz hoy 26 de Octubre de 2023,</b> es de <b>0.120 €/kWh</b> en el mercado regulado. <b>Te mostramos a continuación el precio de la luz en estos momentos,</b> así como el periodo del día en el que está resultando más económica y también más costosa. ¡Así puedes saber cuándo es la hora clave para poner tus electrodomésticos! ;)</p>
                </Card>
            </Container>
            <Container>
                <TitleSection
                    title={'Descubre las mejores ofertas de '}
                    titleAlt={'luz para tu hogar'}
                    text1={'El precio de la luz está pulverizando todos los récords, y no hay un futuro inmediato al respecto demasiado esperanzador. Ahora, vale más la pena que nunca revisar lo que estás pagando por tu suministro de luz y plantearte cambiar de tarifa. Un buen comienzo es comparar las mejores ofertas de luz del mercado. ¡Encuentra la tarifa de luz que te lleve directo al ahorro!'}
                    center
                    º
                />
                <Row className='justify-content-md-center mb-md-4'>
                    <Col md={9}>
                        {extraOffer.length > 0 &&
                            extraOffer.map((item, index) => {
                                return <TarjetaTarifaLeadEnergia key={index} data={item} TarifaCard />;
                            })
                        }
                        <p className='my-md-4 p-3 p-md-0 font-09'>*Todos los precios incluyen el IVA.**Los precios están estimados en base a un consumo anual de 3.600kWh (300kWh al mes).***Los precios no incluyen costes derivados de la compensación del tope del gas.</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} className='text-justify'>
                        <p className='p-4 p-md-0'><b>El precio de la electricidad</b> no es el mismo a las 5 de la tarde que a las 2 de la madrugada. <b>Cambia hora a hora</b>, como has podido observar más arriba. Ahora más que nunca <b>es importante conocer en qué franjas del día el precio es más bajo</b> (periodo valle), <b>en cuáles más elevado</b> (horas punta) <b>y en cuáles equilibrado</b> (periodo llano). Aquí tienes los seis periodos del día en los que el precio de la electricidad es más bajo y los seis con el coste de la luz más elevado.</p>
                    </Col>
                    <Card className='tarjeta my-4 p-md-4 shadow border-0'>
                        <TitleSection
                            center
                            title={'Horas más baratas y caras'}
                            titleAlt={'de la luz hoy'}
                        />
                        <div className='p-3'>
                            {!isMobile ?
                                <table className='text-center col-md-6 mx-auto'>
                                    <tbody>
                                        <tr>
                                            <th>02h-03h:</th><td className='color-green'>0.076 €/kWh</td>
                                            <th>02h-03h:</th><td className='color-red'>0.076 €/kWh</td>
                                        </tr>
                                        <tr>
                                            <th>15h-16h:</th><td className='color-green'>0.076 €/kWh</td>
                                            <th>15h-16h:</th><td className='color-red'>0.076 €/kWh</td>
                                        </tr>
                                        <tr>
                                            <th>04h-05h:</th><td className='color-green'>0.077 €/kWh</td>
                                            <th>04h-05h:</th><td className='color-red'>0.077 €/kWh</td>
                                        </tr>
                                        <tr>
                                            <th>05h-06h:</th><td className='color-green'>0.077 €/kWh</td>
                                            <th>05h-06h:</th><td className='color-red'>0.077 €/kWh</td>
                                        </tr>
                                        <tr>
                                            <th>03h-04h:</th><td className='color-green'>0.078 €/kWh</td>
                                            <th>03h-04h:</th><td className='color-red'>0.078 €/kWh</td>
                                        </tr>
                                        <tr>
                                            <th>01h-02h:</th><td className='color-green'>0.080 €/kWh</td>
                                            <th>01h-02h:</th><td className='color-red'>0.080 €/kWh</td>
                                        </tr>
                                    </tbody>
                                </table>
                                : <table className='text-center col-md-6 mx-auto'>
                                    <tbody>
                                        <tr><th>02h-03h:</th><td className='color-green'>0.076 €/kWh</td></tr>
                                        <tr><th>15h-16h:</th><td className='color-green'>0.076 €/kWh</td></tr>
                                        <tr><th>04h-05h:</th><td className='color-green'>0.077 €/kWh</td></tr>
                                        <tr><th>05h-06h:</th><td className='color-green'>0.077 €/kWh</td></tr>
                                        <tr><th>03h-04h:</th><td className='color-green'>0.078 €/kWh</td></tr>
                                        <tr><th>01h-02h:</th><td className='color-green'>0.080 €/kWh</td></tr>
                                        <tr><td>&nbsp;</td></tr>
                                        <tr><th>02h-03h:</th><td className='color-red'>0.076 €/kWh</td></tr>
                                        <tr><th>15h-16h:</th><td className='color-red'>0.076 €/kWh</td></tr>
                                        <tr><th>04h-05h:</th><td className='color-red'>0.077 €/kWh</td></tr>
                                        <tr><th>05h-06h:</th><td className='color-red'>0.077 €/kWh</td></tr>
                                        <tr><th>03h-04h:</th><td className='color-red'>0.078 €/kWh</td></tr>
                                        <tr><th>01h-02h:</th><td className='color-red'>0.080 €/kWh</td></tr>
                                    </tbody>
                                </table>
                            }
                        </div>
                    </Card>
                    <Card className='tarjeta my-4 p-4 p-md-4 shadow border-0'>
                        <TitleSection
                            center
                            title={'Precio de la luz hoy'}
                            titleAlt={'hora a hora'}
                        />
                        <p>El gráfico que verás a continuación <b>muestra el precio de la luz hora a hora, pudiéndose apreciar al mismo tiempo los picos</b> que reflejan cuándo está más elevado. Tener en el radar estos picos de precio <b>te ayudará a saber en qué períodos es más adecuado utilizar la electricidad en el hogar para ahorrar en tus facturas.</b></p>
                    </Card>
                    <Card className='tarjeta my-4 p-4 p-md-4 shadow border-0'>
                        <TitleSection
                            center
                            title={'Evolución del precio de la luz'}
                            titleAlt={'mensual'}
                        />
                        <p><b>El precio de la luz comenzó a dispararse sin control durante el primer trimestre de 2021</b> en España y también en la Unión Europea, debido al encarecimiento del gas natural. Durante el último año, con factores agravantes como el de la guerra entre Ucrania y Rusia, <b>no ha dejado de batir todos los máximos históricos.</b> Esta es la evolución del precio de la luz por meses:</p>
                    </Card>
                </Row>
            </Container>
            <ContenedorPreguntasFrecuentes data={data} image={'/img/preguntas-luz.png'} />
            <Footer></Footer>
        </>
    )
}
