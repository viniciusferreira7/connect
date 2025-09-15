import { useParams } from '@tanstack/react-router'
import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'

import {
  useGetSubscribersSubscriberIdRanking,
  useGetSubscribersSubscriberIdRankingClicks,
  useGetSubscribersSubscriberIdRankingCount,
} from '@/http/orval/referral/referral'

import { StatsSkeleton } from './stats-skeleton'

export function Stats() {
  const { inviteId } = useParams({ strict: false })

  const subscriberIdRankingClicks = useGetSubscribersSubscriberIdRankingClicks(
    inviteId!,
    {
      query: {
        enabled: !!inviteId,
      },
    },
  )

  const subscriberInvitesCount = useGetSubscribersSubscriberIdRankingCount(
    inviteId!,
    {
      query: {
        enabled: !!inviteId,
      },
    },
  )

  const subscriberRankingPosition = useGetSubscribersSubscriberIdRanking(
    inviteId!,
    {
      query: {
        enabled: !!inviteId,
      },
    },
  )

  if (
    subscriberIdRankingClicks?.isLoading ||
    subscriberInvitesCount?.isLoading
  ) {
    return <StatsSkeleton />
  }

  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="relative grid place-items-center gap-1 rounded-xl border border-gray-600 bg-gray-700 px-4 py-7">
        <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
          {subscriberIdRankingClicks?.data?.count ?? 0}
        </span>
        <span className="text-center text-sm leading-none text-gray-200">
          Acessos ao link
        </span>
        <MousePointerClick className="text-purple absolute top-3 left-3 size-5" />
      </div>
      <div className="relative grid place-items-center gap-1 rounded-xl border border-gray-600 bg-gray-700 px-4 py-7">
        <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
          {subscriberInvitesCount?.data?.count ?? 0}
        </span>
        <span className="text-center text-sm leading-none text-gray-200">
          Inscrições
        </span>
        <BadgeCheck className="text-purple absolute top-3 left-3 size-5" />
      </div>
      <div className="relative grid place-items-center gap-1 rounded-xl border border-gray-600 bg-gray-700 px-4 py-7">
        <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
          {subscriberRankingPosition?.data?.position ?? '-'}
        </span>
        <span className="text-center text-sm leading-none text-gray-200">
          Posição no ranking
        </span>
        <Medal className="text-purple absolute top-3 left-3 size-5" />
      </div>
    </div>
  )
}
