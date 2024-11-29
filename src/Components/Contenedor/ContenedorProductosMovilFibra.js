import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form, Tabs, Tab, TabContainer, Nav, TabContent, TabPane } from 'react-bootstrap';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { isMobile } from 'react-device-detect';
import Modal from 'react-bootstrap/Modal';
import InterSection from '../Utils/InterSection';
import TarjetaTarifa from '../Tarjeta/TarjetaTarifa';
import NotInfoItem from '../Utils/NotInfoItem';
import Load from '../Utils/Load';
import { fetchDataAll } from '../../services/ApiServices'
import { useLocation } from 'react-router-dom';

function ContenedorProductosMovilFibra() {
  // Estado para filtros de precio y capacidad
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [minCapacity, setMinCapacity] = useState(0);
  const [maxCapacity, setMaxCapacity] = useState(1000);
  const [typeMoneda, setTypeMoneda] = useState(null);

  // Estados para el estado de carga de filtros e información
  const [isLoadFilter, setIsLoadFilter] = useState(false);
  const [isLoadInformation, setIsLoadInformation] = useState(false);

  // Estados para filtros seleccionados
  const [filterBrand, setFilterBrand] = useState([]);
  const [filterPrice, setFilterPrice] = useState([minPrice, maxPrice]);
  const [filterCapacity, setFilterCapacity] = useState([minCapacity, maxCapacity]);
  const [filterLlamadas, setFilterLlamadas] = useState(false);
  const [filterPromo, setFilterPromo] = useState(false);
  const [filterOfertaDestacada, setFilterOfertaDestacada] = useState(false);

  // Estados para tarifas y marcas
  const [Tarifas, setTarifas] = useState([]);
  const [filtros, setFiltros] = useState([]);
  const [brand, setBrand] = useState([]);

  const [countParticulares, setCountParticulares] = useState(0);
  const [countEmpresarial, setCountEmpresarial] = useState(0);

  // Estados para rangos de precio y capacidad
  const [rangePrice, setRangePrice] = useState([minPrice, maxPrice]);
  const [rangeCapacity, setRangeCapacity] = useState([minCapacity, maxCapacity]);

  // Estado para el modal de filtros
  const [show, setShow] = useState(false);
  const [lang, setLang] = useState(null)
  const location = useLocation();

  useEffect(() => {
    setLang(location.pathname.split('/')[1])
  }, [location])
  // Función para limpiar los filtros
  const cleanFilter = () => {
    setFilterLlamadas(false);
    setFilterPromo(false);
    setFilterBrand([]);
    setFilterCapacity([minCapacity, maxCapacity]);
    setFilterPrice([minPrice, maxPrice]);
    setRangePrice([minPrice, maxPrice]);
    setRangeCapacity([minCapacity, maxCapacity]);
    setFilterOfertaDestacada(false);
    setFiltros(Tarifas);
  };

  const renderTarifas = (filtro, tipo) => {
    const filteredTarifas = filtros?.filter((item) => item.tarifa_empresarial === filtro);

    return !isLoadInformation ? (
      filteredTarifas?.length > 0 ? (
        filteredTarifas.map((item, index) => (
          <TarjetaTarifa key={index} data={item} TarifaCard />
        ))
      ) : (
        <NotInfoItem
          title={`No se encontraron ofertas para ${tipo}`}
          text="Lo sentimos, no hemos encontrado ofertas con los filtros seleccionados."
        />
      )
    ) : (
      <Load />
    );
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
    if (lang != null) {
      setIsLoadFilter(false);
      const fetchData = async () => {
        try {
          const response = await fetchDataAll('filterMovilFibra', lang)
          const { min_gb, max_gb, min_precio, max_precio, moneda } = response[0];

          setMinCapacity(parseInt(min_gb) > 0 ? parseInt(min_gb) : 0);
          setMaxCapacity(parseInt(max_gb));
          setRangeCapacity([parseInt(min_gb) > 0 ? parseInt(min_gb) : 0, parseInt(max_gb)]);

          setMaxPrice(parseInt(max_precio));
          setMinPrice(parseInt(min_precio) > 0 ? parseInt(min_precio) : 0);
          setRangePrice([parseInt(min_precio) > 0 ? parseInt(min_precio) : 0, parseInt(max_precio)]);
          setTypeMoneda(moneda)
          setIsLoadFilter(true);
        } catch (error) {
          console.error("Error al obtener los datos iniciales de filtros:", error);
        }
      };

      fetchData();
    }
  }, [lang]);

  // Función para obtener las marcas de operadoras
  useEffect(() => {
    if (lang != null) {
      const fetchBrands = async () => {
        try {
          const response = await fetchDataAll('Operadoras/movilfibra', lang)
          setBrand(response);
        } catch (error) {
          console.error("Error al obtener las marcas de operadoras:", error);
        }
      };

      fetchBrands();
    }
  }, [lang]);

  // Función para obtener las tarifas de móvil
  useEffect(() => {
    if (lang != null) {
      setIsLoadInformation(true);
      const fetchTariffs = async () => {
        try {
          const response = await fetchDataAll('TarifasFibraMovil', lang)
          setFiltros(response);
          setTarifas(response);
          setIsLoadInformation(false);
          setCountEmpresarial(response?.filter((item) => item.tarifa_empresarial === 1).length)
          setCountParticulares(response?.filter((item) => item.tarifa_empresarial === 2).length)
        } catch (error) {
          console.error("Error al obtener las tarifas de móvil:", error);
        }
      };

      fetchTariffs();
    }
  }, [brand, lang]);

  function setFilterBrandMulti(value) {
    if (!filterBrand?.includes(value)) {
      setFilterBrand([...filterBrand, value])
    } else {
      setFilterBrand(filterBrand.filter((item) => item !== value))
    }
  }

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
      .filter((item) => filterByPromo(item))
      .filter((item) => filterByOfertaDestacada(item))

    setFiltros(resultado);
    setCountEmpresarial(resultado?.filter((item) => item.tarifa_empresarial === 1).length)
    setCountParticulares(resultado?.filter((item) => item.tarifa_empresarial === 2).length)
  }, [filterBrand, filterPrice, filterCapacity, filterLlamadas, filterPromo, filterOfertaDestacada]);

  // Función para filtrar por marca
  function filterByBrand(item) {
    if (filterBrand.length > 0) {
      return filterBrand.includes(item.operadora) ? true : false;
    } else {
      return true;
    }
  }

  // Función para filtrar por precio
  const filterByPrice = (item) => filterPrice !== null ? item.precio >= filterPrice[0] && item.precio <= filterPrice[1] : true;

  // Función para filtrar por tecnología
  const filterByTechnology = (item) => filterLlamadas !== false ? filterByFilter(filterLlamadas, item, 'Llamadas ilimitadas') : true;

  // Función para filtrar por mensajes
  const filterByPromo = (item) => filterPromo !== false ? (item.promocion !== "" && item.promocion !== null) : true;

  // Función para filtrar por capacidad
  function filterByCapacity(item) {
    if (filterCapacity !== null) {
      if (item.parrilla_bloque_1?.toLowerCase().includes("ilimitados") || item.parrilla_bloque_2?.toLowerCase().includes("ilimitados") || item.parrilla_bloque_3?.toLowerCase().includes("ilimitados") || item.parrilla_bloque_4?.toLowerCase().includes("ilimitados")) {
        return true;
      } else {
        return parseInt(item.parrilla_bloque_1.replace("Fibra", "").replace("Mb", "")) >= filterCapacity[0] && parseInt(item.parrilla_bloque_1.replace("Fibra", "").replace("Mb", "")) < filterCapacity[1];
      }
    } else {
      return true;
    }
  }

  function filterByOfertaDestacada(item) {
    if (filterOfertaDestacada !== false) {
      if (item.destacada == 1) {
        return true;
      } else {
        return false;
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
            <Col xs={12} md={12} xl={3}>
              <Row>
                {!isMobile ? <Col className='my-3 font-semibold' xs={6} md={5}>Filtrar por: </Col> : <Col className='my-2' xs={6} md={5}><Button variant="light" onClick={() => setShow(true)}>Filtrar por</Button></Col>}
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
                        <span className="font-bold">Compañía:</span>
                      </Col>
                      {brand?.length > 0 &&
                        brand.map((item, index) => (
                          <Col xs={4} md={6} key={item.id}>
                            <button
                              className={`filtro-producto-logo my-2 ${filterBrand.includes(item.id) ? 'logoFocus' : ''}`}
                              value={item.nombre}
                              onClick={() => setFilterBrandMulti(item.id)}>
                              <img src={item.logo} alt={item.nombre} />
                            </button>
                          </Col>
                        ))}
                    </Row>
                    <Row>
                      <div className='mt-4'>
                        <b>{'Coste mensual'}:</b>
                        <div className='my-4 d-flex justify-content-between'>
                          <div>{typeMoneda}{rangePrice[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</div>
                          <div>{typeMoneda}{rangePrice[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</div>
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
                        <b>{'Fibra Mb'}:</b>
                        <div className='my-4 d-flex justify-content-between'>
                          <div>{rangeCapacity[0]} {'GB'}</div>
                          <div>{rangeCapacity[1]} {'GB'}</div>
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
                        <b>{'Oferta destacada'}:</b>
                        <div className='my-2'>
                          <Form.Switch
                            className='input-check-dark mt-2 text-left'
                            type='switch'
                            checked={filterOfertaDestacada}
                            onChange={() => setFilterOfertaDestacada(!filterOfertaDestacada)}
                            label={'Mostrar solo ofertas destacadas'}
                            reverse
                          />
                        </div>
                      </div>
                      <div className='my-2'>
                        <b>{'Llamadas ilimitadas'}:</b>
                        <div className='my-2'>
                          <Form.Switch
                            className='input-check-dark mt-2 text-left'
                            type='switch'
                            checked={filterLlamadas}
                            onChange={() => setFilterLlamadas(!filterLlamadas)}
                            label={'Llamadas ilimitadas'}
                            reverse
                          />
                        </div>
                      </div>
                      <div className='my-2'>
                        <b>{'Promoción'}:</b>
                        <div className='my-2'>
                          <Form.Switch
                            className='input-check-dark mt-2 text-left'
                            type='switch'
                            checked={filterPromo}
                            onChange={() => setFilterPromo(!filterPromo)}
                            label={'Tiene promoción'}
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
                              <span className="font-semibold">Compañía:</span>
                            </Col>
                            {brand?.length > 0 &&
                              brand.map((item, index) => (
                                <Col xs={4} md={6} key={item.id}>
                                  <button
                                    className={`filtro-producto-logo my-2 ${filterBrand.includes(item.id) ? 'logoFocus' : ''}`}
                                    value={item.nombre}
                                    onClick={() => setFilterBrandMulti(item.id)}>
                                    <img src={item.logo} alt={item.nombre} />
                                  </button>
                                </Col>
                              ))}
                          </Row>
                          <Row>
                            <div className='mt-4'>
                              <b>{'Coste mensual'}:</b>
                              <div className='my-4 d-flex justify-content-between'>
                                <div>{typeMoneda}{rangePrice[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</div>
                                <div>{typeMoneda}{rangePrice[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</div>
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
                              <b>{'Fibra Mb'}:</b>
                              <div className='my-4 d-flex justify-content-between'>
                                <div>{rangeCapacity[0]} {'GB'}</div>
                                <div>{rangeCapacity[1]} {'GB'}</div>
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
                              <b>{'Oferta destacada'}:</b>
                              <div className='my-2'>
                                <Form.Switch
                                  className='input-check-dark mt-2 text-left'
                                  type='switch'
                                  checked={filterOfertaDestacada}
                                  onChange={() => setFilterOfertaDestacada(!filterOfertaDestacada)}
                                  label={'Mostrar solo ofertas destacadas'}
                                  reverse
                                />
                              </div>
                            </div>
                            <div className='my-2'>
                              <b>{'Llamadas ilimitadas'}:</b>
                              <div className='my-2'>
                                <Form.Switch
                                  className='input-check-dark mt-2 text-left'
                                  type='switch'
                                  checked={filterLlamadas}
                                  onChange={() => setFilterLlamadas(!filterLlamadas)}
                                  label={'Llamadas ilimitadas'}
                                  reverse
                                />
                              </div>
                            </div>
                            <div className='my-2'>
                              <b>{'Promoción'}:</b>
                              <div className='my-2'>
                                <Form.Switch
                                  className='input-check-dark mt-2 text-left'
                                  type='switch'
                                  checked={filterPromo}
                                  onChange={() => setFilterPromo(!filterPromo)}
                                  label={'Tiene promoción'}
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
            <Col md={12} xl={8}>
              <Row>
                <Col key={filterBrand} className='my-2' md={6}>Mostrando: <span className="font-bold">{filtros?.length}</span> resultados de <span className="font-bold">{Tarifas.length}</span></Col>
              </Row>
              <Row>
                <TabContainer defaultActiveKey="particulares" id="tabs_filtros">
                  <Nav variant="tabs" className="mb-3">
                    <Nav.Item>
                      <Nav.Link eventKey="particulares">
                        Tarifas para particulares{' '}
                        <span className="badge bg-secondary ms-2">{countParticulares}</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="empresariales">
                        Tarifas para empresas{' '}
                        <span className="badge bg-secondary ms-2">{countEmpresarial}</span>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <TabContent>
                    <TabPane eventKey="particulares">
                      {renderTarifas(2, 'particulares')}
                    </TabPane>

                    <TabPane eventKey="empresariales">
                      {renderTarifas(1, 'empresariales')}
                    </TabPane>
                  </TabContent>
                </TabContainer>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <InterSection></InterSection>
    </>
  );
}

export default ContenedorProductosMovilFibra;
