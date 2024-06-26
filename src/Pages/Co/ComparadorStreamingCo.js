import React from 'react';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import ContenedorProductosStreaming from '../../Components/Contenedor/ContenedorProductosStreaming';
import ContenedorPorQueComparar from '../../Components/Contenedor/ContenedorPorQueComparar';
import MetaData from '../../Components/Header/SeoMetadata';
import FooterCo from '../../Components/Footer/FooterCo';

const dataPorQueComparar = [
  {
    logo: "/img/icons/factura.svg",
    content: "Comparar tarifas de plataformas de streaming es fundamental para optimizar tu presupuesto y obtienes el máximo valor en tu inversión de entretenimiento. Además, con la creciente diversidad de servicios de streaming disponibles, desde los más conocidos hasta opciones más especializadas, la comparación te permite identificar las tarifas más competitivas, analizar costos, beneficios y posibles descuentos en la plataforma que mejor se ajuste a tus preferencias y necesidades de entretenimiento, asegurando un ahorro significativo a lo largo del tiempo."
  },
  {
    logo: "/img/icons/obtener-dinero.svg",
    content: "Cada plataforma de streaming ofrece un catálogo único de contenido, y comparar tarifas te brinda la oportunidad de personalizar tu experiencia de entretenimiento. Al conocer las ofertas específicas de cada servicio, puedes seleccionar aquellas plataformas que albergan el contenido que más te interesa. Ya sea que prefieras series originales, películas clásicas o documentales, la comparación te permite tomar decisiones informadas para adaptar tu suscripción a tus gustos, evitando pagar por servicios que no se alinean con tus preferencias."
  },
  {
    logo: "/img/icons/operador.svg",
    content: "Cada plataforma de streaming tiene características únicas y funcionalidades adicionales, y comparar tarifas te permite evaluar estas diferencias. Desde la posibilidad de transmitir en múltiples dispositivos hasta opciones de descarga y calidad de transmisión, la comparación te ayuda a encontrar la plataforma que ofrece la mejor combinación de flexibilidad y características adicionales. Al considerar estos aspectos, puedes asegurarte de que la plataforma seleccionada no solo cumple con tus expectativas de contenido, sino que también brinda una experiencia de usuario óptima. En resumen, comparar tarifas de plataformas de streaming es clave para maximizar beneficios y adaptar tu experiencia de entretenimiento digital a tus preferencias y necesidades específicas."
  },
]

function ComparadorStreamingCo() {
  return (
    <div>
      <MetaData titulo={'Comparador de Energía para Hogares: ahorra y contrata | Vuskoo'} descripcion={'Encuentra las mejores tarifas de energía. Compara precios, planes y beneficios, simplificamos tu elección para que optimices tu consumo de manera eficiente'} />
      <Header breadCrumb></Header>
      <Banner
        title={'Comparador de plataformas de streaming'}
        subtitle='¡Te ayudamos a encontrar la tarifa que mejor se adapte a ti!'
        image={'/img/banner_streaming-co.png'}
        logo={'/img/icons/streaming.svg'}
      >
        {/* <FormSuscripcion
                    text={'Introduce tu código postal'}
                    button={'Buscar Ofertas'}
                    politicy
                /> */}
      </Banner>
      <ContenedorProductosStreaming />
      <ContenedorPorQueComparar title={'¿Por qué comparar'} titleAlt={'tarifas de Streaming'} titleThird={'es tan importante?'} dataPorQueComparar={dataPorQueComparar} />
      <FooterCo />
    </div>
  );
}

export default ComparadorStreamingCo;