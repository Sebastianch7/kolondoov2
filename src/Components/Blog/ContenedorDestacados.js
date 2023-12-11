import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import TarjetaBlogMin from '../Tarjeta/TarjetaBlogMin'
import TitleSection from '../Text/TitleSection'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getBlogDestacados } from '../../services/ApiServices';
import Load from '../Utils/Load'

export default function ContenedorDestacados() {
    const [fetchBlog, setFetchBlog] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true);
        const fetchBlogList = async () => {
            try {
                const response = await getBlogDestacados();
                setFetchBlog(response);
                setIsLoading(false);
            } catch (error) {
                console.error('Error al obtener blog:', error);
            }
        };
        fetchBlogList();
    }, []);
    return (
        <Col xs={12} md={4}>
            <TitleSection
                title={'Destacados'}
                center
            />
            {!isLoading ?
                fetchBlog.length > 0 &&
                fetchBlog.map((item, index) => {
                    return <TarjetaBlogMin data={item} />
                })
                :
                <Load></Load>
            }
            <Card className='m-2 tarjeta tarjeta-blog tarjeta-blog-min h-categorias text-center'>
                <Card.Title className='mt-4'>Categorías</Card.Title>
                <Card.Body>
                    <ul>
                        <li><a href={'/blog/'} className='no-enlace'>Todas</a></li>
                        <li><a href={'/blog/mas-visitadas'} className='no-enlace'>Más visitadas</a></li>
                        <li><a href={'/blog/internet'} className='no-enlace'>Internet</a></li>{/* 1 */}
                        <li><a href={'/blog/movil'} className='no-enlace'>Móvil</a></li>{/* 2 */}
                        <li><a href={'/blog/television'} className='no-enlace'>Televisión</a></li>{/* 3 */}
                        <li><a href={'/blog/energia'} className='no-enlace'>Energía</a></li>{/* 4 */}
                        <li><a href={'/blog/hogar'} className='no-enlace'>Hogar</a></li>{/* 5 */}
                        <li><a href={'/blog/seguros'} className='no-enlace'>Seguros</a></li>{/* 7 */}
                        <li><a href={'/blog/mejores-ofertas'} className='no-enlace'>Mejores ofertas</a></li>{/* 6 */}
                    </ul>
                </Card.Body>
            </Card>
        </Col>
    )
}
