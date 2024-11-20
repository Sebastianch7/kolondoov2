import React from 'react';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import MetaData from '../../Components/Header/SeoMetadata';
import ContenedorVehiculos from '../../Components/Contenedor/ContenedorVehiculos';

function ComparadorVehiculos() {
    return (
        <div>
            <MetaData titulo={'Compara gratis tarifas de celular | Vuskoo'} descripcion={'En Vuskoo te ayudamos a que ahorres en tus facturas, ¡compara y encuentra la tarifa de celular ideal para ti! Asesoramiento personalizado.'}/>
            <Header breadCrumb></Header>
            <Banner
                title={'Comparador de Automóviles'}
                subtitle='¡Te ayudamos a encontrar el automóvil que mejor se adapte a ti!'
                image={'/img/vehiculos/banner_vehiculos.png'}
                logo={'/img/icons/coche.svg'}
            >
            </Banner>
            <ContenedorVehiculos />
            <Footer></Footer>
        </div>
    );
}

export default ComparadorVehiculos;