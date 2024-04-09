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
    const { id,
        landing_link,
        permanencia,
        funcion,
        nombre_tarifa,
        detalles_tarifa,
        categoria,
        recomendaciones,
        titulo_relativo_1,
        precio_relativo_1,
        titulo_relativo_2,
        precio_relativo_2,
        titulo_relativo_3,
        precio_relativo_3,
        parrilla_bloque_1,
        precio_parrilla_bloque_1,
        parrilla_bloque_2,
        precio_parrilla_bloque_2,
        parrilla_bloque_3,
        precio_parrilla_bloque_3,
        parrilla_bloque_4,
        precio_parrilla_bloque_4,
        num_meses_promo,
        porcentaje_descuento,
        logo,
        promocion,
        destacada,
        tarifa_activa,
        fecha_publicacion,
        fecha_expiracion,
        fecha_registro,
        moneda,
        landingLead,
        slug_tarifa, } = data;
    return (
        <>
            <Card key={''} className='m-1 mx-md-3 tarjeta-tarifa-streaming tarjeta'>
                <Row className='p-2'>
                    <Col xs={12} md={12}>
                        <Row>
                            <Col xs={12}>
                                <div className='tarjeta-tarifa-streaming-item-title text-center'>
                                    <img src={logo} alt={logo} />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12} className='tarjeta-tarifa-streaming-header'>
                        <h6>{categoria}</h6>
                        <p className='font-09'>
                            {recomendaciones}
                            {titulo_relativo_1 != '' &&
                                <div className='my-2'>
                                    <b>{titulo_relativo_1}</b> {precio_relativo_1}{moneda}
                                </div>
                            }
                            {titulo_relativo_2 != '' &&
                                <div className='my-2'>
                                    <b>{titulo_relativo_2}</b> {precio_relativo_2}{moneda}
                                </div>
                            }
                            {titulo_relativo_3 != '' &&
                                <div className='my-2'>
                                    <b>{titulo_relativo_3}</b> {precio_relativo_3}{moneda}
                                </div>
                            }
                        </p>
                    </Col>
                    <Col xs={12} md={12} className='tarjeta-tarifa-streaming-content'>
                        <Row>
                            {(precio_parrilla_bloque_2 > 0 || parrilla_bloque_1 != 'NULL') && <ItemTarifaStreaming cant={parrilla_bloque_1} service={precio_parrilla_bloque_1} money={moneda} />}
                            {(precio_parrilla_bloque_2 > 0) && <ItemTarifaStreaming cant={parrilla_bloque_2} service={precio_parrilla_bloque_2} money={moneda} />}
                            {(precio_parrilla_bloque_3 > 0) && <ItemTarifaStreaming cant={parrilla_bloque_3} service={precio_parrilla_bloque_3} money={moneda} />}
                            {(precio_parrilla_bloque_4 > 0) && <ItemTarifaStreaming cant={parrilla_bloque_4} service={precio_parrilla_bloque_4} money={moneda} />}
                        </Row>
                    </Col>
                    <Col xs={12} md={12}>
                        <Link className='btn btn-primary w-100' rel='nofollow noopener noreferrer' to={`${landingLead}`} target="_blank">{`Contratar`}</Link>
                    </Col>
                </Row>
            </Card>
        </>
    );
}

export default TarjetaTarifaStreaming;