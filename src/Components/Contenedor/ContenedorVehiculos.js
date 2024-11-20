import React, { useCallback, useEffect, useState } from "react";
import { Container, Row, Col, Button, CardGroup } from "react-bootstrap";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { isMobile } from "react-device-detect";
import Modal from "react-bootstrap/Modal";
import InterSection from "../Utils/InterSection";
import Load from "../Utils/Load";
import { fetchFilterVehiculos, fetchDataAll } from "../../services/ApiServices";
import TarjetaVehiculo from "../Tarjeta/TarjetaVehiculo";
import ItemFiltroVehiculo from "../../Content/ItemFiltroVehiculo.json";
import ItemFiltroCombustible from "../../Content/ItemFiltroCombustible.json";
import ReactPaginate from "react-paginate";
import { useLocation } from "react-router-dom";

function ContenedorVehiculos() {
  // Estado para filtros de precio y capacidad
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  // Estados para el estado de carga de filtros e información
  const [isLoadFilter, setIsLoadFilter] = useState(false);
  const [isLoadInformation, setIsLoadInformation] = useState(false);

  // Estados para filtros seleccionados
  const [filterBrand, setFilterBrand] = useState([]);
  const [filterChasis, setFilterChasis] = useState([]);
  const [filterFuel, setFilterFuel] = useState([]);
  const [filterPrice, setFilterPrice] = useState([minPrice, maxPrice]);
 
  // Estados para tarifas y marcas
  const [Tarifas, setTarifas] = useState([]);
  const [filtros, setFiltros] = useState([]);
  const [brand, setBrand] = useState([]);

  // Estados para rangos de precio y capacidad
  const [rangePrice, setRangePrice] = useState([minPrice, maxPrice]);


  // Estado para el modal de filtros
  const [show, setShow] = useState(false);
  const [lang, setLang] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setLang(location.pathname.split("/")[1]);
  }, [location, lang]);

  const cleanFilter = useCallback(() => {
    setFilterBrand([]);
    setFilterChasis([]);
    setFilterFuel([]);
    setFilterPrice([minPrice, maxPrice]);
    setRangePrice([minPrice, maxPrice]);
    setFiltros(Tarifas);
  }, [minPrice, maxPrice, Tarifas]);

  // Función para manejar el cambio en el rango de precio
  const handleRangeChangePrice = (newRange) => {
    setRangePrice(newRange);
    handleFilterPrice(newRange);
  };

  // Función para obtener los datos iniciales de filtros
  useEffect(() => {
    setIsLoadFilter(false);
    const fetchData = async () => {
      try {
        const response = await fetchFilterVehiculos(lang);
        const { minPrice, maxPrice } = response;
        setMaxPrice(parseInt(maxPrice));
        setMinPrice(parseInt(minPrice) > 0 ? parseInt(minPrice) : 0);
        setRangePrice([minPrice, maxPrice]);
        setIsLoadFilter(true);
      } catch (error) {
        console.error(
          "Error al obtener los datos iniciales de filtros:",
          error
        );
      }
    };

    fetchData();
  }, [lang, isLoadFilter]);

  useEffect(() => {
    setIsLoadFilter(false);
    const fetchData = async () => {
      try {
        const response = await fetchDataAll(
          "getValuesFilterVehiculosChassis",
          lang
        );
        setFilterChasis(response);
        setIsLoadFilter(true);
      } catch (error) {
        console.error(
          "Error al obtener los datos iniciales de filtros:",
          error
        );
      }
    };

    fetchData();
  }, [lang, isLoadFilter]);

  // Función para obtener las marcas
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetchDataAll("getMarcasVehiculos", lang);
        setBrand(response);
      } catch (error) {
        console.error("Error al obtener las marcas de vehiculos:", error);
      }
    };

    fetchBrands();
  }, [lang]);

  // Función para obtener las tarifas
  useEffect(() => {
    setIsLoadInformation(true);
    const fetchTariffs = async () => {
      try {
        const response = await fetchDataAll("getTarifasVehiculos", lang);
        console.log(response);
        setFiltros(response);
        setTarifas(response);
        setIsLoadInformation(false);
        cleanFilter();
      } catch (error) {
        console.error("Error al obtener las tarifas de móvil:", error);
      }
    };
    fetchTariffs();
  }, [brand, lang, cleanFilter]);

  function setFilterChassisMulti(value) {
    if (!filterChasis?.includes(value)) {
      setFilterChasis([...filterChasis, value]);
    } else {
      setFilterChasis(filterChasis.filter((item) => item !== value));
    }
  }

  function setFilterFuelMulti(value) {
    if (!filterFuel?.includes(value)) {
      setFilterFuel([...filterFuel, value]);
    } else {
      setFilterFuel(filterFuel.filter((item) => item !== value));
    }
  }

  // Función para manejar el filtro de precio
  const handleFilterPrice = (value) => {
    setFilterPrice(value);
  };

  // Función para filtrar por marca
  const filterByBrand = useCallback(
    (item) => {
      const filterBrandArray = filterBrand.toString().split(",").map(Number);
      console.log(filterBrandArray);
      if (filterBrand.length > 0) {
        if (filterBrandArray.length > 0) {
          return filterBrandArray.includes(item.vehiculo);
        } else {
          return false;
        }
      } else {
        return true;
      }
    },
    [filterBrand] // Agregar filterBrand como dependencia
  );

  // Función para filtrar por chasis
  const filterByChasis = useCallback(
    (item) => {
      if (filterChasis.length > 0) {
        return filterChasis.includes(item.chassis) ? true : false;
      } else {
        return true;
      }
    },
    [filterChasis] // Agregar filterChasis como dependencia
  );

  // Función para filtrar por tipo de combustible
  const filterByFuel = useCallback(
    (item) => {
      if (filterFuel.length > 0) {
        return filterFuel.includes(item.fuelType) ? true : false;
      } else {
        return true;
      }
    },
    [filterFuel] // Agregar filterFuel como dependencia
  );

  // Función para filtrar por precio
  const filterByPrice = useCallback(
    (item) => {
      return filterPrice !== null
        ? item.price >= filterPrice[0] && item.price <= filterPrice[1]
        : true;
    },
    [filterPrice] // Agregar filterPrice como dependencia
  );

  // Función para aplicar los filtros
  useEffect(() => {
    const resultado = Tarifas.filter((item) => filterByBrand(item))
      .filter((item) => filterByPrice(item))
      .filter((item) => filterByChasis(item))
      .filter((item) => filterByFuel(item));

    setFiltros(resultado);
  }, [
    filterBrand,
    filterPrice,
    filterChasis,
    filterFuel,
    Tarifas,
    filterByBrand,
    filterByPrice,
    filterByChasis,
    filterByFuel,
  ]); // Incluir las funciones en las dependencias

  function formatCurrency(valor) {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(valor);
  }

  function setFilterBrandMulti(value) {
    if (!filterBrand?.includes(value)) {
      setFilterBrand([...filterBrand, value]);
    } else {
      setFilterBrand(filterBrand.filter((item) => item !== value));
    }
  }

  function Items({ currentItems }) {
    return (
      <>
        <Row>
          {currentItems &&
            currentItems?.map((item, index) => (
              <TarjetaVehiculo data={item} key={index} />
            ))}
        </Row>
      </>
    );
  }

  function PaginatedItems({ itemsPerPage }) {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(filtros?.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(filtros?.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % filtros?.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

    return (
      <Row>
        <Col xs={12}>
          <CardGroup>
            <Items currentItems={currentItems} />
          </CardGroup>
        </Col>
        <Col xs={12} className="d-flex justify-content-center my-5">
          <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </Col>
      </Row>
    );
  }

  return (
    <>
      <section>
        <Container>
          <Row className="justify-content-around">
            <Col xs={12} md={12} xl={3}>
              <Row>
                {!isMobile ? (
                  <Col className="my-3 font-semibold" xs={6} md={5}>
                    Filtrar por:{" "}
                  </Col>
                ) : (
                  <Col className="my-2" xs={6} md={5}>
                    <Button variant="light" onClick={() => setShow(true)}>
                      Filtrar por
                    </Button>
                  </Col>
                )}
                <Col className="my-2 text-center" xs={6} md={7}>
                  <button className="btn btn-light" onClick={cleanFilter}>
                    Limpiar filtro
                  </button>
                </Col>
                <hr />
              </Row>
              {isMobile ? (
                <Modal show={show} onHide={() => setShow(false)}>
                  <Modal.Header closeButton></Modal.Header>
                  <Modal.Body>{/* filtros */}</Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary" onClick={() => setShow(false)}>
                      Filtrar
                    </Button>
                  </Modal.Footer>
                </Modal>
              ) : (
                <>
                  {!isLoadInformation ? (
                    <>
                      <Row className="mb-4">
                        <Col md={12}>
                          <span className="font-semibold">Carrocería:</span>
                        </Col>
                        {ItemFiltroVehiculo?.length > 0 &&
                          ItemFiltroVehiculo.map((item, index) => (
                            <Col xs={4} md={4} key={index}>
                              <button
                                className={`filtro-producto-logo-vehiculo border-0 ${
                                  filterChasis.includes(item.id)
                                    ? "logoFocus"
                                    : ""
                                }`}
                                value={item.id}
                                onClick={() => setFilterChassisMulti(item.id)}
                              >
                                <img
                                  src={item.imagen}
                                  alt={item.titulo}
                                  title={item.titulo}
                                />
                              </button>
                            </Col>
                          ))}
                      </Row>
                      <Row className="mb-4">
                        <Col md={12}>
                          <span className="font-semibold">Combustible:</span>
                        </Col>
                        {ItemFiltroCombustible?.length > 0 &&
                          ItemFiltroCombustible.map((item, index) => (
                            <Col xs={4} md={6} key={index}>
                              <button
                                className={`filtro-producto-logo my-2 w-100 ${
                                  filterFuel.includes(item.id)
                                    ? "logoFocus"
                                    : ""
                                }`}
                                value={item.id}
                                onClick={() => setFilterFuelMulti(item.id)}
                              >
                                {item.titulo}
                              </button>
                            </Col>
                          ))}
                      </Row>
                      <Row className="mb-4">
                        <Col md={12}>
                          <span className="font-semibold">Marcas:</span>
                          <select
                            id="options"
                            multiple
                            className="v-100 ItemSelect my-2"
                            value={filterBrand}
                            /* onChange={(e) => setFilterBrand(e.target.value)} */
                            onChange={(e) =>
                              setFilterBrandMulti(e.target.value)
                            }
                          >
                            {brand?.length > 0 &&
                              brand.map((item, index) => (
                                <option
                                  className="my-1 mx-3"
                                  key={index}
                                  value={item.id}
                                >
                                  <img src={item.logo} alt="logo" />{" "}
                                  {item.nombre}
                                </option>
                              ))}
                          </select>
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <div>
                          <b>{"Precio"}:</b>
                          <div>
                            {formatCurrency(rangePrice[0])} -{" "}
                            {formatCurrency(rangePrice[1])}
                          </div>
                          <Slider
                            range
                            min={minPrice}
                            max={maxPrice}
                            value={rangePrice}
                            onChange={handleRangeChangePrice}
                            className="form-input-range my-2"
                          />
                        </div>
                      </Row>
                    </>
                  ) : (
                    <Load />
                  )}
                </>
              )}
            </Col>
            <Col md={12} xl={8}>
              <Row>
                <Col key={filterBrand} className="my-2" md={6}>
                  Mostrando:{" "}
                  <span className="font-bold">{filtros?.length}</span>{" "}
                  resultados de{" "}
                  <span className="font-bold">{Tarifas.length}</span>
                </Col>
              </Row>
              {!isLoadInformation ? (
                <PaginatedItems itemsPerPage={isMobile ? 4 : 10} />
              ) : (
                <Load></Load>
              )}
              {/* <Row>
                <div className='pruebaPos'>
                  {(isLoadFilter && !isLoadInformation) ? (
                    filtros?.length > 0 ? (
                      filtros?.map((item, index) => (
                        <TarjetaVehiculo key={index} data={item} />
                      ))
                    ) : (
                      <NotInfoItem key={0} title={'No se encontraron ofertas'} text={'Lo sentimos, no hemos encontrado ofertas con los filtros seleccionados.'} />
                    )
                  ) : (
                    <Load></Load>
                  )}
                </div>
              </Row> */}
            </Col>
          </Row>
        </Container>
      </section>
      <InterSection></InterSection>
    </>
  );
}

export default ContenedorVehiculos;
