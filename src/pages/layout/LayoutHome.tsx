import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"

const LayoutHome = () => {
  const [specialization, setSpecialization] = useState<string>("frontend")
  const [styleTransitionCard, setStyleTransitionCard] = useState({
    frontend: "",
    backend: ""
  })
  const handleSpecialization = (specializationSelected: string) => {
    setSpecialization(specializationSelected)
    setStyleTransitionCard({
      frontend: specializationSelected === "frontend" ? "" : "",
      backend: specializationSelected === "backend" ? "" : ""
    })
  }
  useEffect(() => {
    setStyleTransitionCard({
      frontend: specialization === "frontend" ? "" : "",
      backend: specialization === "backend" ? "" : ""
    })
  }, [specialization])
  return (
    <div className="grid grid-cols-12 p-4 h-screen">
      <div className="col-span-6 w-full h-full p-[2px] hover:rounded-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500">
        <Card className={`w-full h-full flex flex-col items-center justify-center text-neutral-400 hover:text-white ${styleTransitionCard.frontend}`}>
          <h3 className="scroll-m-20 xl:text-2xl lg:text-xl md:text-lg sm:text-base font-semibold tracking-tight  ">
            Asaed Reyes Medina
          </h3>
          <h1 onClick={() => handleSpecialization("frontend")} className="scroll-m-20 text-center xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl font-extrabold tracking-tight text-balance cursor-pointer  hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 hover:text-transparent hover:bg-clip-text">
            Frontend
          </h1>
        </Card>
      </div>
      <div className="col-span-6 ">
        <Card className={`w-full h-full bg-transparent border-none flex flex-col items-center justify-center text-neutral-400 hover:text-white hover:bg-gradient-to-r hover:from-black  hover:via-neutral-950  hover:to-neutral-900 ${styleTransitionCard.backend}`}>
          <h3 className="scroll-m-20 xl:text-2xl lg:text-xl md:text-lg sm:text-base font-semibold tracking-tight">
            Full Stack Developer
          </h3>
          <h1 onClick={() => handleSpecialization("backend")} className="scroll-m-20 text-center xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl font-extrabold tracking-tight text-balance cursor-pointer hover:bg-gradient-to-r hover:from-neutral-800 hover:to-neutral-100 hover:text-transparent hover:bg-clip-text">
            Backend
          </h1>
        </Card>

      </div>
    </div>
  )
}

export default LayoutHome