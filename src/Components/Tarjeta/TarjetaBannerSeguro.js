import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ItemImagenRedonda from '../Items/ItemImagenRedonda'

export default function TarjetaBannerSeguro() {
    return (
        <div className='col-auto card card-banner-seguros overflow-hidden overflow-scroll'>
            <div className='card-body'>
                <Row className='d-flex'>
                    <Col md={12} className='d-flex'>
                    <ItemImagenRedonda titulo={'Precios y tarifas'} imagen={'/img/seguros/banner_1.png'} />
                    <ItemImagenRedonda titulo={'Cuota mensual'} imagen={'/img/seguros/banner_2.png'} />
                    <ItemImagenRedonda titulo={'Coste instalación'} imagen={'/img/seguros/banner_3.png'} />
                    <ItemImagenRedonda titulo={'Coste equipo'} imagen={'/img/seguros/banner_4.png'} />
                    <ItemImagenRedonda titulo={'Equipos'} imagen={'/img/seguros/banner_5.png'} />
                    </Col>
                </Row>
            </div>
        </div>
    )
}
