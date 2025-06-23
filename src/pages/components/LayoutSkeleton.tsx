import { Skeleton } from "@/components/ui/skeleton"

const LayoutSkeleton = () => {
  return (
    <div className="grid grid-cols-12 p-4 h-screen gap-4">
      <div className="col-span-6 w-full h-full p-[2px]">
        <div className="w-full h-full rounded-xl bg-muted/20 flex flex-col items-center justify-center">
          <Skeleton className="h-6 w-48 mb-4" /> {/* Nombre */}
          <Skeleton className="h-20 w-72 rounded-md" /> {/* Título "Frontend" */}
        </div>
      </div>

      <div className="col-span-6 w-full h-full p-[2px]">
        <div className="w-full h-full rounded-xl bg-dark flex flex-col items-center justify-center">
          <Skeleton className="h-6 w-48 mb-4" /> {/* Rol */}
          <Skeleton className="h-20 w-72 rounded-md" /> {/* Título "Backend" */}
        </div>
      </div>
    </div>
  )
}

export default LayoutSkeleton
