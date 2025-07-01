import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import useMediaQuery from "../hooks/useMediaQuery";
import { SKILLS_CONSTS } from "../constants/skillsConsts";
import { Badge } from "@/components/ui/badge";
import IconsSelectedSkill from "./IconsSelectedSkill";

export interface DrawerDialogDemoProps {
  specializationSelected: "frontend" | "backend";
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function DrawerSkills({ open, setOpen, specializationSelected }: DrawerDialogDemoProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  // Validación para evitar errores si specializationSelected no es válido
  if (!specializationSelected || !SKILLS_CONSTS[specializationSelected]) {
    return null;
  }

  const skillsData = SKILLS_CONSTS[specializationSelected];

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="flex flex-col gap-6 sm:max-w-6/12 sm:h-10/12 overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="scroll-m-20 text-3xl font-semibold tracking-tight mb-2">
              {specializationSelected === "frontend" ? "Frontend" : "Backend"} - Skills
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-6">
            {skillsData.map((skill, index) => (
              <div key={index} className="border rounded-lg p-4 shadow-sm bg-background">
                <div className="flex flex-row items-center gap-3 mb-2">
                  <IconsSelectedSkill skill={skill.title} />
                  <span className="text-xl font-bold">{skill.title}</span>
                  <Badge variant="outline" className="text-xs ml-2">{skill.experience}</Badge>
                  <Badge variant="outline" className="text-xs ml-2">{skill.yearsOfExperience}+ años</Badge>
                </div>
                <div className="mb-2 text-base">{skill.description}</div>
                <div className="flex flex-row flex-wrap gap-2 mb-2">
                  {skill.subSkills.map((sub, i) => (
                    <Badge key={i} variant="secondary">{sub}</Badge>
                  ))}
                </div>
                <div className="mt-2">
                  <div className="font-semibold mb-1">Proyectos:</div>
                  <div className="flex flex-col gap-3">
                    {skill.projects.map((project, j) => (
                      <div key={j} className="border rounded p-2 bg-muted">
                        <div className="flex flex-row items-center gap-2 mb-1">
                          <img src={project.image} alt={project.title} className="w-10 h-10 object-cover rounded" />
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-bold underline">{project.title}</a>
                        </div>
                        <div className="text-sm mb-1">{project.description}</div>
                        <div className="flex flex-row flex-wrap gap-1">
                          {project.skills.map((pskill, k) => (
                            <Badge key={k} variant="outline">{pskill}</Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
            {specializationSelected === "frontend" ? "Frontend" : "Backend"} - Skills
          </DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col gap-6 p-2 overflow-y-auto max-h-[60vh]">
          {skillsData.map((skill, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-sm bg-background">
              <div className="flex flex-row items-center gap-3 mb-2">
                <IconsSelectedSkill skill={skill.title} />
                <span className="text-lg font-bold">{skill.title}</span>
                <Badge variant="outline" className="text-xs ml-2">{skill.experience}</Badge>
                <Badge variant="outline" className="text-xs ml-2">{skill.yearsOfExperience}+ años</Badge>
              </div>
              <div className="mb-2 text-base">{skill.description}</div>
              <div className="flex flex-row flex-wrap gap-2 mb-2">
                {skill.subSkills.map((sub, i) => (
                  <Badge key={i} variant="secondary">{sub}</Badge>
                ))}
              </div>
              <div className="mt-2">
                <div className="font-semibold mb-1">Proyectos:</div>
                <div className="flex flex-col gap-3">
                  {skill.projects.map((project, j) => (
                    <div key={j} className="border rounded p-2 bg-muted">
                      <div className="flex flex-row items-center gap-2 mb-1">
                        <img src={project.image} alt={project.title} className="w-10 h-10 object-cover rounded" />
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-bold underline">{project.title}</a>
                      </div>
                      <div className="text-sm mb-1">{project.description}</div>
                      <div className="flex flex-row flex-wrap gap-1">
                        {project.skills.map((pskill, k) => (
                          <Badge key={k} variant="outline">{pskill}</Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  )
}


