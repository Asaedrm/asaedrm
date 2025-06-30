import { ThemeProvider } from "@/components/theme-provider"
import LayoutHome from "./pages/layout/LayoutHome"
import { useEffect, useState } from "react"
import LayoutSkeleton from "./pages/components/LayoutSkeleton"
import SkillCard from "./pages/components/SkillCard"
import { CommandMenu } from "./pages/components/CommandSearch"

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className={`${isLoading ? "cursor-progress" : "cursor-default"}`}>
        <CommandMenu />
        {isLoading ? <LayoutSkeleton /> : <LayoutHome />}
      </div>
    </ThemeProvider>
  )
}

export default App
