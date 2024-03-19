import React from 'react';

function ItemTarifaDescripcion({text, destacada}) {
    return (
        (text !== null && text !== '') && (
            <div className={`tarjeta-tarifa-item-descripcion m-1 ${destacada && 'border-primary'}`}>
                {text}
            </div>
        )
    );    
}

export default ItemTarifaDescripcion;