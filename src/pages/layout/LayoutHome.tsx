import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"

const LayoutHome = () => {
  const [specialization, setSpecialization] = useState<string>("frontend")
  const [hovered, setHovered] = useState<"frontend" | "backend" | null>(null)

  const handleSpecialization = (specializationSelected: string) => {
    setSpecialization(specializationSelected)
  }

  useEffect(() => { }, [specialization])

  return (
    <div className="grid grid-cols-12 p-4 h-screen bg-black">
      {/* FRONTEND WRAPPER */}
      <div
        className={`col-span-6 w-full h-full relative transition-all duration-300 ${hovered === "backend" ? "blur-sm" : ""}`}
      >
        {/* Fondo de gradiente desenfocado solo cuando se pasa el cursor por frontend */}
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
            className="scroll-m-20 text-center xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl font-extrabold tracking-tight text-balance cursor-pointer hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 hover:text-transparent hover:bg-clip-text"
          >
            Frontend
          </h1>
        </Card>
      </div>

      {/* BACKEND WRAPPER */}
      <div
        className={`col-span-6 w-full h-full relative transition-all duration-300 ${hovered === "frontend" ? "blur-sm" : ""}`}
      >
        <Card className="relative z-10 w-full h-full bg-transparent border-none flex flex-col items-center justify-center text-neutral-400 hover:text-white">
          <h3 className="scroll-m-20 xl:text-2xl lg:text-xl md:text-lg sm:text-base font-semibold tracking-tight">
            Full Stack Developer
          </h3>
          <h1
            onClick={() => handleSpecialization("backend")}
            onMouseEnter={() => setHovered("backend")}
            onMouseLeave={() => setHovered(null)}
            className="scroll-m-20 text-center xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl font-extrabold tracking-tight text-balance cursor-pointer hover:bg-gradient-to-r hover:from-emerald-800 hover:to-sky-800 hover:text-transparent hover:bg-clip-text"
          >
            Backend
          </h1>
        </Card>
      </div>
    </div>
  )
}

export default LayoutHome
