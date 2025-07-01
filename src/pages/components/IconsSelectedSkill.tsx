import AngularIcon from "@/icons/AngularIcon";
import BunIcon from "@/icons/BunIcon";
import NestJSIcon from "@/icons/NestJSIcon";
import NodeJSIcon from "@/icons/NodeJSIcon";
import ReactIcon from "@/icons/ReactIcon";

export interface IconsSelectedSkillProps {
  skill: "React" | "Angular" | "Bun" | "NestJS" | "NodeJS";
}

const IconsSelectedSkill = ({ skill }: IconsSelectedSkillProps) => {
  const skillIcons = {
    React: <ReactIcon color="#61DAFB" size={24} />,
    Angular: <AngularIcon color="#DD0031" size={24} />,
    Bun: <BunIcon color="#FFD15A" size={24} />,
    NestJS: <NestJSIcon color="#E0234E" size={24} />,
    NodeJS: <NodeJSIcon color="#339933" size={24} />,
  };
  
  return skillIcons[skill];
};

export default IconsSelectedSkill;
