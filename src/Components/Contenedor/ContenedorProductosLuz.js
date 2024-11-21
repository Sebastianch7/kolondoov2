import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form, Tabs, Tab } from 'react-bootstrap';
import axios from 'axios';
import 'rc-slider/assets/index.css';
import { isMobile } from 'react-device-detect';
import Modal from 'react-bootstrap/Modal';
import InterSection from '../Utils/InterSection';
import NotInfoItem from '../Utils/NotInfoItem';
import Load from '../Utils/Load';
import TarjetaTarifaLeadEnergia from '../Tarjeta/TarjetaTarifaLeadEnergia'
import { fetchDataAll } from '../../services/ApiServices'
import { useLocation } from 'react-router-dom';


function ContenedorProductosLuz() {
  // Estados para el estado de carga de filtros e información
  const [isLoadInformation, setIsLoadInformation] = useState(false);

  // Estado para la marca seleccionada
  const [selectedBrand, setSelectedBrand] = useState(null);

  // Estados para filtros seleccionados
  const [filterBrand, setFilterBrand] = useState([]);
  const [filterPrice, setFilterPrice] = useState(false);
  const [filterTramo, setFilterTramo] = useState(false);
  const [filterPermanencia, setFilterPermanencia] = useState(false);
  const [filterPromo, setFilterPromo] = useState(false);
  const [filterLuzIndexada, setFilterLuzIndexada] = useState(false);

  // Estados para tarifas y marcas
  const [Tarifas, setTarifas] = useState([]);
  const [filtros, setFiltros] = useState([]);
  const [brand, setBrand] = useState([]);

  const [countParticulares, setCountParticulares] = useState(0);
  const [countEmpresarial, setCountEmpresarial] = useState(0);

  // Estado para el modal de filtros
  const [show, setShow] = useState(false);
  const [lang, setLang] = useState(null)
  const location = useLocation();

  useEffect(() => {
    setLang(location.pathname.split('/')[1])
  }, [location])
  // Función para limpiar los filtros
  const cleanFilter = () => {
    setFilterBrand([]);
    setFilterPrice(false);
    setFiltros(Tarifas);
    setFilterTramo(false)
    setFilterPermanencia(false)
    setFilterPromo(false)
    setFilterLuzIndexada(false)
  };

  useEffect(() => {
    if (lang != null) {
      const fetchBrands = async () => {
        try {
          const response = await fetchDataAll('Comercializadoras/luz',lang)
          setBrand(response);
        } catch (error) {
          console.error("Error al obtener las marcas de operadoras:", error);
        }
      };

      fetchBrands();
    }
  }, [lang]);

  useEffect(() => {
    if (lang != null) {
      const fetchTariffs = async () => {
        try {
          setIsLoadInformation(true);
          const response = await fetchDataAll('TarifasLuz',lang)
          setFiltros(response);
          setTarifas(response);
          setIsLoadInformation(false);
          setCountEmpresarial(response?.filter((item) => item.tarifa_empresarial === 1).length)
          setCountParticulares(response?.filter((item) => item.tarifa_empresarial === 2).length)
        } catch (error) {
          console.error("Error al obtener las tarifas de luz:", error);
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

  useEffect(() => {
    const resultado = Tarifas
      .filter((item) => filterByBrand(item))
      .filter((item) => filterByPrice(item))
      .filter((item) => filterByTramo(item))
      .filter((item) => filterByPermanencia(item))
      .filter((item) => filterByPromo(item))
      .filter((item) => filterByluzIndexada(item))

    setFiltros(resultado);
    setCountEmpresarial(resultado?.filter((item) => item.tarifa_empresarial === 1).length)
    setCountParticulares(resultado?.filter((item) => item.tarifa_empresarial === 2).length)
  }, [filterBrand, filterPrice, filterTramo, filterPermanencia, filterPromo, filterLuzIndexada]);

  function filterByBrand(item) {
    if (filterBrand.length > 0) {
      return filterBrand.includes(item.comercializadora) ? true : false;
    } else {
      return true;
    }
  }
  const filterByPrice = (item) => filterPrice !== false ? filterByFilter(filterPrice, item, 'precio fijo') : true;
  const filterByTramo = (item) => filterTramo !== false ? filterByFilter(filterTramo, item, 'sin tramos') : true;
  const filterByPermanencia = (item) => filterPermanencia !== false ? filterByFilter(filterPermanencia, item, 'sin permanencia') : true;
  const filterByPromo = (item) => filterPromo !== false ? (item.promocion !== "" && item.promocion !== null) : true;
  function filterByluzIndexada(item) {
    if (filterLuzIndexada !== false) {
      if (item.luz_indexada == 1) {
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
                        <b>{'Precio'}:</b>
                        <Form.Switch
                          className='input-check-dark mt-2 text-left'
                          type='switch'
                          checked={filterPrice}
                          onChange={() => setFilterPrice(!filterPrice)}
                          label={'Precio fijo'}
                          reverse
                        />
                      </div>
                      <div className='mt-4'>
                        <b>{'Tramos horarios'}:</b>
                        <Form.Switch
                          className='input-check-dark mt-2 text-left'
                          type='switch'
                          checked={filterTramo}
                          onChange={() => setFilterTramo(!filterTramo)}
                          label={'Sin tramos horarios'}
                          reverse
                        />
                      </div>
                      <div className='mt-4'>
                        <b>{'Permanencia'}:</b>
                        <Form.Switch
                          className='input-check-dark mt-2 text-left'
                          type='switch'
                          checked={filterPermanencia}
                          onChange={() => setFilterPermanencia(!filterPermanencia)}
                          label={'Tarifa sin permanencia'}
                          reverse
                        />
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
                      <div className='my-2'>
                        <b>{'Luz indexada'}:</b>
                        <div className='my-2'>
                          <Form.Switch
                            className='input-check-dark mt-2 text-left'
                            type='switch'
                            checked={filterLuzIndexada}
                            onChange={() => setFilterLuzIndexada(!filterLuzIndexada)}
                            label={'Luz indexada'}
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
                    (!isLoadInformation) ? (
                      <>
                        <Row>
                          {isMobile &&
                            <Col xs={12} key={filterBrand} className='my-2' md={6}>Se encontraron <span className="font-bold">{filtros?.length}</span> resultados de <span className="font-bold">{Tarifas.length}</span></Col>}
                          <Col md={12}>
                            <b>Compañía:</b>
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
                            <b>{'Precio'}:</b>
                            <Form.Switch
                              className='input-check-dark mt-2 text-left'
                              type='switch'
                              checked={filterPrice}
                              onChange={() => setFilterPrice(!filterPrice)}
                              label={'Precio fijo'}
                              reverse
                            />
                          </div>
                          <div className='mt-4'>
                            <b>{'Tramos horarios'}:</b>
                            <Form.Switch
                              className='input-check-dark mt-2 text-left'
                              type='switch'
                              checked={filterTramo}
                              onChange={() => setFilterTramo(!filterTramo)}
                              label={'Sin tramos horarios'}
                              reverse
                            />
                          </div>
                          <div className='mt-4'>
                            <b>{'Permanencia'}:</b>
                            <Form.Switch
                              className='input-check-dark mt-2 text-left'
                              type='switch'
                              checked={filterPermanencia}
                              onChange={() => setFilterPermanencia(!filterPermanencia)}
                              label={'Tarifa sin permanencia'}
                              reverse
                            />
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
                          <div className='my-2'>
                            <span className='font-bold'>{'Luz indexada'}:</span>
                            <div className='my-2'>
                              <Form.Switch
                                className='input-check-dark mt-2 text-left'
                                type='switch'
                                checked={filterLuzIndexada}
                                onChange={() => setFilterLuzIndexada(!filterLuzIndexada)}
                                label={'Luz indexada'}
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
                <Tabs
                  defaultActiveKey="particulares"
                  id="tabs_filtros"
                  className="mb-3"
                >
                  {countParticulares > 0 &&
                    <Tab eventKey="particulares"
                      title={
                        <>
                          Tarifas para particulares <span className="badge bg-secundary color-dark ms-2">{countParticulares}</span>
                        </>
                      }

                    >
                      {(() => {

                        const filteredTarifas = filtros?.filter((item) => item.tarifa_empresarial === 2);

                        return !isLoadInformation ? (
                          filteredTarifas?.length > 0 ? (
                            filteredTarifas.map((item, index) => (
                              <TarjetaTarifaLeadEnergia key={index} data={item} TarifaCard />
                            ))
                          ) : (
                            <NotInfoItem title="No se encontraron ofertas" text="Lo sentimos, no hemos encontrado ofertas con los filtros seleccionados." />
                          )
                        ) : (
                          <Load />
                        );
                      })()}
                    </Tab>}

                  {countEmpresarial > 0 &&
                    < Tab eventKey="empresariales" title={
                      <>
                        Tarifas para empresas <span className="badge bg-secundary color-dark ms-2">{countEmpresarial}</span>
                      </>
                    }>
                      {(() => {
                        const filteredTarifas = filtros?.filter((item) => item.tarifa_empresarial === 1);

                        return !isLoadInformation ? (
                          filteredTarifas?.length > 0 ? (
                            filteredTarifas.map((item, index) => (

                              < TarjetaTarifaLeadEnergia key={index} data={item} TarifaCard />

                            ))
                          ) : (
                            <NotInfoItem title="No se encontraron ofertas" text="Lo sentimos, no hemos encontrado ofertas con los filtros seleccionados." />
                          )
                        ) : (
                          <Load />
                        );
                      })()}
                    </Tab>}

                </Tabs>
              </Row>
            </Col>
          </Row>
        </Container >
      </section >
      <InterSection></InterSection>
    </>
  );
}

export default ContenedorProductosLuz;
