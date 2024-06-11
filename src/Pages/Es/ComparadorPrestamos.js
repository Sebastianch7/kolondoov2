import React from 'react';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import ContenedorProductosGas from '../../Components/Contenedor/ContenedorProductosGas';
import MetaData from '../../Components/Header/SeoMetadata';
import ContenedorPrestamos from '../../Components/Contenedor/ContenedorPrestamos';

function ComparadorPrestamos() {
    return (
        <div>
            <MetaData titulo={'Comparador de prestamos | Vuskoo'} descripcion={'Compara las diferentes compañias para prestamos'}/>
            <Header></Header>
            <ContenedorPrestamos>
            </ContenedorPrestamos>
            <Footer></Footer>
        </div>
    );
}

export default ComparadorPrestamos;