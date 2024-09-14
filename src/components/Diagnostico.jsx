import React from 'react';

const diagnosticoData = [
    {
      id: 1,
      type: "Debilidades",
      items: [
        { id: 1, description: "Dependencia en mercados regulados." },
        { id: 2, description: "Competencia fuerte de productos alternativos." },
        { id: 3, description: "Restricciones legales y sociales en aumento." }
      ]
    },
    {
      id: 2,
      type: "Oportunidades",
      items: [
        { id: 1, description: "Crecimiento en productos libres de humo." },
        { id: 2, description: "Expansión en mercados emergentes." },
        { id: 3, description: "Innovación en alternativas menos dañinas." }
      ]
    },
    {
      id: 3,
      type: "Fortalezas",
      items: [
        { id: 1, description: "Marca reconocida mundialmente." },
        { id: 2, description: "Gran red de distribución global." },
        { id: 3, description: "Posición financiera sólida." }
      ]
    },
    {
      id: 4,
      type: "Amenazas",
      items: [
        { id: 1, description: "Regulaciones gubernamentales cada vez más estrictas." },
        { id: 2, description: "Cambios en las preferencias de los consumidores." },
        { id: 3, description: "Competencia de productos de bajo riesgo." }
      ]
    }
  ];
  
  const Diagnostico = () => {
    return (
      <section className="my-8 px-4">
        <h2 className="text-3xl font-bold mb-6">Diagnóstico Actual</h2>
        <div className="grid grid-cols-2 gap-6">
          {diagnosticoData.map((category) => (
            <div key={category.id} className="border border-black p-4 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">{category.type}</h3>
              <ul className="list-disc ml-6">
                {category.items.map((item) => (
                  <li key={item.id}>{item.description}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Diagnostico;
  