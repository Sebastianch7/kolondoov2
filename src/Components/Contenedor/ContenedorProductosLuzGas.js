import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import 'rc-slider/assets/index.css';
import { isMobile } from 'react-device-detect';
import Modal from 'react-bootstrap/Modal';
import InterSection from '../Utils/InterSection';
import TarjetaTarifa from '../Tarjeta/TarjetaTarifa';
import NotInfoItem from '../Utils/NotInfoItem';
import Load from '../Utils/Load';
import TarjetaTarifaLeadEnergia from '../Tarjeta/TarjetaTarifaLeadEnergia'
import { fetchComercializadorasLuzGas, fetchTarifasLuzGas } from '../../services/ApiServices'


function ContenedorProductosLuzGas() {
  // Estados para el estado de carga de filtros e información
  const [isLoadInformation, setIsLoadInformation] = useState(false);

  // Estado para la marca seleccionada
  const [selectedBrand, setSelectedBrand] = useState(null);

  // Estados para filtros seleccionados
  const [filterBrand, setFilterBrand] = useState(null);
  const [filterPrice, setFilterPrice] = useState(false);
  const [filterTramo, setFilterTramo] = useState(false);
  const [filterPermanencia, setFilterPermanencia] = useState(false);

  // Estados para tarifas y marcas
  const [Tarifas, setTarifas] = useState([]);
  const [filtros, setFiltros] = useState([]);
  const [brand, setBrand] = useState([]);

  // Estado para el modal de filtros
  const [show, setShow] = useState(false);

  // Función para limpiar los filtros
  const cleanFilter = () => {
    setFilterBrand(null);
    setFilterPrice(false);
    setFiltros(Tarifas);
  };

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetchComercializadorasLuzGas()
        setBrand(response);
      } catch (error) {
        console.error("Error al obtener las marcas de operadoras:", error);
      }
    };

    fetchBrands();
  }, []);

  useEffect(() => {
    const fetchTariffs = async () => {
      try {
        setIsLoadInformation(true);
        const response = await fetchTarifasLuzGas()
        setFiltros(response);
        setTarifas(response);
        setIsLoadInformation(false);
      } catch (error) {
        console.error("Error al obtener las tarifas de luz:", error);
      }
    };

    fetchTariffs();
  }, [brand]);

  // Función para aplicar los filtros
  useEffect(() => {
    const resultado = Tarifas
      .filter((item) => filterByBrand(item))
      .filter((item) => filterByPrice(item))
      .filter((item) => filterByTramo(item))
      .filter((item) => filterByPermanencia(item))

    setFiltros(resultado);
  }, [filterBrand, filterPrice, filterTramo, filterPermanencia]);

  const filterByBrand = (item) => filterBrand !== null ? item.comercializadora === filterBrand : true;
  const filterByPrice = (item) => filterPrice !== false ? filterByFilter(filterPrice, item, 'precio fijo') : true;
  const filterByTramo = (item) => filterTramo !== false ? filterByFilter(filterTramo, item, 'sin tramos') : true;
  const filterByPermanencia = (item) => filterPermanencia !== false ? filterByFilter(filterPermanencia, item, 'sin permanencia') : true;


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

                  {!isLoadInformation ? (
                    filtros?.length > 0 ? (
                      filtros?.map((item, index) => (
                        <TarjetaTarifaLeadEnergia key={index} data={item} TarifaCard></TarjetaTarifaLeadEnergia>
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

export default ContenedorProductosLuzGas;
