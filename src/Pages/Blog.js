import React, {useState, useEffect} from 'react'
import Header from '../Components/Header/Header'
import TitleSection from '../Components/Text/TitleSection'
import ContenedorBlog from '../Components/Contenedor/ContenedorBlog'
import Footer from '../Components/Footer/Footer'
import FormSuscripcion from '../Components/Forms/FormSuscripcion'
import { useLocation } from 'react-router-dom'

export default function Blog() {
    const location = useLocation();
    const [categoria, setCategoria] = useState(null)

    useEffect(() => {
        const pathname = location.pathname;
        let locations = pathname.split('/');
        setCategoria(locations[2]);
        console.log(locations[2])
    }, [categoria])

    return (
        <>
            <Header breadCrumb></Header>
            <TitleSection 
            title={'ultimas noticias'}
            subtitle={'¡Échale un vistazo a nuestro blog y mantente siempre actualizado!'}
            center
            />
            <ContenedorBlog categoria={categoria}></ContenedorBlog>
            <FormSuscripcion />
            <Footer></Footer>
        </>
    )
}
