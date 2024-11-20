import React from "react";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import ContenedorProductosMovilFibra from "../../Components/Contenedor/ContenedorProductosMovilFibra";
import MetaData from "../../Components/Header/SeoMetadata";

function ComparadorFibraMovilCo() {
  return (
    <div>
      <MetaData
        titulo={"Comparador tarifas Fibra y Móvil: contrata y ahorra | Vuskoo"}
        descripcion={
          "Descubre y contrata las mejores tarifas de Fibra y Móvil. Explora las ofertas, compara precios, velocidades y beneficios para encontrar la combinación perfecta"
        }
      />
      <Header breadCrumb></Header>
      <Banner
        title={"Comparador tarifas Fibra y Móvil"}
        subtitle="¡Te ayudamos a encontrar la tarifa de fibra con movil!"
        image={"/img/banner_movil_fibra-co.png"}
        logo={"/img/icons/router.svg"}
        logo2={"/img/icons/mobile.svg"}
      ></Banner>
      <ContenedorProductosMovilFibra></ContenedorProductosMovilFibra>
      <Footer />
    </div>
  );
}

export default ComparadorFibraMovilCo;
