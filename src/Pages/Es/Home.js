import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import FormSuscripcion from "../../Components/Forms/FormSuscripcion";
import MetaData from "../../Components/Header/SeoMetadata";
import ConsentimientoCookies from "../../Components/Utils/ConsentimientoCookies";
import BannerHome from "../../Components/Banner/BannerHome";
import ContenedorContratacion from "../../Components/Contenedor/ContenedorContratacion";
import ContenedorServiciosCalidad from "../../Components/Contenedor/ContenedorServiciosCalidad";
import ContenedorElegirVuskoo from "../../Components/Contenedor/ContenedorElegirVuskoo";
import ContenedorExplorar from "../../Components/Contenedor/ContenedorExplorar";

function Home(props) {
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
          title={"La mejor manera de ahorrar"}
          subtitle={
            "Encuentra y elige las mejores ofertas para ahorrar a lo grande."
          }
          image={"/img/banner-home.png"}
          buttons={[
            {
              title: "Internet y Telefonía",
              icon: "/img/icons/phone-light.svg",
              url: "internet-telefonia/comparador-tarifas-fibra-y-movil",
            },
            {
              title: "Energía",
              icon: "/img/icons/lighting.svg",
              url: "energia/comparador-tarifas-luz",
            },
            {
              title: "Microcréditos",
              icon: "/img/icons/microcreditos-contraste.png",
              url: "finanzas/comparador-finanzas/microcreditos",
            },
            {
              title: "Cupones",
              icon: "/img/icons/cupon_home.svg",
              url: "cupones",
            },
          ]}
        />
        <ContenedorContratacion imagen={"/img/compromiso-calidad.svg"} />
        <ContenedorServiciosCalidad />
        <div className="interSeccion"></div>
        <ContenedorElegirVuskoo />
        <div className="interSeccion"></div>
        <ContenedorExplorar />
        <div className="interSeccion"></div>
        <FormSuscripcion />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
