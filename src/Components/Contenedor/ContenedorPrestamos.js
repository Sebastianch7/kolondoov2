import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import 'rc-slider/assets/index.css';
import InterSection from '../Utils/InterSection';
import TarjetaPrestamo from '../Tarjeta/TarjetaPrestamo';
import { fetchPrestamosOffers } from '../../services/ApiServices';
import Load from '../Utils/Load';
import { useLocation } from 'react-router-dom';


function ContenedorPrestamos({ logo = null, landingLead = null, id = null }) {  // Ajuste para aceptar parámetros como un objeto
  const [isLoadInformation, setIsLoadInformation] = useState(false);
  const [Tarifas, setTarifas] = useState([]);

  const [lang, setLang] = useState(null)
  const location = useLocation();

  useEffect(() => {
    setLang(location.pathname.split('/')[1])
  }, [location])

  useEffect(() => {
    if (lang != null) {
      setIsLoadInformation(true);
      const fetchTariffs = async () => {
        try {
          let response = await fetchPrestamosOffers(lang);
          setTarifas(response);
          setIsLoadInformation(false);
        } catch (error) {
          console.error("Error al obtener las tarifas:", error);
          setIsLoadInformation(false);  // Asegúrate de manejar el estado de carga en caso de error
        }
      };
      fetchTariffs();
    }
  }, [lang]);

  return (
    <>
      {!isLoadInformation ? (
        <Container>
          <Row>
            {Tarifas?.length > 0 &&
              Tarifas.map((item) => (
                <TarjetaPrestamo data={item} key={item.id} />
              ))
            }
          </Row>
        </Container>
      ) : (
        <Load />
      )}
      <InterSection />
    </>
  );
}

export default ContenedorPrestamos;
