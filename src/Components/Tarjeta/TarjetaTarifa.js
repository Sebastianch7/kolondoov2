import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
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


function TarjetaTarifa({ data, type }) {
    const [lang, setLang] = useState(null)
    const location = useLocation();
    const pathname = location.pathname;
    let locations = pathname.split('/');
    locations.shift();

    useEffect(() => {
        setLang(locations[0])
    }, [])

    const { id,
        destacada,
        nombre_tarifa,
        slug_tarifa,
        parrilla_bloque_1,
        parrilla_bloque_2,
        parrilla_bloque_3,
        parrilla_bloque_4,
        meses_permanencia,
        precio,
        logo,
        moneda,
        promocion,
        landingLead,
        TV,
        Netflix,
        HBO,
        AmazonPrime,
        DAZN
    } = data;
    return (
        <>
            {destacada === 1 && <div className='prioridad-oferta'>Oferta destacada</div>}
            <Card key={nombre_tarifa} className={`tarjeta tarjeta-tarifa my-2 ${destacada === 1 && 'prioridad'}`}>
                <Row className='d-flex flex-column flex-md-row'>
                    <Col md={12}>
                        <Row>
                            <Col xs={12}>
                                <div className='tarjeta-tarifa-item-title'>
                                    <img src={logo} alt={logo} />
                                    {((promocion !== null && promocion !== '') && isMobile === false) && <span className={`mx-4 align-middle`}><b>Promoción: </b>{promocion}</span>}
                                    {(isMobile === true) && <Link className='btn btn-primary btn-primary-small' to={`/${lang}${landingLead}${slug_tarifa.toLowerCase()}-${id}`}><BsArrowRight /></Link>}
                                </div>
                            </Col>
                            {(promocion !== null && isMobile === true) &&
                                <Col xs={12} className='mb-2'>
                                    <span className={`align-middle text-promotion ${destacada === 1 && 'color-primary'}`}><b>Promoción: </b>{promocion}</span>
                                </Col>
                            }
                        </Row>
                    </Col>
                    <Col md={5} className={classNames('text-left', { 'order-2': isMobile, 'color-primary': destacada === 1 })}>
                        Duración contrato: <b>{meses_permanencia === 0 ? 'Sin contrato' : `${meses_permanencia} meses`}</b>
                        <hr />
                        <ItemTarifaDescripcion destacada={destacada} text={parrilla_bloque_2} />
                        <ItemTarifaDescripcion destacada={destacada} text={parrilla_bloque_3} />
                        <ItemTarifaDescripcion destacada={destacada} text={parrilla_bloque_4} />
                        {TV === 1 && <PiTelevisionFill className='m-2' />}
                        {Netflix === 1 && <RiNetflixFill className='m-2' />}
                        {HBO === 1 && <SiHbo className='m-2' />}
                        {AmazonPrime === 1 && <FaAmazon className='m-2' />}
                        {DAZN === 1 && <SiDazn className='m-2' />}
                    </Col>
                    <Col xs={12} md={5} style={isMobile ? { order: 1 } : { order: 2 }}>
                        <Row>
                            <ItemTarifaServicio destacada={destacada} cant={parrilla_bloque_1} service={''} />
                            <ItemTarifaServicio destacada={destacada} cant={precio} precio service={'al mes'} money={moneda} />
                        </Row>
                    </Col>
                    {!isMobile && <Col md={2} style={isMobile ? { order: 3 } : { order: 3 }}>
                        <Link className='btn btn-primary' to={`/${lang}${landingLead}${slug_tarifa.toLowerCase()}-${id}`}>{`Comprar`}</Link>
                    </Col>}
                </Row>
            </Card>
        </>
    );
}

export default TarjetaTarifa;