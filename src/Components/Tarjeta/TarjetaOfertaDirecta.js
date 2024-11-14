import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import ItemImagenRedonda from '../Items/ItemImagenRedonda'

export default function TarjetaOfertaDirecta({data}) {
    return (

        <Card className='h-100 bg-secundary border-0 rounded-0'>
            <Card.Body className='my-5 d-flex flex-column justify-content-center align-items-center'>
                <h2 className='color-primary'>¡Oferta disponible!</h2>
                <a target='_blank' href={data.url_redirct} className='btn btn-primary px-5 py-3'>MÁS INFORMACIÓN</a>
            </Card.Body>
        </Card>


    )
}
