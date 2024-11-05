import React, { useState, useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import ItemTarifaServicio from '../Items/ItemTarifaServicio'
import ItemTarifaLuz from '../Items/ItemTarifaLuz'
import ItemTarifaDescripcion from '../Items/ItemTarifaDescripcion'
import { isMobile } from 'react-device-detect';
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function TarjetaTarifaLeadEnergia({ data, TarifaCard }) {
    const [tarifa] = useState(null)

    const [lang, setLang] = useState(null)
    const location = useLocation();
    const pathname = location.pathname;
    let locations = pathname.split('/');
    locations.shift();

    useEffect(() => {
        setLang(locations[0])
    }, [])

    const {
        destacada,
        landing_link,
        luz_precio_energia_24h,
        logo,
        id,
        parrilla_bloque_1,
        parrilla_bloque_2,
        parrilla_bloque_3,
        parrilla_bloque_4,
        precio,
        slug_tarifa,
        landingLead,
        promocion,
        telefono,
        luz_indexada
    } = data

    return (
        <>
            {destacada === 1 && <div className='prioridad-oferta font-bold'>Oferta destacada</div>}
            <Card className={`tarjeta my-2 ${destacada === 1 ? 'prioridad' : ''}`}>
                <Card.Body className='pt-0'>

                    <Row>
                        {TarifaCard && <Col xs={12}>
                            <div className='tarjeta-tarifa-item-title'>
                                <img src={logo} alt={logo} />
                                {((promocion !== null && promocion !== '') && isMobile === false) && <span className={`align-middle text-promotion ${destacada === 1 && 'color-primary'}`}><b>Promoción: </b>{promocion}</span>}
                                {isMobile && <Link className='btn btn-dark btn-primary-small' to={landing_link === null ? `/es${landingLead}${slug_tarifa.toLowerCase()}-${id}` : landing_link}><BsArrowRight /></Link>}
                            </div>
                        </Col>}
                        <Col md={9}>
                            <Row>
                                <Col md={6} xs={6}>
                                    <h6>Potencia</h6>
                                    <Row className='d-flex'>
                                        <ItemTarifaLuz title={'Valle'} value={data?.luz_precio_potencia_valle} extension={'€/kW'} />
                                        <ItemTarifaLuz title={'Punta'} value={data?.luz_precio_potencia_punta} extension={'€/kW'} />
                                    </Row>
                                </Col>
                                <Col md={6} xs={6}>
                                    <h6>Energía</h6>
                                    {parseInt(luz_precio_energia_24h) !== 0 ?
                                        <Row className='d-flex'>
                                            <ItemTarifaLuz title={'Valle'} value={data?.luz_precio_energia_punta} extension={'€/kWh'} />
                                            <ItemTarifaLuz title={'LLano'} value={data?.luz_precio_energia_llano} extension={'€/kWh'} />
                                            <ItemTarifaLuz title={'Punta'} value={data?.luz_precio_energia_punta} extension={'€/kWh'} />
                                        </Row>
                                        :
                                        <Row className='d-flex'>
                                            <ItemTarifaLuz title={'24h'} value={data?.luz_precio_energia_24h} extension={'€/kWh'} />
                                        </Row>
                                    }
                                </Col>
                            </Row>
                        </Col>
                        <Col md={3}>
                            <Row>
                                <ItemTarifaServicio cant={precio} service={''} design={"small"} money={'€'} indexada={luz_indexada} />
                                {!isMobile && TarifaCard && (
                                    <Col xs={12} style={isMobile ? { order: 3 } : { order: 3 }}>
                                        {telefono === null ?
                                            <Link className='btn btn-primary text-center w-100 my-2' target={landing_link !== null && '_self'} to={landing_link === null ? `/es${landingLead}${slug_tarifa.toLowerCase()}-${id}` : landing_link}>{`Ir a la oferta`}</Link>
                                            :
                                            <>
                                                <div className='text-center' style={{ 'height': '20px' }}><img className='icon-call me-2 mt-0' src='/img/icons/telefono.svg' /><span className='icon-call-title'>Llama al:</span></div>
                                                <Link className='btn btn-primary text-center w-100 my-2' to={`tel:${telefono}`}>{telefono}</Link>
                                            </>
                                        }
                                    </Col>
                                )}
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className='d-flex justify-content-around vertical-items mt-4'>
                            <ItemTarifaDescripcion destacada={destacada} text={parrilla_bloque_1} />
                            <ItemTarifaDescripcion destacada={destacada} text={parrilla_bloque_2} />
                            <ItemTarifaDescripcion destacada={destacada} text={parrilla_bloque_3} />
                            <ItemTarifaDescripcion destacada={destacada} text={parrilla_bloque_4} />
                        </Col>
                    </Row>

                </Card.Body>

            </Card>
        </>
    )
}
