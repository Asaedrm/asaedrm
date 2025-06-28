import { useEffect, useState } from "react"

const useLayoutHome = () => {
  const [specialization, setSpecialization] = useState<"frontend" | "backend" | null>(null)
  const [hovered, setHovered] = useState<"frontend" | "backend" | null>(null)
  const [isFrontendHidden, setIsFrontendHidden] = useState(false)
  const [isBackendHidden, setIsBackendHidden] = useState(false)

  const handleSpecialization = (selected: "frontend" | "backend" | null) => {
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

  return {
    specialization,
    setSpecialization,
    hovered,
    setHovered,
    isFrontendHidden,
    isBackendHidden,
    handleSpecialization
  }

}
export default useLayoutHome;
