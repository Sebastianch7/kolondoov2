import React from 'react';

function ItemTarifaDescripcion({ text, destacada, complement, title }) {
    return (
        (text !== null && text !== '') && (
            <div className={`tarjeta-tarifa-item-descripcion m-1 ${destacada && 'border-primary'}`}>
                {title ?? `<b>${title}</b>`} {text} {complement ?? complement}
            </div>
        )
    );
}

export default ItemTarifaDescripcion;