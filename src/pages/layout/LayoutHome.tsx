import { Card } from "@/components/ui/card"

const LayoutHome = () => {
  return (
    <div className="grid grid-cols-12 p-4 h-screen">
      <div className="col-span-6 w-full h-full">
        <Card className="w-full h-full flex flex-col items-center justify-center hover:text-neutral-400">
          <h3 className="scroll-m-20 xl:text-2xl lg:text-xl md:text-lg sm:text-base font-semibold tracking-tight ">
            Asaed Reyes Medina
          </h3>
          <h1 className="scroll-m-20 text-center xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl font-extrabold tracking-tight text-balance cursor-pointer">
            Frontend
          </h1>
        </Card>
      </div>
      <div className="col-span-6 ">
        <Card className="w-full h-full bg-transparent border-none flex flex-col items-center justify-center hover:text-neutral-400">
          <h3 className="scroll-m-20 xl:text-2xl lg:text-xl md:text-lg sm:text-base font-semibold tracking-tight">
            Full Stack Developer
          </h3>
          <h1 className="scroll-m-20 text-center xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl font-extrabold tracking-tight text-balance cursor-pointer">
            Backend
          </h1>
        </Card>

      </div>
    </div>
  )
}

export default LayoutHome