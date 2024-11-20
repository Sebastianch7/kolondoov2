import React from "react";
import { Col } from "react-bootstrap";
function ItemTarifaServicio({
  cant,
  service,
  money,
  design,
  destacada,
  precio,
  indexada,
}) {
  const formatNumber = (amount) => {
    const number = parseFloat(amount);
    // Convertir a cadena, luego usar regex para agregar puntos como separadores de miles
    return number
      .toFixed(2)
      .replace(/\.00$/, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return design !== "small" ? (
    <Col xs={6}>
      <div
        className={`tarjeta-tarifa-item-service text-center my-2 font-bold ${
          destacada && "bg-secundary text-white"
        }`}
      >
        {precio ? (
          <h5 className="font-bold color-dark">
            {money}
            {formatNumber(cant)}
          </h5>
        ) : (
          <h5 className="font-bold color-dark">
            {money}
            {cant}
          </h5>
        )}
        {service !== null && (
          <span className="font-bold text-dark">{service}</span>
        )}
        {indexada === 1 && (
          <small className="font-bold text-dark">{"Precio indexado"}</small>
        )}
      </div>
    </Col>
  ) : (
    <Col xs={12}>
      <div className="tarjeta-tarifa-item-service tarjeta-tarifa-item-service-small text-center my-2 font-bold">
        {precio ? (
          <h5 className="font-bold color-dark">
            {money}
            {formatNumber(cant)}
          </h5>
        ) : (
          <h5 className="font-bold color-dark">
            {money}
            {cant}
          </h5>
        )}
        {service !== null && (
          <span className="font-bold text-dark">{service}</span>
        )}
        {indexada === 1 && (
          <small className="font-bold text-dark">{"Precio indexado"}</small>
        )}
      </div>
    </Col>
  );
}

export default ItemTarifaServicio;
