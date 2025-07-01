import { LAYOUT_HOME_CONSTS } from "./../constants/LayoutHomeConsts"
import SpecializationCard from "./../components/SpecializationCard"
import useLayoutHome from "../hooks/useLayoutHome"
import { DrawerSkills } from "../components/DrawerSkills"
import { useState } from "react"



const LayoutHome = () => {
  const [open, setOpen] = useState(false)
  const { specialization, handleSpecialization, hovered, setHovered } = useLayoutHome()
  return (
    <>
      <div className="p-4 w-full h-screen bg-black flex flex-col md:flex-row">
        {/* FRONTEND WRAPPER */}
        <div
          className={` w-full md:w-1/2
          h-full relative transition-all duration-400 ease-in-out
          ${hovered === "backend" ? "blur-sm" : ""}
        `}
        >
          {hovered === "frontend" || specialization === "frontend" && (
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-pink-500 blur-sm z-0" />
          )}
          <SpecializationCard setOpen={setOpen} title={LAYOUT_HOME_CONSTS.frontend.title} description={LAYOUT_HOME_CONSTS.frontend.description}
            tecnologies="frontend" handleSpecialization={handleSpecialization} setHovered={setHovered} specialization={specialization} hovered={hovered} />
        </div>

        {/* BACKEND WRAPPER */}
        <div
          className={`w-full md:w-1/2
          h-full relative transition-all duration-400 ease-in-out
          ${hovered === "frontend" ? "blur-sm" : ""}
        `}
        >
          <SpecializationCard setOpen={setOpen} title={LAYOUT_HOME_CONSTS.backend.title} description={LAYOUT_HOME_CONSTS.backend.description}
            tecnologies="backend" handleSpecialization={handleSpecialization} setHovered={setHovered} specialization={specialization} hovered={hovered} />

        </div>
      </div >
      <DrawerSkills open={open} setOpen={setOpen} specializationSelected={specialization} />
    </>
  )
}

export default LayoutHome
