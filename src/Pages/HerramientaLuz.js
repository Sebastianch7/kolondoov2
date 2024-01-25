import React, { useState, useEffect } from 'react';
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Container, Row, Col, Card } from 'react-bootstrap'
import TitleSection from '../Components/Text/TitleSection'
import { getExtraOffer } from '../services/ApiServices'
import TarjetaTarifaLeadEnergia from '../Components/Tarjeta/TarjetaTarifaLeadEnergia'
import ContenedorPreguntasFrecuentes from '../Components/Contenedor/ContenedorPreguntasFrecuentes';
import { getPriceLightService } from '../services/ApiServices';
import ContenedorHerramientasLuz from '../Components/Contenedor/ContenedorHerramientasLuz';
import ChartLineal from '../Components/Chart/ChartLuzDia';
import ChartLuzMonth from '../Components/Chart/ChartLuzMonth';
import preguntasFrecuentes from '../Content/PreguntasFrecuentesPrecioLuz.json'
import MetaData from '../Components/Header/SeoMetadata';

export default function HerramientaLuz() {

    const [isLoading, setIsLoading] = useState(true);
    const [infoPrice, setInfoPrice] = useState([]);
    const [infoPriceMedia, setInfoPriceMedia] = useState(null);
    const [infoPriceSort, setInfoPriceSort] = useState([]);
    const [extraOffer, setExtraOffer] = useState([]);
    const fechaActual = new Date();
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    useEffect(() => {
        setIsLoading(true)
        const fetchTarifasLuz = async () => {
            try {
                const response = await getPriceLightService();
                setInfoPrice(response)
            } catch (error) {
                console.error("Error al obtener informacion:", error);
            }
        };
        fetchTarifasLuz();
    }, [])

    useEffect(() => {
        setIsLoading(true)
        setInfoPriceSort(infoPrice)
        const sumaDeValores = infoPrice.reduce((acumulador, elemento) => acumulador + elemento.value, 0);
        const cantidadDeElementos = infoPrice.length;
        setInfoPriceMedia(Math.round(sumaDeValores / 24))
    }, [infoPrice])

    useEffect(() => {
        const fetchTariffs = async () => {
            try {
                const response = await getExtraOffer('luz')
                setExtraOffer(response);
                setIsLoading(false)
            } catch (error) {
                console.error("Error al obtener informacion:", error);
            }
        };

        fetchTariffs();
    }, []);


    return (
        <>
        <MetaData titulo={'Precio de la Luz Hoy: Tarifas actualizadas y tendencias | Vuskoo'} descripcion={'Descubre el precio de la luz hoy y mantente informado sobre las tarifas eléctricas actuales. Analiza las tendencias del mercado energético y del consumo'}/>
            <Header breadCrumb></Header>
            <Container fluid className='p-md-0 m-md-0 mx-xxl-auto'>
                <Card className='tarjeta p-sm-5 b-gray border-0'>
                    <TitleSection
                        center
                        title={'Precio de la luz'}
                        titleAlt={'hoy'}
                    />
                    <ContenedorHerramientasLuz promedio={infoPriceMedia} />
                    <p>La media del <b>precio de la luz hoy {fechaActual.getDate()} de {meses[fechaActual.getMonth()]} de {fechaActual.getFullYear()},</b> es de <b>{infoPriceMedia / 1000} €/kWh</b> en el mercado regulado. <b>Te mostramos a continuación el precio de la luz en estos momentos,</b> así como el periodo del día en el que está resultando más económica y también más costosa. ¡Así puedes saber cuándo es la hora clave para poner tus electrodomésticos! ;)</p>
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

                            <Row className="d-flex justify-content-center text-center">
                                <Col md={1} className='d-none d-md-block'>
                                    <img src="/img/flechaIncremento.svg" />
                                </Col>
                                <Col xs={12} md={3}>
                                    {
                                        infoPriceSort.sort((a, b) => a.value - b.value).map((item, index) => {
                                            if (index < 6) {
                                                let fecha = new Date(item.datetime)
                                                let fecha2 = item.datetime.split('T')
                                                return <p><b className="">{fecha2[1].split(':')[0]}h - {parseInt(fecha2[1].split(':')[0]) + 1 < 10 ? `0${parseInt(fecha2[1].split(':')[0]) + 1}` : parseInt(fecha2[1].split(':')[0]) + 1}h:</b>&nbsp;<b className="color-green font-heavy">0.{Math.round(item.value)} €/kWh</b></p>
                                            }
                                        })
                                    }
                                </Col>
                                <Col md={{ span: 1, offset: 1 }}></Col>
                                <Col md={1} className='d-none d-md-block'>
                                    <img src="/img/flechaIncremento.svg" />
                                </Col>
                                <Col xs={12} md={3}>
                                    {
                                        infoPriceSort.sort((a, b) => a.value + b.value).reverse().map((item, index) => {
                                            if (index < 6) {
                                                let fecha = new Date(item.datetime)
                                                let fecha2 = item.datetime.split('T')
                                                return <p><b className="">{fecha2[1].split(':')[0]}h - {parseInt(fecha2[1].split(':')[0]) + 1 < 10 ? `0${parseInt(fecha2[1].split(':')[0]) + 1}` : parseInt(fecha2[1].split(':')[0]) + 1}h:</b>&nbsp;<b className="color-red font-heavy">0.{Math.round(item.value)} €/kWh</b></p>
                                            }
                                        })
                                    }
                                </Col>
                            </Row>
                        </div>
                    </Card>
                    <Card className='tarjeta my-4 p-4 p-md-4 shadow border-0'>
                        <TitleSection
                            center
                            title={'Precio de la luz hoy'}
                            titleAlt={'hora a hora'}
                        />
                        <p>El gráfico que verás a continuación <b>muestra el precio de la luz hora a hora, pudiéndose apreciar al mismo tiempo los picos</b> que reflejan cuándo está más elevado. Tener en el radar estos picos de precio <b>te ayudará a saber en qué períodos es más adecuado utilizar la electricidad en el hogar para ahorrar en tus facturas.</b></p>
                        <ChartLineal />
                    </Card>
                    <Card className='tarjeta my-4 p-4 p-md-4 shadow border-0'>
                        <TitleSection
                            center
                            title={'Evolución del precio de la luz'}
                            titleAlt={'mensual'}
                        />
                        <p><b>El precio de la luz comenzó a dispararse sin control durante el primer trimestre de 2021</b> en España y también en la Unión Europea, debido al encarecimiento del gas natural. Durante el último año, con factores agravantes como el de la guerra entre Ucrania y Rusia, <b>no ha dejado de batir todos los máximos históricos.</b> Esta es la evolución del precio de la luz por meses:</p>
                        <ChartLuzMonth />
                    </Card>
                </Row>
            </Container>
            <ContenedorPreguntasFrecuentes data={preguntasFrecuentes} image={'/img/preguntas-luz.png'} />
            <Footer></Footer>
        </>
    )
}
