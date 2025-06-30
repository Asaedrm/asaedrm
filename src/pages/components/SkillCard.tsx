
export interface SkillCardProps {
    skillTitle: skills
}
export type skills = "React" | "Angular" | "Bun" | "NodeJS" | "NestJS";
const SkillCard = ({ skillTitle }: SkillCardProps) => {
    const gradiantColorsSkill = {
        React: "from-blue-400 to-blue-600",
        Angular: "from-red-400 to-red-600",
        Bun: "from-yellow-400 to-yellow-600",
        NodeJS: "from-green-400 to-green-600",
        NestJS: "from-purple-400 to-purple-600",
    }
    return (
        <h2 className={`scroll-m-10 text-center text-7xl font-extrabold tracking-tight text-balance
              bg-gradient-to-r ${gradiantColorsSkill[skillTitle] || "from-gray-400 to-gray-600"} 
              text-transparent bg-clip-text cursor-pointer`}>
            {skillTitle}
        </h2>
    )
}
export default SkillCard
