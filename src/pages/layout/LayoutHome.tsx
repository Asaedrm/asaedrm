import { LAYOUT_HOME_CONSTS } from "./../constants/LayoutHomeConsts"
import SpecializationCard from "./../components/SpecializationCard"
import clsx from "clsx"
import useLayoutHome from "../hooks/useLayoutHome"


const LayoutHome = () => {
  const { isBackendHidden, isFrontendHidden, specialization, handleSpecialization, hovered, setHovered } = useLayoutHome()
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
        {hovered === "frontend" || specialization === "frontend" && (
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-pink-500 blur-sm z-0" />
        )}
        <SpecializationCard title={LAYOUT_HOME_CONSTS.frontend.title} description={LAYOUT_HOME_CONSTS.frontend.description}
          tecnologies="frontend" handleSpecialization={handleSpecialization} setHovered={setHovered} specialization={specialization} hovered={hovered} />
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
        <SpecializationCard title={LAYOUT_HOME_CONSTS.backend.title} description={LAYOUT_HOME_CONSTS.backend.description}
          tecnologies="backend" handleSpecialization={handleSpecialization} setHovered={setHovered} specialization={specialization} hovered={hovered} />

      </div>
    </div >
  )
}

export default LayoutHome
