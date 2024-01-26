import React, { useEffect, useState } from 'react'
import Image from 'react-bootstrap/Image';
import { Container, Row, Col, Card } from 'react-bootstrap';
import TitleSection from '../Text/TitleSection';
import ContenedorDestacados from '../Blog/ContenedorDestacados';
import FormSuscripcion from '../Forms/FormSuscripcion';
import { getBlogById } from '../../services/ApiServices';
import { useLocation } from 'react-router-dom';
import Load from '../Utils/Load'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import MetaData from '../../Components/Header/SeoMetadata';

export default function ContenedorBlogItem({}) {

    const [fetchBlog, setFetchBlog] = useState([])
    const [idBlog, setIdBlog] = useState(null)
    const [validarCategoria, setValidarCategoria] = useState(null)
    const [load, setLoad] = useState(false)
    const [lang, setLang] = useState(null)
    const location = useLocation();
    let navigate = useNavigate();

    useEffect(() => {
        setLang(location.pathname.split('/')[1])
    },[])

    useEffect(() => {
        const pathname = location.pathname;
        let locations = pathname.split('/');
        setValidarCategoria(locations[3].toLowerCase())
        setIdBlog(locations[4]);
    }, [idBlog])

    useEffect(() => {
        setLoad(true)
        const fetchBlogId = async () => {
            try {
                if (idBlog !== null) {
                    const response = await getBlogById(idBlog);
                    if(response === undefined || response.categoria.toLowerCase() !== validarCategoria){
                        navigate(`/es-es/404`);
                    }
                    setFetchBlog(response);
                    setLoad(false);
                }
            } catch (error) {
                console.error("Error al obtener blog:", error);
            }
        };

        fetchBlogId();
    }, [idBlog]);

    return (
        <>
            <MetaData titulo={fetchBlog.seo_titulo} descripcion={fetchBlog.seo_descripcion} imagen_destacada={`/img/blog/desktop/${fetchBlog?.imagen_principal_escritorio}`} />
            {!load ? <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <Image className='w-100' src={`/img/blog/desktop/${fetchBlog?.imagen_principal_escritorio}`} alt={`/img/blog/desktop/${fetchBlog?.imagen_principal_escritorio}`} />
                        <TitleSection
                            left
                            title={fetchBlog?.titulo}
                            text1={fetchBlog?.entrada}
                            clave={fetchBlog?.hashtags?.replaceAll('[', '').replaceAll('"', '').replaceAll(']', '').replaceAll(',', ' ')}
                            textBlog={fetchBlog?.cuerpo}
                        />
                        <Col xs={12} className='text-center my-5'>
                        <Link className='font-09 btn btn-primary' to={`/es-es/blog`}>Volver</Link>
                        </Col>
                    </Col>
                    <ContenedorDestacados />
                </Row>
                <Row>
                    <FormSuscripcion />
                </Row>
            </Container> :
                <Load></Load>
            }

        </>
    )
}
