import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap'
import TitleSection from '../../Components/Text/TitleSection'
import { getExtraOffer } from '../../services/ApiServices'
import TarjetaTarifa from '../../Components/Tarjeta/TarjetaTarifa'
import ContenedorPreguntasFrecuentes from '../../Components/Contenedor/ContenedorPreguntasFrecuentes';
import preguntasFrecuentes from '../../Content/PreguntasFrecuentesTestVelocidad.json'
import MetaData from '../../Components/Header/SeoMetadata';
import { fetchTarifasAlarmas, fetchTarifasAlarmasCuotaMensual, fetchTarifasAlarmasEquipos } from '../../services/ApiServices';
import TarjetaBannerSeguro from '../../Components/Tarjeta/TarjetaBannerSeguro';
import ItemSegurosInfo from '../../Components/Items/ItemSegurosInfo';
import ContenedorProductosAlarmas from '../../Components/Contenedor/ContenedorProductosAlarmas';
import TarjetaInfoLogoTexto from '../../Components/Tarjeta/TarjetaInfoLogoTexto';
import TarjetaComparativaItem from '../../Components/Tarjeta/TarjetaComparativaItem';

export default function ComparadorAlarmas() {

  const data = [
    {
      icono: '/img/icons/vista.svg',
      contenido: '<p>Las cámaras de los sistemas de seguridad pueden tener verificación por vídeo o por foto.</p><p>Nosotros recomendaremos siempre la verificación por vídeo, ya que las fotos pueden ser muy imprecisas y su visibilidad por la noche con el flash es bastante peor que los vídeos.</p>'
    },
    {
      icono: '/img/icons/configuraciones.svg',
      contenido: '<p>Por norma general, los <b class="color-secundaryText">kits básicos de alarmas</b> de cualquier empresa suelen ser suficientes para proteger un piso o una casa de tamaño pequeño-medio sin poner elementos en el exterior.</p>'
    },
    {
      icono: '/img/icons/casa-inteligente.svg',
      contenido: '<p>Si el equipo de la alarma tiene la <b class="color-secundaryText">posibilidad de interconectarse con el resto de la domótica</b> de tu casa, es un punto a favor. </p><p>De esta forma, se pueden programar normas y reglas que facilitan la vida y la rutina diaria.</p>'
    },
    {
      icono: '/img/icons/movil.svg',
      contenido: '<p>Hoy en día, todas las compañías tiene su propia APP para controlar la alarma.</p><p> Este tipo de aplicaciones suelen permitir solicitar vídeos o fotos cuando queramos a nuestras cámaras de videovigilancia, tener un registro de las entradas a nuestro hogar o activar y desactivar la alarma.</p>'
    },
    {
      icono: '/img/icons/sos.svg',
      contenido: '<p>Puede parecer prescindible, pero <b class="color-secundaryText">el botón del pánico es un elemento muy útil de seguridad.</b></p><p>Aunque suele utilizarse para proteger a personas mayores, es un componente que también tiene una función anti robo dando aviso inmediato a la CRA.</p>'
    },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [extraOffer, setExtraOffer] = useState([]);
  const [cuotaMensual, setCuotaMensual] = useState([]);

  useEffect(() => {
    const fetchTariffs = async () => {
      try {
        const response = await fetchTarifasAlarmas()
        setExtraOffer(response);
        setIsLoading(false);
      } catch (error) {
        console.error("Error al obtener oferta extra:", error);
      }
    };

    fetchTariffs();
  }, []);

  useEffect(() => {
    const fetchTariffs = async () => {
      try {
        const response = await fetchTarifasAlarmasCuotaMensual('es')
        setCuotaMensual(response);
      } catch (error) {
        console.error("Error al obtener oferta extra:", error);
      }
    };

    fetchTariffs();
  }, []);

  /* useEffect(() => {
    const fetchTariffs = async () => {
      try {
        const response = await fetchTarifasAlarmasEquipos('es')
        setCuotaMensual(response);
      } catch (error) {
        console.error("Error al obtener oferta extra:", error);
      }
    };

    fetchTariffs();
  }, []); */


  return (
    <>
      <MetaData titulo={' | Vuskoo'} descripcion={''} />
      <Header breadCrumb></Header>
      <Container className='p-5'>
        <Row>
          <Col xs={12} md={12} className='my-5'>
            <TitleSection
              center
              title={'Comparador de'}
              titleAlt={'alarmas'}
              titleThird={'para casa'}
              subtitle={'Compara precio y componentes de las compañías de alarmas.'}
            />
          </Col>
          <TarjetaBannerSeguro></TarjetaBannerSeguro>
          <Col xs={12} className='my-5'>
            <Row className='align-content-center'>
              <ItemSegurosInfo icon={'/img/icons/hucha.svg'} content={'Te damos un presupuesto personalizado para que no pagues de más.'} />
              <ItemSegurosInfo icon={'/img/icons/candado.svg'} content={'Solo trabajamos con las compañías de alarmas que ofrecen el mayor nivel de seguridad.'} />
              <ItemSegurosInfo icon={'/img/icons/telefono.svg'} content={'Tendrás tu presupuesto en una llamada y, si lo deseas, podrás contratar de manera sencilla.'} />
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid className='bg-blueContrast p-5'>
        <Row>
          <Col md={8} className='my-5 mx-auto'>
            <Row>
              <Col md={4} className='d-none d-md-block'><img src='/img/seguros/banner_dudas.png' /></Col>
              <Col md={8}>
                <h4 className='my-4'>¿Tienes dudas? Te ayudamos a elegir</h4>
                <p>Solicita tu estudio gratuito y recibe las mejores ofertas para proteger tu vivienda.</p>
                <div className='d-flex d-none d-md-block'>
                  <a href='' className='btn btn-primary m-1'>Solicitar estudio</a>
                  <a href='' className='btn btn-primary m-1'>Te llamamos</a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className='p-5'>
        <Row>
          <Col md={12} className='my-5'>
            <TitleSection
              center
              title={'Comparador de'}
              titleAlt={'precios y tarifas'}
              titleThird={'de alarmas'}
            />
          </Col>
          <ContenedorProductosAlarmas />
          <Col xs={12} md={12}>
            <TitleSection
              center
              title={'Comparativa de'}
              titleAlt={'cuota mensual'}
              titleThird={'de alarmas para hogar'}
              subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
            />
          </Col>
          <TarjetaComparativaItem data={cuotaMensual} title_1={'Cuota mensual'} title_2={'Cuota sin promoción'} />
          <Col xs={12} md={12}>
            <TitleSection
              center
              title={'Comparativa de'}
              titleAlt={'precio de instalación'}
              subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
            />
          </Col>
          <TarjetaComparativaItem data={cuotaMensual} title_1={'Cuota mensual'} title_2={''} />
          <Col xs={12} md={12}>
            <TitleSection
              center
              title={'Comparativa de'}
              titleAlt={'coste de equipos'}
              subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
            />
          </Col>
          <TarjetaComparativaItem data={cuotaMensual} title_1={'Cuota mensual'} title_2={''} />
          <Col xs={12} md={12}>
            <TitleSection
              center
              title={'Comparativa de'}
              titleAlt={'equipos de alarmas'}
              subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
            />
          </Col>
          <Row className='d-flex justify-content-center'>
            {
              data.flatMap((item, key) => {
                return <TarjetaInfoLogoTexto key={key} icono={item.icono} contenido={item.contenido} />;
              })
            }
          </Row>
        </Row>
        <Row>
          <Col className='text-center my-5'>
            <p>En la siguiente tabla, puede verse una comparativa de los kits de alarma básicos de las principales compañías:</p>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Card className='tabla-comparativa-costos p-2 mb-5 col-10 mx-auto'>
            <Card.Body>
              <Table>
                <tr>
                  <th></th>
                  {
                    cuotaMensual?.map((item, index) => {
                      return <th key={index}><img src={item?.proveedor_logo} alt={item?.proveedor_nombre} /></th>
                    })
                  }
                </tr>
                <tr>
                  <th>{'Verificación por vídeo'}</th>
                  {
                    cuotaMensual?.map((item, index) => {
                      return <td key={index}>{item.verificacion_video == 1 ? <img src={'/img/icons/check_green.svg'} alt={'check'} /> : <span className='color-red font-bold'>X</span>}</td>
                    })
                  }
                </tr>
                <tr>
                  <th>{'Compatible con mascotas'}</th>
                  {
                    cuotaMensual?.map((item, index) => {
                      return <td key={index}>{item.compatible_mascotas == 1 ? <img src={'/img/icons/check_green.svg'} alt={'check'} /> : <span className='color-red font-bold'>X</span>}</td>
                    })
                  }
                </tr>
                <tr>
                  <th>{'Botón del pánico'}</th>
                  {
                    cuotaMensual?.map((item, index) => {
                      return <td key={index}>{item.boton_panico == 1 ? <img src={'/img/icons/check_green.svg'} alt={'check'} /> : <span className='color-red font-bold'>X</span>}</td>
                    })
                  }
                </tr>
                <tr>
                  <th>{'Fotodetectores'}</th>
                  {
                    cuotaMensual?.map((item, index) => {
                      return <td key={index}>{item.fotodetector == 1 ? <img src={'/img/icons/check_green.svg'} alt={'check'} /> : <span className='color-red font-bold'>X</span>}</td>
                    })
                  }
                </tr>
                <tr>
                  <th>{'Detector de infrarrojos'}</th>
                  {
                    cuotaMensual?.map((item, index) => {
                      return <td key={index}>{item.detector_infrarrojo == 1 ? <img src={'/img/icons/check_green.svg'} alt={'check'} /> : <span className='color-red font-bold'>X</span>}</td>
                    })
                  }
                </tr>
                <tr>
                  <th>{'Detector magnético'}</th>
                  {
                    cuotaMensual?.map((item, index) => {
                      return <td key={index}>{item.detector_magnetico == 1 ? <img src={'/img/icons/check_green.svg'} alt={'check'} /> : <span className='color-red font-bold'>X</span>}</td>
                    })
                  }
                </tr>
                <tr>
                  <th>{'Llaves o tags'}</th>
                  {
                    cuotaMensual?.map((item, index) => {
                      return <td key={index}>{item.llaves_tags == 1 ? <img src={'/img/icons/check_green.svg'} alt={'check'} /> : <span className='color-red font-bold'>X</span>}</td>
                    })
                  }
                </tr>
                <tr>
                  <th>{'Extras'}</th>
                  {
                    cuotaMensual?.map((item, index) => {
                      return <td key={index}>{item.extras != '' ? item.extras : <span className='color-red font-bold'>X</span>}</td>
                    })
                  }
                </tr>
              </Table>
            </Card.Body>
          </Card>
        </Row>
      </Container >
      <Footer></Footer>
    </>
  )
}
