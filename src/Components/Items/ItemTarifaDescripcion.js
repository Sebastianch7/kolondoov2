import React from 'react';

function ItemTarifaDescripcion({text}) {
    return (
        (text !== null && text !== '') && (
            <div className='tarjeta-tarifa-item-descripcion my-2'>
                {text}
            </div>
        )
    );    
}

export default ItemTarifaDescripcion;