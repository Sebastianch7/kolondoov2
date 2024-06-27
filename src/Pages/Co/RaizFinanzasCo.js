import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header'
import BannerImageFull from '../../Components/Banner/BannerImageFull'
import { Container, Row, Col } from 'react-bootstrap'
import TitleSection from '../../Components/Text/TitleSection'
import Footer from '../../Components/Footer/Footer';
import TarjetaRaizStreaming from '../../Content/TarjetaRaizFinanza.json'
import ContenedorTarjeta from '../../Components/Contenedor/ContenedorTarjeta';
import ContenedorTarjetaBlog from '../../Components/Contenedor/ContenedorTarjetaBlog';
import { isMobile } from 'react-device-detect';
import TarjetaProducto from '../../Components/Tarjeta/TarjetaProducto';
import ContenedorDescipcionTarifa from '../../Components/Contenedor/ContenedorDescipcionTarifa'
import ContenedorPreguntasFrecuentes from '../../Components/Contenedor/ContenedorPreguntasFrecuentes';
import FormSuscripcion from '../../Components/Forms/FormSuscripcion';
import ContenedorPorQueComparar from '../../Components/Contenedor/ContenedorPorQueComparar';
import preguntasFrecuentes from '../../Content/PreguntasFrecuentesFinanzasCo.json';
import ItemStack from '../../Components/ItemStack';
import MetaData from '../../Components/Header/SeoMetadata';
import FooterCo from '../../Components/Footer/FooterCo';
import FormSuscripcionCo from '../../Components/Forms/FormSuscripcionCo';

const dataPorQueComparar = [
  {
    logo: "/img/icons/factura.svg",
    content: "Comparar servicios financieros es crucial porque cada entidad ofrece condiciones diferentes, desde tasas de interés y comisiones hasta beneficios y requisitos. Revisar detenidamente estas condiciones te permite tomar una decisión informada y evitar sorpresas desagradables. Al comparar, puedes identificar cláusulas ocultas, entender los costos asociados y asegurarte de que el producto se ajuste a tus necesidades y capacidad financiera."
  },
  {
    logo: "/img/icons/obtener-dinero.svg",
    content: "Pequeñas diferencias en tasas de interés, comisiones o beneficios pueden acumularse con el tiempo y tener un impacto considerable en tus finanzas. Al comparar, puedes identificar las opciones más rentables y elegir aquellas que te permitan ahorrar dinero en intereses, cuotas de manejo y otros gastos asociados."
  },
  {
    logo: "/img/icons/operador.svg",
    content: "Nuestro equipo de expertos te guiará en el proceso de comparación, te explicará las condiciones de cada producto y te ayudará a tomar la mejor decisión para tus necesidades y objetivos financieros. Con nuestra ayuda, podrás encontrar los servicios financieros que te permitan ahorrar, optimizar tus recursos y alcanzar tus metas financieras."
  },
]

const data = [
  {
    title: 'Créditos',
    text: 'Defina si necesita un crédito de libre inversión, para vivienda, vehículo o educativo. Cada uno tiene condiciones y requisitos específicos.'
  },
  {
    title: 'Cuentas de ahorro',
    text: 'Evalúe si busca una cuenta de ahorros tradicional, de nómina, con intereses altos o beneficios adicionales como descuentos o puntos.'
  },
  {
    title: 'Tarjetas de crédito',
    text: 'Determine si prefiere una tarjeta clásica, premium, de cashback o con programas de lealtad. Tenga en cuenta los costos asociados como cuota de manejo y tasas de interés.'
  },
  {
    title: 'Tasas de interés',
    text: 'Compare las tasas de interés de diferentes entidades para encontrar la opción más conveniente.'
  },
  {
    title: 'Beneficios',
    text: 'Analice los beneficios adicionales que ofrecen, como descuentos en comercios, seguros, acceso a salas VIP, entre otros.'
  },
  {
    title: 'Costos',
    text: 'Tenga en cuenta los costos asociados a cada producto, como cuotas de manejo, comisiones por retiros o transferencias, y seguros.'
  },
  {
    title: 'Requisitos',
    text: 'Verifique los requisitos de cada entidad para asegurarse de cumplirlos antes de solicitar un producto.'
  },
  {
    title: 'Documentación',
    text: 'Reúna los documentos necesarios para solicitar el producto financiero, como cédula, extractos bancarios y certificados laborales.'
  },
  {
    title: 'Solicitud',
    text: 'Puede realizar la solicitud en línea, en una sucursal o a través de un asesor.'
  },
  {
    title: 'Aprobación',
    text: 'El tiempo de aprobación puede variar según la entidad y el producto.'
  },
];

