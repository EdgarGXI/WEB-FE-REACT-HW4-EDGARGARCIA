import React from 'react';

const Diagnostico = () => {
  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-6">1. Diagnóstico Actual</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="border p-4">
          <h3 className="text-xl font-semibold mb-4">Debilidades</h3>
          <ul className="list-disc ml-6">
            <li>Dependencia de los mercados regulados.</li>
            <li>Fuerte competencia de marcas emergentes.</li>
            <li>Estigma social y regulación creciente.</li>
          </ul>
        </div>
        <div className="border p-4">
          <h3 className="text-xl font-semibold mb-4">Oportunidades</h3>
          <ul className="list-disc ml-6">
            <li>Expansión hacia productos libres de humo.</li>
            <li>Creciente demanda en mercados en desarrollo.</li>
            <li>Innovación en productos electrónicos.</li>
          </ul>
        </div>
        <div className="border p-4">
          <h3 className="text-xl font-semibold mb-4">Fortalezas</h3>
          <ul className="list-disc ml-6">
            <li>Reconocimiento de marca global.</li>
            <li>Gran red de distribución.</li>
            <li>Posición financiera sólida.</li>
          </ul>
        </div>
        <div className="border p-4">
          <h3 className="text-xl font-semibold mb-4">Amenazas</h3>
          <ul className="list-disc ml-6">
            <li>Regulaciones cada vez más estrictas.</li>
            <li>Campañas anti-tabaco.</li>
            <li>Competencia de alternativas saludables.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Diagnostico;
