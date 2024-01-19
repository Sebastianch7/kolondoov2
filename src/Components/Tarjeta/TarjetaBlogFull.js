import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';
function TarjetaBlogFull({ data }) {
    const { fecha_publicacion, categoria_url, categoria, imagen_principal_escritorio, titulo, button, url_amigable } = data

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    const cambiarFecha = (data) => {
        let fecha = new Date(data);

        // Obtener día, mes y año
        let dia = fecha.getDate();
        let mes = fecha.getMonth(); // Los meses en JavaScript son de 0 a 11
        let año = fecha.getFullYear();

        // Formatear la cadena con ceros a la izquierda si es necesario
        let diaStr = dia < 10 ? '0' + dia : dia;

        // Construir la cadena en el formato "día-mes-año"
        let fechaFormateada = `${diaStr} ${meses[mes]} de ${año}`;

        return fechaFormateada;
    };
    return (
        <Col className='mx-3'>
            <Card className='tarjeta tarjeta-blog'>
                <Card.Img src={`/img/blog/${isMobile ? 'mobile' : 'desktop'}/${imagen_principal_escritorio}`} alt={`/img/blog/${isMobile ? 'mobile' : 'desktop'}/${imagen_principal_escritorio}`} />
                <Card.ImgOverlay>
                    <div className='info-card p-3'>
                        <span>{cambiarFecha(fecha_publicacion)}</span>
                        <p><Link to={`/es-es/blog/${categoria_url}/${url_amigable}`}>{titulo}</Link></p>
                        <Link to={`/es-es/blog/${categoria_url}/${url_amigable}`}>ver más</Link>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );
}

export default TarjetaBlogFull;