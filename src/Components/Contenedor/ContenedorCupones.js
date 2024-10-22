import React, { useCallback, useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import 'rc-slider/assets/index.css';
import { isMobile } from 'react-device-detect';
import Modal from 'react-bootstrap/Modal';
import InterSection from '../Utils/InterSection';
import NotInfoItem from '../Utils/NotInfoItem';
import Load from '../Utils/Load';
import { fetchTipoCupones, fetchComerciosCupones, fetchTarifasCupones, fetchTarifaCupon } from '../../services/ApiServices'
import TarjetaTarifaCupon from '../Tarjeta/TarjetaTarifaCupon';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import ModalCupon from '../modal/ModalCupon';

function ContenedorCupones(idCategoria = null) {
  const [marcasArray, setMarcasArray] = useState([]);
  const [tipoArray, setTipoArray] = useState([]);
  const locations = useLocation().search;
  const [filterDestacada, setFilterDestacada] = useState(false);

  const [lang, setLang] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setLang(location.pathname.split('/')[1]);
  }, [location]);


  const [isLoadFilter, setIsLoadFilter] = useState(false);
  const [isLoadInformation, setIsLoadInformation] = useState(false);

  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const handleClose = () => setShowModal(false);

  // Consulta por id de cupon, para uso en la modal
  useEffect(() => {
    if (id !== undefined) {
      const fetchCuponInformation = async () => {
        try {
          const response = await fetchTarifaCupon(id);
          setModalData(response);
          setShowModal(true);
        } catch (error) {
          console.error("Error al obtener los comercios para cupones:", error);
        }
      };
      fetchCuponInformation();
    }
  }, [id]);


  const [filterBrand, setFilterBrand] = useState(marcasArray);
  const [filterTypeCupon, setFilterTypeCupon] = useState([]);
  const [Tarifas, setTarifas] = useState([]);
  const [filtros, setFiltros] = useState([]);
  const [brand, setBrand] = useState([]);
  const [tipoCupon, setTipoCupon] = useState([]);

  const [show, setShow] = useState(false);

  const cleanFilter = () => {
    setFilterTypeCupon([]);
    setFilterBrand([]);
    setFilterDestacada(false);
    setFiltros(Tarifas);
  };



  // Combinar fetch de marcas y cupones
  useEffect(() => {
    if (lang != null) {
      const fetchData = async () => {
        try {
          const [brandsResponse, cuponesResponse] = await Promise.all([
            fetchComerciosCupones(lang, idCategoria['categoria']),
            fetchTipoCupones(lang, idCategoria['categoria'])
          ]);
          setBrand(brandsResponse);
          setTipoCupon(cuponesResponse);
        } catch (error) {
          console.error("Error al obtener los datos para cupones:", error);
        }
      };
      fetchData();
    }
  }, [lang, idCategoria]);

  // Obtener tarifas de cupones
  useEffect(() => {
    setIsLoadInformation(true);
    const fechTarifasCupones = async () => {
      if (lang != null) {
        try {
          const response = await fetchTarifasCupones(lang, idCategoria?.categoria || null);
          if (response.length === 0) {
            //navigate('/es/404', { replace: true, state: { statusCode: 404 } });
          }
          setFiltros(response);
          setTarifas(response);
          setIsLoadInformation(false);
          setIsLoadFilter(false);
        } catch (error) {
          console.error("Error al obtener la información:", error);
        }
      }
    };
    fechTarifasCupones();
  }, [lang, brand]);

  useEffect(() => {
    if (locations != null) {
      const params = new URLSearchParams(locations);
      const marcasString = params.get('marcas');
      const tipo = params.get('tipo')

      if (marcasString != 'null' || tipo != 'null') {
        const marcasArray = marcasString ? marcasString.split(',').map(Number) : [];
        setMarcasArray(marcasArray);
        const tipoArray = tipo ? tipo.split(',').map(Number) : [];
        if (marcasString != 'null') {
          setFilterBrand(marcasArray);
        }
        if (tipo != 'null') {
          setFilterTypeCupon(tipoArray);
        }


      }
    }
  }, [showModal]);


  const setFilterBrandMulti = (value) => {
    if (!filterBrand.includes(value)) {
      setFilterBrand([...filterBrand, value]);
    } else {
      setFilterBrand(filterBrand.filter((item) => item !== value));
    }
  };

  const setFilterTypeCuponMulti = (value) => {
    if (!filterTypeCupon.includes(value)) {
      setFilterTypeCupon([...filterTypeCupon, value]);
    } else {
      setFilterTypeCupon(filterTypeCupon.filter((item) => item !== value));
    }
  };

  // Usar useCallback para evitar la recreación de funciones
  const filterByBrand = useCallback((item) => {
    return filterBrand.length > 0 ? filterBrand.includes(item.comercio) : true;
  }, [filterBrand]);

  const filterByTypeCupon = useCallback((item) => {
    return filterTypeCupon.length > 0 ? filterTypeCupon.includes(item.tipoCupon) : true;
  }, [filterTypeCupon]);

  const filterByDestacada = (item) => {
    return filterDestacada !== false ? item.destacada === 1 : true;
  };


  // Actualizar los filtros según los valores seleccionados
  useEffect(() => {
    const resultado = Tarifas
      .filter(filterByBrand)
      .filter(filterByTypeCupon)
      .filter(filterByDestacada)
    setFiltros(resultado);
  }, [Tarifas, filterBrand, filterTypeCupon, filterDestacada, filterByBrand, filterByTypeCupon]);



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
                                    className={`d-flex align-items-center filtro-producto-logo my-2 ${filterBrand.includes(item.id) ? 'logoFocus' : ''}`}
                                    value={item.nombre}
                                    onClick={() => setFilterBrandMulti(item.id)}>
                                    <img src={item.logo} alt={item.nombre} />
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
                                    {item.nombre}
                                  </button>
                                </Col>
                              ))}
                          </Row>
                          <Row>
                            <div className='mt-4'>
                              <b>{'Destacada'}:</b>
                              <div className='my-2'>
                                <Form.Switch
                                  className='input-check-dark mt-2 text-left'
                                  type='switch'
                                  checked={filterDestacada}
                                  onChange={() => setFilterDestacada(!filterDestacada)}
                                  label={'Oferta destacada:'}
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
