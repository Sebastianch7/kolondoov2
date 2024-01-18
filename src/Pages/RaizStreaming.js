import React, { useState, useEffect } from 'react';
import Header from '../Components/Header/Header'
import BannerImageFull from '../Components/Banner/BannerImageFull'
import { Container, Row, Col } from 'react-bootstrap'
import TitleSection from '../Components/Text/TitleSection'
import Footer from '../Components/Footer/Footer';
import TarjetaRaizStreaming from '../Content/TarjetaRaizStreaming.json'
import ContenedorTarjeta from '../Components/Contenedor/ContenedorTarjeta';
import ContenedorTarjetaBlog from '../Components/Contenedor/ContenedorTarjetaBlog';
import { isMobile } from 'react-device-detect';
import AcordionItem from '../Components/Acordion/AcordionItem';
import TarjetaProducto from '../Components/Tarjeta/TarjetaProducto';
import InterSection from '../Components/Utils/InterSection';
import ContenedorDescipcionTarifa from '../Components/Contenedor/ContenedorDescipcionTarifa'
import ContenedorComparadorLogos from '../Components/Contenedor/ContenedorComparadorLogos';
import ContenedorPreguntasFrecuentes from '../Components/Contenedor/ContenedorPreguntasFrecuentes';
import FormSuscripcion from '../Components/Forms/FormSuscripcion';
import ContenedorPorQueComparar from '../Components/Contenedor/ContenedorPorQueComparar';
import preguntasFrecuentes from '../Content/PreguntasFrecuentesStreaming.json';

const dataPorQueComparar = [
  {
    logo: "/img/icons/factura.svg",
    content: "Comparar tarifas de TV y streaming es esencial para optimizar tu presupuesto y obtener el máximo valor por tu dinero. Con la creciente variedad de servicios disponibles, desde televisión por cable hasta plataformas de streaming, la comparación te permite identificar las ofertas más atractivas y económicamente viables. Encontrar la tarifa que se ajuste a tus necesidades específicas no solo te permite disfrutar de un entretenimiento de calidad, sino que también te ayuda a evitar gastos innecesarios, garantizando que cada euro invertido se traduzca en experiencias televisivas que realmente disfrutas."
  },
  {
    logo: "/img/icons/obtener-dinero.svg",
    content: "Cada consumidor tiene gustos y preferencias únicas, y comparar tarifas de TV y streaming te brinda la oportunidad de personalizar tu experiencia de entretenimiento. Al analizar las opciones disponibles, puedes seleccionar servicios que se alineen con tus intereses, ya sea accediendo a canales específicos, plataformas de streaming con contenido exclusivo o paquetes que incluyan tus programas y eventos favoritos. La comparación te empodera para tomar decisiones informadas, garantizando que tu experiencia de entretenimiento se adapte a tu estilo de vida y preferencias individuales."
  },
  {
    logo: "/img/icons/operador.svg",
    content: "Comparar tarifas no solo te ayuda a encontrar la oferta más adecuada, sino que también te permite aprovechar descuentos y ofertas exclusivas. Muchas compañías ofrecen promociones temporales, descuentos por paquetes combinados o beneficios adicionales para nuevos suscriptores. Al comparar, puedes descubrir estas ofertas especiales, maximizando los beneficios y garantizando que obtienes el mejor trato posible. No te pierdas la oportunidad de ahorrar y disfrutar de un entretenimiento de calidad al mismo tiempo. Comparar tarifas es el primer paso hacia una experiencia televisiva y de streaming más satisfactoria y rentable."
  },
]

