import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import ItemTarifaDescripcion from '../Items/ItemTarifaDescripcion';
import { Link } from 'react-router-dom';

function TarjetaPrestamo({ data }) {
    console.log(data)
    const { id, selector1, destacada, titulo, logo, valorMaximo, parrilla_1, parrilla_2, parrilla_3, parrilla_4 } = data;
    return (
        <Col xs={12} md={4} className='mb-3'>
            <Card key={''} className={`m-1 mx-md-3 tarjeta-prestamo tarjeta text-center ${destacada === 1 && 'prioridad'}`}>
                {destacada === 1 && <div className='prioridad-oferta-prestamo'>Recomendado</div>}
                <div className='mx-2'><ItemTarifaDescripcion destacada={destacada} text={selector1} /></div>
                <Card.Body>
                    <div className="prestamo-header">
                        <img className='mb-4' src={logo} />
                        {valorMaximo > 0 && (
                            <>
                                <p className='m-0'>Monto máximo</p>
                                <h2>{valorMaximo.toLocaleString()}</h2>
                            </>
                        )}
                        {titulo != null && <h4>{titulo}</h4>}
                        <hr />
                    </div>

                    {parrilla_1 != null && <div className="prestamo-informacion">
                        <div className='text-left m-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                            <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                        </svg><span className='mx-2'>{parrilla_1}</span></div>
                    </div>}
                    {parrilla_2 != null && <div className="prestamo-informacion">
                        <div className='text-left m-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                            <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                        </svg><span className='mx-2'>{parrilla_2}</span></div>
                    </div>}
                    {parrilla_3 != null && <div className="prestamo-informacion">
                        <div className='text-left m-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                            <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                        </svg><span className='mx-2'>{parrilla_3}</span></div>
                    </div>}
                    {parrilla_4 != null && <div className="prestamo-informacion">
                        <div className='text-left m-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                            <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                        </svg><span className='mx-2'>{parrilla_4}</span></div>
                    </div>}
                    <Link to={`/co/rediccion-banco/${id}`} className='btn-large btn btn-primary mt-4' target="_blank" rel="noopener noreferrer">¡Solicítalo ahora!</Link>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default TarjetaPrestamo;