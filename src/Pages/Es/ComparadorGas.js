import React from 'react';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import ContenedorProductosGas from '../../Components/Contenedor/ContenedorProductosGas';
import MetaData from '../../Components/Header/SeoMetadata';

function ComparadorGas() {
    return (
        <div>
            <MetaData titulo={'Comparador Tarifas Gas: Compara, ahorra y contrata | Vuskoo'} descripcion={'El comparador de tarifas luz Vuskoo te muestra el precio de la potencia, duración del contrato, tarifa y más. Disfruta de un suministro de gas eficiente y económico'}/>
            <Header breadCrumb></Header>
            <Banner
                title={'Comparador de Tarifas de Gas'}
                subtitle='¡Te ayudamos a encontrar el mejor gas!'
                image={'/img/energia/banner_gas.png'}
                logo={'/img/icons/gas.svg'}
            >
                {/* <FormSuscripcion
                    text={'Introduce tu código postal'}
                    button={'Buscar Ofertas'}
                    politicy
                /> */}
            </Banner>
            <ContenedorProductosGas />
            <Footer></Footer>
        </div>
    );
}

export default ComparadorGas;