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
                specialization && (
                    <h3 className={`${cardStyles[tecnologies].subtitle}`}>
                        {description}
                    </h3>
                )
            }
            <h1
                onClick={() => handleSpecialization(tecnologies)}
                onMouseEnter={() => setHovered(tecnologies)}
                onMouseLeave={() => setHovered(null)}
                className={` 
                    ${cardStyles[tecnologies].title}
                    ${hovered || specialization ? cardStyles[tecnologies].titleHover : null}
        `}
            >
                {title}
            </h1>
        </Card >
    )
}

export default SpecializationCard
