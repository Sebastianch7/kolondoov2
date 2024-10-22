import React from 'react';

function ItemTarifaDescripcion({ text, destacada, complement, title = '' }) {
    return (
        (text !== null && text !== '') && (
            <div className={`tarjeta-tarifa-item-descripcion align-items-center m-1 d-flex justify-content-center text-capitalize font-bold color-dark ${destacada && 'border-primary'}`}>
                {title && <b>{title}</b>} {text && <span>{text}</span>} {complement && <span>{complement}</span>}
            </div>
        )
    );
}

export default ItemTarifaDescripcion;