import React from 'react'
import { Col, Row } from 'react-bootstrap'
import TarjetaBlogMin from '../Tarjeta/TarjetaBlogMin'
import TitleSection from '../Text/TitleSection'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ContenedorDestacados() {
    return (
        <Col xs={12} md={4}>
            <TitleSection
                title={'Destacados'}
                center
            />
            <TarjetaBlogMin />
            <TarjetaBlogMin />
            <TarjetaBlogMin />
            <TarjetaBlogMin />
            <Card className='m-2 tarjeta tarjeta-blog tarjeta-blog-min h-categorias text-center'>
                <Card.Title className='mt-4'>Categorías</Card.Title>
                <Card.Body>
                    <ul>
                        <li><Link to={'/blog/'} className='no-enlace'>Todas</Link></li>
                        <li><Link to={'/blog/mas-visitadas'} className='no-enlace'>Más visitadas</Link></li>
                        <li><Link to={'/blog/internet'} className='no-enlace'>Internet</Link></li>
                        <li><Link to={'/blog/movil'} className='no-enlace'>Móvil</Link></li>
                        <li><Link to={'/blog/televisión'} className='no-enlace'>Televisión</Link></li>
                        <li><Link to={'/blog/energía'} className='no-enlace'>Energía</Link></li>
                        <li><Link to={'/blog/hogar'} className='no-enlace'>Hogar</Link></li>
                        <li><Link to={'/blog/seguros'} className='no-enlace'>Seguros</Link></li>
                        <li><Link to={'/blog/mejores-ofertas'} className='no-enlace'>Mejores ofertas</Link></li>
                    </ul>
                </Card.Body>
            </Card>
        </Col>
    )
}
