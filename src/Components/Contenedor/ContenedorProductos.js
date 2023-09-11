import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InterSection from '../Utils/InterSection';
import ItemFiltro from '../Items/ItemFiltro';
import InputRange from '../Input/InputRange';

function ContenedorProductos({ children }) {
    return (
        <>
            <section>
                <Container>
                    <Row className='justify-content-around'>
                        <Col md={3}>
                            <Row>
                                <Col className='my-2' md={6}>filtrar por:</Col>
                                <Col className='my-2' md={6}>Limpiar filtros</Col>
                                <hr />
                            </Row>
                            <Row>
                                <Col md={12}>
                                    Compañia:
                                </Col>
                                <ItemFiltro image={'/img/masmovil.png'} />
                                <ItemFiltro image={'/img/finetwork.png'} />
                                <ItemFiltro image={'/img/lemmon.png'} />
                                <ItemFiltro image={'/img/lowi.png'} />
                                <ItemFiltro image={'/img/pepephone.png'} />
                                <ItemFiltro image={'/img/virgin.png'} />
                                <ItemFiltro image={'/img/vodafone.png'} />
                                <ItemFiltro image={'/img/yoigo.png'} />
                            </Row>
                            <Row>
                                <InputRange 
                                text={'Coste mensual'}
                                min={0}
                                max={60}
                                type={'€'}
                                />
                                <InputRange 
                                text={'Datos'}
                                min={3}
                                max={80}
                                type={'GB'}
                                />
                                
                                
                            </Row>
                        </Col>
                        <Col md={8}>
                            <Row>
                                <Col className='my-2' md={6}>filtrar por:</Col>
                            </Row>
                            {children}
                        </Col>
                    </Row>
                </Container>
            </section>
            <InterSection></InterSection>
        </>
    );
}

export default ContenedorProductos;