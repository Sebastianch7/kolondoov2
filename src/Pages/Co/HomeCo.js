import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import FormSuscripcionCo from "../../Components/Forms/FormSuscripcionCo";
import MetaData from "../../Components/Header/SeoMetadata";
import ConsentimientoCookies from "../../Components/Utils/ConsentimientoCookies";
import BannerHome from "../../Components/Banner/BannerHome";
import ContenedorContratacion from "../../Components/Contenedor/ContenedorContratacion";
import ContenedorElegirVuskoo from "../../Components/Contenedor/ContenedorElegirVuskoo";

function HomeCo(props) {
  return (
    <div>
      <ConsentimientoCookies></ConsentimientoCookies>
      <MetaData
        imagen_destacada="/img/banner-home.png"
        descripcion={
          "Descubre una nueva era en la toma de decisiones con Vuskoo. Comparadores de servicios que te ofrecen información detallada, ofertas, promociones para que elijas"
        }
        titulo={
          "Optimiza tus elecciones con Vuskoo: Expertos en Comparadores de Servicios"
        }
      />
      <Header></Header>
      <main>
        <BannerHome
          title={"El ahorro está a un clic"}
          subtitle={
            "Compare y escoja las mejores ofertas para ahorrar en grande."
          }
          image={"/img/banner-home-co.png"}
          buttons={[
            {
              title: "Internet y Telefonía",
              icon: "/img/icons/phone-light.svg",
              url: "/co/internet-movil/comparador-tarifas-fibra-y-movil",
            },
            {
              title: "Finanzas",
              icon: "/img/logos/tarjeta-de-credito.svg",
              url: "/co/finanzas/banca",
            },
            /*{
                            title: 'Cupones descuento',
                            icon: '/img/icons/cupon_home.svg',
                            url: 'cupones'
                        } ,
                        {
                            title: 'Seguros',
                            icon: '/img/icons/casa.svg',
                            url: 'television-streaming/comparador-plataformas-streaming'
                        } */
          ]}
        />
        <ContenedorContratacion imagen={"/img/compromiso-calidad.svg"} />
        <div class="interSeccion"></div>
        <ContenedorElegirVuskoo />
        {/* <div class="interSeccion"></div>
                <ContenedorExplorar /> */}
        <div class="interSeccion"></div>
        <FormSuscripcionCo />
      </main>

      <Footer />
    </div>
  );
}

export default HomeCo;
