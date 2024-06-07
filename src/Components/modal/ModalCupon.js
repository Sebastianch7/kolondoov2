import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';


function ModalCupon({ show, handleClose, data }) {

    console.log(data)
    const [lang, setLang] = useState(null)
    const location = useLocation();
    const pathname = location.pathname;
    let locations = pathname.split('/');
    locations.shift();

    useEffect(() => {
        setLang(locations[0])
    }, [])

    const handleClick = (e) => {
        e.preventDefault(); 
        let url = `/${lang}/cupones/`;
        const dataId = e.target.getAttribute('id');
        const marcasFiltro = data.brands.join(',');
        const marcasTipo = data.tipos.join(',');
        window.open(`/${lang}/cupones/${dataId}?marcas=${marcasFiltro}&tipo=${marcasTipo}`, '_blank');
        window.location.href = `${data.landing_link}?esVuskoo=1&prueba=true`; 
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
                <Modal.Header closeButton className='modal-cupon-header'>
                </Modal.Header>
                <Modal.Body className='modal-cupon-banner'>
                    <div className='modal-cupon-banner-item'>
                        <img src='/img/icons/cupon-white.svg' />
                    </div>
                    <div className='modal-cupon-banner-title'>{data.nombre_tarifa}</div>
                </Modal.Body>
                <Modal.Body className='modal-cupon-information'>
                    <div className='text-center'>
                        <button onClick={handleClick} id={data.id} className='btn btn-primary my-3 mx-auto p-3 px-5'>Obtener {data.cupon}</button>
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
                        <div className='d-flex flex-column my-3'>
                            <b>Fecha de expiración de la oferta:</b>
                            <span>{data.fecha_expiracion}</span>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalCupon;