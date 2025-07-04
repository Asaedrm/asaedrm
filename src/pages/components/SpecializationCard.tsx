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
    setOpen: (open: boolean) => void
}

const SpecializationCard = (
    { title, description, setOpen, tecnologies = "frontend", specialization, handleSpecialization, hovered, setHovered }
        : SpecializationCardProps) => {
    return (
        <Card className={`${cardStyles[tecnologies].card}`}>
            {
                tecnologies === "backend" && <div className="hidden  md:flex flex-row ring-white absolute top-4 right-4 rounded-xl gap-4">
                    <small className="text-sm text-white leading-none font-medium flex flex-row items-center  p-2 rounded-md bg-neutral-700">Search
                        <div className="bg-black rounded-sm ml-2 p-1">Ctrl</div>
                        <div className="bg-black rounded-sm ml-1 p-1">K</div>
                    </small></div>
            }
            <h3 className={`${cardStyles[tecnologies].subtitle} `}>
                {description}
            </h3>
            <h1
                onClick={() => { handleSpecialization(tecnologies); setOpen(true) }}
                onMouseEnter={() => setHovered(tecnologies)}
                onMouseLeave={() => setHovered(null)}
                className={` 
                    ${cardStyles[tecnologies].title}
                    ${hovered || specialization === tecnologies ? cardStyles[tecnologies].titleHover : null}
        `}
            >
                {title}
            </h1>
        </Card >
    )
}

export default SpecializationCard
