import React from 'react';
import Header from '../../Components/Header/Header'
import BannerImageFull from '../../Components/Banner/BannerImageFull'
import { Container } from 'react-bootstrap'
import TitleSection from '../../Components/Text/TitleSection'
import Footer from '../../Components/Footer/Footer';
import TarjetaRaizStreaming from '../../Content/TarjetaRaizStreamingCo.json'
import ContenedorTarjeta from '../../Components/Contenedor/ContenedorTarjeta';
import { isMobile } from 'react-device-detect';
import TarjetaProducto from '../../Components/Tarjeta/TarjetaProducto';
import ContenedorDescipcionTarifa from '../../Components/Contenedor/ContenedorDescipcionTarifa'
import ContenedorPreguntasFrecuentes from '../../Components/Contenedor/ContenedorPreguntasFrecuentes';
import ContenedorPorQueComparar from '../../Components/Contenedor/ContenedorPorQueComparar';
import preguntasFrecuentes from '../../Content/PreguntasFrecuentesStreamingCo.json';
import ItemStack from '../../Components/ItemStack';
import MetaData from '../../Components/Header/SeoMetadata';
import FormSuscripcionCo from '../../Components/Forms/FormSuscripcionCo';

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
    title: 'Personaliza tu experiencia',
    text: 'Elige una tarifa de televisión y streaming que se adapte a tu estilo de vida y preferencias. Selecciona los canales, servicios y funciones que más te interesen y paga solo por lo que realmente disfrutas.'
  },
  {
    title: '¡Ahorra con inteligencia!',
    text: 'Al elegir una tarifa, no solo accedes a contenido emocionante, sino también a oportunidades exclusivas de ahorro. Aprovecha descuentos por paquetes, suscripciones a largo plazo y promociones temporales para disfrutar al máximo sin gastar de más.'
  },
  {
    title: 'Contenido exclusivo para ti',
    text: 'Disfruta de series originales, eventos en vivo y contenido exclusivo que no encontrarás en otras plataformas. ¡Sumérgete en un mundo de entretenimiento único y emocionante!'
  },
  {
    title: 'Flexibilidad y movilidad',
    text: 'Accede a tu contenido favorito desde cualquier dispositivo, ya sea en casa o fuera de ella. Decide cuándo y dónde disfrutar de tus programas y películas para adaptarlos a tu ritmo de vida.'
  },
];

export default function RaizStreamingCo() {
  return (
    <>
      <MetaData titulo={'Comparador TV y streaming | Vuskoo'} descripcion={''}/>
      <Header breadCrumb></Header>
      <BannerImageFull
        image={'/img/bannerRaizStreamingCo.png'}
        title='Comparador TV y streaming'
        text1='<ul class="listaAlternativa"><li><p>¡Disfruta de la mejor televisión con nuestros paquetes exclusivos! Combina varios servicios en una sola tarifa y ahorra.</p></li><li><p>Encuentra ofertas únicas en nuestro comparador de televisión y streaming, con promociones que revolucionarán tu entretenimiento.</p></li><li><p>¡Elige fácil y rápido! Simplifica tu decisión entre las múltiples opciones del mercado con nuestra herramienta.</p></li></ul>'
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
          text1={'¡Encontrar el servicio de televisión ideal no tiene por qué ser un lío! Tenemos la selección más amplia de opciones de televisión y streaming, desde los grandes nombres hasta los servicios más exclusivos. Sabemos que cada persona tiene gustos diferentes, y por eso nuestro comparador te ayuda a encontrar la combinación perfecta para ti.'}
          text2={'¡Descubre el entretenimiento perfecto para ti con nuestra selección de comparadores de televisión y streaming!'}
          left
        />
        <ContenedorTarjeta cols={3}>
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
          title={'Las mejores ofertas de '}
          titleAlt={'televisión y streaming'}
        />
        <ContenedorDescipcionTarifa data={data} />
      </Container>
      <ContenedorPreguntasFrecuentes
        data={preguntasFrecuentes}
        image={'/img/bannerRaizStreamingPreguntasCo.png'}
      />
      <ContenedorPorQueComparar title={'¿Por qué comparar'} titleAlt={'tarifas de Tv y Streaming'} titleThird={'es tan importante?'} dataPorQueComparar={dataPorQueComparar} />
      <FormSuscripcionCo />
      <Footer />
    </>

  )
}
