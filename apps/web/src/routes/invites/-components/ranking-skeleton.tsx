import { Skeleton } from '@/components/skeleton'

export function RankingSkeleton() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="font-heading text-xl leading-none font-semibold text-gray-200">
        Ranking de indicações
      </h2>

      <div className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
        <span className="text-sm leading-none text-gray-300">
          <span className="font-semibold">1º</span> | Vinicius Ferreira
        </span>
        <Skeleton className="h-7 w-16 rounded-md" />
        <img
          src="/assets/medal-gold.svg"
          alt=""
          className="absolute top-0 right-8"
        />
      </div>

      <div className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
        <span className="text-sm leading-none text-gray-300">
          <span className="font-semibold">2º</span> | John Doe
        </span>
        <Skeleton className="h-7 w-16 rounded-md" />
        <img
          src="/assets/medal-silver.svg"
          alt=""
          className="absolute top-0 right-8"
        />
      </div>

      <div className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
        <span className="text-sm leading-none text-gray-300">
          <span className="font-semibold">3º</span> | Jana Doe
        </span>
        <Skeleton className="h-7 w-16 rounded-md" />
        <img
          src="/assets/medal-cooper.svg"
          alt=""
          className="absolute top-0 right-8"
        />
      </div>
    </div>
  )
}
