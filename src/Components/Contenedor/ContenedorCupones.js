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
import { fetchTipoCupones, fetchComerciosCupones, fetchTarifasCupones, fetchTarifaCupon } from '../../services/ApiServices'
import TarjetaTarifaCupon from '../Tarjeta/TarjetaTarifaCupon';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import ModalCupon from '../modal/ModalCupon';

function ContenedorCupones(idCategoria = null) {

  const [marcasArray, setMarcasArray] = useState([])
  const [tipoArray, setTipoArray] = useState([])
  const locations = useLocation().search;

  let navigate = useNavigate();

  const [lang, setLang] = useState(null)
  const location = useLocation();

  useEffect(() => {
    setLang(location.pathname.split('/')[1])
  }, [])

  useEffect(() => {
    if (locations != null) {
      const params = new URLSearchParams(locations);
      const marcasString = params.get('marcas');
      const tipo = params.get('tipo');

      const marcasArray = marcasString ? marcasString.split(',').map(Number) : [];
      setMarcasArray(marcasArray)
      const tipoArray = tipo ? tipo.split(',').map(Number) : [];

      setTimeout(() => {
        setFilterBrand(marcasArray);
      }, [5000])
      setTimeout(() => {
        setFilterTypeCupon(tipoArray);
      }, [8000])

    }
  }, [locations])

  const [isLoadFilter, setIsLoadFilter] = useState(false);
  const [isLoadInformation, setIsLoadInformation] = useState(false);

  const { id } = useParams();

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const handleClose = () => setShowModal(false);

  //consulta por id de cupon, para uso en la modal
  useEffect(() => {
    if (id !== undefined) {
      const fetchCuponInformation = async () => {
        try {
          const response = await fetchTarifaCupon(id);
          setModalData(response);
          setShowModal(true);
        } catch (error) {
          console.error("Error al obtener los comercios  para cupones:", error);
        }
      };
      fetchCuponInformation();
    }
  }, [id])

  // Estados para filtros seleccionados
  const [filterBrand, setFilterBrand] = useState(marcasArray);
  const [filterTypeCupon, setFilterTypeCupon] = useState(tipoArray);

  // Estados para tarifas y marcas
  const [Tarifas, setTarifas] = useState([]);
  const [filtros, setFiltros] = useState([]);
  const [brand, setBrand] = useState([]);
  const [tipoCupon, setTipoCupon] = useState([]);

  const [show, setShow] = useState(false);

  const cleanFilter = () => {
    setFilterTypeCupon([]);
    setFilterBrand([]);
    setFiltros(Tarifas);
  };

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetchComerciosCupones(lang, idCategoria['categoria']);
        setBrand(response);
      } catch (error) {
        console.error("Error al obtener los comercios  para cupones:", error);
      }
    };
    fetchBrands();
  }, []);

  useEffect(() => {
    const fetchCupones = async () => {
      try {
        const response = await fetchTipoCupones();
        setTipoCupon(response);
      } catch (error) {
        console.error("Error al obtener los comercios  para cupones:", error);
      }
    };
    fetchCupones();
  }, []);

  useEffect(() => {
    setIsLoadInformation(true);
    const fechTarifasCupones = async () => {
      try {
        if (idCategoria != null) {
          const response = await fetchTarifasCupones(lang, idCategoria['categoria']);
          if (response.length === 0) {
            navigate('/es/404', { replace: true, state: { statusCode: 404 } });
          }
          setFiltros(response);
          setTarifas(response);
          setIsLoadInformation(false);
          setIsLoadFilter(false)
        } else {
          const response = await fetchTarifasCupones(lang, null)
          setFiltros(response);
          setTarifas(response);
          setIsLoadInformation(false);
          setIsLoadFilter(false)
        }
      } catch (error) {
        console.error("Error al obtener la información:", error);
      }
    };

    fechTarifasCupones();
  }, [lang, brand]);

  function setFilterBrandMulti(value) {
    if (!filterBrand?.includes(value)) {
      setFilterBrand([...filterBrand, value])
    } else {
      setFilterBrand(filterBrand.filter((item) => item !== value))
    }
  }

  function setFilterTypeCuponMulti(value) {
    if (!filterTypeCupon?.includes(value)) {
      setFilterTypeCupon([...filterTypeCupon, value])
    } else {
      setFilterTypeCupon(filterTypeCupon.filter((item) => item !== value))
    }
  }


  useEffect(() => {
    const resultado = Tarifas
      .filter((item) => filterByBrand(item))
      .filter((item) => filterByTypeCupon(item))
    setFiltros(resultado);
  }, [filterBrand, filterTypeCupon]);

  function filterByBrand(item) {
    if (filterBrand.length > 0) {
      return filterBrand.includes(item.comercio) ? true : false;
    } else {
      return true;
    }
  }

  function filterByTypeCupon(item) {
    if (filterTypeCupon.length > 0) {
      return filterTypeCupon.includes(item.tipoCupon) ? true : false;
    } else {
      return true;
    }
  }

  return (
    <>
      <ModalCupon show={showModal} handleClose={handleClose} data={modalData} />
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
                        <span className="font-bold">Tienda:</span>
                      </Col>
                      {brand?.length > 0 &&
                        brand.map((item, index) => (
                          <Col xs={4} md={6} key={item.id}>
                            <button
                              className={`filtro-producto-logo my-2 ${filterBrand.includes(item.id) ? 'logoFocus' : ''}`}
                              value={item.nombre}
                              onClick={() => setFilterBrandMulti(item.id)}>
                              {/* <img src={item.logo} alt={item.nombre} /> */}
                              {item.nombre}
                            </button>
                          </Col>
                        ))}
                    </Row>
                    <Row>
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
                    ((!isLoadFilter && !isLoadInformation)) ?
                      (
                        <>
                          <Row>
                            {isMobile &&
                              <Col xs={12} key={filterBrand} className='my-2' md={6}>Se encontraron <span className="font-bold">{filtros?.length}</span> resultados de <span className="font-bold">{Tarifas.length}</span></Col>}
                            <Col md={12}>
                              <span className="font-semibold">Tienda:</span>
                            </Col>
                            {brand?.length > 0 &&
                              brand.map((item, index) => (
                                <Col xs={4} md={6} key={item.id}>
                                  <button
                                    className={`filtro-producto-logo my-2 ${filterBrand.includes(item.id) ? 'logoFocus' : ''}`}
                                    value={item.nombre}
                                    onClick={() => setFilterBrandMulti(item.id)}>
                                    {item.nombre}
                                  </button>
                                </Col>
                              ))}
                          </Row>
                          <Row>
                            <Col md={12} className='mt-4'>
                              <span className="font-semibold">Tipo de descuento:</span>
                            </Col>
                            {tipoCupon?.length > 0 &&
                              tipoCupon.map((item, index) => (
                                <Col xs={4} md={6} key={item.id}>
                                  <button
                                    className={`filtro-producto-logo my-2 ${filterTypeCupon.includes(item.id) ? 'logoFocus' : ''}`}
                                    value={item.nombre}
                                    onClick={() => setFilterTypeCuponMulti(item.id)}>
                                    {/* {item.nombre} */}
                                    {item.nombre}
                                  </button>
                                </Col>
                              ))}
                          </Row>
                          <Row>
                            {/* <div className='my-2'>
                              <b>{'5G'}:</b>
                              <div className='my-2'>
                                <Form.Switch
                                  className='input-check-dark mt-2 text-left'
                                  type='switch'
                                  checked={filterTypeCupon}
                                  onChange={() => setFilterTypeCupon(!filterTypeCupon)}
                                  label={'Tipo de descuento:'}
                                  reverse
                                />
                              </div>
                            </div> */}
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
                <div className='pruebaPos'>
                  {(!isLoadFilter && !isLoadInformation) ? (
                    filtros?.length > 0 ? (
                      filtros?.map((item, index) => (
                        <TarjetaTarifaCupon key={index} data={item} brands={filterBrand} tipos={filterTypeCupon} />
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

export default ContenedorCupones;
