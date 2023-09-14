import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InterSection from '../Utils/InterSection';
import ItemFiltro from '../Items/ItemFiltro';
import InputRange from '../Input/InputRange';
import TarjetaTarifa from '../Tarjeta/TarjetaTarifa';
import axios from 'axios';

function ContenedorProductos() {
    const [filterBrand, setfilterBrand] = useState('');
    const [filterPrice, setfilterPrice] = useState([0, 100]);
    
    const [Tarifas, setTarifas] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/productos').then((response) => {
            setTarifas(response.data)
        });
    }, [])

    const handleFilterBrand = (value) => {
        setfilterBrand(value);
    };

    const handleFilterPrice = (value) => {
        setfilterPrice(value);
    };

    useEffect(() => {
        let filteredTarifas = Tarifas?.filter((item) => {
            return item.name?.toLowerCase().includes(filterBrand?.toLowerCase());
        });
        setTarifas(filteredTarifas);

    }, [filterBrand]);

    useEffect(() => {
        let filteredTarifas = Tarifas?.filter((item) => {
            return item.price[0].cant >= filterPrice[0] && item.price[0].cant < filterPrice[1];
        });
        setTarifas(filteredTarifas);
    }, [filterPrice]);

    return (
        <>
            <section>
                <Container>
                    <Row className='justify-content-around'>
                        <Col md={3}>
                            <Row>
                                <Col className='my-2' md={12}>filtrar por: </Col>
                                {/* <Col className='my-2' md={6}>Limpiar filtros</Col> */}
                                <hr />
                            </Row>
                            <Row>
                                <Col md={12}>
                                    Compañia:
                                </Col>
                                <ItemFiltro onValueChange={handleFilterBrand} name={'masmovil'} image={'/img/masmovil.png'} />
                                <ItemFiltro onValueChange={handleFilterBrand} name={'finetwork'} image={'/img/finetwork.png'} />
                                <ItemFiltro onValueChange={handleFilterBrand} name={'lemmon'} image={'/img/lemmon.png'} />
                                <ItemFiltro onValueChange={handleFilterBrand} name={'lowi'} image={'/img/lowi.png'} />
                                <ItemFiltro onValueChange={handleFilterBrand} name={'pepephone'} image={'/img/pepephone.png'} />
                                <ItemFiltro onValueChange={handleFilterBrand} name={'virgin'} image={'/img/virgin.png'} />
                                <ItemFiltro onValueChange={handleFilterBrand} name={'vodafone'} image={'/img/vodafone.png'} />
                                <ItemFiltro onValueChange={handleFilterBrand} name={'yoigo'} image={'/img/yoigo.png'} />
                            </Row>
                            <Row>
                                <InputRange
                                    text={'Coste mensual'}
                                    min={0}
                                    max={60}
                                    type={'€'}
                                    onValueChange={handleFilterPrice}
                                />
                                {/* <InputRange
                                    text={'Datos'}
                                    min={3}
                                    max={80}
                                    type={'GB'}
                                    onValueChange={handleFilterPrice}
                                /> */}


                            </Row>
                        </Col>
                        <Col md={8}>
                            <Row>
                                <Col className='my-2' md={6}>filtrar por: {filterBrand} - ${filterPrice[0]} - {filterPrice[1]}</Col>
                            </Row>
                            <Row>
                                {Tarifas?.length > 0 &&
                                    Tarifas?.map((item) => {
                                        return <TarjetaTarifa data={item} />
                                    })
                                }
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <InterSection></InterSection>
        </>
    );
}

export default ContenedorProductos;