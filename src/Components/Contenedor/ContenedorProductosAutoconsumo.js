import React, { useCallback, useEffect, useState } from "react";
import { Container, Row, Col, Button, Form, Tabs, Tab } from "react-bootstrap";
import "rc-slider/assets/index.css";
import { isMobile } from "react-device-detect";
import Modal from "react-bootstrap/Modal";
import InterSection from "../Utils/InterSection";
import NotInfoItem from "../Utils/NotInfoItem";
import Load from "../Utils/Load";
import { fetchDataAll } from "../../services/ApiServices";
import { useLocation } from "react-router-dom";
import TarjetaTarifaLeadAutoconsumo from "../Tarjeta/TarjetaTarifaLeadAutoconsumo";

function ContenedorProductosAutoconsumo() {
  // Estados para el estado de carga de filtros e información
  const [isLoadInformation, setIsLoadInformation] = useState(false);

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

  // Estado para el modal de filtros
  const [show, setShow] = useState(false);
  const [lang, setLang] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setLang(location.pathname.split("/")[1]);
  }, [location]);
  // Función para limpiar los filtros
  const cleanFilter = () => {
    setFilterBrand([]);
    setFilterPrice(false);
    setFiltros(Tarifas);
    setFilterTramo(false);
    setFilterPermanencia(false);
    setFilterPromo(false);
    setFilterLuzIndexada(false);
  };

  useEffect(() => {
    if (!lang) return;
    const fetchBrands = async () => {
      try {
        const response = await fetchDataAll(
          "Comercializadoras/autoconsumo",
          lang
        );
        setBrand(response);
      } catch (error) {
        console.error("Error al obtener las marcas de operadoras:", error);
      }
    };

    fetchBrands();
  }, [lang]);

  useEffect(() => {
    if (!lang) return;
    setIsLoadInformation(true);
    const fetchTariffs = async () => {
      try {
        const response = await fetchDataAll("TarifasAutoconsumo", lang);
        setFiltros(response);
        setTarifas(response);
        setIsLoadInformation(false);
      } catch (error) {
        console.error("Error al obtener las tarifas de luz:", error);
      }
    };

    fetchTariffs();
  }, [brand, lang]);

  function setFilterBrandMulti(value) {
    if (!filterBrand?.includes(value)) {
      setFilterBrand([...filterBrand, value]);
    } else {
      setFilterBrand(filterBrand.filter((item) => item !== value));
    }
  }

  // Función para filtrar por marca
  const filterByBrand = useCallback(
    (item) => {
      if (filterBrand.length > 0) {
        return filterBrand.includes(item.comercializadora);
      }
      return true;
    },
    [filterBrand]
  );

  // Función para filtrar por precio
  const filterByPrice = useCallback(
    (item) =>
      filterPrice !== false
        ? filterByFilter(filterPrice, item, "precio fijo")
        : true,
    [filterPrice]
  );

  // Función para filtrar por tramo
  const filterByTramo = useCallback(
    (item) =>
      filterTramo !== false
        ? filterByFilter(filterTramo, item, "sin tramos")
        : true,
    [filterTramo]
  );

  // Función para filtrar por permanencia
  const filterByPermanencia = useCallback(
    (item) =>
      filterPermanencia !== false
        ? filterByFilter(filterPermanencia, item, "sin permanencia")
        : true,
    [filterPermanencia]
  );

  // Función para filtrar por promoción
  const filterByPromo = useCallback(
    (item) =>
      filterPromo !== false
        ? item.promocion !== "" && item.promocion !== null
        : true,
    [filterPromo]
  );

  // Función para filtrar por luz indexada
  const filterByluzIndexada = useCallback(
    (item) => {
      if (filterLuzIndexada !== false) {
        return item.luz_indexada === 1;
      }
      return true;
    },
    [filterLuzIndexada]
  );

  // useEffect para aplicar los filtros
  useEffect(() => {
    const resultado = Tarifas.filter((item) => filterByBrand(item))
      .filter((item) => filterByPrice(item))
      .filter((item) => filterByTramo(item))
      .filter((item) => filterByPermanencia(item))
      .filter((item) => filterByPromo(item))
      .filter((item) => filterByluzIndexada(item));

    setFiltros(resultado);
  }, [
    Tarifas,
    filterByBrand,
    filterByPrice,
    filterByTramo,
    filterByPermanencia,
    filterByPromo,
    filterByluzIndexada,
  ]);

  // Función para filtrar por palabra clave en los bloques
  function filterByFilter(filter, item, word) {
    if (filter !== false) {
      if (item.parrilla_bloque_1?.toLowerCase().includes(word?.toLowerCase())) {
        return true;
      } else if (
        item.parrilla_bloque_2?.toLowerCase().includes(word?.toLowerCase())
      ) {
        return true;
      } else if (
        item.parrilla_bloque_3?.toLowerCase().includes(word?.toLowerCase())
      ) {
        return true;
      } else if (
        item.parrilla_bloque_4?.toLowerCase().includes(word?.toLowerCase())
      ) {
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
                  <Modal.Body>
                    <Row>
                      {isMobile && (
                        <Col xs={12} key={filterBrand} className="my-2" md={6}>
                          Se encontraron{" "}
                          <span className="font-bold">{filtros?.length}</span>{" "}
                          resultados de{" "}
                          <span className="font-bold">{Tarifas.length}</span>
                        </Col>
                      )}
                      <Col md={12}>
                        <span className="font-semibold">Compañía:</span>
                      </Col>
                      {brand?.length > 0 &&
                        brand.map((item, index) => (
                          <Col xs={4} md={6} key={item.id}>
                            <button
                              className={`filtro-producto-logo my-2 ${
                                filterBrand.includes(item.id) ? "logoFocus" : ""
                              }`}
                              value={item.nombre}
                              onClick={() => setFilterBrandMulti(item.id)}
                            >
                              <img src={item.logo} alt={item.nombre} />
                            </button>
                          </Col>
                        ))}
                    </Row>
                    <Row>
                      <div className="mt-4">
                        <b>{"Precio"}:</b>
                        <Form.Switch
                          className="input-check-dark mt-2 text-left"
                          type="switch"
                          checked={filterPrice}
                          onChange={() => setFilterPrice(!filterPrice)}
                          label={"Precio fijo"}
                          reverse
                        />
                      </div>
                      <div className="mt-4">
                        <b>{"Tramos horarios"}:</b>
                        <Form.Switch
                          className="input-check-dark mt-2 text-left"
                          type="switch"
                          checked={filterTramo}
                          onChange={() => setFilterTramo(!filterTramo)}
                          label={"Sin tramos horarios"}
                          reverse
                        />
                      </div>
                      <div className="mt-4">
                        <b>{"Permanencia"}:</b>
                        <Form.Switch
                          className="input-check-dark mt-2 text-left"
                          type="switch"
                          checked={filterPermanencia}
                          onChange={() =>
                            setFilterPermanencia(!filterPermanencia)
                          }
                          label={"Tarifa sin permanencia"}
                          reverse
                        />
                      </div>
                      <div className="my-2">
                        <b>{"Promoción"}:</b>
                        <div className="my-2">
                          <Form.Switch
                            className="input-check-dark mt-2 text-left"
                            type="switch"
                            checked={filterPromo}
                            onChange={() => setFilterPromo(!filterPromo)}
                            label={"Tiene promoción"}
                            reverse
                          />
                        </div>
                      </div>
                      <div className="my-2">
                        <b>{"Luz indexada"}:</b>
                        <div className="my-2">
                          <Form.Switch
                            className="input-check-dark mt-2 text-left"
                            type="switch"
                            checked={filterLuzIndexada}
                            onChange={() =>
                              setFilterLuzIndexada(!filterLuzIndexada)
                            }
                            label={"Luz indexada"}
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
                  {!isLoadInformation ? (
                    <>
                      <Row>
                        {isMobile && (
                          <Col
                            xs={12}
                            key={filterBrand}
                            className="my-2"
                            md={6}
                          >
                            Se encontraron{" "}
                            <span className="font-bold">{filtros?.length}</span>{" "}
                            resultados de{" "}
                            <span className="font-bold">{Tarifas.length}</span>
                          </Col>
                        )}
                        <Col md={12}>
                          <b>Compañía:</b>
                        </Col>
                        {brand?.length > 0 &&
                          brand.map((item, index) => (
                            <Col xs={4} md={6} key={item.id}>
                              <button
                                className={`filtro-producto-logo my-2 ${
                                  filterBrand.includes(item.id)
                                    ? "logoFocus"
                                    : ""
                                }`}
                                value={item.nombre}
                                onClick={() => setFilterBrandMulti(item.id)}
                              >
                                <img src={item.logo} alt={item.nombre} />
                              </button>
                            </Col>
                          ))}
                      </Row>
                      <Row>
                        <div className="mt-4">
                          <b>{"Precio"}:</b>
                          <Form.Switch
                            className="input-check-dark mt-2 text-left"
                            type="switch"
                            checked={filterPrice}
                            onChange={() => setFilterPrice(!filterPrice)}
                            label={"Precio fijo"}
                            reverse
                          />
                        </div>
                        <div className="mt-4">
                          <b>{"Tramos horarios"}:</b>
                          <Form.Switch
                            className="input-check-dark mt-2 text-left"
                            type="switch"
                            checked={filterTramo}
                            onChange={() => setFilterTramo(!filterTramo)}
                            label={"Sin tramos horarios"}
                            reverse
                          />
                        </div>
                        <div className="mt-4">
                          <b>{"Permanencia"}:</b>
                          <Form.Switch
                            className="input-check-dark mt-2 text-left"
                            type="switch"
                            checked={filterPermanencia}
                            onChange={() =>
                              setFilterPermanencia(!filterPermanencia)
                            }
                            label={"Tarifa sin permanencia"}
                            reverse
                          />
                        </div>
                        <div className="my-2">
                          <b>{"Promoción"}:</b>
                          <div className="my-2">
                            <Form.Switch
                              className="input-check-dark mt-2 text-left"
                              type="switch"
                              checked={filterPromo}
                              onChange={() => setFilterPromo(!filterPromo)}
                              label={"Tiene promoción"}
                              reverse
                            />
                          </div>
                        </div>
                        <div className="my-2">
                          <span className="font-bold">{"Luz indexada"}:</span>
                          <div className="my-2">
                            <Form.Switch
                              className="input-check-dark mt-2 text-left"
                              type="switch"
                              checked={filterLuzIndexada}
                              onChange={() =>
                                setFilterLuzIndexada(!filterLuzIndexada)
                              }
                              label={"Luz indexada"}
                              reverse
                            />
                          </div>
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
              <Row>
                <Tabs
                  defaultActiveKey="particulares"
                  id="tabs_filtros"
                  className="mb-3"
                >
                  <Tab
                    eventKey="particulares"
                    title="Tarifas para particulares"
                  >
                    {(() => {
                      return !isLoadInformation ? (
                        filtros?.length > 0 ? (
                          filtros.map((item, index) => (
                            <TarjetaTarifaLeadAutoconsumo
                              key={index}
                              data={item}
                              TarifaCard
                            />
                          ))
                        ) : (
                          <NotInfoItem
                            title="No se encontraron ofertas"
                            text="Lo sentimos, no hemos encontrado ofertas con los filtros seleccionados."
                          />
                        )
                      ) : (
                        <Load />
                      );
                    })()}
                  </Tab>
                </Tabs>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <InterSection></InterSection>
    </>
  );
}

export default ContenedorProductosAutoconsumo;
