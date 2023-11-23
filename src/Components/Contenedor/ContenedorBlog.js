import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TarjetaItemBlog from '../Tarjeta/TarjetaItemBlog'
import ContenedorDestacados from '../Blog/ContenedorDestacados'
import { getBlog } from '../../services/ApiServices'
import Load from '../Utils/Load'


export default function ContenedorBlog() {
    const [fetchBlog, setFetchBlog] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(() => {
        setLoad(true)
        const fetchBlogList = async () => {
            try {
                const response = await getBlog();
                setFetchBlog(response);
                setLoad(false)
            } catch (error) {
                console.error("Error al obtener blog:", error);
            }
        };

        fetchBlogList();
    }, []);
    
    return (
        <Container className='my-4'>
            <Row>
                <Col xs={12} md={8}>
                    <Row>
                        {!load ?
                            fetchBlog.length > 0 &&
                            fetchBlog?.map((item, index) => {
                                return <TarjetaItemBlog data={item} key={index} />
                            })
                            :
                            <Load></Load>
                        }
                    </Row>
                </Col>
                <ContenedorDestacados />
            </Row>
        </Container>
    )
}
