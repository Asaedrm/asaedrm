import { Card } from "@/components/ui/card"
import { cardStyles } from "./../styles/cardStyles.ts"

export interface SpecializationCardProps {
    title: string
    description: string
    tecnologies: "frontend" | "backend"
    specialization: "frontend" | "backend" | null
    handleSpecialization: (specialization: "frontend" | "backend") => void
    hovered: "frontend" | "backend" | null
    setHovered: (hovered: "frontend" | "backend" | null) => void
}

const SpecializationCard = ({ title, description, tecnologies = "frontend", specialization, handleSpecialization, hovered, setHovered }: SpecializationCardProps) => {
    return (
        <Card className={`${cardStyles[tecnologies].card}`}>
            {
                specialization === "frontend" ? null
                    : (
                        <h3 className={`${cardStyles[tecnologies].subtitle}`}>
                            {description}
                        </h3>
                    )
            }
            <h1
                onClick={() => handleSpecialization("frontend")}
                onMouseEnter={() => setHovered("frontend")}
                onMouseLeave={() => setHovered(null)}
                className={` 
                    ${cardStyles[tecnologies].title}
                    ${hovered === "frontend" || specialization === "frontend" ? cardStyles[tecnologies].titleHover : null}
                    ${hovered === "backend" || specialization === "backend" ? null : null}
        `}
            >
                {title}
            </h1>
        </Card >
    )
}

export default SpecializationCard
