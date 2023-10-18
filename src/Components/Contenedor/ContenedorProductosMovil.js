import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { isMobile } from 'react-device-detect';
import Modal from 'react-bootstrap/Modal';
import InterSection from '../Utils/InterSection';
import TarjetaTarifa from '../Tarjeta/TarjetaTarifa';
import NotInfoItem from '../Utils/NotInfoItem';
import Load from '../Utils/Load';
import { fetchFilterMovil, fetchOperadoras, fetchTarifasMovil } from '../../services/ApiServices'

function ContenedorProductosMovil() {
  // Estado para filtros de precio y capacidad
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [minCapacity, setMinCapacity] = useState(0);
  const [maxCapacity, setMaxCapacity] = useState(1000);

  // Estados para el estado de carga de filtros e información
  const [isLoadFilter, setIsLoadFilter] = useState(false);
  const [isLoadInformation, setIsLoadInformation] = useState(false);

  // Estado para la marca seleccionada
  const [selectedBrand, setSelectedBrand] = useState(null);

  // Estados para filtros seleccionados
  const [filterBrand, setFilterBrand] = useState(null);
  const [filterPrice, setFilterPrice] = useState([minPrice, maxPrice]);
  const [filterCapacity, setFilterCapacity] = useState([minCapacity, maxCapacity]);
  const [filterTechnology, setFilterTechnology] = useState(false);
  const [filterMessage, setFilterMessage] = useState(false);
  const [filterRoaming, setFilterRoaming] = useState(false);

  // Estados para tarifas y marcas
  const [Tarifas, setTarifas] = useState([]);
  const [filtros, setFiltros] = useState([]);
  const [brand, setBrand] = useState([]);

  // Estados para rangos de precio y capacidad
  const [rangePrice, setRangePrice] = useState([minPrice, maxPrice]);
  const [rangeCapacity, setRangeCapacity] = useState([minCapacity, maxCapacity]);

  // Estado para el modal de filtros
  const [show, setShow] = useState(false);

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
  };

  // Función para manejar el cambio en el rango de precio
  const handleRangeChangePrice = (newRange) => {
    setRangePrice(newRange);
    handleFilterPrice(newRange);
  };

  // Función para manejar el cambio en el rango de capacidad
  const handleRangeChangeCapacity = (newRange) => {
    setRangeCapacity(newRange);
    handleFilterCapacity(newRange);
  };

  // Función para obtener los datos iniciales de filtros
  useEffect(() => {
    setIsLoadFilter(false);
    const fetchData = async () => {
      try {
        const response = await fetchFilterMovil();
        const { min_gb, max_gb, min_precio, max_precio } = response;

        setMinCapacity(parseInt(min_gb) > 0 ? parseInt(min_gb) : 0);
        setMaxCapacity(parseInt(max_gb));
        setRangeCapacity([parseInt(min_gb) > 0 ? parseInt(min_gb) : 0, parseInt(max_gb)]);

        setMaxPrice(parseInt(max_precio));
        setMinPrice(parseInt(min_precio) > 0 ? parseInt(min_precio) : 0);
        setRangePrice([parseInt(min_precio) > 0 ? parseInt(min_precio) : 0, parseInt(max_precio)]);

        setIsLoadFilter(true);
      } catch (error) {
        console.error("Error al obtener los datos iniciales de filtros:", error);
      }
    };

    fetchData();
  }, []);

  // Función para obtener las marcas de operadoras
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetchOperadoras();
        setBrand(response);
      } catch (error) {
        console.error("Error al obtener las marcas de operadoras:", error);
      }
    };

    fetchBrands();
  }, []);

  // Función para obtener las tarifas de móvil
  useEffect(() => {
    setIsLoadInformation(true);
    const fetchTariffs = async () => {
      try {
        const response = await fetchTarifasMovil()
        setFiltros(response);
        setTarifas(response);
        setIsLoadInformation(false);
      } catch (error) {
        console.error("Error al obtener las tarifas de móvil:", error);
      }
    };

    fetchTariffs();
  }, [brand]);

  // Función para manejar el filtro de precio
  const handleFilterPrice = (value) => {
    setFilterPrice(value);
  };

  // Función para manejar el filtro de capacidad
  const handleFilterCapacity = (value) => {
    setFilterCapacity(value);
  };

  // Función para aplicar los filtros
  useEffect(() => {
    const resultado = Tarifas
      .filter((item) => filterByBrand(item))
      .filter((item) => filterByCapacity(item))
      .filter((item) => filterByPrice(item))
      .filter((item) => filterByTechnology(item))
      .filter((item) => filterByMessage(item))
      .filter((item) => filterByRoaming(item));

    setFiltros(resultado);
  }, [filterBrand, filterPrice, filterCapacity, filterTechnology, filterMessage, filterRoaming]);

  // Función para filtrar por marca
  const filterByBrand = (item) => filterBrand !== null ? item.operadora === filterBrand : true;

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
        return parseInt(item.parrilla_bloque_1.replace("GB", "")) >= filterCapacity[0] && parseInt(item.parrilla_bloque_1.replace("GB", "")) < filterCapacity[1];
      }
    } else {
      return true;
    }
  }

  // Función para filtrar por palabra clave en los bloques
  function filterByFilter(filter, item, word) {
    if (filter !== false) {
      if (item.parrilla_bloque_1?.toLowerCase().includes(word?.toLowerCase())) {
        return true;
      } else if (item.parrilla_bloque_2?.toLowerCase().includes(word?.toLowerCase())) {
        return true;
      } else if (item.parrilla_bloque_3?.toLowerCase().includes(word?.toLowerCase())) {
        return true;
      } else if (item.parrilla_bloque_4?.toLowerCase().includes(word?.toLowerCase())) {
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
                {!isMobile ? <Col className='my-3 font-semibold' xs={6} md={5}>filtrar por: </Col> : <Col className='my-2' xs={6} md={5}><Button variant="light" onClick={() => setShow(true)}>Filtrar por</Button></Col>}
                <Col className='my-2 text-center' xs={6} md={7}>
                  <button className='btn btn-light' onClick={cleanFilter}>Limpiar filtro</button>
                </Col>
                <hr />
              </Row>
              {isMobile ? (
                <Modal show={show} onHide={() => setShow(false)}>
                  <Modal.Header closeButton></Modal.Header>
                  <Modal.Body>
                    <Row>
                      {isMobile && <Col xs={12} key={filterBrand} className='my-2' md={6}>Se encontraron <span className="font-bold">{filtros?.length}</span> resultados de <span className="font-bold">{Tarifas.length}</span></Col>}
                      <Col md={12}>
                        <span className="font-bold">Compañia:</span>
                      </Col>
                      {brand?.length > 0 &&
                        brand.map((item, index) => (
                          <Col xs={4} md={6} key={item.id}>
                            <button
                              className={`filtro-producto-logo my-2 ${selectedBrand === item.id ? 'pruebaBtn' : ''}`}
                              value={item.nombre}
                              onClick={() => {
                                setSelectedBrand(item.id);
                                setFilterBrand(item.id);
                              }}
                            >
                              <img src={item.logo} alt={item.nombre} />
                            </button>
                          </Col>
                        ))
                      }
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
                            checked={filterTechnology}
                            onChange={() => setFilterTechnology(!filterTechnology)}
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
                            onChange={() => setFilterMessage(!filterMessage)}
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
                            onChange={() => setFilterRoaming(!filterRoaming)}
                            label={'Roaming en la UE'}
                            reverse
                          />
                        </div>
                      </div>
                    </Row>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary" onClick={() => setShow(false)}>
                      Filtrar
                    </Button>
                  </Modal.Footer>
                </Modal>
              ) : (
                <>
                  {
                    ((isLoadFilter && !isLoadInformation)) ?
                      (
                        <>
                          <Row>
                            {isMobile &&
                              <Col xs={12} key={filterBrand} className='my-2' md={6}>Se encontraron <span className="font-bold">{filtros?.length}</span> resultados de <span className="font-bold">{Tarifas.length}</span></Col>}
                            <Col md={12}>
                              <span className="font-semibold">Compañia:</span>
                            </Col>
                            {brand?.length > 0 &&
                              brand.map((item, index) => (
                                <Col xs={4} md={6} key={item.id}>
                                  <button
                                    className={`filtro-producto-logo my-2 ${selectedBrand === item.id ? 'pruebaBtn' : ''}`}
                                    value={item.nombre}
                                    onClick={() => {
                                      setSelectedBrand(item.id);
                                      setFilterBrand(item.id);
                                    }}
                                  >
                                    <img src={item.logo} alt={item.nombre} />
                                  </button>
                                </Col>
                              ))
                            }
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
                                  checked={filterTechnology}
                                  onChange={() => setFilterTechnology(!filterTechnology)}
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
                                  onChange={() => setFilterMessage(!filterMessage)}
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
                                  onChange={() => setFilterRoaming(!filterRoaming)}
                                  label={'Roaming en la UE'}
                                  reverse
                                />
                              </div>
                            </div>
                          </Row>
                        </>
                      )
                      : <Load />
                  }
                </>
              )}
            </Col>
            <Col md={8}>
              <Row>
                <Col key={filterBrand} className='my-2' md={6}>Mostrando: <span className="font-bold">{filtros?.length}</span> resultados de <span className="font-bold">{Tarifas.length}</span></Col>
              </Row>
              <Row>
                <div className='pruebaPos'>
                  {(isLoadFilter && !isLoadInformation) ? (
                    filtros?.length > 0 ? (
                      filtros?.map((item, index) => (
                        <TarjetaTarifa key={index} data={item} />
                      ))
                    ) : (
                      <NotInfoItem key={0} title={'No se encontraron ofertas'} text={'Lo sentimos, no hemos encontrado ofertas con los filtros seleccionados.'} />
                    )
                  ) : (
                    <Load></Load>
                  )}
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

export default ContenedorProductosMovil;
