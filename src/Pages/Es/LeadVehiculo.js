import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import Load from '../../Components/Utils/Load';
import Title from '../../Components/Text/Title';
import { isMobile } from 'react-device-detect';
import Footer from '../../Components/Footer/Footer';
import { getDetailOffer } from '../../services/ApiServices'
import FormLead from '../../Components/Forms/FormLeadVehiculo';
import FormLeadVehiculo from '../../Components/Forms/FormLeadVehiculo';
import Accordion from 'react-bootstrap/Accordion';
import Header from '../../Components/Header/Header';


export default function LeadVehiculo() {
  const [isLoading, setIsLoading] = useState(true);
  const [infoOffer, setInfoOffer] = useState([]);
  const [imagenes, setImagenes] = useState([]);
  const [idPlan, setIdPlan] = useState(null);
  const location = useLocation();
  const [breadUrl, setBreadUrl] = useState(null);

  const [offerLooking, setOfferLooking] = useState(null)

  let descriptionSeo, titleSeo;

  useEffect(() => {
    let locations = location.pathname.split('/');
    let idSplit = locations[4].split('-');
    setIdPlan(idSplit[idSplit.length - 1]);
    locations.pop();
    setOfferLooking(locations[3])
    setBreadUrl(locations.join('/'));
  }, [location.pathname]);

  useEffect(() => {
    setIsLoading(true);
    const fetchTariffs = async () => {
      try {
        if (idPlan !== null) {
          const response = await getDetailOffer(offerLooking, idPlan)
          setImagenes(JSON.parse(response['images']));
          setInfoOffer(response);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error al cargar la informacion:", error);
      }
    };
    fetchTariffs();
  }, [idPlan]);

  const {
    id, logo, version, transmission, trunk, hp, price, year, chassis, make, model, landingLead, slug_tarifa, fuelType, images, agencyPromotions,
    assuranceCost, serviceCost, cylinders, torque, cylinderCapacity, valves, startStopSystem, acceleration, topSpeed,
    motor, traction, frontBrakes, rearBrakes, wheels, frontSuspension, rearSuspension, powerSteering,
    length, widthNoMirrors, height, fuelTankSize, weight,
    airConditioner, frontSeats, rearSeats, doorClosing, boardComputer, innerMirrors, outerMirrors, fogLights, frontLights, rearWiperBlades, sunRoof, rims, cloths, cruiseControl, windows, steeringWheel, trunkAndFuelTankOpening, rearVisionCamera, openingSystem, numberOfPassengers,
    airbag, abs, electronicBrakeDistribution, emergencyBrakingAssistance, engineImmobilizer, childSeatReady, seatbelts, tirePressureGauge, rainSensor, speedSelfLockingDoors, stabilityControl, tractionControl, aXisDistance
  } = infoOffer;

  function formatoMonedaMXN(valor) {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN'
    }).format(valor);
  }

  return (
    <>
      <Header breadCrumb></Header>
      <Container className='mb-5'>
        <Row>
          <Col xs={12} className='text-center my-5'>
            <h1 className='text-primary'>{make} {model} {version}</h1>
          </Col>
          <Col xs={12} md={4}>
            <h6 class="banner-precio mx-5">{formatoMonedaMXN(price)}</h6>
            <h5 class="color-primary MontHeavy my-3">Contáctanos para una prueba de conducción gratis</h5>
            <p className='font-10'>Loren ipsum dolor dit amet loren ipsum dolor dit amet loren ipsum dolor dit amet loren ipsum dolor dit amet.</p>
            <FormLeadVehiculo></FormLeadVehiculo>
          </Col>
          <Col xs={12} md={8} className='overflow-hidden d-flex justify-content-center align-items-center h-100'>
            {!isLoading ? <Carousel className='d-flex justify-content-center carousel'>
              {imagenes?.map((item, index) => {
                return (
                  <Carousel.Item key={index} className='carrusel-blog-vehiculo-landing'>
                    <img
                      src={`/img/${item}`}
                      alt={`/img/${item}`}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel> :
              <Load></Load>
            }
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Accordion defaultActiveKey="0" className='text-left'>
              {/* <Accordion.Item eventKey={0} className='my-4 border'>
                <Accordion.Header>Promociones</Accordion.Header>
                <Accordion.Body>
                  {!isLoading ? (
                    <ul>
                      {agencyPromotions?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>No hay elementos para mostrar.</p>
                  )}
                </Accordion.Body>
              </Accordion.Item> */}
              <Accordion.Item eventKey={1} className='my-4 border text-left-list'>
                <Accordion.Header><img className='icon-acordion-vehiculo' src='/img/logos/costos.png' />&nbsp;Costos de operación</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li><b>Costo servicios</b></li>
                    <li className='mx-3'>{formatoMonedaMXN(serviceCost)} x año</li>
                    <li><b>Costo del seguro</b></li>
                    <li className='mx-3'>{formatoMonedaMXN(assuranceCost)} x año</li>
                    {/* <hr />
                    <li><b>Rendimiento</b></li>
                    <li className='mx-3'></li> */}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey={2} className='my-4 border text-left-list'>
                <Accordion.Header><img className='icon-acordion-vehiculo' src='/img/logos/motor.png' />&nbsp;Motor</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li><b>Combustible</b></li>
                    <li className='mx-3'>{fuelType}</li>
                    <li><b>Cilindros</b></li>
                    <li className='mx-3'>{cylinders}</li>
                    <hr />
                    <li><b>Potencia</b></li>
                    <li className='mx-3'>{hp} hp</li>
                    <li><b>Torque</b></li>
                    <li className='mx-3'>{torque}</li>
                    <li><b>Cilindrada</b></li>
                    <li className='mx-3'>{cylinderCapacity}</li>
                    <li><b>Válvulas</b></li>
                    <li className='mx-3'>{valves}</li>
                    <hr />
                    <li><b>Sistema start/stop</b></li>
                    <li className='mx-3'>{startStopSystem}</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey={3} className='my-4 border text-left-list'>
                <Accordion.Header><img className='icon-acordion-vehiculo' src='/img/logos/rendimiento.png' />&nbsp;Rendimiento</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li><b>Aceleración 0 - 100 km/h</b></li>
                    <li className='mx-3'>{acceleration}s</li>
                    <li><b>Velocidad máxima</b></li>
                    <li className='mx-3'>{topSpeed} km/h</li>
                    <hr />
                    {/* <li><b>Rendimiento en ciudad</b></li>
                    <li></l className='mx-3'i>
                    <li><b>Rendimiento en ruta</b></li>
                    <li className='mx-3'></li>
                    <li><b>Rendimiento mixto</b></li>
                    <li className='mx-3'></li> */}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey={4} className='my-4 border text-left-list'>
                <Accordion.Header><img className='icon-acordion-vehiculo' src='/img/logos/tren_motriz.png' />&nbsp;Tren motriz</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li><b>Motor</b></li>
                    <li className='mx-3'>{motor}</li>
                    <li><b>Tracción</b></li>
                    <li className='mx-3'>{traction}</li>
                    <li><b>Transmisión</b></li>
                    <li className='mx-3'>{transmission}</li>
                    <hr />
                    <li><b>Frenos delanteros</b></li>
                    <li className='mx-3'>{frontBrakes}</li>
                    <li><b>Frenos traseros</b></li>
                    <li className='mx-3'>{rearBrakes}</li>
                    <hr />
                    <li><b>Neumáticos</b></li>
                    <li className='mx-3'>{wheels}</li>
                    <li><b>Suspensión delantera</b></li>
                    <li className='mx-3'>{frontSuspension}</li>
                    <li><b>Suspensión trasera</b></li>
                    <li className='mx-3'>{rearSuspension}</li>
                    <li><b>Dirección asistida</b></li>
                    <li className='mx-3'>{powerSteering}</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey={5} className='my-4 border text-left-list'>
                <Accordion.Header><img className='icon-acordion-vehiculo' src='/img/logos/medidas.png' />&nbsp;Medidas y capacidades</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li><b>Largo</b></li>
                    <li className='mx-3'>{length} mm</li>
                    <li><b>Ancho sin espejos</b></li>
                    <li className='mx-3'>{widthNoMirrors} mm</li>
                    <li><b>Ancho con espejos</b></li>
                    <li className='mx-3'>PN</li>
                    <li><b>Alto</b></li>
                    <li className='mx-3'>{height !== '' ? 'N/D' : height}</li>
                    <li><b>Distancia entre ejes</b></li>
                    <li className='mx-3'>{aXisDistance}</li>
                    <hr />
                    <li><b>Cajuela</b></li>
                    <li className='mx-3'>{trunk} Lts</li>
                    <li><b>Tanque de combustible</b></li>
                    <li className='mx-3'>{fuelTankSize} Lts</li>
                    <hr />
                    <li><b>Peso</b></li>
                    <li className='mx-3'>{weight} kg</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey={6} className='my-4 border text-left-list'>
                <Accordion.Header><img className='icon-acordion-vehiculo' src='/img/logos/confort.png' />&nbsp;Confort</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li><b>Aire acondicionado</b></li>
                    <li className='mx-3'>{airConditioner}</li>
                    <li><b>Asientos delanteros</b></li>
                    <li className='mx-3'>{frontSeats}</li>
                    <li><b>Asientos traseros</b></li>
                    <li className='mx-3'>{rearSeats}</li>
                    <li><b>Cierre de puertas</b></li>
                    <li className='mx-3'>{doorClosing}</li>
                    <li><b>Computadora a bordo</b></li>
                    <li className='mx-3'>{boardComputer}</li>
                    <li><b>Espejos exteriores</b></li>
                    <li className='mx-3'>{innerMirrors}</li>
                    <li><b>Espejos interiores</b></li>
                    <li className='mx-3'>{outerMirrors}</li>
                    <li><b>Faros antiniebla</b></li>
                    <li className='mx-3'>{fogLights}</li>
                    <li><b>Faros delanteros</b></li>
                    <li className='mx-3'>{frontLights}</li>
                    <li><b>Limpialuneta</b></li>
                    <li className='mx-3'>{rearWiperBlades}</li>
                    <li><b>Quemacocos</b></li>
                    <li className='mx-3'>{sunRoof}</li>
                    <li><b>Rines</b></li>
                    <li className='mx-3'>{rims}</li>
                    <li><b>Vestiduras</b></li>
                    <li className='mx-3'>{cloths}</li>
                    <li><b>Control de velocidad crucero</b></li>
                    <li className='mx-3'>{cruiseControl}</li>
                    <li><b>Vidrios</b></li>
                    <li className='mx-3'>{windows}</li>
                    <li><b>Volante</b></li>
                    <li className='mx-3'>{steeringWheel}</li>
                    <li><b>Apertura cajuela y tapa de combustible</b></li>
                    <li className='mx-3'>{trunkAndFuelTankOpening}</li>
                    <li><b>Camara de visión trasera</b></li>
                    <li className='mx-3'>{rearVisionCamera}</li>
                    <li><b>Sistema de apertura</b></li>
                    <li className='mx-3'>{openingSystem}</li>
                    <li><b>Numero de pasajeros</b></li>
                    <li className='mx-3'>{numberOfPassengers}</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey={7} className='my-4 border text-left-list'>
                <Accordion.Header><img className='icon-acordion-vehiculo' src='/img/logos/seguridad.png' />&nbsp;Seguridad</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li><b>Bolsas de aire</b></li>
                    <li className='mx-3'>{airbag}</li>
                    <li><b>Sistema de antibloqueo (ABS)</b></li>
                    <li className='mx-3'>{abs}</li>
                    <li><b>Distribución electrónica de frenado</b></li>
                    <li className='mx-3'>{electronicBrakeDistribution}</li>
                    <li><b>Asistencia de frenado de emergencia</b></li>
                    <li className='mx-3'>{emergencyBrakingAssistance}</li>
                    <li><b>Alarma e inmobilizador de motor</b></li>
                    <li className='mx-3'>{engineImmobilizer}</li>
                    <li><b>Anclaje para asientos infantiles</b></li>
                    <li className='mx-3'>{childSeatReady}</li>
                    <li><b>Cinturones de seguridad</b></li>
                    <li className='mx-3'>{seatbelts}</li>
                    <li><b>Indicador de presión de neumáticos</b></li>
                    <li className='mx-3'>{tirePressureGauge}</li>
                    <li><b>Sensor de lluvia</b></li>
                    <li className='mx-3'>{rainSensor}</li>
                    <li><b>Autobloqueo de puertas con velocidad</b></li>
                    <li className='mx-3'>{speedSelfLockingDoors}</li>
                    <li><b>Control de estabilidad</b></li>
                    <li className='mx-3'>{stabilityControl}</li>
                    <li><b>Control de tracción</b></li>
                    <li className='mx-3'>{tractionControl}</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              {/* <Accordion.Item eventKey={8} className='my-4 border text-left-list'>
                <Accordion.Header>Entretenimiento</Accordion.Header>
                <Accordion.Body>
                </Accordion.Body>
              </Accordion.Item> */}
            </Accordion>
          </Col>
        </Row>
      </Container >
      <Footer></Footer>
    </>
  );

}
