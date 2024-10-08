import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ItemImagenRedonda from '../Items/ItemImagenRedonda'

export default function TarjetaBannerSeguroSalud() {
    return (
        <div className='col-auto card card-banner-seguros'>
            <div className='card-body p-0'>
                <Row>
                    <Col md={12} className='d-flex flex-column flex-md-row'>
                        <ItemImagenRedonda titulo={'Con copago'} imagen={'/img/seguros/banner_salud_1.png'} />
                        <ItemImagenRedonda titulo={'Sin copago'} imagen={'/img/seguros/banner_salud_2.png'} />
                    </Col>
                </Row>
            </div>
        </div>
    )
}
