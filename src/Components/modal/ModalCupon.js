import { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function ModalCupon({ show, handleClose, data }) {
    const [lang, setLang] = useState(null);
    const [isCopy, setIsCopy] = useState(false);
    const location = useLocation();

    const pathname = location.pathname;
    let locations = pathname.split('/');
    locations.shift();

    useEffect(() => {
        setLang(locations[0]);
    }, [locations]);

    const handleClick = (e) => {
        e.preventDefault();
        const dataId = e.target.getAttribute('id');
        const marcasFiltro = data.brands ? data.brands.join(',') : '';
        const marcasTipo = data.tipos ? data.tipos.join(',') : '';
        window.open(`/${lang}/cupones/${dataId}?marcas=${marcasFiltro}&tipo=${marcasTipo}`, '_blank');
        window.location.href = `${data.landing_link}?esVuskoo=1&prueba=true`;
    };

    const enlaceRef = useRef(null);

    // Función para copiar el texto al portapapeles
    const copiarAlPortapapeles = () => {
        if (enlaceRef.current) {
            const texto = enlaceRef.current.getAttribute('data-id') === 'codigo' ? enlaceRef.current.innerText : '';

            navigator.clipboard.writeText(texto)
                .then(() => {
                    setIsCopy(true);
                    setTimeout(() => {
                        setIsCopy(false);
                    }, 5000);
                })
        }
    };

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
                className='modal-cupon'
            >
                <Modal.Header closeButton className='modal-cupon-header' />
                <Modal.Body className='modal-cupon-banner'>
                    <div className='modal-cupon-banner-item'>
                        <img src='/img/icons/cupon-white.svg' alt="Cupón" />
                    </div>
                    <div className='modal-cupon-banner-title'>{data.titulo}</div>
                </Modal.Body>
                <Modal.Body className='modal-cupon-information'>
                    {isCopy &&
                        <Alert key={1} variant={'success'} className='text-center'>
                            Código copiado al portapapeles
                        </Alert>
                    }
                    <div className='text-center'>
                        <a
                            href={data.url}
                            target='_blank'
                            id={data.id}
                            data-id="codigo"
                            className='btn btn-primary my-3 mx-auto p-3 px-5'
                            rel='nofollow noopener noreferrer'
                            ref={enlaceRef} // Asignamos la referencia al enlace
                        >
                            {data.tipoCupon === 1 ? data.CodigoCupon : 'Obtener Oferta'}
                        </a>
                        {data.tipoCupon === 1 && <button className='btn btn-small' onClick={copiarAlPortapapeles}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                        </svg></button>}
                    </div>
                    <div className='px-5 m-4'>
                        <div className='d-flex flex-column my-3'>
                            <b>Tienda:</b>
                            <span>{data.nombre_comercio}</span>
                        </div>
                        <div className='d-flex flex-column my-3'>
                            <b>Descripción:</b>
                            <span>{data.descripcion}</span>
                        </div>
                        <div className='d-flex flex-column my-3'>
                            <b>Oferta válida para:</b>
                            <span>{data.pais}</span>
                        </div>
                        {data.TiempoCupon === 1 && (
                            <div className='d-flex flex-column my-3'>
                                <b>Fecha de expiración de la oferta:</b>
                                <span>
                                    {(() => {
                                        let [day, month, year] = data.fecha_final.split('-');
                                        day = parseInt(day);

                                        const formattedDate = new Date(`${year}-${month}-${day}`);
                                        return formattedDate.toLocaleDateString('es-ES', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        });
                                    })()}
                                </span>
                            </div>
                        )}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalCupon;
