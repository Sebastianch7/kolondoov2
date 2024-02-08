import React, { useEffect, useState } from 'react'
import Image from 'react-bootstrap/Image';
import { Container, Row, Col, Card } from 'react-bootstrap';
import TitleSection from '../Text/TitleSection';
import ContenedorDestacados from '../Blog/ContenedorDestacados';
import FormSuscripcion from '../Forms/FormSuscripcion';
import { getBlogById, getGestionById, getBlogPreviewId } from '../../services/ApiServices';
import { useLocation } from 'react-router-dom';
import Load from '../Utils/Load'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import MetaData from '../../Components/Header/SeoMetadata';

export default function ContenedorBlogItemPreview({ }) {

    const [fetchBlog, setFetchBlog] = useState([])
    const [rutaImagen, setRutaImagen] = useState(null)
    const [idBlog, setIdBlog] = useState(null)
    const [carpeta, setCarpeta] = useState(null)
    const [landing, setLanding] = useState(null)
    const [btnBack, setBtnBack] = useState(null)
    const [validarCategoria, setValidarCategoria] = useState(null)
    const [load, setLoad] = useState(false)
    const [lang, setLang] = useState(null)
    const location = useLocation();
    let navigate = useNavigate();

    useEffect(() => {
        setLang(location.pathname.split('/')[1])
    }, [])

    useEffect(() => {
        const pathname = location.pathname;
        let locations = pathname.split('/');
        setLanding(locations[2].toLowerCase())
        setValidarCategoria(locations[3].toLowerCase())
        setIdBlog(locations[4]);
    }, [idBlog])

    useEffect(() => {
        let response;
        setLoad(true)
        const fetchBlogId = async () => {
            try {
                if (idBlog !== null) {
                    response = await getBlogPreviewId(idBlog);
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
            {!load ? <Container>
                <Row>
                    <Col xs={12} md={8}>
                    {rutaImagen && <Image className='img-fluid w-100' src={`${rutaImagen ? rutaImagen: ''}${fetchBlog?.imagen}`} alt={`${fetchBlog?.alt_img ? fetchBlog?.alt_img : 'Imagen no encontrada'}`} />}
                        <TitleSection
                            left
                            title={fetchBlog?.titulo}
                            text1={fetchBlog?.contenido}
                            clave={fetchBlog?.hashtags?.replaceAll('[', '').replaceAll('"', '').replaceAll(']', '').replaceAll(',', ' ')}
                            fecha={fetchBlog?.fecha_publicacion}
                            autor={fetchBlog?.autor}
                            textBlog={fetchBlog?.cuerpo}
                        />
                        <Col xs={12} className='text-center my-5'>
                            <Link className='font-09 btn btn-primary' to={`/es/${btnBack}`}>Volver</Link>
                        </Col>
                    </Col>
                    <Col xs={12} md={4}>
                        <ContenedorDestacados />
                    </Col>
                </Row>
            </Container> :
                <Load></Load>
            }

        </>
    )
}
