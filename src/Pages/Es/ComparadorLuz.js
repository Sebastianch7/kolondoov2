import React from 'react';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import ContenedorProductosLuz from '../../Components/Contenedor/ContenedorProductosLuz';
import MetaData from '../../Components/Header/SeoMetadata';

function ComparadorLuz() {
    return (
        <div>
            <MetaData titulo={'Comparador de Tarifas de Luz: encuentra la opción ideal | Vuskoo'} descripcion={'El comparador de tarifas luz Vuskoo te muestra el precio de la potencia, el coste de la energía y más. Explora las ofertas y ahorra en tu factura de luz.'}/>
            <Header breadCrumb></Header>
            <Banner
                title={'Comparador de Tarifas Luz'}
                subtitle='¡Te ayudamos a encontrar la tarifa que mejor se adapte a ti!'
                image={'/img/energia/banner_luz.png'}
                logo={'/img/icons/luz.svg'}
            >
                
            </Banner>
            <ContenedorProductosLuz />
            <Footer></Footer>
        </div>
    );
}

export default ComparadorLuz;