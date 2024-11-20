import React from 'react'

export default function ItemTarjetaTarifaLead({ title, word,  data }) {

    function filterByFilter(data, word) {

        if (data.parrilla_bloque_1?.toLowerCase().includes(word?.toLowerCase())) {
            return data.parrilla_bloque_1;
        } else if (data.parrilla_bloque_2?.toLowerCase().includes(word?.toLowerCase())) {
            return data.parrilla_bloque_2;
        } else if (data.parrilla_bloque_3?.toLowerCase().includes(word?.toLowerCase())) {
            return data.parrilla_bloque_3;
        } else if (data.parrilla_bloque_4?.toLowerCase().includes(word?.toLowerCase())) {
            return data.parrilla_bloque_4;
        } else {
            return null;
        }

    }
    return (
        (filterByFilter(data,word) !== null) && <div className='tarjeta-tarifa-item-lead'>
            {title}: <b>{filterByFilter(data,word)}</b>
        </div>
    )
}
