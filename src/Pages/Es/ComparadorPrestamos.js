import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import MetaData from '../../Components/Header/SeoMetadata';
import ContenedorPrestamos from '../../Components/Contenedor/ContenedorPrestamos';
import { useLocation, useParams } from 'react-router-dom';

function ComparadorPrestamos() {

    const [title, setTitle] = useState(null)
    const [titleLanding, setTitleLanding] = useState(null)
    const [subtitleLanding, setSubtitleLanding] = useState(null)
    const [imagenLanding, setImagenLanding] = useState(null)
    const [logoLanding, setLogoLanding] = useState(null)
    const [filtro, setFiltro] = useState(null)
    const location = useLocation();
    const tipo = location.pathname.split('/').pop();

    useEffect(() => {
        switch (tipo) {
            case 'unificadores':
                setTitle('Unificadores');
                setTitleLanding('Comparador de unificadores')
                setSubtitleLanding('¡Te ayudamos a encontrar la cuenta de ahorro que mejor se adapte a ti!')
                setImagenLanding('/img/banner-microcreditos-es.png')
                setLogoLanding('/img/icons/microcreditos.png')
                setFiltro(4)
                break;
            case 'microcreditos':
                setTitle('Microcreditos');
                setTitleLanding('Comparador de microcreditos')
                setSubtitleLanding('¡Te ayudamos a encontrar la tarjeta de crédito que mejor se adapte a ti!')
                setImagenLanding('/img/banner-unificadores-es.png')
                setLogoLanding('/img/icons/unificadores.png')
                setFiltro(5)
                break;
            default:
                setTitle(null);
                break;
        }
    }, [tipo]);


    return (
        <div>
            <MetaData titulo={'Comparador de préstamos | Vuskoo'} descripcion={'Compara las diferentes compañías para préstamos'} />
            <Header breadCrumb></Header>
            <Banner
                title={titleLanding}
                subtitle={subtitleLanding}
                image={imagenLanding}
                logo={logoLanding}
            >
                {/* <FormSuscripcion
                    text={'Introduce tu código postal'}
                    button={'Buscar Ofertas'}
                    politicy
                /> */}
            </Banner>

            <ContenedorPrestamos filtroCategoria={filtro} />
            <Footer />
        </div>
    );
}

export default ComparadorPrestamos;