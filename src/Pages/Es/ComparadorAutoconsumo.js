import React from "react";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";

import MetaData from "../../Components/Header/SeoMetadata";
import ContenedorProductosAutoconsumo from "../../Components/Contenedor/ContenedorProductosAutoconsumo";

function ComparadorAutoconsumo() {
  return (
    <div>
      <MetaData
        titulo={
          "Comparador de Tarifas de Autoconsumo: encuentra la opción ideal | Vuskoo"
        }
        descripcion={
          "El comparador de tarifas luz Vuskoo te muestra el precio de la potencia, el coste de la energía y más. Explora las ofertas y ahorra en tu factura de luz."
        }
      />
      <Header breadCrumb></Header>
      <Banner
        title={"Comparador de Tarifas Autoconsumo"}
        subtitle="¡Te ayudamos a encontrar la tarifa que mejor se adapte a ti!"
        image={"/img/energia/banner-autoconsumo.png"}
        logo={"/img/icons/luz.svg"}
        logo2={"/img/icons/gas.svg"}
      ></Banner>
      <ContenedorProductosAutoconsumo />
      <Footer></Footer>
    </div>
  );
}

export default ComparadorAutoconsumo;
