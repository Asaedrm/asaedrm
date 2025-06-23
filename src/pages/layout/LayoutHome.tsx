import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"

const LayoutHome = () => {
  const [specialization, setSpecialization] = useState<string>("frontend")
  const [hovered, setHovered] = useState<"frontend" | "backend" | null>(null)

  const handleSpecialization = (specializationSelected: string) => {
    setSpecialization(specializationSelected)
  }

  useEffect(() => {}, [specialization])

  return (
    <div className="grid grid-cols-12 p-4 h-screen">
      <div
        className={`col-span-6 w-full h-full p-[2px] ${
          hovered === "frontend"
            ? "rounded-xl bg-gradient-to-r from-blue-500 to-pink-500"
            : ""
        }`}
      >
        <Card
          className={`w-full h-full flex flex-col items-center justify-center text-neutral-400 hover:text-white ${
            hovered === "frontend" ? "text-white" : ""
          }`}
        >
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

      <div
        className={`col-span-6 ${
          hovered === "backend"
            ? "p-[2px] rounded-xl bg-gradient-to-r from-black via-gray-950 to-sky-900"
            : ""
        }`}
      >
        <Card
          className={`w-full h-full bg-transparent border-none flex flex-col items-center justify-center text-neutral-400 hover:text-white ${
            hovered === "backend" ? "text-white bg-gradient-to-r from-black via-gray-950 to-sky-900" : ""
          }`}
        >
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
