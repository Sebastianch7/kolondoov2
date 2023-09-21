import React from 'react';

function ItemTarifaDescripcion({text}) {
    return (
        <div className='tarjeta-tarifa-item-descripcion my-2'>
            {text.replace('<li><strong><span>','')}
        </div>
    );
}

export default ItemTarifaDescripcion;