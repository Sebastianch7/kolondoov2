import React from 'react'

export default function ItemStack({ data, index }) {
    return (
        <div className="p-2 stack-raices" key={index}>
            <div className='stack-raices-title'>
                <img src={data.icon} alt={data.icon} />
            </div>
            {data.title}
        </div>
    )
}
