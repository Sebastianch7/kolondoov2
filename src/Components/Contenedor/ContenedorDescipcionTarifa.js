import React from "react";
import ItemDescripcionTarifa from "../Items/ItemDescripcionTarifa";

export default function ContenedorDescipcionTarifa({ data }) {
  return (
    <ul className="listaAlternativa">
      {data?.length > 0 &&
        data.map((item, index) => (
          <ItemDescripcionTarifa key={index} item={item} />
        ))}
    </ul>
  );
}
