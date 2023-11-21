import React from 'react'
import Header from '../Components/Header/Header'
import TitleSection from '../Components/Text/TitleSection'
import ContenedorBlog from '../Components/Contenedor/ContenedorBlog'
import Footer from '../Components/Footer/Footer'
import FormSuscripcion from '../Components/Forms/FormSuscripcion'

export default function Blog() {
    return (
        <>
            <Header></Header>
            <TitleSection 
            title={'ultimas noticias'}
            subtitle={'¡Échale un vistazo a nuestro blog y mantente siempre actualizado!'}
            center
            />
            <ContenedorBlog></ContenedorBlog>
            <FormSuscripcion />
            <Footer></Footer>
        </>
    )
}
