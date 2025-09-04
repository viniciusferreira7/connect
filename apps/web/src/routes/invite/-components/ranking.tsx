import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'

export function Ranking() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="relative grid place-items-center gap-1 rounded-xl border border-gray-600 bg-gray-700 px-4 py-7">
        <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
          1042
        </span>
        <span className="text-center text-sm leading-none text-gray-200">
          Acessos ao link
        </span>
        <MousePointerClick className="text-purple absolute top-3 left-3 size-5" />
      </div>
      <div className="relative grid place-items-center gap-1 rounded-xl border border-gray-600 bg-gray-700 px-4 py-7">
        <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
          1042
        </span>
        <span className="text-center text-sm leading-none text-gray-200">
          Inscrições
        </span>
        <BadgeCheck className="text-purple absolute top-3 left-3 size-5" />
      </div>
      <div className="relative grid place-items-center gap-1 rounded-xl border border-gray-600 bg-gray-700 px-4 py-7">
        <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
          3º
        </span>
        <span className="text-center text-sm leading-none text-gray-200">
          Posição no ranking
        </span>
        <Medal className="text-purple absolute top-3 left-3 size-5" />
      </div>
    </div>
  )
}
