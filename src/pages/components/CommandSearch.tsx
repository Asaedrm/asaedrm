import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command"
import AngularIcon from "@/icons/AngularIcon"
import BunIcon from "@/icons/BunIcon"
import NestJSIcon from "@/icons/NestJSIcon"
import NodeJSIcon from "@/icons/NodeJSIcon"
import ReactIcon from "@/icons/ReactIcon"
import { BookUserIcon, BugOffIcon, CircleUserIcon } from "lucide-react"
import React from "react"
export function CommandMenu() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="About">
          <CommandItem><CircleUserIcon />Me</CommandItem>
          <CommandItem><BugOffIcon />Skill</CommandItem>
          <CommandItem><BookUserIcon />Contact</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Frontend">
          <CommandItem><ReactIcon color="#fff" />React</CommandItem>
          <CommandItem><AngularIcon color="#fff" />Angular</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Backend">
          <CommandItem><NodeJSIcon color="#fff" />Node.js</CommandItem>
          <CommandItem><NestJSIcon color="#fff" />Nestjs</CommandItem>
          <CommandItem><BunIcon color="#fff" />Bun</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
