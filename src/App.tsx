import { ThemeProvider } from "@/components/theme-provider"
import LayoutHome from "./pages/layout/LayoutHome"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LayoutHome />
    </ThemeProvider>
  )
}

export default App