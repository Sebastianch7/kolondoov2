import React from 'react'
import { Col, Card, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'

export default function TarjetaItemBlog({ data }) {
    const { id, fecha_publicacion, visitas, categoria_id, hashtags, imagen_principal_escritorio, imagen_principal_movil, titulo, entradilla, url_amigable } = data
    const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
    const cambiarFecha = (data) => {
        let fecha = new Date(data);

        // Obtener día, mes y año
        let dia = fecha.getDate();
        let mes = fecha.getMonth() + 1; // Los meses en JavaScript son de 0 a 11
        let año = fecha.getFullYear();

        // Formatear la cadena con ceros a la izquierda si es necesario
        let diaStr = dia < 10 ? '0' + dia : dia;

        // Construir la cadena en el formato "día-mes-año"
        let fechaFormateada = `${diaStr} ${meses[mes]} de ${año}`;

        return fechaFormateada;
    };


    return (
        <>
            <Col xs={12} md={6}>
                <Card className='m-2 tarjeta tarjeta-blog tarjeta-blog-blog  border-0'>
                    <Card.Img variant="top" className='img-fluid' src={`/img/blog/${isMobile ? 'mobile' : 'desktop'}/${imagen_principal_escritorio}`} alt={`/img/blog/${isMobile ? 'mobile' : 'desktop'}/${imagen_principal_escritorio}`} />
                    <Card.Body className='bg-gray'>
                        <span>{cambiarFecha(fecha_publicacion)}</span>
                        <Card.Title>
                            <Link to={`${url_amigable}`} className='title-card-a'><b>{titulo}</b></Link>

                            {/* <p className='font-09 color-primary mt-2'>{hashtags?.replaceAll('[', '').replaceAll(']', '').replaceAll('"', '').replaceAll(',', ' ')}</p> */}
                        </Card.Title>
                        <Card.Text className='font-09'>
                            <span dangerouslySetInnerHTML={{ __html: `${entradilla}` }}></span>
                        </Card.Text>
                    </Card.Body>
                    {/* <Card.Footer className='bg-gray border-0 bg-white d-flex justify-content-between'>
                        <Link className='font-09' to={`${url_amigable}`}>{`ver más`}</Link>
                    </Card.Footer> */}
                </Card>
            </Col>
        </>
    )
}
