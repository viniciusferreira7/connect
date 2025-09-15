import { useGetRanking } from '@/http/orval/referral/referral'

import { RankingSkeleton } from './ranking-skeleton'

export function Ranking() {
  const ranking = useGetRanking()

  if (ranking?.isLoading) {
    return <RankingSkeleton />
  }

  const firstOnRanking = ranking?.data?.ranking?.[0]
  const secondOnRanking = ranking?.data?.ranking?.[1]
  const thirdOnRanking = ranking?.data?.ranking?.[2]

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="font-heading text-xl leading-none font-semibold text-gray-200">
        Ranking de indicações
      </h2>
      {firstOnRanking && (
        <div className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
          <span className="text-sm leading-none text-gray-300">
            <span className="font-semibold">1&ordm;</span> |{' '}
            {firstOnRanking?.name}
          </span>
          <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
            {firstOnRanking?.score}
          </span>
          <img
            src="/assets/medal-gold.svg"
            alt=""
            className="absolute top-0 right-8"
          />
        </div>
      )}
      {secondOnRanking && (
        <div className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
          <span className="text-sm leading-none text-gray-300">
            <span className="font-semibold">2&ordm;</span> |{' '}
            {secondOnRanking?.name}
          </span>
          <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
            {secondOnRanking?.score}
          </span>
          <img
            src="/assets/medal-silver.svg"
            alt=""
            className="absolute top-0 right-8"
          />
        </div>
      )}
      {thirdOnRanking && (
        <div className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
          <span className="text-sm leading-none text-gray-300">
            <span className="font-semibold">3&ordm;</span> |{' '}
            {thirdOnRanking?.name}
          </span>
          <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
            {thirdOnRanking?.score}
          </span>
          <img
            src="/assets/medal-cooper.svg"
            alt=""
            className="absolute top-0 right-8"
          />
        </div>
      )}
    </div>
  )
}
