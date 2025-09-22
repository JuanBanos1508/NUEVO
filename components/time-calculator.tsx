"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, CheckCircle } from "lucide-react";

export default function TimeCalculator() {
  const [cvCount, setCvCount] = useState(80);

  // Etapas ajustadas por cantidad de CVs
  const stages = [
    {
      label: "Filtrado de CVs",
      sin: (cvCount * 3) / 60, // 3 minutos por CV
      con: (cvCount * 0) / 60, // 12 segundos por CV
    },
    {
      label: "Coordinación de entrevistas",
      sin: 2.5,
      con: 0.3,
    },
   {
  label: "Entrevistas a los candidatos",
  sin: 3.5,
  con: 2.5,
},

  ];

  const totalSin = stages.reduce((acc, s) => acc + s.sin, 0);
  const totalCon = stages.reduce((acc, s) => acc + s.con, 0);
  const ahorro = totalSin - totalCon;
  const porcentaje = Math.round((ahorro / totalSin) * 100);

  return (
    <div className="max-w-4xl mx-auto"> 
  <div className="text-center mb-12">
    <h2 className="text-3xl lg:text-4xl font-bold text-[#1C0B35] mb-6">
      Calculá tu ahorro de tiempo personalizado
    </h2>

        <p className="text-xl text-gray-600">
          Ajustá la cantidad de CVs que recibís y descubrí cuánto tiempo podés ahorrar
        </p>

        <div className="mt-8 max-w-md mx-auto">
          <label className="font-medium text-[#1C0B35] block mb-2">
            ¿Cuántos CVs recibís?
          </label>
          <input
            type="range"
            min="10"
            max="200"
            value={cvCount}
            onChange={(e) => setCvCount(parseInt(e.target.value))}
           className="w-full accent-[#A463F2]"
          />
        <div className="text-3xl font-bold text-[#A463F2] mt-2">{cvCount} CVs</div>

        </div>
      </div>

      <Tabs defaultValue="comparison" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="comparison">Comparación</TabsTrigger>
          <TabsTrigger value="breakdown">Desglose detallado</TabsTrigger>
        </TabsList>

        <TabsContent value="comparison" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 border-0 shadow-lg">
  <div className="flex items-center justify-between mb-6">
    <h3 className="text-xl font-bold text-[#1C0B35]">Método tradicional</h3>
    <Clock className="w-6 h-6 text-[#A463F2]" />
  </div>
  <div className="text-4xl font-bold text-[#1C0B35] mb-2">{totalSin.toFixed(1)} horas</div>
  <p className="text-[#1C0B35]">Para gestionar {cvCount} CVs</p>
  <ul className="mt-6 space-y-3">
    <li className="flex items-start space-x-2">
      <span className="text-[#1C0B35] text-sm mt-0.5">•</span>
      <span className="text-[#1C0B35]">Revisión manual de CVs</span>
    </li>
    <li className="flex items-start space-x-2">
      <span className="text-[#1C0B35] text-sm mt-0.5">•</span>
      <span className="text-[#1C0B35]">Coordinación de entrevistas</span>
    </li>
    <li className="flex items-start space-x-2">
      <span className="text-[#1C0B35] text-sm mt-0.5">•</span>
      <span className="text-[#1C0B35]">Entrevistas sin filtrar</span>
    </li>
  </ul>
</Card>


          <Card className="p-6 border-2 border-[#A463F2] shadow-xl relative">
  <div className="flex items-center justify-between mb-6">
    <h3 className="text-xl font-bold text-[#1C0B35]">Con Work Now</h3>
    <CheckCircle className="w-6 h-6 text-[#A463F2]" />
  </div>
  <div className="text-4xl font-bold text-[#1C0B35] mb-2">{totalCon.toFixed(1)} horas</div>
  <p className="text-[#1C0B35]">Para gestionar {cvCount} CVs</p>
  <div className="mt-4 bg-green-50 text-green-700 px-4 py-2 rounded-lg font-medium">
    Ahorrás {ahorro.toFixed(1)} horas ({porcentaje}%)
  </div>
  <ul className="mt-4 space-y-3">
    <li className="flex items-start space-x-2">
      <span className="text-green-500 text-sm mt-0.5">✓</span>
      <span className="text-[#1C0B35]">Filtrado automático de CVs</span>
    </li>
    <li className="flex items-start space-x-2">
      <span className="text-green-500 text-sm mt-0.5">✓</span>
      <span className="text-[#1C0B35]">Coordinación automática</span>
    </li>
    <li className="flex items-start space-x-2">
      <span className="text-green-500 text-sm mt-0.5">✓</span>
      <span className="text-[#1C0B35]">Solo entrevistas finales</span>
    </li>
  </ul>
</Card>
          </div>
        </TabsContent>

        <TabsContent value="breakdown" className="mt-0">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 text-left text-gray-600 font-medium">Actividad</th>
                  <th className="p-4 text-center text-gray-600 font-medium">Sin Work Now</th>
                  <th className="p-4 text-center text-gray-600 font-medium">Con Work Now</th>
                  <th className="p-4 text-center text-gray-600 font-medium">Ahorro</th>
                </tr>
              </thead>
              <tbody>
                {stages.map((s, i) => (
                  <tr key={i} className="border-b border-gray-200">
                    <td className="p-4 text-gray-900">{s.label}</td>
                    <td className="p-4 text-center text-gray-700">{s.sin.toFixed(1)} horas</td>
                    <td className="p-4 text-center text-gray-700">{s.con.toFixed(1)} horas</td>
                    <td className="p-4 text-center text-green-600 font-medium">
                      {(s.sin - s.con).toFixed(1)} horas
                    </td>
                  </tr>
                ))}
                <tr className="bg-gray-50 font-medium">
                  <td className="p-4 text-gray-900">Total</td>
                  <td className="p-4 text-center text-gray-900">{totalSin.toFixed(1)} horas</td>
                  <td className="p-4 text-center text-gray-900">{totalCon.toFixed(1)} horas</td>
                  <td className="p-4 text-center text-green-700 font-bold">
                    {ahorro.toFixed(1)} horas ({porcentaje}%)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
