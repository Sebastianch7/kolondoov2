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
        <Card className='mx-2 info-card'>
            <div className='info-card-imagen'>
                <Card.Img src={`${imagen}`} alt={`${imagen}`} />
            </div>
            <Card.Body>
                <Card.Text className='text-muted'>
                    <Link rel="alternate" to={`/es/blog/${categoria_slug}/${url_amigable}`}>{titulo}</Link>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Card.Text className='vermas'>
                    <Link rel="alternate" to={`/es/blog/${categoria_slug}/${url_amigable}`}>ver más</Link>
                </Card.Text>
                <small className="text-muted">{cambiarFecha(fecha_publicacion)}</small>
            </Card.Footer>
        </Card>

    );
}

export default TarjetaBlogFull;