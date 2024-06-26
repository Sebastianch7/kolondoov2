import React from 'react';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import ContenedorProductosGas from '../../Components/Contenedor/ContenedorProductosGas';
import MetaData from '../../Components/Header/SeoMetadata';
import ContenedorPrestamos from '../../Components/Contenedor/ContenedorPrestamos';
import FooterCo from '../../Components/Footer/FooterCo';

function ComparadorPrestamosCo() {
    return (
        <div>
            <MetaData titulo={'Comparador de prestamos | Vuskoo'} descripcion={'Compara las diferentes compañias para prestamos'}/>
            <Header></Header>
            <ContenedorPrestamos>
            </ContenedorPrestamos>
            <FooterCo />
        </div>
    );
}

export default ComparadorPrestamosCo;