import React from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import ContenedorProductosLuzGas from '../Components/Contenedor/ContenedorProductosLuzGas';
import MetaData from '../Components/Header/SeoMetadata';

function ComparadorLuzGas() {
    return (
        <div>
            <MetaData titulo={'Comparador tarifas luz y gas: precios, ofertas y más | Vuskoo'} descripcion={'Simplificamos tu elección para que ahorres en tus facturas de energía. Optimiza tu experiencia con nuestro comparador de tarifas de luz y gas. ¡Encuentra la opción ideal!'}/>
            <Header breadCrumb></Header>
            <Banner
                title={'Comparador de Tarifas Luz y Gas'}
                subtitle='¡Te ayudamos a encontrar la tarifa que mejor se adapte a ti!'
                image={'/img/energia/banner_luz_y_gas.png'}
                /* logo={'/img/icons/luz.svg'}
                logo2={'/img/icons/gas.svg'} */
            >
                {/* <FormSuscripcion
                    text={'Introduce tu código postal'}
                    button={'Buscar Ofertas'}
                    politicy
                /> */}
            </Banner>
            <ContenedorProductosLuzGas>
            </ContenedorProductosLuzGas>
            <Footer></Footer>
        </div>
    );
}

export default ComparadorLuzGas;