import React from 'react';
import Header from '../../Components/Header/Header'
import BannerImageFull from '../../Components/Banner/BannerImageFull'
import { Container } from 'react-bootstrap'
import TitleSection from '../../Components/Text/TitleSection'
import Footer from '../../Components/Footer/Footer';
import TrjetaRaizFinanzas from '../../Content/TarjetaRaizFinanzaEs.json'
import ContenedorTarjeta from '../../Components/Contenedor/ContenedorTarjeta';
import { isMobile } from 'react-device-detect';
import TarjetaProducto from '../../Components/Tarjeta/TarjetaProducto';
import ContenedorDescipcionTarifa from '../../Components/Contenedor/ContenedorDescipcionTarifa'
import ContenedorPreguntasFrecuentes from '../../Components/Contenedor/ContenedorPreguntasFrecuentes';
import FormSuscripcion from '../../Components/Forms/FormSuscripcion';
import ContenedorPorQueComparar from '../../Components/Contenedor/ContenedorPorQueComparar';
import preguntasFrecuentes from '../../Content/PreguntasFrecuentesFinanzasEs.json';
import ItemStack from '../../Components/ItemStack';
import MetaData from '../../Components/Header/SeoMetadata';

const dataPorQueComparar = [
  {
    logo: "/img/icons/factura.svg",
    content: "Comparar servicios financieros es fundamental, ya que cada entidad ofrece condiciones que pueden variar considerablemente, desde las tasas de interés y comisiones hasta los beneficios y requisitos. Hacer una revisión cuidadosa de estos aspectos te ayudará a tomar decisiones bien informadas y evitar sorpresas desagradables. Al comparar, podrás detectar cláusulas ocultas, comprender todos los costos asociados y asegurarte de que el producto financiero realmente se adapta a tus necesidades y a tu capacidad de pago. Esta práctica también te permite aprovechar las mejores oportunidades disponibles en el mercado."
  },
  {
    logo: "/img/icons/obtener-dinero.svg",
    content: "Pequeñas diferencias en las tasas de interés, comisiones o beneficios pueden generar un impacto significativo en tus finanzas a lo largo del tiempo. Al comparar cuidadosamente las distintas ofertas, puedes identificar las opciones más rentables, lo que te permitirá ahorrar dinero en intereses, comisiones de mantenimiento y otros gastos relacionados. Esta comparación no solo te ayuda a reducir costos, sino también a optimizar tu presupuesto, eligiendo productos financieros que realmente se ajusten a tus necesidades y te brinden el mayor valor a largo plazo."
  },
  {
    logo: "/img/icons/operador.svg",
    content: "Nuestro equipo de expertos te acompañará en cada paso del proceso de comparación, explicando de forma clara las condiciones de cada producto y orientándote para que tomes la mejor decisión según tus necesidades y objetivos financieros. Con nuestro apoyo, podrás identificar los servicios financieros que te ayudarán a ahorrar, optimizar tus recursos y avanzar hacia el cumplimiento de tus metas económicas. Nos aseguramos de que elijas opciones que maximicen tus beneficios y te proporcionen tranquilidad a largo plazo."
  },
]

const data = [
  {
    title: 'Préstamos',
    text: 'Determina el tipo de préstamo que necesitas: personal, hipotecario, para vehículo o formación. Cada uno tiene sus propias condiciones y requisitos.'
  },
  {
    title: 'Cuentas de ahorro',
    text: 'Valora si precisas una cuenta de ahorro estándar, cuenta nómina, con alta rentabilidad o ventajas adicionales como descuentos o programas de puntos.'
  },
  {
    title: 'Tarjetas de crédito',
    text: 'Decide entre una tarjeta estándar, oro, con devolución de efectivo o programas de fidelización. Considera los costes asociados como la cuota anual y los tipos de interés.'
  },
  {
    title: 'Tipos de interés',
    text: 'Compara los tipos de interés ofrecidos por distintas entidades para encontrar la opción más ventajosa.'
  },
  {
    title: 'Ventajas adicionales',
    text: 'Examina los beneficios extra, como descuentos en establecimientos, seguros gratuitos o acceso a salas VIP en aeropuertos.'
  },
  {
    title: 'Costes',
    text: 'Ten en cuenta los gastos vinculados a cada producto, incluyendo comisiones de mantenimiento, por retirada de efectivo o transferencias, y seguros.'
  },
  {
    title: 'Requisitos',
    text: 'Comprueba los requisitos de cada entidad para asegurarte de cumplirlos antes de solicitar un producto.'
  },
  {
    title: 'Documentación',
    text: 'Recopila la documentación necesaria para tramitar el producto financiero, como DNI/NIE, nóminas y vida laboral.'
  },
  {
    title: 'Solicitud',
    text: 'Puedes gestionar la solicitud online, en una oficina bancaria o a través de un gestor personal.'
  },
  {
    title: 'Aprobación',
    text: 'El plazo de aprobación varía según la entidad y el producto solicitado.'
  },
];

