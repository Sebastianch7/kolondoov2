import { useEffect } from "react";

import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";

export default function App() {

    useEffect(() => {
        document.documentElement.classList.add('cc--darkmode');
        CookieConsent.run({
            guiOptions: {
                consentModal: {
                    layout: "bar inline",
                    position: "bottom",
                    equalWeightButtons: true,
                    flipButtons: false
                },
                preferencesModal: {
                    layout: "box",
                    position: "right",
                    equalWeightButtons: true,
                    flipButtons: false
                }
            },
            categories: {
                necessary: {
                    enabled: true,  // this category is enabled by default
                    readOnly: true  // this category cannot be disabled
                },
                analytics: {}
            },

            language: {
                default: 'es',
                translations: {
                    es: {
                        consentModal: {
                            title: 'Al hacer clic en “Aceptar todas las cookies”, usted acepta que las cookies se guarden en su dispositivo para mejorar la navegación del sitio, analizar el uso del mismo, y colaborar con nuestros estudios para marketing. Configuración de cookies',
                            acceptAllBtn: 'Aceptar todo',
                            acceptNecessaryBtn: 'Rechazar todo',
                            showPreferencesBtn: 'Gestionar preferencias'
                        },
                        preferencesModal: {
                            title: 'Preferencias de Consentimiento',
                            acceptAllBtn: 'Aceptar todo',
                            acceptNecessaryBtn: 'Rechazar todo',
                            savePreferencesBtn: 'Guardar preferencias',
                            closeIconLabel: 'Close modal',
                            sections: [
                                {
                                    title: 'Uso de las cookies',
                                    description: 'Cuando visita cualquier sitio web, el mismo podría obtener o guardar información en su navegador, generalmente mediante el uso de cookies. Esta información puede ser acerca de usted, sus preferencias o su dispositivo, y se usa principalmente para que el sitio funcione según lo esperado. Por lo general, la información no lo identifica directamente, pero puede proporcionarle una experiencia web más personalizada. Ya que respetamos su derecho a la privacidad, usted puede escoger no permitirnos usar ciertas cookies. Haga clic en los encabezados de cada categoría para saber más y cambiar nuestras configuraciones predeterminadas. Sin embargo, el bloqueo de algunos tipos de cookies puede afectar su experiencia en el sitio y los servicios que podemos ofrecer. Para saber más sobre nuestra política de cookies, visita el <a href="/es/politica-cookies">siguiente enlace</a>.'
                                },
                                {
                                    title: 'Cookies técnicas y estrictamente necesarias',
                                    description: 'Estas cookies son necesarias para el correcto funcionamiento de nuestro sitio web. Son aquéllas que permiten al usuario la navegación a través del sitio web y la utilización de las diferentes opciones o servicios que en ella existan como, por ejemplo, identificar la sesión, acceder a partes de acceso restringido, controlar el fraude vinculado a la seguridad y eficiencia del servicio. Puede instalarse este tipo de cookies sin tu consentimiento previo siempre que sean necesarias para activar las funcionalidades del sitio web. Sin estas cookies, el sitio web no puede funcionar correctamente.',
                                    linkedCategory: 'necessary'
                                },
                                {
                                    title: 'Cookies analíticas y de rendimiento',
                                    description: 'Son aquellas que, tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios, realizar la medición y análisis estadístico de la utilización que éstos hacen del sitio web y los productos o servicios ofertados. Para ello se analiza tu navegación en nuestro sitio web con el fin de mejorar la oferta de productos o servicios que ofrecemos. Recuerda que la información obtenida por estas cookies no permite identificarte. Toda la información obtenida es agregada y, por lo tanto, anónima. La función de estas cookies es obtener estadísticas e informes que permiten mejorar el funcionamiento de nuestro sitio web. Estas cookies solo se instalan en el dispositivo cuando las aceptas.',
                                    linkedCategory: 'analytics'
                                },
                                {
                                    title: 'Cookies publicitarias',
                                    description: 'Estas cookies se utilizan almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación para mostrar anuncios que pensamos que son relevantes para los usuarios. También se utilizan para limitar el número de veces que como usuario ves un anuncio, así como para ayudar a medir la eficacia de las campañas publicitarias. Estas cookies no almacenan de forma directa su información personal, sino que utilizan como base la identificación única de su navegador y dispositivo de Internet. Esta información se puede compartir con otras organizaciones como los anunciantes. Estas cookies solo se instalan en el dispositivo del usuario cuando éste las acepta.',
                                    linkedCategory: 'analytics'
                                },
                                {
                                    title: 'Más información',
                                    description: 'Si tienes alguna duda sobre el uso que le damos a las cookies, por favor <a href="/es/contactanos">contacta con nosotros</a>.'
                                }
                            ]
                        }
                    }
                }
            }
        });
    }, []);
}