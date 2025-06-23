import { ThemeProvider } from "@/components/theme-provider"
import LayoutHome from "./pages/layout/LayoutHome"
import { useEffect, useState } from "react"
import LayoutSkeleton from "./pages/components/LayoutSkeleton"

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
      {isLoading ? <LayoutSkeleton /> : <LayoutHome />}
      </div>
    </ThemeProvider>
  )
}

export default App