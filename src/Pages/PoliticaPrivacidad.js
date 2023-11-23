import React from 'react'
import TitleSection from '../Components/Text/TitleSection'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

export default function PoliticaPrivacidad() {
    return (
        <>
            <Header breadCrumb></Header>
            <div className='mb-5'>
                <TitleSection
                    left
                    center
                    title={'Política de'}
                    titleAlt={'privacidad'}
                    text1={'De conformidad con lo dispuesto en la normativa aplicable de protección de datos de carácter personal, a continuación, te contamos cómo tratamos tus datos personales.'}
                    text2={'Con carácter general, te informaremos del carácter obligatorio de la recogida de determinados datos de carácter personal en los campos indicados mediante un asterisco (*). La no cumplimentación de dichos datos podrá impedir prestar todos aquellos servicios relacionados a tales datos, liberándonos de toda responsabilidad por la falta de prestación o prestación incompleta de los mismos.'}
                />
                <TitleSection
                    left
                    center
                    title={'¿Quién es el'}
                    titleAlt={'Responsable de Tratamiento?'}
                    text1={'El responsable del tratamiento es Kolondoo Media, S.L. sociedad de nacionalidad española, con NIF B-16756041, y domicilio social en la Calle Barquillo, 8 planta, 1º izquierda, 28004 Madrid (España), debidamente está inscrita en el Registro Mercantil de Madrid, Tomo 42273, Folio 180, Inscripción 1, Hoja M-748395 (en adelante, “la Sociedad” o “nosotros” indistintamente). Email Delegado de Protección de datos: dpd@kolondoo.com'}
                    text2={'La Sociedad, entre otras actividades, se centra en el sector de la publicidad a través de marketing directo, marketing de afiliación, y publicidad online con el previo consentimiento del destinatario. Asimismo, funcionamos como comparador de tarifas o precios de servicios y productos de terceros destinados al “ Ahorro en el hogar,” entre otros: telefonía e internet, agua, luz y gas, operando para estos productos como una empresa de servicios conforme a la Ley 34/2002 de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico. Consulta qué sectores se encuentran incluidos dentro de la categoría “Ahorro en el hogar” más abajo.'}
                />
                <TitleSection
                    left
                    center
                    title={'¿Cuál es la edad mínima para'}
                    titleAlt={'registrarse en el sitio web?'}
                    text1={'El registro en el sitio web está limitado a usuarios mayores de dieciocho (18) años. Los menores de edad no podrán usar los servicios ofrecidos sin la previa autorización de sus padres, tutores o representantes legales, quienes serán los únicos responsables de todos los actos realizados a través del sitio web por los menores a su cargo, incluyendo la cumplimentación de los formularios con los datos personales de dichos menores y la marcación, en su caso, de las casillas que los acompañan. Al registrarse en el sitio web, garantizas que eres mayor de edad.'}
                    text2={'Toda la información de registro que envíes para registrarte debe ser verdadera, precisa, completa y actualizada, siendo, en consecuencia, el único responsable de los daños, directos o indirectos, que puedan derivarse de cualquier incumplimiento de dicha obligación. Si los datos proporcionados pertenecen a un tercero, garantizas que previamente has informado a dicho tercero de los aspectos aquí recogidos y has obtenido su consentimiento expreso e informado con los fines especificados en la presente Política de Privacidad.'}
                />
            </div>
            <Footer></Footer>
        </>
    )
}
