import React, { useState, useEffect } from 'react';
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Container, Row, Col, Card } from 'react-bootstrap'
import TitleSection from '../Components/Text/TitleSection'
import { getExtraOffer } from '../services/ApiServices'
import TarjetaTarifaLeadEnergia from '../Components/Tarjeta/TarjetaTarifaLeadEnergia'
import ContenedorPreguntasFrecuentes from '../Components/Contenedor/ContenedorPreguntasFrecuentes';

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
            <Container fluid className='p-0 m-0 '>
            <Card className='tarjeta mb-4 p-5 b-gray border-0'>
                        <TitleSection
                            center
                            title={'Precio de la luz'}
                            titleAlt={'hoy'}
                        />
                        <p>El gráfico que verás a continuación <b>muestra el precio de la luz hora a hora, pudiéndose apreciar al mismo tiempo los picos</b> que reflejan cuándo está más elevado. Tener en el radar estos picos de precio <b>te ayudará a saber en qué períodos es más adecuado utilizar la electricidad en el hogar para ahorrar en tus facturas.</b></p>
                        <p>La media del <b>precio de la luz hoy 26 de Octubre de 2023,</b> es de <b>0.120 €/kWh</b> en el mercado regulado. <b>Te mostramos a continuación el precio de la luz en estos momentos,</b> así como el periodo del día en el que está resultando más económica y también más costosa. ¡Así puedes saber cuándo es la hora clave para poner tus electrodomésticos! ;)</p>
                    </Card>
            </Container>
            <Container>
                <TitleSection
                    title={'Descubre las mejores ofertas de '}
                    titleAlt={'luz para tu hogar'}
                    text1={'El precio de la luz está pulverizando todos los récords, y no hay un futuro inmediato al respecto demasiado esperanzador. Ahora, vale más la pena que nunca revisar lo que estás pagando por tu suministro de luz y plantearte cambiar de tarifa. Un buen comienzo es comparar las mejores ofertas de luz del mercado. ¡Encuentra la tarifa de luz que te lleve directo al ahorro!'}
                    center
                />
                <Row className='justify-content-md-center mb-5'>
                    <Col md={9}>
                        {extraOffer.length > 0 &&
                            extraOffer.map((item, index) => {
                                return <TarjetaTarifaLeadEnergia key={index} data={item} TarifaCard />;
                            })
                        }
                        <p className='my-4 font-09'>*Todos los precios incluyen el IVA.**Los precios están estimados en base a un consumo anual de 3.600kWh (300kWh al mes).***Los precios no incluyen costes derivados de la compensación del tope del gas.</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} className='text-center text-justify'>
                        <p><b>El precio de la electricidad</b> no es el mismo a las 5 de la tarde que a las 2 de la madrugada. <b>Cambia hora a hora</b>, como has podido observar más arriba. Ahora más que nunca <b>es importante conocer en qué franjas del día el precio es más bajo</b> (periodo valle), <b>en cuáles más elevado</b> (horas punta) <b>y en cuáles equilibrado</b> (periodo llano). Aquí tienes los seis periodos del día en los que el precio de la electricidad es más bajo y los seis con el coste de la luz más elevado.</p>
                    </Col>
                    <Card className='tarjeta my-4 p-5 shadow border-0'>
                        <TitleSection
                            center
                            title={'Horas más baratas y caras'}
                            titleAlt={'de la luz hoy'}
                        />
                        <div className='p-3'>
                            <table className='text-center col-md-6 mx-auto'>
                                <tbody>
                                    <tr><th>02h-03h:</th><td className='color-green'>0.076 €/kWh</td><th>02h-03h:</th><td className='color-red'>0.076 €/kWh</td></tr>
                                    <tr><th>15h-16h:</th><td className='color-green'>0.076 €/kWh</td><th>15h-16h:</th><td className='color-red'>0.076 €/kWh</td></tr>
                                    <tr><th>04h-05h:</th><td className='color-green'>0.077 €/kWh</td><th>04h-05h:</th><td className='color-red'>0.077 €/kWh</td></tr>
                                    <tr><th>05h-06h:</th><td className='color-green'>0.077 €/kWh</td><th>05h-06h:</th><td className='color-red'>0.077 €/kWh</td></tr>
                                    <tr><th>03h-04h:</th><td className='color-green'>0.078 €/kWh</td><th>03h-04h:</th><td className='color-red'>0.078 €/kWh</td></tr>
                                    <tr><th>01h-02h:</th><td className='color-green'>0.080 €/kWh</td><th>01h-02h:</th><td className='color-red'>0.080 €/kWh</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </Card>
                    <Card className='tarjeta my-4 p-5 shadow border-0'>
                        <TitleSection
                            center
                            title={'Precio de la luz hoy'}
                            titleAlt={'hora a hora'}
                        />
                        <p>El gráfico que verás a continuación <b>muestra el precio de la luz hora a hora, pudiéndose apreciar al mismo tiempo los picos</b> que reflejan cuándo está más elevado. Tener en el radar estos picos de precio <b>te ayudará a saber en qué períodos es más adecuado utilizar la electricidad en el hogar para ahorrar en tus facturas.</b></p>
                    </Card>
                    <Card className='tarjeta my-4 p-5 shadow border-0'>
                        <TitleSection
                            center
                            title={'Evolución del precio de la luz'}
                            titleAlt={'mensual'}
                        />
                        <p><b>El precio de la luz comenzó a dispararse sin control durante el primer trimestre de 2021</b> en España y también en la Unión Europea, debido al encarecimiento del gas natural. Durante el último año, con factores agravantes como el de la guerra entre Ucrania y Rusia, <b>no ha dejado de batir todos los máximos históricos.</b> Esta es la evolución del precio de la luz por meses:</p>
                    </Card>
                </Row>
            </Container>
            <ContenedorPreguntasFrecuentes></ContenedorPreguntasFrecuentes>
            <Footer></Footer>
        </>
    )
}
