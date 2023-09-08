import React from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import FormSuscripcion from '../Components/Forms/FormSuscripcion';
import ContenedorProductos from '../Components/Contenedor/ContenedorProductos';
import TarjetaTarifa from '../Components/Tarjeta/TarjetaTarifa';

const tarifa = [
    {
        image: '/img/lemmon.png',
        duration: '12 meses',
        feature:
            [
                'Roaming ilimitado en la UE',
                'Llamadas ilimitadas',
                '5G'
            ],
        service:
            [
                {
                    cant: '15GB',
                    service: 'de datos'
                },
                {
                    cant: 'Ilimitados',
                    service: 'Minutos, sms'
                },
            ]
    }
]

console.log(tarifa)

function Content({ }) {
    return (
        <div>
            <Header></Header>
            <Banner
                title={'Comparador de Tarifas Móvil'}
                subtitle='¡Te ayudamos a encontrar la tarifa móvil que mejor se adapte a ti!'
                image={'/img/banner3.png'}
            >
                <FormSuscripcion
                    text={'Introduce tu código postal'}
                    button={'Buscar Ofertas'}
                    politicy
                />
            </Banner>
            <ContenedorProductos>
                {tarifa.length > 0 &&
                    tarifa.map((item) => {
                        console.log(item)
                        return <TarjetaTarifa data={item} />
                    })
                }
            </ContenedorProductos>
            <Footer></Footer>
        </div>
    );
}

export default Content;