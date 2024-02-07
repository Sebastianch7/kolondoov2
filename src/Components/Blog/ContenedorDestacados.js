import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import TarjetaBlogMin from '../Tarjeta/TarjetaBlogMin'
import { getBlog } from '../../services/ApiServices';
import Load from '../Utils/Load'

export default function ContenedorDestacados({}) {
    const [fetchBlog, setFetchBlog] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true);
        const fetchBlogList = async () => {
            try {
                const response = await getBlog('destacado');
                setFetchBlog(response);
                setIsLoading(false);
            } catch (error) {
                console.error('Error al obtener blog:', error);
            }
        };
        fetchBlogList();
    }, []);
    return (
        <Col xs={12} md={12}>
            {/* <TitleSection
                title={'Destacados'}
                center
            /> */}
            {!isLoading ?
                fetchBlog.length > 0 &&
                fetchBlog.map((item, index) => {
                    return <TarjetaBlogMin categorias={'destacado'} key={index} data={item} />
                })
                :
                <Load></Load>
            }
            
        </Col>
    )
}
