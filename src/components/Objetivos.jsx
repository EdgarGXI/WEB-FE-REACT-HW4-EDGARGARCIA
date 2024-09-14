import React from 'react';

const objetivosData = [
    { id: 1000, goal: "Incrementar la cuota de mercado en productos sin humo.", target: 500, progress: 100, compliance: 20 }, // Crítico
    { id: 1001, goal: "Reducir las emisiones de CO2 en un 50% para 2030.", target: 1000000, progress: 250000, compliance: 25 }, // Crítico
    { id: 1002, goal: "Expandir operaciones en mercados emergentes.", target: 1000, progress: 600, compliance: 60 }, // Aceptable
    { id: 1003, goal: "Desarrollar una nueva línea de productos de bajo riesgo.", target: 1000, progress: 700, compliance: 70 }, // Aceptable
    { id: 1004, goal: "Reducir el impacto medioambiental de la producción.", target: 150000, progress: 150000, compliance: 100 }, // Exitoso
  ];
  
  const getStatusColor = (compliance) => {
    if (compliance >= 76) return "text-green-600"; // Exitoso
    if (compliance >= 36) return "text-orange-600"; // Aceptable
    return "text-red-600"; // Crítico
  };
  
  const Objetivos = () => {
    return (
      <section className="table-container px-4">
        <h2 className="section-title text-3xl font-bold my-6">3. Objetivos Estratégicos</h2>
        <table className="table w-full border-collapse border">
          <thead>
            <tr className="bg-black text-white">
              <th className="border p-2">Código</th>
              <th className="border p-2">Objetivo</th>
              <th className="border p-2">Meta</th>
              <th className="border p-2">Avance</th>
              <th className="border p-2">Cumplimiento</th>
              <th className="border p-2">Estado</th>
            </tr>
          </thead>
          <tbody>
            {objetivosData.map((obj) => (
              <tr key={obj.id}>
                <td className="border p-2">{obj.id}</td>
                <td className="border p-2">{obj.goal}</td>
                <td className="border p-2">${obj.target.toLocaleString()}</td>
                <td className="border p-2">${obj.progress.toLocaleString()}</td>
                <td className="border p-2">{obj.compliance}%</td>
                <td className={`border p-2 ${getStatusColor(obj.compliance)}`}>
                  {obj.compliance >= 76 ? "Exitoso" : obj.compliance >= 36 ? "Aceptable" : "Crítico"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  };
  
  export default Objetivos;
  