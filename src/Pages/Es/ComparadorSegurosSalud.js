import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap'
import TitleSection from '../../Components/Text/TitleSection'
import MetaData from '../../Components/Header/SeoMetadata';
import { fetchTarifasSegurosSalud } from '../../services/ApiServices';
import ItemSegurosInfo from '../../Components/Items/ItemSegurosInfo';
import TarjetaBannerSeguroSalud from '../../Components/Tarjeta/TarjetaBannerSeguroSalud';
import ContenedorProductosSegurosSalud from '../../Components/Contenedor/ContenedorProductosSegurosSalud';
import { useLocation } from 'react-router-dom';

export default function ComparadorSegurosSalud() {

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

  const [lang, setLang] = useState('')
  const location = useLocation();

  useEffect(() => {
    setLang(location.pathname.split('/')[1])
  }, [location])

  const [isLoading, setIsLoading] = useState(true);
  const [offers, setOffers] = useState([]); //copago
  const [offersOut, setOffersOut] = useState([]); //sin copago
  const [cuotaMensual, setCuotaMensual] = useState([]);

  useEffect(() => {
    if (lang != null) {
      const fetchTariffs = async () => {
        try {
          let response = await fetchTarifasSegurosSalud('es', 1)
          setOffers(response);
        } catch (error) {
          console.error("Error al obtener las tarifas de móvil:", error);
        }
      };

      fetchTariffs();
    }
  }, [lang]);
  
  useEffect(() => {
    if (lang != null) {
      const fetchTariffs = async () => {
        try {
          let response = await fetchTarifasSegurosSalud('es', 2)
          setOffersOut(response);
        } catch (error) {
          console.error("Error al obtener las tarifas de móvil:", error);
        }
      };

      fetchTariffs();
    }
  }, [lang]);

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
              titleAlt={'seguros de salud '}
              subtitle={'Elige el seguro de salud que mejor se adapte a tus necesidades'}
            />
          </Col>
          <TarjetaBannerSeguroSalud />
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
              titleAlt={'seguros con copago'}
            />
          </Col>
          <ContenedorProductosSegurosSalud data={offers} />
        </Row>
        <Row>
          <Col md={12} className='mb-5'>
            <TitleSection
              center
              title={'Comparador de'}
              titleAlt={'seguros sin copago'}
            />
          </Col>
          <ContenedorProductosSegurosSalud data={offersOut} />
        </Row>
      </Container >
      <Footer></Footer>
    </>
  )
}
