import React from 'react'

export default function ItemDescripcionTarifa({item}) {
    const {title, text} = item
  return (
    <li>
        <h5 dangerouslySetInnerHTML={{ __html: title }}></h5>
        <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </li>
  )
}
