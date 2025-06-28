import { LAYOUT_HOME_CONSTS } from "./../constants/LayoutHomeConsts"
import SpecializationCard from "./../components/SpecializationCard"
import useLayoutHome from "../hooks/useLayoutHome"


const LayoutHome = () => {
  const { isBackendHidden, isFrontendHidden, specialization, handleSpecialization, hovered, setHovered } = useLayoutHome()
  return (
    <div className="p-4 w-full h-screen bg-black flex flex-col md:flex-row">
      {/* FRONTEND WRAPPER */}
      <div
        className={`
          ${isFrontendHidden ? " -translate-y-0 " : "w-1/2"}
          ${specialization === "backend" ? "" : ""}
          h-full relative transition-all duration-400 ease-in-out
          ${hovered === "backend" ? "blur-sm" : ""}
          ${specialization === "frontend" ? "w-full" : "w-1/2"}
        `}
      >
        {hovered === "frontend" || specialization === "frontend" && (
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-pink-500 blur-sm z-0" />
        )}
        <SpecializationCard title={LAYOUT_HOME_CONSTS.frontend.title} description={LAYOUT_HOME_CONSTS.frontend.description}
          tecnologies="frontend" handleSpecialization={handleSpecialization} setHovered={setHovered} specialization={specialization} hovered={hovered} />
      </div>

      {/* BACKEND WRAPPER */}
      <div
        className={`
          ${isBackendHidden ? " -translate-y-0" : "w-1/2"}
          ${specialization === "frontend" ? "" : ""}
          h-full relative transition-all duration-400 ease-in-out
          ${hovered === "frontend" ? "blur-sm" : ""}
          ${specialization === "backend" ? "w-full" : "w-1/2"}
        `}
      >
        <SpecializationCard title={LAYOUT_HOME_CONSTS.backend.title} description={LAYOUT_HOME_CONSTS.backend.description}
          tecnologies="backend" handleSpecialization={handleSpecialization} setHovered={setHovered} specialization={specialization} hovered={hovered} />

      </div>
    </div >
  )
}

export default LayoutHome
