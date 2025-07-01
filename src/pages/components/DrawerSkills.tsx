import type { skills } from "./SkillCard";

export interface DrawerSkillsProps {
  skillTitle: skills;
}

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import useMediaQuery from "../hooks/useMediaQuery";
import { SKILLS_CONSTS } from "../constants/skillsConsts";
import { Badge } from "@/components/ui/badge";
export interface DrawerDialogDemoProps {
  specializationSelected: "frontend" | "backend";
  open: boolean;
  setOpen: (open: boolean) => void;
}
export function DrawerSkills({ open, setOpen, specializationSelected }: DrawerDialogDemoProps) {

  const isDesktop = useMediaQuery("(min-width: 768px)")
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-6/12 sm:h-10/12">
          <DialogHeader>
            <DialogTitle><div className="scroll-m-20 text-3xl font-semibold tracking-tight">{specializationSelected && SKILLS_CONSTS[specializationSelected][0].title}</div></DialogTitle>
            <DialogDescription>
              <div className="mb-2 scroll-m-20 text-xl font-semibold tracking-tight">{specializationSelected && SKILLS_CONSTS[specializationSelected][0].description}</div>
              <div className="flex mt-2 flex-row gap-2">
                {
                  specializationSelected && SKILLS_CONSTS[specializationSelected][0].subSkills.map((skill, index) => (
                    <Badge key={index} variant="secondary" >
                      {skill}
                    </Badge>
                  ))
                }
              </div>
            </DialogDescription>
          </DialogHeader>
          <div>

          </div>
        </DialogContent>
        <DialogFooter className="flex flex-row justify-center items-center gap-2">

        </DialogFooter>
      </Dialog>
    )
  }
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}


