import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import ItemTarifaServicio from '../Items/ItemTarifaServicio';
import ItemTarifaLuz from '../Items/ItemTarifaLuz';
import ItemTarifaDescripcion from '../Items/ItemTarifaDescripcion';
import { isMobile } from 'react-device-detect';
import { BsArrowRight } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom';

export default function TarjetaTarifaLeadGas({ data, TarifaCard }) {
    const [lang, setLang] = useState(null);
    const location = useLocation();
    const pathname = location.pathname;
    const locations = pathname.split('/').filter(Boolean);

    useEffect(() => {
        setLang(locations[0]);
    }, [locations]);

    const {
        destacada,
        landing_link,
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
        gas_precio_termino_fijo,
        gas_precio_termino_variable
    } = data;

    return (
        <>
            {destacada === 1 && <div className='prioridad-oferta font-bold'>Oferta destacada</div>}
            <Card className='tarjeta my-2'>
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                        <Row>
                            {TarifaCard && (
                                <Col xs={12}>
                                    <div className='tarjeta-tarifa-item-title'>
                                        <img src={logo} alt="Logo" />
                                        {(promocion && !isMobile) && (
                                            <span className={`align-middle text-promotion ${destacada === 1 && 'color-primary'}`}>
                                                <b>Promoción: </b>{promocion}
                                            </span>
                                        )}
                                        {isMobile && (
                                            <Link className='btn btn-dark btn-primary-small' to={landing_link || `/${lang}${landingLead}${slug_tarifa}-${id}`}>
                                                <BsArrowRight />
                                            </Link>
                                        )}
                                    </div>
                                </Col>
                            )}
                            <Col md={9}>
                                <Row>
                                    <Col md={6} xs={12}>
                                        <h6>Términos</h6>
                                        <Row className='d-flex'>
                                            <ItemTarifaLuz title="Fija" value={gas_precio_termino_fijo} extension="€/kW" />
                                        </Row>
                                    </Col>
                                    <Col md={6} xs={12}>
                                        <h6>&nbsp;</h6>
                                        <Row className='d-flex'>
                                            <ItemTarifaLuz title="Variable" value={gas_precio_termino_variable} extension="€/kW" />
                                        </Row>
                                    </Col>
                                    <Col md={12} className='d-flex justify-content-around vertical-items my-3'>
                                        <ItemTarifaDescripcion destacada={destacada} text={parrilla_bloque_1} />
                                        <ItemTarifaDescripcion destacada={destacada} text={parrilla_bloque_2} />
                                        <ItemTarifaDescripcion destacada={destacada} text={parrilla_bloque_3} />
                                        <ItemTarifaDescripcion destacada={destacada} text={parrilla_bloque_4} />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={3}>
                                <Row>
                                    <ItemTarifaServicio cant={precio} service="" design="small" money="€" />
                                    {!isMobile && TarifaCard && (
                                        <Col md={12} className="order-3">
                                            {telefono ? (
                                                <>
                                                    <div className='text-center' style={{ height: '20px' }}>
                                                        <img className='icon-call me-2 mt-0' src='/img/icons/telefono.svg' alt="Teléfono" />
                                                        <span className='icon-call-title'>Llama al:</span>
                                                    </div>
                                                    <Link className='btn btn-primary text-center w-100 my-2' to={`tel:${telefono}`}>{telefono}</Link>
                                                </>
                                            ) : (
                                                <Link className='btn btn-primary text-center w-100 my-2' target={landing_link ? '_self' : undefined} to={landing_link || `/${lang}${landingLead}${slug_tarifa}-${id}`}>
                                                    Ir a la oferta
                                                </Link>
                                            )}
                                        </Col>
                                    )}
                                </Row>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}