import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"
import clsx from "clsx"

const LayoutHome = () => {
  const [specialization, setSpecialization] = useState<string>("")
  const [hovered, setHovered] = useState<"frontend" | "backend" | null>(null)
  const [isFrontendHidden, setIsFrontendHidden] = useState(false)
  const [isBackendHidden, setIsBackendHidden] = useState(false)

  const handleSpecialization = (selected: string) => {
    setSpecialization(selected)

    // Ocultar el opuesto después de la animación
    if (selected === "frontend") {
      setTimeout(() => setIsBackendHidden(true), 500)
    } else {
      setTimeout(() => setIsFrontendHidden(true), 500)
    }
  }

  // Mostrar de nuevo si no hay selección (opcional)
  useEffect(() => {
    if (!specialization) {
      setIsFrontendHidden(false)
      setIsBackendHidden(false)
    }
  }, [specialization])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12 p-4 h-screen bg-black">
      {/* FRONTEND WRAPPER */}
      <div
        className={clsx(
          isFrontendHidden && "hidden",
          specialization === "backend" ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100",
          specialization === "frontend" ? "col-span-12" : "col-span-6",
          "w-full h-full relative transition-all duration-500 ease-in-out",
          hovered === "backend" && "blur-sm"
        )}
      >
        {hovered === "frontend" && (
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-pink-500 blur-sm z-0" />
        )}
        <Card className="relative z-10 w-full h-full flex flex-col items-center justify-center text-neutral-400 hover:text-white">
          <h3 className="scroll-m-20 xl:text-2xl lg:text-xl md:text-lg sm:text-base font-semibold tracking-tight">
            Asaed Reyes Medina
          </h3>
          <h1
            onClick={() => handleSpecialization("frontend")}
            onMouseEnter={() => setHovered("frontend")}
            onMouseLeave={() => setHovered(null)}
            className="scroll-m-20 border-b-2 md:border-none text-center xl:text-7xl lg:text-6xl md:text-5xl sm:text-3xl text-3xl font-extrabold tracking-tight text-balance cursor-pointer hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 hover:text-transparent hover:bg-clip-text"
          >
            Frontend
          </h1>
        </Card>
      </div>

      {/* BACKEND WRAPPER */}
      <div
        className={clsx(
          isBackendHidden && "hidden",
          specialization === "frontend" ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100",
          specialization === "backend" ? "col-span-12" : "col-span-6",
          "w-full h-full relative transition-all duration-500 ease-in-out",
          hovered === "frontend" && "blur-sm"
        )}
      >
        <Card className="relative z-10 w-full h-full bg-transparent border-none flex flex-col items-center justify-center text-neutral-400 hover:text-white">
          <h3 className="scroll-m-20 xl:text-2xl lg:text-xl md:text-lg sm:text-base font-semibold tracking-tight">
            Full Stack Developer
          </h3>
          <h1
            onClick={() => handleSpecialization("backend")}
            onMouseEnter={() => setHovered("backend")}
            onMouseLeave={() => setHovered(null)}
            className="scroll-m-20 border-b-2 md:border-none text-center xl:text-7xl lg:text-6xl md:text-5xl sm:text-3xl text-3xl font-extrabold tracking-tight text-balance cursor-pointer hover:bg-gradient-to-r hover:from-emerald-800 hover:to-sky-800 hover:text-transparent hover:bg-clip-text"
          >
            Backend
          </h1>
        </Card>
      </div>
    </div>
  )
}

export default LayoutHome
