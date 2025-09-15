import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'

import { Skeleton } from '@/components/skeleton'

export function StatsSkeleton() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="relative grid place-items-center gap-1 rounded-xl border border-gray-600 bg-gray-700 px-4 py-7">
        <Skeleton className="h-7 w-14 rounded-md" />
        <span className="text-center text-sm leading-none text-gray-200">
          Acessos ao link
        </span>
        <MousePointerClick className="text-purple absolute top-3 left-3 size-5" />
      </div>

      <div className="relative grid place-items-center gap-1 rounded-xl border border-gray-600 bg-gray-700 px-4 py-7">
        <Skeleton className="h-7 w-14 rounded-md" />
        <span className="text-center text-sm leading-none text-gray-200">
          Inscrições
        </span>
        <BadgeCheck className="text-purple absolute top-3 left-3 size-5" />
      </div>

      <div className="relative grid place-items-center gap-1 rounded-xl border border-gray-600 bg-gray-700 px-4 py-7">
        <Skeleton className="h-7 w-10 rounded-md" />
        <span className="text-center text-sm leading-none text-gray-200">
          Posição no ranking
        </span>
        <Medal className="text-purple absolute top-3 left-3 size-5" />
      </div>
    </div>
  )
}
