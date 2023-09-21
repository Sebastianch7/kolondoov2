/**
 * Este componente representa una página que muestra tarifas móviles y permite aplicar filtros.
 * Utiliza componentes funcionales y hooks de React para gestionar el estado y los efectos secundarios.
 */
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InterSection from '../Utils/InterSection';
import ItemFiltro from '../Items/ItemFiltro';
import TarjetaTarifa from '../Tarjeta/TarjetaTarifa';
import axios from 'axios';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Form } from 'react-bootstrap';
import NotIfoItem from '../Utils/NotIfoItem';
import Load from '../Utils/Load';

function ContenedorProductos() {
    // Estados para filtros de precio y capacidad
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [minCapacity, setMinCapacity] = useState(0);
    const [maxCapacity, setMaxCapacity] = useState(1000);

    // Estado para comprobar si se cargaron los filtros
    const [isLoadFilter, setIsLoadFilter] = useState(false);
    const [isLoadInformation, setIsLoadInformation] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState(null);


    // Estados para filtros de marca, precio y capacidad
    const [filterBrand, setFilterBrand] = useState(null);
    const [filterPrice, setFilterPrice] = useState([minPrice, maxPrice]);
    const [filterCapacity, setFilterCapacity] = useState([minCapacity, maxCapacity]);
    const [filterTechnology, setFilterTechnology] = useState(false);
    const [filterMessage, setFilterMessage] = useState(false);
    const [filterRoaming, setFilterRoaming] = useState(false);

    // Estados para almacenar datos de tarifas, filtros y marcas
    const [Tarifas, setTarifas] = useState([]);
    const [filtros, setFiltros] = useState([]);
    const [brand, setBrand] = useState([]);

    // Estados para los rangos de precio y capacidad
    const [rangePrice, setRangePrice] = useState([minPrice, maxPrice]);
    const [rangeCapacity, setRangeCapacity] = useState([minCapacity, maxCapacity]);

    // Función para limpiar los filtros
    const cleanFilter = () => {
        setFilterTechnology(false);
        setFilterMessage(false);
        setFilterRoaming(false);
        setFilterBrand(null);
        setFilterCapacity([minCapacity, maxCapacity]);
        setFilterPrice([minPrice, maxPrice]);
        setRangePrice([minPrice, maxPrice]);
        setRangeCapacity([minCapacity, maxCapacity]);
        setFiltros(Tarifas);
    }

    // Función para manejar cambios en el rango de precio
    const handleRangeChangePrice = (newRange) => {
        setRangePrice(newRange);
        handleFilterPrice(newRange);
    };

    // Función para manejar cambios en el rango de capacidad
    const handleRangeChangeCapacity = (newRange) => {
        setRangeCapacity(newRange);
        handleFilterCapacity(newRange);
    };

    // Carga de datos de tarifas desde la API (filtros)
    useEffect(() => {
        // Establecer isLoadFilter en falso mientras se cargan los datos
        setIsLoadFilter(false);

        axios.get('http://127.0.0.1:8000/api/filterMovilList').then((response) => {
            // Actualizar los estados con los datos iniciales
            // Obtener el valor mínimo de capacidad (min_gb) de la respuesta,
            // asegurándose de que sea al menos 0
            let i_minCapacity = parseInt(response.data[0].min_gb) > 0 ? parseInt(response.data[0].min_gb) : 0;

            // Obtener el valor máximo de capacidad (max_gb) de la respuesta
            let i_maxCapacity = parseInt(response.data[0].max_gb)

            // Obtener el valor mínimo de precio (min_precio) de la respuesta,
            // asegurándose de que sea al menos 0
            let i_minPrice = parseInt(response.data[0].min_precio) > 0 ? parseInt(response.data[0].min_precio) : 0;

            // Obtener el valor máximo de precio (max_precio) de la respuesta
            let i_maxPrice = parseInt(response.data[0].max_precio);

            // Actualizar los estados con los valores calculados
            setMinCapacity(i_minCapacity);
            setMaxCapacity(i_maxCapacity);
            setRangeCapacity([parseInt(i_minCapacity), parseInt(i_maxCapacity)]);

            setMaxPrice(i_maxPrice);
            setMinPrice(i_minPrice);
            setRangePrice([parseInt(i_minPrice), parseInt(i_maxPrice)]);

            // Establecer isLoadFilter en verdadero una vez que se han actualizado los estados
            setIsLoadFilter(true);
        });
    }, []);


    // Carga de datos de marcas desde la API
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getOperadorasList').then((response) => {
            setBrand(response.data);
        });
    }, []);

    // Carga de datos de tarifas desde la API (informacion tarifa)
    useEffect(() => {
        setIsLoadInformation(true)
        axios.get('http://127.0.0.1:8000/api/getTarifasMovilList').then((response) => {
            setFiltros(response.data);
            setTarifas(response.data);
            setIsLoadInformation(false)
        });
    }, [brand]);


    // Función para manejar cambios en la marca seleccionada
    const handleFilterBrand = (value) => {
        setFilterBrand(value);
    };

    // Función para manejar cambios en el filtro de precio
    const handleFilterPrice = (value) => {
        setFilterPrice(value);
    };

    // Función para manejar cambios en el filtro de capacidad
    const handleFilterCapacity = (value) => {
        setFilterCapacity(value);
    };

    // Filtrar las tarifas según los filtros seleccionados
    useEffect(() => {
        const resultado =
            Tarifas
                .filter((item) => filterByBrand(item))
                .filter((item) => filterByCapacity(item))
                .filter((item) => filterByPrice(item))
                .filter((item) => filterByTechnology(item))
                .filter((item) => filterByMessage(item))
                .filter((item) => filterByRoaming(item))

        setFiltros(resultado);
    }, [filterBrand, filterPrice, filterCapacity, filterTechnology, filterMessage, filterRoaming]);

    // Función para filtrar por marca
    const filterByBrand = (item) => filterBrand !== null ? item.operadora == filterBrand : true;

    // Función para filtrar por precio
    const filterByPrice = (item) => filterPrice !== null ? item.precio >= filterPrice[0] && item.precio < filterPrice[1] : true;

    // Función para filtrar por tecnología
    const filterByTechnology = (item) => filterTechnology !== false ? filterByFilter(filterTechnology, item, '5G!') : true;

    // Función para filtrar por mensajes
    const filterByMessage = (item) => filterMessage !== false ? filterByFilter(filterMessage, item, 'SMS incluidos') : true;

    // Función para filtrar por roaming
    const filterByRoaming = (item) => filterRoaming !== false ? filterByFilter(filterRoaming, item, 'Roaming en la UE sin coste') : true;

    // Función para filtrar por capacidad
    function filterByCapacity(item) {
        if (filterCapacity !== null) {
            if (item.parrilla_bloque_1.includes("GB Ilimitados")) {
                return true;
            } else {
                return item.parrilla_bloque_1.replace("GB", "") >= filterCapacity[0] && item.parrilla_bloque_1.replace("GB", "") < filterCapacity[1];
            }
        } else {
            return true;
        }
    }


    // Función para filtrar por palabra clave
    function filterByFilter(filter, item, word) {
        if (filter !== false) {
            if (item.parrilla_bloque_1.toLowerCase().includes(word.toLowerCase())) {
                return true;
            } else if (item.parrilla_bloque_2.toLowerCase().includes(word.toLowerCase())) {
                return true;
            } else if (item.parrilla_bloque_3.toLowerCase().includes(word.toLowerCase())) {
                return true;
            } else if (item.parrilla_bloque_4.toLowerCase().includes(word.toLowerCase())) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }

    return (
        <>
            <section>
                <Container>
                    <Row className='justify-content-around'>
                        <Col md={3}>
                            <Row>
                                <Col className='my-2' xs={6} md={6}>filtrar por: </Col>
                                <Col className='my-2' xs={6} md={6}><button className='btn btn-dark' onClick={cleanFilter}>Limpiar filtros</button></Col>
                                <hr />
                            </Row>
                            <Row>
                                <Col md={12}>
                                    Compañia:
                                </Col>
                                {brand?.length > 0 &&
                                    brand.map((item, index) => {
                                        return <Col xs={4} md={6}>
                                            <button key={item.id}
                                                className={`filtro-producto-logo my-2 ${selectedBrand === item.id ? 'pruebaBtn' : ''}`}
                                                value={item.nombre}
                                                onClick={() => {
                                                    setSelectedBrand(item.id)
                                                    setFilterBrand(item.id);
                                                }}>
                                                <img src={item.logo} alt={item.nombre} /></button></Col>
                                    })
                                }
                            </Row>
                            {isLoadFilter === true ? <Row>
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
                                            checked={filterTechnology}
                                            onChange={(e) => setFilterTechnology(!filterTechnology)}
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
                            </Row> :
                                <Load />}
                        </Col>
                        <Col md={8}>
                            <Row>
                                <Col key={filterBrand} className='my-2' md={6}>Mostrando: {filtros?.length} resultados de {Tarifas.length}</Col>
                            </Row>
                            <Row>
                                <div className='pruebaPos'>
                                    {isLoadInformation && <Load />}
                                    {filtros?.length > 0 ?
                                        filtros?.map((item, index) => {
                                            return <TarjetaTarifa key={index} data={item} />
                                        }) :
                                        <NotIfoItem key={0} title={'No se encontraron ofertas'} text={'Lo sentimos, no hemos encontrado ofertas con los filtros seleccionados.'} />
                                    }
                                </div>
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
