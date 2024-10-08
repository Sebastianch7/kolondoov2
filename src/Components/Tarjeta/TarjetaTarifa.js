import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import ItemTarifaDescripcion from '../Items/ItemTarifaDescripcion';
import ItemTarifaServicio from '../Items/ItemTarifaServicio';
import { Link, Navigate, useSearchParams } from 'react-router-dom';
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

    function enlaceOfertaMobile(url) {
        window.location.href = url;
    }

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
        DAZN,
        appsIlimitadas,
        facebook,
        messenger,
        waze,
        whatsapp,
        twitter,
        duracionContrato,
        instagram,
        red5g,
        tinder,
        lolamusic,
        telefono
    } = data;
    return (
        <div>
            {destacada === 1 && <div className='prioridad-oferta font-bold'>Oferta destacada</div>}
            <Card
                onClick={isMobile ? () => enlaceOfertaMobile(`/${lang}${landingLead}${slug_tarifa.toLowerCase()}-${id}`) : undefined}
                key={nombre_tarifa}
                className={`tarjeta tarjeta-tarifa my-2 montBold ${destacada === 1 ? 'prioridad' : ''}`}
            >
                <Row className='d-flex flex-column flex-md-row'>
                    <Col md={12}>
                        <Row>
                            <Col xs={12}>
                                <div className='tarjeta-tarifa-item-title d-flex justify-content-between align-items-center'>
                                    <img src={logo} alt={logo} />
                                    {((promocion !== null && promocion !== '') && !isMobile) && <span className='mt-7px font-bold'><b className='font-bold'>Promoción: </b>{promocion}</span>}
                                    {(telefono !== '' && telefono !== null) && <><div className='d-flex d-block d-md-none flex-column text-center' style={{ 'margin-top': '-10px' }}>
                                        <span className='icon-call-title mb-1'>Llama al:</span>
                                        <div><span className='icon-call-number'>{telefono}</span></div>
                                    </div></>}
                                    {isMobile && <Link className='btn btn-dark btn-primary-small' to={`/${lang}${landingLead}${slug_tarifa.toLowerCase()}-${id}`}><BsArrowRight /></Link>}
                                </div>
                            </Col>

                            {(promocion !== null && isMobile) &&
                                <Col xs={12} className='mb-2'>
                                    <span className={`align-middle text-promotion ${destacada === 1 && 'color-primary'}`}><b>Promoción: </b>{promocion}</span>
                                </Col>
                            }
                        </Row>
                    </Col>
                    <Col md={5} className={classNames('text-left mt-2', { 'order-2': isMobile, 'color-primary': destacada === 1 })}>
                        {duracionContrato !== null ? (
                            <div className='d-block'>
                                <span className='font-bold color-dark'>Contrato: <b className='font-bold color-dark'>{duracionContrato}</b></span>
                            </div>
                        ) : (
                            <span className='font-bold color-dark'>Contrato: <b className='font-bold color-dark'>Sin contrato</b></span>
                        )}
                        {meses_permanencia !== 0 && (
                            <div className='d-block mt-2'>
                                <span className='font-bold color-dark'>Meses de permanencia: <b className='font-bold color-dark'>{meses_permanencia} meses</b></span>
                            </div>
                        )}
                        <hr className="my-2 mb-3" />
                        <ItemTarifaDescripcion destacada={destacada} text={parrilla_bloque_2} />
                        <ItemTarifaDescripcion destacada={destacada} text={parrilla_bloque_3} />
                        <ItemTarifaDescripcion destacada={destacada} text={parrilla_bloque_4} />
                        {red5g === 1 && (
                            <ItemTarifaDescripcion destacada={destacada} text={'5G'} />
                        )}
                        {TV === 1 && <PiTelevisionFill className='m-2' />}
                        {Netflix === 1 && <RiNetflixFill className='m-2' />}
                        {HBO === 1 && <SiHbo className='m-2' />}
                        {AmazonPrime === 1 && <FaAmazon className='m-2' />}
                        {DAZN === 1 && <SiDazn className='m-2' />}
                        {appsIlimitadas === 1 && (
                            <div className={`tarjeta-tarifa-item-descripcion m-1 ${destacada && 'border-primary'}`}>
                                <b className='font-bold color-dark'>Apps ilimitadas:&nbsp;</b>
                                {facebook === 1 && <img className='icon-logo-tarifa' src='/img/logos/facebook.webp' alt='Facebook' />}
                                {messenger === 1 && <img className='icon-logo-tarifa' src='/img/logos/messenger.webp' alt='Messenger' />}
                                {waze === 1 && <img className='icon-logo-tarifa' src='/img/logos/waze.webp' alt='Waze' />}
                                {whatsapp === 1 && <img className='icon-logo-tarifa' src='/img/logos/whatsapp.webp' alt='WhatsApp' />}
                                {twitter === 1 && <img className='icon-logo-tarifa' src='/img/logos/x.webp' alt='Twitter' />}
                                {instagram === 1 && <img className='icon-logo-tarifa' src='/img/logos/instagram.jpg' alt='Instagram' />}
                                {tinder === 1 && <img className='icon-logo-tarifa' src='/img/logos/tinder.png' alt='Tinder' />}
                                {lolamusic === 1 && <img className='icon-logo-tarifa' src='/img/logos/lolamusic.png' alt='lolaMusic' />}
                            </div>
                        )}

                    </Col>
                    <Col xs={12} md={5} style={isMobile ? { order: 1 } : { order: 2 }}>
                        <Row>
                            <ItemTarifaServicio destacada={destacada} cant={parrilla_bloque_1} service={''} />
                            <ItemTarifaServicio destacada={destacada} cant={precio} precio service={'al mes'} money={moneda} />
                        </Row>
                    </Col>
                    {!isMobile && <Col md={2} style={{ order: 3 }}>
                        <Link className='btn btn-dark mt-2' to={`/${lang}${landingLead}${slug_tarifa.toLowerCase()}-${id}`}>Comprar</Link>
                        {(telefono !== '' && telefono !== null) && <><div className='d-flex justify-content-around align-items-center' style={{ 'height': '50px' }}><img className='icon-call' src='/img/icons/telefono.svg' /><span className='icon-call-title'>O llama al:</span></div>
                            <div><span className='icon-call-number'>{telefono}</span></div></>}
                    </Col>}
                </Row>
            </Card>
        </div>

    );
}

export default TarjetaTarifa;