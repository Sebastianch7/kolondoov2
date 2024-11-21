import React, { useState, useEffect } from 'react';
import HeaderLead from '../../Components/Header/HeaderLead';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import Footer from '../../Components/Footer/Footer';
import TarjetaTarifaLeadEnergia from '../../Components/Tarjeta/TarjetaTarifaLeadEnergia';
import TarjetaTarifa from '../../Components/Tarjeta/TarjetaTarifa'
import { getExtraOffer } from '../../services/ApiServices';
import TarjetaTarifaLead from '../../Components/Tarjeta/TarjetaTarifaLead';
import Header from '../../Components/Header/Header';
import TarjetaTarifaLeadEnergiaGas from '../../Components/Tarjeta/TarjetaTarifaLeadEnergiaGas';
import TarjetaTarifaLeadGas from '../../Components/Tarjeta/TarjetaTarifaLeadGas';
import TarjetaTarifaLeadAutoconsumo from '../../Components/Tarjeta/TarjetaTarifaLeadAutoconsumo';
import TarjetaTarifaLeadPrestamo from '../../Components/Tarjeta/TarjetaTarifaLeadPrestamo';

export default function ThankPageNetwork() {

  const [idPlan, setIdPlan] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [infoOffer, setInfoOffer] = useState([]);
  const [extraOffer, setExtraOffer] = useState([]);

  const location = useLocation();

  const [offerLooking, setOfferLooking] = useState('comparadormovil')

  useEffect(() => {
    const fetchTariffs = async () => {
      try {
        const ofertas = ['comparadormovil',
          'comparadormovil',
          'comparadorfibra',
          'comparadortarifasfibraymovil',
          'comparadorfibramoviltv',
          'luz',
          'gas',
          'comparadortarifasautoconsumo']

        const randomOffer = ofertas[Math.floor(Math.random() * ofertas.length)];
        setOfferLooking(randomOffer);

        const response = await getExtraOffer(randomOffer);
        setExtraOffer(response);
        setIsLoading(false);

      } catch (error) {
        console.error("Error al obtener oferta extra:", error);
      }
    };

    fetchTariffs();
  }, []);

  return (
    <>
      <Header></Header>
      <Container fluid className='bg-primary p-5'>
        <Row className="justify-content-md-center d-flex flex-column flex-md-row">
          <Col xs={12} className='text-center text-white'>
            <h3>Muchas gracias por dejarnos tus datos.</h3>
            <p>Pronto un agente te contactará</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className='justify-content-md-center mb-5'>
          <Col xs={12}>
            <h6 className='mt-5 mb-3 text-center'>Aquí tienes otras ofertas que te podrían interesar:</h6>
          </Col>
          <Col md={9}>
            {extraOffer?.length > 0 &&
              extraOffer?.map((item, index) => {
                switch (offerLooking?.toLowerCase()) {
                  case 'comparadormovil':
                  case 'comparadorfibra':
                  case 'comparadortarifasfibraymovil':
                  case 'comparadorfibramoviltv':
                    return <TarjetaTarifa key={index} data={item} />
                  case 'luz':
                    return <TarjetaTarifaLeadEnergia key={index} data={item} type={'luz'} TarifaCard />
                  case 'gas':
                    return <TarjetaTarifaLeadGas key={index} data={item} type={'gas'} TarifaCard />
                  case 'comparadortarifasautoconsumo':
                    return <TarjetaTarifaLeadAutoconsumo key={index} data={item} TarifaCard />
                }
              })
            }
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}