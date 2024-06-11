import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import 'rc-slider/assets/index.css';
import InterSection from '../Utils/InterSection';
import TarjetaPrestamo from '../Tarjeta/TarjetaPrestamo';
import { fetchPrestamosOffers } from '../../services/ApiServices';
import Load from '../Utils/Load';


function ContenedorPrestamos({ logo = null, landingLead = null, id = null }) {  // Ajuste para aceptar parámetros como un objeto
  const [isLoadInformation, setIsLoadInformation] = useState(false);
  const [Tarifas, setTarifas] = useState([]);

  useEffect(() => {
    setIsLoadInformation(true);
    const fetchTariffs = async () => {
      try {
        let response = await fetchPrestamosOffers();
        setTarifas(response);
        console.log(response);
        setIsLoadInformation(false);
      } catch (error) {
        console.error("Error al obtener las tarifas de móvil:", error);
        setIsLoadInformation(false);  // Asegúrate de manejar el estado de carga en caso de error
      }
    };

    fetchTariffs();
  }, []);

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
