import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import ItemTarifaDescripcion from '../Items/ItemTarifaDescripcion';
import { Link, useLocation } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { BsArrowRight } from 'react-icons/bs';

function TarjetaTarifaLeadPrestamo({ data }) {
    const [lang, setLang] = useState(null)
    const location = useLocation();

    useEffect(() => {
        setLang(location.pathname.split('/')[1])
    }, [location])
    console.log(data)
    const { copago = null, selector_1, precio_1, divisa_1, selector1, destacada, valorMaximo, parrilla_1, parrilla_2, parrilla_3, parrilla_4, url_redirct } = data;
    return (
        <Col xs={12}>
            {destacada === 1 && <div className='prioridad-oferta'>Oferta destacada</div>}
            <Card key={0} className={`tarjeta tarjeta-tarifa my-0 ${destacada === 1 ? 'prioridad' : ''}`}>
                <Card.Body>
                    <Row className={`d-flex justify-content-start align-content-start`}>
                        {copago == 1 && <ItemTarifaDescripcion destacada={destacada} title={'Con copago'} />}
                        {copago == 2 && <ItemTarifaDescripcion destacada={destacada} title={'Sin copago'} />}
                        {selector_1 && <ItemTarifaDescripcion destacada={destacada} title={selector_1+' '+precio_1+' '+divisa_1} />}
                        {selector1 && <ItemTarifaDescripcion destacada={destacada} title={selector1} />}
                        {valorMaximo > 0 && <ItemTarifaDescripcion destacada={destacada} title={`Monto máximo ${valorMaximo.toLocaleString()}`} />}
                    </Row>
                    <Row className='mt-4'>

                        {parrilla_1 != null && <Col xs={12} md={3}><div className="prestamo-informacion">
                            <div className='text-left m-2'>
                                <img className='d-block mb-2' src='/img/logos/check-item.svg' />
                                <span>{parrilla_1}</span></div>
                        </div></Col>}

                        {parrilla_2 != null && <Col xs={12} md={3}><div className="prestamo-informacion">
                            <div className='text-left m-2'>
                                <img className='d-block mb-2' src='/img/logos/check-item.svg' />
                                <span>{parrilla_2}</span></div>
                        </div></Col>}
                        {parrilla_3 != null && <Col xs={12} md={3}><div className="prestamo-informacion">
                            <div className='text-left m-2'>
                                <img className='d-block mb-2' src='/img/logos/check-item.svg' />
                                <span>{parrilla_3}</span></div>
                        </div></Col>}
                        {parrilla_4 != null && <Col xs={12} md={3}><div className="prestamo-informacion">
                            <div className='text-left m-2'>
                                <img className='d-block mb-2' src='/img/logos/check-item.svg' />
                                <span>{parrilla_4}</span></div>
                        </div></Col>}



                    </Row>
                </Card.Body>
            </Card >
        </Col >
    );
}

export default TarjetaTarifaLeadPrestamo;