const data = [
  {
    title: 'Variedad Personalizada',
    text: 'Elige una tarifa de televisión y streaming que se adapte a tu estilo de vida y preferencias de entretenimiento. Con opciones personalizadas, puedes seleccionar canales, servicios y funciones que realmente te interesen, asegurándote de pagar solo por lo que realmente disfrutas.'
  },
  {
    title: 'Ahorro Inteligente',
    text: 'Al decidirte por una tarifa, no solo estás accediendo a contenido emocionante, sino también a oportunidades exclusivas de ahorro. Muchas tarifas ofrecen descuentos por paquetes combinados, suscripciones a largo plazo y promociones temporales, permitiéndote disfrutar al máximo a un precio asequible.'
  },
  {
    title: 'Acceso a Contenido Exclusivo',
    text: 'Las tarifas de televisión y streaming a menudo incluyen acceso a contenido exclusivo y original que no encontrarás en otras plataformas. Desde series originales hasta eventos en vivo, al decidirte por una tarifa, te sumerges en un mundo de entretenimiento único y emocionante.'
  },
  {
    title: 'Flexibilidad y Movilidad',
    text: 'Las tarifas de televisión y streaming ofrecen flexibilidad y movilidad. Accede a tu contenido favorito desde múltiples dispositivos, ya sea en casa o mientras estás en movimiento. Decide cuándo y dónde disfrutar de tus programas y películas favoritos para adaptarlos a tu agenda.'
  },
];

export default function RaizStreaming() {
  return (
    <>
      <Header breadCrumb></Header>
      <BannerImageFull
        image={'/img/bannerRaizStreaming.png'}
        title='Comparador televisión y streaming'
        text1='<ul class="listaAlternativa"><li><p>¡Descubre la manera más inteligente de disfrutar de la mejor televisión con nuestros paquetes exclusivos! Con la posibilidad de combinar diversos servicios bajo una única tarifa</p></li><li><p>Encuentra ofertas exclusivas en nuestro comparador de televisión y streaming y obtén acceso privilegiado a promociones que transformarán tu experiencia de entretenimiento.</p></li><li><p>¡Optimiza tu tiempo y simplifica tu elección! Decidir entre las numerosas opciones del mercado nunca fue tan fácil y eficiente.</p></li></ul>'
        btnLeft
        /* buttons={[
          {
            title: '¡Empieza a ahorrar!',
            url: '/energia/comparador-tarifas-luz'
          }
        ]} */
      />
      <Container>
        <TitleSection
          center
          title={'Comparadores de '}
          titleAlt={'televisión y streaming'}
          titleThird={' que tenemos para ti'}
          text1={'Encontrar el servicio perfecto puede ser abrumador, ¡pero no con nosotros! Ofrecemos una selección incomparable de opciones de televisión y streaming, abarcando desde los gigantes del streaming hasta los servicios de televisión más exclusivos. Sabemos que no todos buscamos lo mismo en el entretenimiento, y eso lo entendemos a la perfección. Nuestro comparador no solo te presenta las opciones, sino que te ayuda a encontrar la combinación perfecta para satisfacer tus gustos y necesidades.'}
          text2={'Descubre el entretenimiento a tu medida con nuestra selección de comparadores de televisión y streaming.'}
          left
        />
        <ContenedorTarjeta cols={3}>
          {!isMobile ?
            TarjetaRaizStreaming?.map((item, index) => {
              return <TarjetaProducto key={index} data={item} />
            })
            :
            TarjetaRaizStreaming?.map((item, index) => {
              return <AcordionItem key={index} data={item} />
            })
          }
        </ContenedorTarjeta>
        <TitleSection
          center
          title={'Las mejores ofertas de '}
          titleAlt={'televisión y streaming'}
        />
        <ContenedorDescipcionTarifa data={data} />
      </Container>
      <ContenedorTarjetaBlog />
      <ContenedorPreguntasFrecuentes
        data={preguntasFrecuentes}
        image={'/img/preguntas-raiz-energia.png'}
      />
      <ContenedorPorQueComparar title={'¿Por qué comparar'} titleAlt={'tarifas de Tv y Streaming'} titleThird={'es tan importante?'} dataPorQueComparar={dataPorQueComparar} />
      <FormSuscripcion />
      <Footer></Footer>
    </>

  )
}
