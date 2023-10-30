import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import ItemTarifaDescripcion from '../Items/ItemTarifaDescripcion';
import ItemTarifaServicio from '../Items/ItemTarifaServicio';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { BsArrowRight } from "react-icons/bs";
import ItemTarifaStreaming from '../Items/ItemTarifaStreaming';

function TarjetaTarifaStreaming({ data }) {
    const { logo, productos, series, precio_min, precio_max, precio_estandar } = data;
    return (
        <>
            <Col xs={11} md={12} className='mx-auto'>
                <Card key={''} className='tarjeta tarjeta-tarifa-streaming'>
                    <Row className='p-2'>
                        <Col md={12}>
                            <Row>
                                <Col xs={12}>
                                    <div className='tarjeta-tarifa-streaming-item-title text-center'>
                                        <img src={logo} alt={logo} />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={12} className='tarjeta-tarifa-streaming-header'>
                            <h6>Series/películas exclusivas:</h6>
                            <p className='font-09'>
                                {series}
                                {precio_min &&
                                    <div className='my-2'>
                                        <b>Precio plan más básico:</b> {precio_min}
                                    </div>
                                }
                                {precio_max &&
                                    <div className='my-2'>
                                        <b>Precio plan más completo:</b> {precio_max}
                                    </div>
                                }
                                {precio_estandar &&
                                    <div className='my-2'>
                                        <b>Precio estándar:</b> {precio_estandar}
                                    </div>
                                }
                            </p>
                        </Col>
                        <Col xs={12} md={12} className='tarjeta-tarifa-streaming-content'>
                            <Row>
                                {productos.length > 0 &&
                                    productos.map((item, index) => {
                                        return <ItemTarifaStreaming key={index} cant={item.titulo} service={item.precio} money={''} />
                                    })
                                }
                            </Row>
                        </Col>
                        <Col xs={12} md={12}>
                        <Link className='btn btn-primary w-100' /* to={`${'landingLead'}/${1}`} */>{`Contratar`}</Link>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </>
    );
}

export default TarjetaTarifaStreaming;