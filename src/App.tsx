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
      {isLoading ? <LayoutSkeleton /> : <LayoutHome />}
    </ThemeProvider>
  )
}

export default App