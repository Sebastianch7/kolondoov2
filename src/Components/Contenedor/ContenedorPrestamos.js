import React, { useCallback, useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import { useLocation } from "react-router-dom";
import {
  fetchBancosPrestamos,
  fetchPrestamosOffers,
} from "../../services/ApiServices";
import TarjetaPrestamo from "../Tarjeta/TarjetaPrestamo";
import NotInfoItem from "../Utils/NotInfoItem";
import Load from "../Utils/Load";
import InterSection from "../Utils/InterSection";

function ContenedorPrestamos({
  logo = null,
  landingLead = null,
  id = null,
  filtroCategoria,
}) {

  // Estados para el estado de carga de filtros e información
  const [isLoading, setIsLoading] = useState({
    filter: false,
    information: false,
  });

  // Estados para filtros seleccionados
  const [filterBrand, setFilterBrand] = useState([]);
  const [filterOfertaDestacada, setFilterOfertaDestacada] = useState(false);

  // Estados para tarifas y marcas
  const [Tarifas, setTarifas] = useState([]);
  const [filtros, setFiltros] = useState([]);
  const [brand, setBrand] = useState([]);
  const [lang, setLang] = useState(null);
  const location = useLocation();

  // Estado para el modal de filtros
  const [show, setShow] = useState(false);

  useEffect(() => {
    setLang(location.pathname.split("/")[1]);
  }, [location]);

  useEffect(() => {
    if (lang && filtroCategoria) {
      setIsLoading((prev) => ({ ...prev, information: true }));
      fetchTariffs(lang, filtroCategoria);
    }
  }, [lang, filtroCategoria]);

  const fetchTariffs = async (lang, filtroCategoria) => {
    try {
      const response = await fetchPrestamosOffers(lang, filtroCategoria);
      setFiltros(response);
      setTarifas(response);
    } catch (error) {
      console.error("Error al obtener las tarifas:", error);
    } finally {
      setIsLoading((prev) => ({ ...prev, information: false }));
    }
  };

  const cleanFilter = () => {
    setFilterBrand([]);
    setFilterOfertaDestacada(false);
    setFiltros(Tarifas);
  };

  useEffect(() => {
    if (lang) {
      setIsLoading((prev) => ({ ...prev, filter: true }));
      fetchLogos(lang, filtroCategoria);
    }
  }, [lang, filtroCategoria]);

  const fetchLogos = async (lang, filtroCategoria) => {
    try {
      const brands = await fetchBancosPrestamos(lang, filtroCategoria);
      setBrand(brands);
    } catch (error) {
      console.error("Error al obtener las marcas de bancas:", error);
    } finally {
      setIsLoading((prev) => ({ ...prev, filter: false }));
    }
  };

  const setFilterBrandMulti = (value) => {
    setFilterBrand((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // Función para filtrar por marca
  const filterByBrand = useCallback(
    (item) => filterBrand.length === 0 || filterBrand.includes(item.banca),
    [filterBrand]
  );

  // Función para filtrar por oferta destacada
  const filterByOfertaDestacada = useCallback(
    (item) => (filterOfertaDestacada ? item.destacada === 1 : true),
    [filterOfertaDestacada]
  );

  // useEffect para aplicar los filtros
  useEffect(() => {
    const resultado = Tarifas.filter(filterByBrand).filter(
      filterByOfertaDestacada
    );
    setFiltros(resultado);
  }, [Tarifas, filterByBrand, filterByOfertaDestacada]);

  return (
    <>
      <section>
        <Container>
          <Row className="justify-content-around">
            <Col xs={12} md={12} xl={3}>
              <Row>
                {!isMobile ? (
                  <Col className="my-3 font-bold" xs={6} md={12} xl={5}>
                    Filtrar por:
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
                      {brand.map((item) => (
                        <Col xs={4} md={6} key={item.id}>
                          <button
                            className={`filtro-producto-logo my-2 ${
                              filterBrand.includes(item.id) ? "logoFocus" : ""
                            }`}
                            onClick={() => setFilterBrandMulti(item.id)}
                          >
                            <img src={item.logo} alt={item.nombre} />
                          </button>
                        </Col>
                      ))}
                    </Row>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary" onClick={() => setShow(false)}>
                      Filtrar
                    </Button>
                  </Modal.Footer>
                </Modal>
              ) : isLoading.filter ? (
                <Load />
              ) : (
                <Row>
                  <Col md={12}>
                    <span className="font-bold">Compañía:</span>
                  </Col>
                  {brand.map((item) => (
                    <Col xs={4} xl={6} key={item.id}>
                      <button
                        className={`filtro-producto-logo my-2 ${
                          filterBrand.includes(item.id) ? "logoFocus" : ""
                        }`}
                        onClick={() => setFilterBrandMulti(item.id)}
                      >
                        <img src={item.logo} alt={item.nombre} />
                      </button>
                    </Col>
                  ))}
                </Row>
              )}
            </Col>

            <Col md={12} xl={8}>
              <Row>
                <Col className="my-2" xl={6}>
                  Mostrando: <span className="font-bold">{filtros.length}</span>{" "}
                  resultados de{" "}
                  <span className="font-bold">{Tarifas.length}</span>
                </Col>
              </Row>
              <Row>
                <div className="pruebaPos">
                  {!isLoading.information ? (
                    filtros.length > 0 ? (
                      filtros.map((item) => (
                        <TarjetaPrestamo data={item} key={item.id} />
                      ))
                    ) : (
                      <NotInfoItem
                        title={"No se encontraron ofertas"}
                        text={
                          "Lo sentimos, no hemos encontrado ofertas con los filtros seleccionados."
                        }
                      />
                    )
                  ) : (
                    <Load />
                  )}
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <InterSection />
    </>
  );
}

export default ContenedorPrestamos;
