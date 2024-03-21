import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';
function TarjetaBlogFull({ data }) {
    const { fecha_publicacion, categoria_url, imagen, titulo, categoria_slug, url_amigable } = data
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    const cambiarFecha = (data) => {
        let fecha = new Date(data);
        let dia = fecha.getDate();
        let mes = fecha.getMonth();
        let año = fecha.getFullYear();
        let diaStr = dia < 10 ? '0' + dia : dia;
        let fechaFormateada = `${diaStr} ${meses[mes]} de ${año}`;

        return fechaFormateada;
    };
    return (
        <Col className='mx-3'>
            <Card className='tarjeta tarjeta-blog'>
                <div style={{'height':'170px', 'overflow':'hidden'}}>
                    <Card.Img className='img-fluid' src={`${imagen}`} alt={`${imagen}`} />
                </div>
                <Card.ImgOverlay>
                    <div className='info-card px-3'>
                        <span>{cambiarFecha(fecha_publicacion)}</span>
                        <p className='m-0' style={{'min-height':'60px'}}><Link rel="alternate" hreflang="es-es" to={`/es/blog/${categoria_slug}/${url_amigable}`}>{titulo}</Link></p>
                        <Link rel="alternate" hreflang="es-es" to={`/es/blog/${categoria_slug}/${url_amigable}`}>ver más</Link>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );
}

export default TarjetaBlogFull;