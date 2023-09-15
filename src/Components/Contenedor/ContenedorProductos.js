import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InterSection from '../Utils/InterSection';
import ItemFiltro from '../Items/ItemFiltro';
import InputRange from '../Input/InputRange';
import TarjetaTarifa from '../Tarjeta/TarjetaTarifa';
import axios from 'axios';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Form } from 'react-bootstrap';

function ContenedorProductos() {
    const minPrice = 0, maxPrice = 100, minCapacity = 10, maxCapacity = 80;

    const [filterBrand, setfilterBrand] = useState(null);
    const [filterPrice, setfilterPrice] = useState([minPrice, maxPrice]);
    const [filterCapacity, setfilterCapacity] = useState([minCapacity, maxCapacity]);
    const [filterTecnology, setFilterTecnology] = useState(false);
    const [filterMessage, setFilterMessage] = useState(false);
    const [filterRoaming, setFilterRoaming] = useState(false);

    const [Tarifas, setTarifas] = useState([]);
    const [filtros, setFiltros] = useState([]);

    //informacion para filtro range por precio
    const [rangePrice, setRangePrice] = useState([minPrice, maxPrice]);

    const handleRangeChangePrice = (newRange) => {
        setRangePrice(newRange);
        handleFilterPrice(newRange)
    };

    //informacion para filtro range por capacidad
    const [rangeCapacity, setRangeCapacity] = useState([minCapacity, maxCapacity]);

    const handleRangeChangeCapacity = (newRange) => {
        setRangeCapacity(newRange);
        handleFilterCapacity(newRange)
    };


    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/productos').then((response) => {
            setTarifas(response.data)
            setFiltros(response.data)
        });
    }, [])

    const handleFilterBrand = (value) => {
        setfilterBrand(value);
    };

    const handleFilterPrice = (value) => {
        setfilterPrice(value);
    };

    const handleFilterCapacity = (value) => {
        setfilterCapacity(value);
    };

    const handleFilterMessage = (value) => {
        setFilterMessage(value);
    };

    useEffect(() => {
        const resultado =
            Tarifas.filter((item) => filterByBrand(item))
                .filter((item) => filterByPrice(item))
                .filter((item) => filterByCapacity(item))
                .filter((item) => filterByTeconology(item))
                .filter((item) => filterByMessage(item))
                .filter((item) => filterByRoaming(item))
        setFiltros(resultado);
    }, [filterBrand, filterPrice, filterCapacity, filterTecnology, filterMessage, filterRoaming])

    const filterByBrand = (item) => filterBrand !== null ? item.name.toLowerCase() === filterBrand.toLowerCase() : true;
    const filterByPrice = (item) => filterPrice !== null ? item.priceCant >= filterPrice[0] && item.priceCant < filterPrice[1] : true;
    const filterByCapacity = (item) => filterCapacity !== null ? item.serviceCant >= filterCapacity[0] && item.serviceCant < filterCapacity[1] : true;
    const filterByTeconology = (item) => filterTecnology !== false ? item.feature.some(feature => feature.toLowerCase().includes('5g')) : true;
    const filterByMessage = (item) => filterMessage !== false ? item.feature.some(feature => feature.toLowerCase().includes('mensajes ilimitado')) : true;
    const filterByRoaming = (item) => filterRoaming !== false ? item.feature.some(feature => feature.toLowerCase().includes('roaming ilimitado')) : true;

    const cleanFilter = () => {
        setfilterBrand(null)
        setFilterTecnology(false)
        setFilterMessage(false)
        setFilterRoaming(false)
        setfilterPrice([minPrice, maxPrice])
        setRangePrice([minPrice, maxPrice])
        setfilterCapacity([minCapacity, maxCapacity])
        setRangeCapacity([minCapacity, maxCapacity])
        setFiltros(Tarifas)
    }

    return (
        <>
            <section>
                <Container>
                    <Row className='justify-content-around'>
                        <Col md={3}>
                            <Row>
                                <Col className='my-2' md={6}>filtrar por: </Col>
                                <Col className='my-2' md={6}><button className='btn' onClick={cleanFilter}>Limpiar filtros</button></Col>
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
                                <div className='mt-4'>
                                    <b>{'Coste mensual'}:</b>
                                    <div className='my-4'>
                                        {rangePrice[0]} {'€'} - {rangePrice[1]} {'€'}
                                    </div>
                                    <Slider
                                        range
                                        min={minPrice}
                                        max={maxPrice}
                                        value={rangePrice}
                                        onChange={handleRangeChangePrice}
                                        className='form-input-range'
                                    />
                                </div>
                                <div className='my-4'>
                                    <b>{'Datos'}:</b>
                                    <div className='my-4'>
                                        {rangeCapacity[0]} {'GB'} - {rangeCapacity[1]} {'GB'}
                                    </div>
                                    <Slider
                                        range
                                        min={minCapacity}
                                        max={maxCapacity}
                                        value={rangeCapacity}
                                        onChange={handleRangeChangeCapacity}
                                        className='form-input-range'
                                    />
                                </div>
                                <div className='my-2'>
                                    <b>{'5G'}:</b>
                                    <div className='my-2'>
                                        <Form.Switch
                                            className='input-check-dark mt-2 text-left'
                                            type='switch'
                                            checked={filterTecnology}
                                            onChange={(e) => setFilterTecnology(!filterTecnology)}
                                            label={'Mostrar solo ofertas 5G'}
                                            reverse
                                        />
                                    </div>
                                </div>
                                <div className='my-2'>
                                    <b>{'Mensajes'}:</b>
                                    <div className='my-2'>
                                        <Form.Switch
                                            className='input-check-dark mt-2 text-left'
                                            type='switch'
                                            checked={filterMessage}
                                            onChange={(e) => setFilterMessage(!filterMessage)}
                                            label={'Mensajes ilimitados'}
                                            reverse
                                        />
                                    </div>
                                </div>
                                <div className='my-2'>
                                    <b>{'Roaming'}:</b>
                                    <div className='my-2'>
                                        <Form.Switch
                                            className='input-check-dark mt-2 text-left'
                                            type='switch'
                                            checked={filterRoaming}
                                            onChange={(e) => setFilterRoaming(!filterRoaming)}
                                            label={'Roaming en la UE'}
                                            reverse
                                        />
                                    </div>
                                </div>
                            </Row>
                        </Col>
                        <Col md={8}>
                            <Row>
                                <Col className='my-2' md={6}>filtrar por: {filterBrand} - ${filterPrice[0]} - {filterPrice[1]}</Col>
                            </Row>
                            <Row>
                                {filtros?.length > 0 &&
                                    filtros?.map((item) => {
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