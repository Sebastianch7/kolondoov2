import React from 'react';
import { Tab } from 'react-bootstrap';
import TarjetaTarifa from '../Tarjeta/TarjetaTarifa';
import NotInfoItem from '../Utils/NotInfoItem';
import Load from '../Utils/Load';

export default function ContenedorTarifaTab({ data, tarjeta, tipo, contador, filtro }) {

    const renderTarjeta = (item, index) => {
        const tarjetaMap = {
            'comparador-movil': <TarjetaTarifa key={index} data={item} TarifaCard />,
            'comparador-fibra': <TarjetaTarifa key={index} data={item} />,
            'comparador-tarifas-fibra-y-movil': <TarjetaTarifa key={index} data={item} />,
            'comparador-tarifas-luz': <TarjetaTarifa key={index} data={item} />,
            'comparador-tarifas-gas': <TarjetaTarifa key={index} data={item} />,
            'comparador-tarifas-luz-y-gas': <TarjetaTarifa key={index} data={item} />,
            'comparador-finanzas': <TarjetaTarifa key={index} data={item} />,
            'comparador-tarifas-seguros-salud': <TarjetaTarifa key={index} data={item} />,
            'comparador-tarifas-autoconsumo': <TarjetaTarifa key={index} data={item} />,
        };
        return tarjetaMap[tarjeta?.toLowerCase()] || null;
    };

    const filteredTarifas = data?.filter((item) => item.tarifa_empresarial === filtro);

    return (
        <Tab
            eventKey={tipo}
            title={
                <>
                    Tarifas para empresas <span className="badge bg-secondary color-dark ms-2">{contador}</span>
                </>
            }
        >
            {data ? (
                filteredTarifas?.length > 0 ? (
                    filteredTarifas.map((item, index) => renderTarjeta(item, index))
                ) : (
                    <NotInfoItem
                        title="No se encontraron ofertas"
                        text="Lo sentimos, no hemos encontrado ofertas con los filtros seleccionados."
                    />
                )
            ) : (
                <Load />
            )}
        </Tab>
    );
}
