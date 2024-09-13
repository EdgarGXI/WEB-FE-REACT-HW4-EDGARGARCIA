import React from 'react';

const Objetivos = () => {
  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-6">3. Objetivos Estratégicos</h2>
      <table className="table-auto w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Código</th>
            <th className="border p-2">Objetivo</th>
            <th className="border p-2">Meta</th>
            <th className="border p-2">Avance</th>
            <th className="border p-2">Cumplimiento</th>
            <th className="border p-2">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1000</td>
            <td className="border p-2">Expandir el mercado de productos libres de humo en Asia.</td>
            <td className="border p-2">500</td>
            <td className="border p-2">250</td>
            <td className="border p-2">50%</td>
            <td className="border p-2 text-green-600">Aceptable</td>
          </tr>
          <tr>
            <td className="border p-2">1001</td>
            <td className="border p-2">Reducir las emisiones de CO2 en un 50% para 2030.</td>
            <td className="border p-2">$1,000,000</td>
            <td className="border p-2">$50,000</td>
            <td className="border p-2">5%</td>
            <td className="border p-2 text-red-600">Crítico</td>
          </tr>
          <tr>
            <td className="border p-2">1002</td>
            <td className="border p-2">Incrementar la producción de dispositivos electrónicos para vaporizadores.</td>
            <td className="border p-2">1000</td>
            <td className="border p-2">900</td>
            <td className="border p-2">90%</td>
            <td className="border p-2 text-green-600">Exitoso</td>
          </tr>
          <tr>
            <td className="border p-2">1003</td>
            <td className="border p-2">Lanzar campañas de concientización sobre productos libres de humo.</td>
            <td className="border p-2">150,000</td>
            <td className="border p-2">150,000</td>
            <td className="border p-2">100%</td>
            <td className="border p-2 text-green-600">Exitoso</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Objetivos;
