import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import ItemTarifaDescripcion from '../Items/ItemTarifaDescripcion';
import ItemTarifaServicio from '../Items/ItemTarifaServicio';
import { Link, useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { BsArrowRight } from "react-icons/bs";

function TarjetaTarifa({ data, type }) {
    const [lang, setLang] = useState(null)
    const location = useLocation();
    const pathname = location.pathname;
    let locations = pathname.split('/');
    locations.shift();
    
    useEffect(() => {
        setLang(locations[0])
    },[])

    const { id, nombre_tarifa, parrilla_bloque_1, parrilla_bloque_2, parrilla_bloque_3, parrilla_bloque_4, meses_permanencia, precio, logo, moneda, promocion, landingLead } = data;

    return (
        <Card key={nombre_tarifa} className='tarjeta tarjeta-tarifa my-2'>
            <Row className='d-flex flex-column flex-md-row'>
                <Col md={12}>
                    <Row>
                        <Col xs={12}>
                            <div className='tarjeta-tarifa-item-title'>
                                <img src={logo} alt={logo} />
                                {((promocion !== null && promocion !== '') && isMobile === false) && <span className='mx-4 align-middle'><b>Promoción: </b>{promocion}</span>}
                                {(isMobile === true) && <Link className='btn btn-primary btn-primary-small' to={`/${lang}${landingLead}${id}`}><BsArrowRight /></Link>}
                            </div>
                        </Col>
                        {(promocion !== null && isMobile === true) &&
                            <Col xs={12} className='mb-2'>
                                <span className='align-middle text-promotion'><b>Promoción: </b>{promocion}</span>
                            </Col>
                        }
                    </Row>
                </Col>
                <Col md={5} className='text-left' style={isMobile ? { order: 2 } : { order: 1 }}>
                    Duración contrato: <b>{meses_permanencia === 0 ? 'Sin contrato' : `${meses_permanencia} meses`}</b>
                    <hr />
                    {type !== 'gas' && <ItemTarifaDescripcion text={parrilla_bloque_1} />}
                    <ItemTarifaDescripcion text={parrilla_bloque_2} />
                    <ItemTarifaDescripcion text={parrilla_bloque_3} />
                    <ItemTarifaDescripcion text={parrilla_bloque_4} />
                </Col>
                <Col xs={12} md={5} style={isMobile ? { order: 1 } : { order: 2 }}>
                    <Row>
                        <ItemTarifaServicio cant={parrilla_bloque_1} service={''} />
                        <ItemTarifaServicio cant={precio} service={'al mes'} money={moneda} />
                    </Row>
                </Col>
                {!isMobile && <Col md={2} style={isMobile ? { order: 3 } : { order: 3 }}>
                    <Link className='btn btn-primary' to={`/${lang}${landingLead}${id}`}>{`Comprar`}</Link>
                </Col>}
            </Row>
        </Card>
    );
}

export default TarjetaTarifa;