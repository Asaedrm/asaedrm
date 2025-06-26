import { Card } from "@/components/ui/card"

export interface SpecializationCardProps {
    title: string
    description: string
    specialization: "frontend" | "backend" | null
    handleSpecialization: (specialization: "frontend" | "backend") => void
    hovered: "frontend" | "backend" | null
    setHovered: (hovered: "frontend" | "backend" | null) => void
}

const SpecializationCard = ({ title, description, specialization, handleSpecialization, hovered, setHovered }: SpecializationCardProps) => {
    return (
        <Card className="relative z-10 w-full h-full flex flex-col items-center justify-center text-neutral-400 hover:text-white">
            {
                specialization === "frontend" ? null
                    : (
                        <h3 className="scroll-m-20 xl:text-2xl lg:text-xl md:text-lg sm:text-base font-semibold tracking-tight">
                            {description}
                        </h3>
                    )
            }
            <h1
                onClick={() => handleSpecialization("frontend")}
                onMouseEnter={() => setHovered("frontend")}
                onMouseLeave={() => setHovered(null)}
                className={`
        scroll-m-20 border-b-2 md:border-none text-center xl:text-7xl 
        lg:text-6xl md:text-5xl sm:text-3xl text-3xl font-extrabold 
        tracking-tight text-balance cursor-pointer hover:bg-gradient-to-r
      hover:from-blue-500 hover:to-pink-500 hover:text-transparent hover:bg-clip-text
      ${hovered === "frontend" || specialization === "frontend" ? "bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text" : ""}
        `}
            >
                {title}
            </h1>
        </Card>
    )
}

export default SpecializationCard
