import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../Components/Text/Title";
import MetaData from "../../Components/Header/SeoMetadata";

export default function PoliticaCookiesCo() {
  return (
    <>
      <MetaData titulo={""} descripcion={""} />
      <Header breadCrumb></Header>
      <div className="mb-5">
        <Container>
          <Row>
            <Col md={12}>
              <Title title={"Política de"} titleAlt={"Cookies"} />
              <p>
                Esta Política de Cookies forma parte y complementa la{" "}
                <a
                  className="color-primary no-link"
                  href="/co/politica-privacidad"
                >
                  <b>Política de Privacidad</b>
                </a>{" "}
                del sitio web (en adelante, el “sitio web”). El titular es
                KOLONDOO MEDIA, S. L., sociedad de nacionalidad española, con
                NIF B-16756041, y domicilio social en la Calle Barquillo, 8
                planta, 1º izquierda, 28004 Madrid (España), (en adelante
                conjuntamente designadas como “Kolondoo”).
              </p>
              <p>
                Este sitio web utiliza cookies u otros dispositivos de
                almacenamiento y recuperación de datos de funcionalidad similar
                (en adelante, “cookies”) para brindarte una mejor experiencia,
                más rápida y segura. A continuación, te explicamos cuáles son
                estas tecnologías, para qué se utilizan, (por ejemplo, para
                iniciar sesión de navegación, guardar tus preferencias,
                personalizar el contenido que se difunde y mostrarte anuncios
                más pertinentes) y por quién son gestionadas.
              </p>
              <Title title={"¿Qué es una"} titleAlt={"cookie?"} />
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en
                su dispositivo (ordenador, tablet o móvil), que incluidos en el
                Sitios Web que se descargan cuando accedes al mismo. Su
                finalidad principal es reconocer al usuario cada vez que accede
                al sitio web permitiendo, además, mejorar la calidad y ofrecer
                un mejor uso del sitio web.
              </p>
              <p>
                En general, estas tecnologías pueden servir para finalidades muy
                diversas, como, por ejemplo, reconocerte como usuario, obtener
                información sobre tus hábitos de navegación, o personalizar la
                forma en que se muestra el contenido. Los usos concretos que
                hacemos de estas tecnologías se describen a continuación. No
                obstante, no pueden dañar el equipo/dispositivo del usuario.
              </p>
              <Title
                titleAlt={"¿Qué tipos de cookies"}
                titleThird={"utiliza este sitio web?"}
              />
              <p>
                Este sitio web cookies propias y de terceros generadas desde
                otros sitios web ajenos a Kolondoo, pertenecientes a asociados y
                terceras entidades que operan en la red, para las finalidades
                concretas que se exponen abajo. Ten en cuenta que, si aceptas
                las cookies de terceros, deberás eliminarlas desde las opciones
                del navegador o desde el sistema ofrecido por el propio tercero
                en caso de que posteriormente quieras retirar tu consentimiento.
                Consulta sus respectivas Políticas de Privacidad para una mayor
                información.
              </p>
              <p>
                Las cookies pueden ser persistentes o de sesión. Las cookies
                persistentes son aquellas en las que los datos siguen
                almacenados en el terminal y a los que se puede acceder y tratar
                durante un periodo definido por el responsable de la cookie.
                Puede permanecer desde de unos minutos a varios años.
              </p>
              <p>
                Las cookies de sesión, por su parte, son cookies diseñadas para
                recabar y almacenar datos mientras el usuario accede a una
                página web. Se suelen utilizar para almacenar información que
                solo interesa conservar para la prestación del servicio
                solicitado por el usuario en una sola ocasión.
              </p>
              <Title
                title={"(i)"}
                titleAlt={"Cookies"}
                titleThird={"técnicas y estrictamente necesarias"}
              />
              <p>
                Estas cookies son necesarias para el correcto funcionamiento de
                nuestro sitio web. Son aquéllas que permiten al usuario la
                navegación a través del sitio web y la utilización de las
                diferentes opciones o servicios que en ella existan como, por
                ejemplo, identificar la sesión, acceder a partes de acceso
                restringido, controlar el fraude vinculado a la seguridad y
                eficiencia del servicio. Puede instalarse este tipo de cookies
                sin tu consentimiento previo siempre que sean necesarias para
                activar las funcionalidades del sitio web. Sin estas cookies, el
                sitio web no puede funcionar correctamente.
              </p>
              <p>
                <b>Listado de cookies técnicas y estrictamente necesarias:</b>
              </p>
              <table class="table table-bordered table-width">
                <thead>
                  <tr>
                    <th>Nombre Cookie</th>
                    <th>Finalidad</th>
                    <th>Duración</th>
                    <td>Pol.Privacidad</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>OptanonConsent</td>
                    <td>
                      Esta cookie es establecida por la solución de cumplimiento
                      de cookies de OneTrust. Almacena información sobre las
                      categorías de cookies que utiliza el sitio y si los
                      visitantes han dado o retirado su consentimiento para el
                      uso de cada categoría. Esto permite a los propietarios de
                      sitios web evitar que las cookies de cada categoría se
                      instalen en el navegador de los usuarios, cuando no se da
                      el consentimiento. La cookie tiene una vida útil normal de
                      un año, de modo que los visitantes que vuelvan al sitio
                      recordarán sus preferencias. No contiene información que
                      pueda identificar al visitante del sitio
                    </td>
                    <td>1 año</td>
                    <td>
                      <a
                        href="https://www.onetrust.es/politica-de-privacidad/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Pol.Priv.
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>OptanonAlertBoxClosed</td>
                    <td>
                      Esta cookie la instalan los sitios web que utilizan
                      determinadas versiones de la solución de cumplimiento de
                      la ley de cookies de OneTrust. Se instala después de que
                      los visitantes hayan visto un aviso de información sobre
                      cookies y, en algunos casos, sólo cuando cierran
                      activamente el aviso. Permite que el sitio web no muestre
                      el mensaje más de una vez a un usuario. La cookie tiene
                      una duración de un año y no contiene información personal
                    </td>
                    <td>1 año</td>
                    <td>
                      <a
                        href="https://www.onetrust.es/politica-de-privacidad/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Pol.Priv.
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>XSRF-TOKEN</td>
                    <td>
                      Esta cookie está escrita para ayudar a la seguridad del
                      sitio en la prevención de los ataques de falsificación de
                      solicitud de sitio cruzado
                    </td>
                    <td>1 minuto</td>
                    <td>
                      <a href="/co/politica-privacidad">Pol.Priv.</a>
                    </td>
                  </tr>
                  <tr>
                    <td>kolondoo_comparador_session</td>
                    <td>
                      Cookie propia del sitio kolondoo.com. Las cookies de
                      sesión permiten a los usuarios ser reconocidos en un sitio
                      web de forma anónima y que cualquier cambio que realices,
                      artículo que selecciones o dato que introduzcas se
                      recuerda de una a otra página.
                    </td>
                    <td>Caduca al finalizar la sesión</td>
                    <td>
                      <a href="/co/politica-privacidad">Pol.Priv.</a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Title
                title={"(ii)"}
                titleAlt={"Cookies"}
                titleThird={"analíticas y de rendimiento"}
              />
              <p>
                Son aquellas que, tratadas por nosotros o por terceros, nos
                permiten cuantificar el número de usuarios, realizar la medición
                y análisis estadístico de la utilización que éstos hacen del
                sitio web y los productos o servicios ofertados. Para ello se
                analiza tu navegación en nuestro sitio web con el fin de mejorar
                la oferta de productos o servicios que ofrecemos.
              </p>
              <p>
                Recuerda que la información obtenida por estas cookies no
                permite identificarte. Toda la información obtenida es agregada
                y, por lo tanto, anónima. La función de estas cookies es obtener
                estadísticas e informes que permiten mejorar el funcionamiento
                de nuestro sitio web.
              </p>
              <p>
                Estas cookies solo se instalan en el dispositivo cuando las
                aceptas.
              </p>
              <p>Listado de cookies analíticas y de rendimiento:</p>
              <table class="table table-bordered table-width">
                <thead>
                  <tr>
                    <th>Nombre Cookie</th>
                    <th>Finalidad</th>
                    <th>Duración</th>
                    <td>Pol.Privacidad</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>_gat_UA</td>
                    <td>
                      Se trata de una cookie de tipo patrón establecida por
                      Google Analytics, en la que el elemento de patrón del
                      nombre contiene el número de identidad único de la cuenta
                      o del sitio web al que se refiere. Se utiliza para limitar
                      la cantidad de datos registrados por Google en los sitios
                      web de gran volumen de tráfico
                    </td>
                    <td>1 minuto</td>
                    <td>
                      <a
                        href="https://policies.google.com/privacy?hl=es"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Pol.Priv.
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>_gid</td>
                    <td>Se usa para distinguir a los usuarios</td>
                    <td>24 horas</td>
                    <td>
                      <a
                        href="https://policies.google.com/privacy?hl=es"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Pol.Priv.
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>_ga</td>
                    <td>Se usa para distinguir a los usuarios</td>
                    <td>2 años</td>
                    <td>
                      <a
                        href="https://policies.google.com/privacy?hl=es"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Pol.Priv.
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Title
                title={"(iii)"}
                titleAlt={"Cookies"}
                titleThird={"publicitarias"}
              />
              <p>
                Estas cookies se utilizan almacenan información del
                comportamiento de los usuarios obtenida a través de la
                observación continuada de sus hábitos de navegación para mostrar
                anuncios que pensamos que son relevantes para los usuarios.
                También se utilizan para limitar el número de veces que como
                usuario ves un anuncio, así como para ayudar a medir la eficacia
                de las campañas publicitarias. Estas cookies no almacenan de
                forma directa su información personal, sino que utilizan como
                base la identificación única de su navegador y dispositivo de
                Internet. Esta información se puede compartir con otras
                organizaciones como los anunciantes.
              </p>
              <p>
                Estas cookies solo se instalan en el dispositivo del usuario
                cuando éste las acepta.
              </p>
              <Title
                title={"(iv)"}
                titleAlt={"Cookies"}
                titleThird={"de publicidad comportamental"}
              />
              <p>
                Estas cookies tienen una finalidad publicitaria. Permiten
                almacenar información sobre la navegación de los usuarios a
                través de sesiones de navegación, presentando publicidades
                relacionadas directamente con sus intereses o sus búsquedas
                anteriores. Suelen ser cookies que provienen de plataformas de
                compra programática, adexchanges, DSP, SSP, DMP y otras
                tecnologías de compraventa automatizada publicitaria. Algunas
                cookies provienen de acuerdos que tenemos con terceros.
              </p>
              <Title
                title={"(v)"}
                titleAlt={"Cookies"}
                titleThird={"Sociales"}
              />
              <p>
                Algunos servicios pueden utilizar conectores con diversas redes
                sociales: Facebook, Twitter o Instagram. Al utilizar el registro
                social, autorizas a la red social a colocar cookies. Estas
                cookies añaden la componente social a tu navegación.
              </p>
              <Title title={"¿Cuáles son los plazos de conservación?"} />
              <p>
                Las cookies utilizadas serán conservadas en su dispositivo
                durante el tiempo necesario para la finalidad por la que fueron
                instaladas, y como máximo, durante el plazo concreto de duración
                de cada cookie, salvo que decidas retirar su consentimiento o
                eliminarlas a través de las opciones de configuración de tu
                navegador.
              </p>
              <Title title={"¿Transferencias internacionales?"} />
              <p>
                Algunos de los datos personales obtenidos a través de cookies de
                terceros serán objeto de transferencias internacionales. Para
                obtener más información sobre las transferencias internacionales
                a terceros países realizadas por cada tercero, accede a sus
                respectivas Políticas de Privacidad mostradas en la presente
                Política de Cookies.
              </p>
              <Title
                title={"¿Cómo"}
                titleAlt={"aceptar, rechazar, bloquear o eliminar"}
                titleThird={"Cookies?"}
              />
              <p>
                Puede permitir, bloquear o eliminar las cookies a través de las
                herramientas de configuración del navegador, o bien, puede
                configurar su navegador para que le avise cuando un servidor
                quiera guardar una cookie:
              </p>
              <ol type="a">
                <li>
                  Si utiliza Microsoft Internet Explorer, encontrará la opción
                  en el menú Herramientas / Opciones de Internet / Privacidad /
                  Configuración. Para saber más visite:
                </li>
                <ul className="icon-list">
                  <li>
                    <a
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      href="https://windows.microsoft.com/es/windows-vista/block-or-allow-Cookies"
                      className="color-primary no-link"
                    >
                      <b>Bloquear o permitir Cookies</b>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      href="https://windows.microsoft.com/es/windows7/how-to-manage-Cookies-in-internet-explorer-9"
                      className="color-primary no-link"
                    >
                      <b>Gestión de Cookies en I.Explorer 9</b>
                    </a>
                  </li>
                </ul>
                <li>
                  Si utiliza Firefox, encontrará la opción en el menú
                  Herramientas / Opciones / Privacidad / Cookies. Para saber más
                  visite:
                </li>
                <ul className="icon-list">
                  <li>
                    <a
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?redirectlocale=es&redirectslug=habilitar-y-deshabilitar-cookies-que-los-sitios-we"
                      className="color-primary no-link"
                    >
                      <b>Habilitar y deshabilitar Cookies</b>
                    </a>
                  </li>
                </ul>
                <li>
                  Si utiliza Chrome, en la sección de Opciones / Opciones
                  avanzadas / Privacidad. Para saber más:
                </li>
                <ul className="icon-list">
                  <li>
                    <a
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      href="https://support.google.com/accounts/answer/61416?hl=es"
                      className="color-primary no-link"
                    >
                      <b>Gestión de Cookies</b>
                    </a>
                  </li>
                </ul>
                <li>
                  Si utiliza Opera, en la opción de Seguridad y Privacidad,
                  podrá configurar el navegador. Para saber más visite:
                </li>
                <ul className="icon-list">
                  <li>
                    <a
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      href="https://help.opera.com/Windows/11.50/es/cookies.html"
                      className="color-primary no-link"
                    >
                      <b>Gestión de Cookies</b>
                    </a>
                  </li>
                </ul>
                <li>
                  Si utiliza Safari encontrará la opción en el menú
                  Preferencias/Privacidad. Más información en:
                </li>
                <ul className="icon-list">
                  <li>
                    <a
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      href="https://support.apple.com/kb/HT1677?viewlocale=es_ES"
                      className="color-primary no-link"
                    >
                      <b>Gestión de Cookies</b>
                    </a>
                  </li>
                </ul>
              </ol>
              <p>
                Asimismo, recuerda que, al igual que sucede en los navegadores
                de ordenadores, los navegadores de los dispositivos móviles
                permiten realizar cambios en las opciones o ajustes de
                privacidad para desactivar o eliminar las cookies. Para ello, si
                deseas modificar las opciones de privacidad, debes seguir las
                instrucciones específicas por el desarrollador de tu navegador
                para dispositivo móvil.
              </p>
              <p>
                A continuación, podrás encontrar algunos ejemplos que te guiarán
                para modificar las opciones de privacidad en tu dispositivo
                móvil:
              </p>
              <ol type="a">
                <li>
                  Safari para IOS:{" "}
                  <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href="https://support.apple.com/es/HT201265"
                    className="color-primary no-link"
                  >
                    <b>Safari «Support»</b>
                  </a>
                </li>
                <li>
                  Firefox{" "}
                  <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href="https://support.mozilla.org/es/kb/bloquear-cookies-en-firefox-focus-para-android"
                    className="color-primary no-link"
                  >
                    <b>Firefox «Support»</b>
                  </a>
                </li>
                <li>
                  Chrome para Android:{" "}
                  <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href="https://support.google.com/accounts/answer/32050?co=GENIE.Platform%3DAndroid&hl=es&oco=0"
                    className="color-primary no-link"
                  >
                    <b>Chrome para Android «Support»</b>
                  </a>
                </li>
                <li>
                  Chrome para IOS:{" "}
                  <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href="https://support.google.com/accounts/answer/32050?co=GENIE.Platform%3DiOS&hl=es&oco=0"
                    className="color-primary no-link"
                  >
                    <b>Chrome para IOS «Support»</b>
                  </a>
                </li>
              </ol>
              <Title
                title={"Actualización en la"}
                titleAlt={"Política de Cookies"}
              />
              <p>
                Nuestra Política de Cookies podrá sufrir actualizaciones, como
                consecuencia de cambios y necesidades legales, así como debidas
                a mejoras y cambios incluidos en la forma de ofrecer y prestar
                nuestros servicios e información de interés. Por ello, te
                recomendamos que visites y accedas a nuestra Política de Cookies
                periódicamente, para poder tener acceso y conocer los últimos
                cambios que hayan podido ser incorporados. En caso de que dichos
                cambios guarden relación con el consentimiento prestado, te será
                enviada una notificación independiente y por separado para
                recabarlo nuevamente.
              </p>
              <Title
                title={"¿Tienes alguna duda?"}
                titleAlt={"Contacta con nosotros"}
              />
              <p>
                Puedes obtener más información sobre el tratamiento de sus datos
                realizado así como sobre el modo de ejercitar sus derechos en
                nuestra{" "}
                <a
                  className="color-primary no-link"
                  href="/co/politica-privacidad"
                >
                  <b>Política de Privacidad</b>
                </a>
                .
              </p>
              <p>
                También puede contactar con Arkeero en el email:{" "}
                <b className="color-primary">dpd@kolondoo.com</b> o en la
                dirección arriba indicada.
              </p>
              <br />
              <br />
              <p>Última actualización: Diciembre 2021</p>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}
