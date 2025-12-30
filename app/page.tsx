"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Eye, FileText, Frown, Mail, Filter, UserCheck, BarChart3, XCircle } from "lucide-react"
import Link from "next/link"
import TimeCalculator from "@/components/time-calculator"
import { ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";




export default function WorkNowLanding() {
  const CV_CAP_OPTIONS = [100, 200, 300, 400] as const;
const PRICE_PER_CV_ARS = 317;
const SUBSCRIPTION_PRICE_ARS = 130000;

const [cvCap, setCvCap] = useState<(typeof CV_CAP_OPTIONS)[number]>(200);

const formatARS = (value: number) => `AR$ ${value.toLocaleString("es-AR")}`;

const maxToPay = useMemo(() => cvCap * PRICE_PER_CV_ARS, [cvCap]);
  
  return (
    
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900">
          <span className="text-[#1C0B35]">Work</span><span className="text-[#1C0B35]">Now</span>

          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Acerca de
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              ¿Cómo funciona?
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Precios
            </Link>
            <Link href="#faq" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Preguntas frecuentes
            </Link>
          </nav>

         <Button
  asChild
  className="bg-[#7C3AED] hover:bg-[#8B5CF6] text-white rounded-xl px-6 shadow-lg"
>
  <a
    href="https://tally.so/r/nPW5d1"
    target="_blank"
    rel="noopener noreferrer"
  >
    Quiero acceso anticipado
  </a>
</Button>

        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
            <div className="space-y-8 text-center items-center flex flex-col">
              
  <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
  <span className="text-[#1C0B35]">Encontrá al candidato ideal en</span>
  <span className="mx-2 text-[#A463F2] line-through">semanas</span>
  <span className="text-[#1C0B35]">minutos</span>
</h1>

<p className="text-xl text-[#1C0B35] leading-relaxed">
  <span>No pierdas tiempo con candidatos que no llevan a nada.</span>
  <span className="block">Con Work Now encontrás a tus próximos candidatos en minutos</span>
</p>
              <Button
  size="lg"
  asChild
  className="bg-[#7C3AED] hover:bg-[#8B5CF6] text-white rounded-xl px-8 py-4 text-lg shadow-lg"
>
  <a
    href="https://tally.so/r/nPW5d1"
    target="_blank"
    rel="noopener noreferrer"
  >
    Probar ahora
  </a>
</Button>
              
  <video
  src="/hero-preview1.mp4"
  autoPlay
  muted
  loop
  playsInline
  className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto mt-12 rounded-xl shadow-lg"
>
  Tu navegador no soporta video HTML5.
</video>

            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      
        <section className="py-16 lg:py-24 bg-white">
  <div className="container mx-auto px-4 lg:px-6">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-5xl font-bold text-[#1C0B35] mb-6">
        No es que falte gente, es que cada contratación te quita tiempo y energía.
      </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seguramente, a vos también te pasó que...
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <Card className="p-6 border-0 shadow-lg">
    <CardContent className="flex items-start space-x-4 p-0">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
        <FileText className="w-6 h-6 text-blue-600" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-[#1C0B35] mb-2">
          Recibís 100 CVs y el 90% no cumple con los requisitos
        </h3>
      </div>
    </CardContent>
  </Card>


           <Card className="p-6 border-0 shadow-lg">
  <CardContent className="flex items-start space-x-4 p-0">
    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
      <Clock className="w-6 h-6 text-yellow-600" />
    </div>
    <div>
       <h3 className="text-xl font-bold text-[#1C0B35] mb-2">
        Coordinás 5 entrevistas…<br />
        y aparece 1 solo
      </h3>
    </div>
  </CardContent>
</Card>


            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="flex items-start space-x-4 p-0">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Perdés horas leyendo perfiles irrelevantes</h3>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="flex items-start space-x-4 p-0">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Frown className="w-6 h-6 text-red-600" />
                </div>
                <div>
                     <h3 className="text-xl font-bold text-[#1C0B35] mb-2"> Terminás contratando al menos malo</h3>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Time Comparison Table */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <TimeCalculator />
        </div>
      </section>

      {/* How It Works */}
     <section id="how-it-works" className="py-16 lg:py-24 bg-[#1C0B35] relative overflow-hidden">
  <div className="absolute inset-0 bg-white opacity-5 pointer-events-none"></div>
  
  <div className="container mx-auto px-4 lg:px-6 relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
        Creado para cada etapa de tu contratación
      </h2>
      <p className="text-xl text-white max-w-3xl mx-auto">
Analizamos los CVs con IA según tu criterio para que te queden los mejores candidatos. Vos solo decidís a quién contratar.      </p>
    </div>

    <div className="space-y-16">
      {/* Paso 1 */}
      <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-4">
  <div className="lg:w-[55%] bg-white/5 rounded-xl p-6">
    <h3 className="text-2xl font-bold text-white mb-2">1. Conectá tu correo</h3>
    <p className="text-lg text-white">
      Cargá lo que necesitás y olvidate de los pasos manuales.
    </p>
  </div>
  <video
    src="/pantalla-solucion10.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="rounded-xl lg:w-[45%] w-full shadow-lg"
  >
    Tu navegador no soporta video HTML5.
  </video>
</div>

      {/* Paso 2 */}
    <div className="flex flex-col lg:flex-row-reverse items-center gap-4 lg:gap-12 mt-16">
  <div className="lg:w-[55%] text-left bg-white/5 rounded-xl p-6">
    <h3 className="text-2xl font-bold text-white mb-2">2. Candidatos filtrados</h3>
    <p className="text-lg text-white">
      Solo recibís quienes cumplen con tu búsqueda, listos para contactar.
    </p>
  </div>
  <video
    src="/pantalla-solucion11.mp4"
    autoPlay
    muted
    playsInline
    loop
    className="rounded-xl lg:w-[45%] w-full shadow-lg"
  >
    Tu navegador no soporta video HTML5.
  </video>
</div>

      {/* Paso 3 */}
    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-12 mt-16">
  <div className="lg:w-[55%] text-left bg-white/5 rounded-xl p-6">
    <h3 className="text-2xl font-bold text-white mb-2">3. Validaciones listas para contactar</h3>
    <p className="text-lg text-white">
      Se verifican disponibilidad, referencias, ubicaciones y mucho más. Solo te mostramos quienes realmente están listos para trabajar.
    </p>
  </div>
  <video
    src="/pantalla-solucion12.mp4"
    autoPlay
    muted
    playsInline
    loop
    className="rounded-xl lg:w-[45%] w-full shadow-lg"
  >
    Tu navegador no soporta video HTML5.
  </video>
</div>


      {/* Paso 4 */}
    <div className="flex flex-col lg:flex-row-reverse items-center gap-4 lg:gap-12 mt-16">
  <div className="lg:w-[55%] text-left bg-white/5 rounded-xl p-6">
    <h3 className="text-2xl font-bold text-white mb-2">4. Seguimiento automatizado</h3>
    <p className="text-lg text-white">
      El sistema notifica, agenda y automatiza todo tu proceso sin que tengas que intervenir.
    </p>
  </div>
  <video
    src="/pantalla-solucion13.mp4"
    autoPlay
    muted
    playsInline
    loop
    className="rounded-xl lg:w-[45%] w-full shadow-lg"
  >
    Tu navegador no soporta video HTML5.
  </video>
</div>


      {/* Paso 5 */}
    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-12 mt-16">
  <div className="lg:w-[55%] text-left bg-white/5 rounded-xl p-6">
    <h3 className="text-2xl font-bold text-white mb-2">5. Gestión de personal</h3>
    <p className="text-lg text-white">
      Organizá la documentación, administrá los pagos y notificás al instante.
    </p>
  </div>
  <video
    src="/pantalla-solucion14.mp4"
    autoPlay
    muted
    playsInline
    loop
    className="rounded-xl lg:w-[45%] w-full shadow-lg"
  >
    Tu navegador no soporta video HTML5.
  </video>
</div>
</div>

    <div className="text-center mt-12">
      <Button
        size="lg"
        asChild
        className="bg-[#7C3AED] hover:bg-[#8B5CF6] text-white rounded-xl px-8 py-4 text-lg shadow-lg"
      >
        <a href="https://tally.so/r/nPW5d1" target="_blank" rel="noopener noreferrer">
          Empezar ahora
        </a>
      </Button>
    </div>
  </div>
</section>

{/* Otras Alternativas vs Work Now */}
<section className="py-16 lg:py-24 bg-white">
  <div className="container mx-auto px-4 lg:px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl lg:text-5xl font-bold text-[#1C0B35]">
        Adiós al caos del reclutamiento
      </h2>
      <p className="text-lg text-gray-600 mt-4">
        Unificá tu proceso de contratación y potenciá a RR.HH.
      </p>
    </div>

    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Izquierda: Otras Alternativas */}
      <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-8 shadow-sm">
        <div className="inline-flex items-center rounded-full bg-red-100 text-red-700 px-4 py-1 text-sm font-semibold mb-6">
          Otras Alternativas
        </div>

    

        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">Filtrado genérico, sin tu contexto.</span>
          </li>
          <li className="flex items-start gap-3">
            <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">CVs repartidos: portales, mail, WhatsApp, planillas.</span>
          </li>
          <li className="flex items-start gap-3">
            <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">Pagas costos fijos o por aviso</span>
          </li>
          <li className="flex items-start gap-3">
            <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">Coordinación manual y seguimiento desordenado.</span>
          </li>
          <li className="flex items-start gap-3">
            <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">Mensajes uno por uno con cada candidato</span>
          </li>
          <li className="flex items-start gap-3">
            <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">Varias herramientas para una sola búsqueda.</span>
          </li>
              {/* Imagen: muchas apps */}
        <div className="mb-6 flex justify-center">
          <img
            src="/muchas app.png"
            alt="Múltiples herramientas para reclutamiento"
            className="h-40 md:h-44 w-auto object-contain"
            loading="lazy"
          />
        </div>
        </ul>
      </div>

      {/* Derecha: Con Work Now */}
      <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-8 shadow-sm">
        <div className="inline-flex items-center rounded-full bg-green-100 text-green-700 px-4 py-1 text-sm font-semibold mb-6">
          Con Work Now
        </div>


        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">Filtrado personalizado con IA según tu criterio.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">Un solo flujo para manejar la búsqueda.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">Pagas solo por lo que usas</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">Coordinación automática y panel de entrevista</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">Mensajes automáticos</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-gray-800">Todo ordenado en un solo lugar.</span>
          </li>
            {/* Imagen: app Work Now */}
        <div className="mb-6 flex justify-center">
          <img
            src="/app work now.png"
            alt="Work Now en una sola app"
            className="h-40 md:h-44 w-auto object-contain"
            loading="lazy"
          />
        </div>
        </ul>
      </div>
    </div>
    
  
  </div>
</section>







{/* Pricing */}
<section id="pricing" className="py-16 lg:py-24">
  <div className="container mx-auto px-4 lg:px-6">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-5xl font-bold text-[#1c0b35] mb-4">
        Modelo flexible: pagás por lo que usás
      </h2>
    </div>

    {/* CONTENEDOR GRIS */}
    <div className="max-w-6xl mx-auto bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:items-stretch">
        {/* IZQUIERDA: Beneficios */}
        <div className="lg:col-span-1">
          <h3 className="text-2xl font-bold text-[#1c0b35] mb-2">
            Accedé directamente a candidatos calificados
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <span className="text-gray-700">Sé un 60% más eficiente</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <span className="text-gray-700">No más CVs irrelevantes</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <span className="text-gray-700">Candidatos listos en {"<"}48hs</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <span className="text-gray-700">Filtrado personalizado por vos</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <span className="text-gray-700">Entrevistas coordinadas automáticamente</span>
            </li>
          </ul>
        </div>

        {/* CENTRO: Plan por CV */}
        <Card className="p-8 border-2 border-[#A463F2] shadow-2xl rounded-2xl w-full h-full flex flex-col">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-2xl font-bold text-[#1c0b35]">
              Por CV Analizado
            </CardTitle>
          </CardHeader>

          <CardContent className="p-0 flex flex-col flex-1">
            <div className="flex items-end gap-2 mb-4">
              <span className="text-4xl lg:text-4xl font-bold text-[#1c0b35] leading-none">
                {formatARS(PRICE_PER_CV_ARS)}
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-3">Elegí tu tope por búsqueda</p>
<div className="flex justify-center flex-wrap gap-2 mb-4">
  {CV_CAP_OPTIONS.map((opt) => (
    <button
      key={opt}
      type="button"
      onClick={() => setCvCap(opt)}
      className={[
        "h-10 px-4 rounded-xl border text-sm font-semibold transition-colors",
        cvCap === opt
          ? "bg-[#f3e8ff] border-[#A463F2] text-[#1c0b35]"
          : "bg-white border-gray-200 text-gray-700 hover:border-[#A463F2]",
      ].join(" ")}
      aria-pressed={cvCap === opt}
    >
      {opt}
    </button>
  ))}
</div>

            <div className="mb-6 rounded-2xl border border-[#e9d5ff] bg-[#faf5ff] p-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-[#1c0b35]">Máximo a pagar:</span>
              <span className="text-sm font-bold text-[#6d28d9]">{formatARS(maxToPay)}</span>
            </div>

            {/* Empuja el botón abajo para igualar alturas */}
            <div className="mt-auto">
              <Button
                asChild
                className="w-full bg-[#8B5CF6] hover:bg-[#8B5CF6] text-white font-semibold rounded-xl py-3 shadow-md"
              >
                <a href="https://tally.so/r/nPW5d1" target="_blank" rel="noopener noreferrer">
                  Empezar búsqueda
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* DERECHA: Suscripción ilimitada */}
        <Card className="p-8 border-2 border-[#A463F2] shadow-2xl rounded-2xl w-full h-full flex flex-col">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-2xl font-bold text-[#1c0b35]">
              Plan Mensual
            </CardTitle>
          </CardHeader>

          <CardContent className="p-0 flex flex-col flex-1">
            <div className="flex items-end gap-2 mb-2">
              <span className="text-4xl lg:text-4xl font-bold text-[#1c0b35] whitespace-nowrap leading-none">
                {formatARS(SUBSCRIPTION_PRICE_ARS)}
              </span>
            </div>

            <p className="text-sm font-semibold text-[#A463F2] mb-4">
              Ideal si tenés muchas vacantes
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">CVs ilimitados</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">Multi-sucursal</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">Historial de candidatos</span>
              </li>
            </ul>

            {/* Empuja el botón abajo para igualar alturas */}
            <div className="mt-auto">
              <Button
                asChild
                className="w-full bg-[#7C3AED] hover:bg-[#8B5CF6] text-white font-semibold rounded-xl py-3 shadow-md"
              >
                <a href="https://tally.so/r/nPW5d1" target="_blank" rel="noopener noreferrer">
                  Activar suscripción
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</section>



      {/* FAQ */}
      <section id="faq" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1C0B35] mb-6">Preguntas frecuentes</h2>
            <p className="text-xl text-[#1C0B35] max-w-3xl mx-auto">Todo lo que necesitás saber sobre Work Now</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-xl border-0 shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  ¿Cómo funciona Work Now exactamente?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Work Now se conecta a tu correo y filtra automáticamente los CVs que recibís.
Solo necesitás definir qué estás buscando (por ejemplo: zona, edad, experiencia) y nosotros analizamos cada currículum por vos.
Te entregamos una lista con los mejores perfiles filtrados según tus criterios, listos para entrevistar.
Vos decidís con quién avanzar. Sin revisar uno por uno. Sin perder tiempo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl border-0 shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  ¿Cuánto tarda en llegar la shortlist?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Una vez que configurás tu búsqueda, comenzás a recibir candidatos filtrados en tiempo real. La mayoría
                  de nuestros clientes tienen su primera shortlist validada en menos de 24 horas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl border-0 shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  ¿Qué pasa si ningún candidato me sirve?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Tenemos dos opciones, ajustamos tus criterios o podemos repetir el reclutamiento para encontrar nuevos perfiles. Nuestra garantía es que tengas al menos 5 perfiles que realmente encajen. Si no, asumimos el riesgo nosotros.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl border-0 shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  ¿Puedo usar Work Now si no tengo equipo de RRHH?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Sí, de hecho, fue pensado para vos.
Work Now es ideal para dueños o encargados que manejan contrataciones sin estructura formal.
No necesitás saber de selección: nosotros nos encargamos de organizar todo y mostrarte solo lo que sirve.
                </AccordionContent>
 </AccordionItem>

                <AccordionItem value="item-5" className="bg-white rounded-xl border-0 shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  ¿Necesito saber de tecnología para usarlo?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                 No. Lo único que necesitás es tener acceso a tu mail.
Nosotros conectamos el sistema a tu bandeja de entrada, filtramos por vos y te damos los resultados en un resumen fácil de leer.
Y si lo necesitás, te acompañamos paso a paso en una reunión 1:1 para configurarlo.
                </AccordionContent>
 </AccordionItem>

                <AccordionItem value="item-6" className="bg-white rounded-xl border-0 shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  ¿Puedo cancelar el plan cuando quiera?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Si. Cuando vos quieras cancelas la suscripción sin peros
                </AccordionContent>
 </AccordionItem>

                <AccordionItem value="item-7" className="bg-white rounded-xl border-0 shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  ¿Cómo puedo contactarlos si tengo algún problema?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                Podés escribirnos por WhatsApp o correo en cualquier momento.
Atendemos de lunes a sábado de 9 a 20 hs y siempre respondemos en menos de 24 hs.
Si estás activo en una búsqueda, tenés prioridad y soporte dedicado para resolver todo rápido.
                </AccordionContent>

              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 lg:py-24 bg-[#A463F2]">
  <div className="container mx-auto px-4 lg:px-6 text-center">
    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
      Sabemos lo difícil que es encontrar buen personal.
    </h2>
    <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
      Por eso creamos Work Now: para que no pierdas más tiempo y puedas enfocarte en tu negocio.
    </p>


          <Button 
  size="lg"
  asChild
  className="bg-[#7C3AED] hover:bg-[#8B5CF6] text-white rounded-xl px-8 py-4 text-lg font-semibold shadow-lg"
>
  <a
    href="https://tally.so/r/nPW5d1"
    target="_blank"
    rel="noopener noreferrer"
  >
    Comenzar ya mismo
  </a>
</Button>


        </div>
      </section>

    <footer className="py-12 bg-[#1C0B35]">
  <div className="container mx-auto px-4 lg:px-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      <div>
        <div className="text-2xl font-bold text-white mb-4">
          <span className="text-[#A463F2]">Work</span>
          <span className="text-[#A463F2]">Now</span>
        </div>
        <p className="text-gray-400">Simplificando la contratación para negocios de alta rotación.</p>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-4">Producto</h3>
        <ul className="space-y-2">
          <li>
            <Link href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
              Características
            </Link>
          </li>
          <li>
            <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">
              Precios
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-4">Contacto</h3>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-gray-400" />
            <a href="mailto:info@worknow.com" className="text-gray-400 hover:text-white transition-colors">
              info@worknow.com
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
      <div className="text-gray-400 text-sm mb-4 md:mb-0">
        © 2024 Work Now. Todos los derechos reservados.
      </div>
      <div className="flex space-x-6">
        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
          Términos
        </Link>
        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
          Privacidad
        </Link>
        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
          Cookies
        </Link>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}