export default function RaizFinanza() {
  return (
    <>
      <MetaData titulo={'Comparador de Finanzas | Vuskoo'} descripcion={''}/>
      <Header breadCrumb></Header>
      <BannerImageFull
        image={'/img/banner-raiz-finanzas-es.jpg'}
        title='Comparador de Finanzas'
        text1='<ul class="listaAlternativa"><li><p>Descubre la tarjeta o el préstamo que hará click con tu estilo de vida.</p></li><li><p>Multiplica tus ahorros mes a mes con las cuentas inteligentes de Vuskoo.</p></li><li><p>¿Dudas? Nuestros gurús financieros están a tu disposición para guiarte.</p></li></ul>'
        btnLeft
      />
      <Container>
        <TitleSection
          center
          title={'Comparadores de '}
          titleAlt={'Microcréditos y Soluciones de deudas'}
          text1={'En el panorama financiero español actual, la multitud de entidades compitiendo por tu atención puede resultar abrumadora. En Vuskoo, comprendemos el desafío que supone elegir la opción bancaria idónea. Por ello, te ofrecemos una plataforma para analizar meticulosamente cada alternativa y descubrir la que mejor se adapte a tus necesidades financieras. A continuación, ponemos a tu disposición nuestros comparadores, donde encontrarás una selección cuidadosa de ofertas y servicios (incluyendo combinaciones ventajosas) disponibles en el mercado español.'}
          text2={'¿Cuál será la elección que optimice tu salud financiera? Te invitamos a explorar nuestras herramientas comparativas y dar el primer paso hacia una decisión financiera informada.'}
          left
        />
        <ContenedorTarjeta cols={6}>
          {!isMobile ?
            TrjetaRaizFinanzas?.map((item, index) => {
              return <TarjetaProducto key={index} data={item} />
            })
            :
            TrjetaRaizFinanzas?.map((item, index) => {
              return <ItemStack data={item} index={index} />
            })
          }
        </ContenedorTarjeta>
        <TitleSection
          center
          title={'Las mejores ofertas '}
          titleAlt={'de finanzas'}
        />
        <p>¿Buscas las mejores ofertas financieras en España? Descubre los aspectos clave a considerar al elegir entre préstamos, cuentas de ahorro y tarjetas de crédito:</p>
        <ContenedorDescipcionTarifa data={data} />
        {<p>No demores más tu decisión financiera. En nuestra plataforma encontrarás toda la información necesaria para realizar una elección óptima y fundamentada.</p>}
        <TitleSection
          center
          title={'Comparamos las '}
          titleAlt={'mejores compañías'}
          text1={'Cada entidad financiera tiene sus propios puntos fuertes y débiles, lo que puede complicar la elección del banco ideal. La clave está en identificar qué aspectos son más importantes para ti y comparar las opciones para descubrir en qué destaca cada una.'}
          text2={''}
          left
        />
      </Container>
      <ContenedorPreguntasFrecuentes
        data={preguntasFrecuentes}
        image={'/img/banner-raiz-finanzas-preguntas-es.jpg'}
      />
      <ContenedorPorQueComparar title={'¿Por qué comparar'} titleAlt={'servicios financieros'} titleThird={'es tan importante?'} dataPorQueComparar={dataPorQueComparar} />
      <FormSuscripcion />
      <Footer />
    </>

  )
}
