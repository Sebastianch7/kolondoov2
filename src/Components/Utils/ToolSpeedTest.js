import React, { useState } from 'react';

const ToolSpeedTest = () => {
  const [speedResults, setSpeedResults] = useState(null);

  const runSpeedTest = async () => {
    try {
      const response = await fetch('URL_DE_TU_INSTANCIA_LIBRESPEED/api/api.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      const data = await response.json();
      setSpeedResults(data);
    } catch (error) {
      console.error('Error al ejecutar la prueba de velocidad:', error);
    }
  };

  return (
    <div>
      <button onClick={runSpeedTest}>Ejecutar prueba de velocidad</button>
      {speedResults && (
        <div>
          <p>Velocidad de descarga: {speedResults.downloadSpeed} Mbps</p>
          <p>Velocidad de carga: {speedResults.uploadSpeed} Mbps</p>
        </div>
      )}
    </div>
  );
};

export default ToolSpeedTest;
