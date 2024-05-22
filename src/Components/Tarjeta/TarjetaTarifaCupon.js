import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Accordion } from 'react-bootstrap';
import ItemTarifaDescripcion from '../Items/ItemTarifaDescripcion';
import ItemTarifaServicio from '../Items/ItemTarifaServicio';
import { Link, useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { BsArrowRight } from "react-icons/bs";
import { RiNetflixFill } from "react-icons/ri";
import { SiHbo } from "react-icons/si";
import { SiAmazonprime } from "react-icons/si";
import { SiDazn } from "react-icons/si";
import { PiTelevisionFill } from "react-icons/pi";
import { FaAmazon } from "react-icons/fa";
import classNames from 'classnames';


function TarjetaTarifaCupon({ data, type }) {
    console.log(data)
    const [lang, setLang] = useState(null)
    const location = useLocation();
    const pathname = location.pathname;
    let locations = pathname.split('/');
    locations.shift();

    useEffect(() => {
        setLang(locations[0])
    }, [])

    const { id,
        comercio,
        funcion,
        categoria,
        descripcion,
        nombre_tarifa,
        destacada,
        fecha_expiracion,
        landingLead,
        moneda,
        texto_adicional,
        logo,
        promocion,
        slug_tarifa,
        pais,
        nombre,
        dias_restantes
    } = data;
    return (
        <>
            {destacada === 1 && <div className='prioridad-oferta'>Oferta destacada</div>}
            <Card key={nombre_tarifa} className={`tarjeta tarjeta-tarifa my-2 ${destacada === 1 && 'prioridad'}`}>
                <Row className='d-flex flex-column flex-md-row'>
                    <Col xs={12}>
                        <Row>
                            <Col xs={12}>
                                <div className='tarjeta-tarifa-item-title justify-content-between'>
                                    <Row className='col-12'>
                                        <Col xs={12} md={8}><img src={logo} alt={logo} /></Col>
                                        <Col xs={12} md={4} className='descuento'>{promocion}</Col>
                                    </Row>
                                    {/* {(isMobile === true) &&
                                        <Link className='btn btn-primary btn-primary-small'
                                            to={`/${lang}${landingLead}${slug_tarifa.toLowerCase()}-${id}`}>
                                            <BsArrowRight />
                                        </Link>} */}
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={10} className={classNames('text-left', { 'order-2': isMobile, 'color-primary': destacada === 1 })}>
                        <ItemTarifaDescripcion destacada={destacada} text={`Oferta válida para: ${pais}`} />
                        <ItemTarifaDescripcion destacada={destacada} text={`Expira en ${dias_restantes} días`} />
                    </Col>
                    {!isMobile &&
                        <Col md={2} style={isMobile ? { order: 3 } : { order: 3 }}>
                            <Link className='btn btn-primary p-3' to={`/${lang}${landingLead}${slug_tarifa.toLowerCase()}-${id}`}>
                                {`Obtener descuento`}</Link>
                        </Col>}
                </Row>
                <hr />
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey={1} className='border text-left-list'>
                        <Accordion.Header></Accordion.Header>
                        <Accordion.Body className='py-0'>
                            <ul>
                                <li><b>Tienda:</b></li>
                                <li className='mx-3'>{nombre}</li>
                                <li><b>Descripción:</b></li>
                                <li className='mx-3'>{descripcion}</li>
                                <li><b>Oferta válida para:</b></li>
                                <li className='mx-3'>{pais}</li>
                                <li><b>Fecha de expiración de la oferta:</b></li>
                                <li className='mx-3'>{fecha_expiracion}</li>

                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </Card>
        </>
    );
}

export default TarjetaTarifaCupon;