export default function RaizFinanza() {
  return (
    <>
      <MetaData titulo={'Comparador de Finanzas | Vuskoo'} descripcion={''}/>
      <Header breadCrumb></Header>
      <BannerImageFull
        image={'/img/bannerRaizFinanza.png'}
        title='Comparador de Finanzas'
        text1='<ul class="listaAlternativa"><li><p>Encuentra la tarjeta o el crédito que se adapte a lo que necesitas.</p></li><li><p>Consigue ahorrar cada mes con las cuentas de ahorro que hay disponibles en Vuskoo.</p></li><li><p>Si te queda alguna duda, nuestros expertos te asesorarán en el proceso.</p></li></ul>'
        btnLeft
      buttons={[
        {
          title: '¡Empieza a ahorrar!',
          url: '/co/finanzas/banca'
        }
      ]}
      />
      <Container>
        <TitleSection
          center
          title={'Comparadores de '}
          titleAlt={'cuentas de ahorro, tarjetas de crédito y préstamos'}
          text1={'Con tantas entidades bancarias compitiendo por tu atención, en Vuskoo sabemos que elegir el banco ideal puede ser abrumador. Por eso, te recomendamos comparar cuidadosamente todas las opciones para encontrar la más rentable para ti. A continuación, encontrarás nuestros comparadores con las ofertas de los distintos servicios (y combinaciones) disponibles para contratar.'}
          text2={'¿Qué es lo mejor para ti? ¡No pierdas más tiempo y empieza a comparar!'}
          left
        />
        <ContenedorTarjeta cols={6}>
          {!isMobile ?
            TarjetaRaizStreaming?.map((item, index) => {
              return <TarjetaProducto key={index} data={item} />
            })
            :
            TarjetaRaizStreaming?.map((item, index) => {
              return <ItemStack data={item} index={index} />
            })
          }
        </ContenedorTarjeta>
        <TitleSection
          center
          title={'Las mejores ofertas '}
          titleAlt={'de finanzas'}
        />
        <p>¿Buscando las mejores ofertas de créditos, cuentas de ahorro y tarjetas de crédito? Aquí le contamos lo más importante a la hora de elegir:</p>
        <ContenedorDescipcionTarifa data={data} />
        <p>¡No pierda más tiempo y empiece a comparar! En nuestro sitio encontrará toda la información necesaria para tomar la mejor decisión financiera.</p>
        <TitleSection
          center
          title={'Comparamos las '}
          titleAlt={'mejores compañías'}
          text1={'Cada entidad bancaria tiene sus propias fortalezas y debilidades, lo que hace difícil elegir la ideal. La clave está en identificar qué aspectos son más importantes para usted y comparar las opciones para descubrir en qué destaca cada una. Aquí le presentamos las principales entidades bancarias y sus características distintivas. ¿Cuál se adapta mejor a sus necesidades financieras?'}
          text2={''}
          left
        />
      </Container>
      <ContenedorPreguntasFrecuentes
        data={preguntasFrecuentes}
        image={'/img/banner-raiz-finanzas-preguntas.png'}
      />
      <ContenedorPorQueComparar title={'¿Por qué comparar'} titleAlt={'servicios financieros'} titleThird={'es tan importante?'} dataPorQueComparar={dataPorQueComparar} />
      <FormSuscripcionCo />
      <FooterCo />
    </>

  )
}
