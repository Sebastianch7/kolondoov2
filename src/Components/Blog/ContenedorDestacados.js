import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import TarjetaBlogMin from '../Tarjeta/TarjetaBlogMin'
import TitleSection from '../Text/TitleSection'
import { Card } from 'react-bootstrap'
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
            
        </Col>
    )
}
