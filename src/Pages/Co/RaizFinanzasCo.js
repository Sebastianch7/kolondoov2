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
import preguntasFrecuentes from '../../Content/PreguntasFrecuentesFinanzas.json';
import ItemStack from '../../Components/ItemStack';
import MetaData from '../../Components/Header/SeoMetadata';
import FooterCo from '../../Components/Footer/FooterCo';
import FormSuscripcionCo from '../../Components/Forms/FormSuscripcionCo';

const dataPorQueComparar = [
  {
    logo: "/img/icons/factura.svg",
    content: ""
  },
  {
    logo: "/img/icons/obtener-dinero.svg",
    content: ""
  },
  {
    logo: "/img/icons/operador.svg",
    content: ""
  },
]

const data = [
  {
    title: 'title',
    text: ''
  }
];

export default function RaizFinanza() {
  return (
    <>
      <MetaData titulo={'Comparador de televisión y de plataformas streaming | Vuskoo'} descripcion={'Explora las mejores opciones de televisión y plataformas de streaming. Encuentra ofertas, compara canales, programas y beneficios. Entretenimiento a tu medida'}/>
      <Header breadCrumb></Header>
      <BannerImageFull
        image={'/img/bannerRaizFinanza.png'}
        title='Comparador finanzas'
        text1='<ul class="listaAlternativa"><li><p>¡Descubre la manera más inteligente de disfrutar de la mejor televisión con nuestros paquetes exclusivos! Con la posibilidad de combinar diversos servicios bajo una única tarifa</p></li><li><p>Encuentra ofertas exclusivas en nuestro comparador de televisión y streaming y obtén acceso privilegiado a promociones que transformarán tu experiencia de entretenimiento.</p></li><li><p>¡Optimiza tu tiempo y simplifica tu elección! Decidir entre las numerosas opciones del mercado nunca fue tan fácil y eficiente.</p></li></ul>'
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
          title={'Comparadores de'}
          titleAlt={'finanzas'}
          text1={''}
          text2={''}
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
        <ContenedorDescipcionTarifa data={data} />
        <TitleSection
          center
          title={'Comparamos las '}
          titleAlt={'mejores compañías'}
          text1={''}
          text2={''}
          left
        />
      </Container>
      <ContenedorPreguntasFrecuentes
        data={preguntasFrecuentes}
        image={'/img/banner-raiz-finanzas-preguntas.png'}
      />
      <ContenedorPorQueComparar title={'¿Por qué comparar'} titleAlt={'tarifas de finanzas'} titleThird={'es tan importante?'} dataPorQueComparar={dataPorQueComparar} />
      <FormSuscripcionCo />
      <FooterCo />
    </>

  )
}
