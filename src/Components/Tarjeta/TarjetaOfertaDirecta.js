import React from "react";
import { Card, Button } from "react-bootstrap";

export default function TarjetaOfertaDirecta({ data }) {
  function enviarUrl() {
    window.location.href = data.url_redirct;
  }

  return (
    <Card className="h-100 bg-secundary border-0 rounded-0">
      <Card.Body className="my-5 d-flex flex-column justify-content-center align-items-center">
        <h2 className="color-primary">¡Oferta disponible!</h2>
        <Button
          data-id={data.url_redirct}
          onClick={enviarUrl}
          className="btn btn-primary px-5 py-3"
        >
          MÁS INFORMACIÓN
        </Button>
      </Card.Body>
    </Card>
  );
}
