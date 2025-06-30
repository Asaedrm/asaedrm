
export interface SkillCardProps {
    skillTitle: string
}
const SkillCard = ({ skillTitle }: SkillCardProps) => {
    return (
            <h2 className={`scroll-m-20  text-3xl font-bold tracking-tight text-balance cursor-pointer 
              bg-gradient-to-r from-indigo-400 to-blue-400
              text-transparent bg-clip-text  `}>
                {skillTitle}
            </h2>
    )
}
export default SkillCard