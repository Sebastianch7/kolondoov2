import React from 'react';

function ItemTarifaDescripcion({ text, destacada, complement, title = '' }) {
    return (
        (text !== null && text !== '') && (
            <div className={`tarjeta-tarifa-item-descripcion m-1 font-bold color-dark ${destacada && 'border-primary'}`}>
                <b>{title && title}</b> {text} {complement && complement}
            </div>
        )
    );
}

export default ItemTarifaDescripcion;