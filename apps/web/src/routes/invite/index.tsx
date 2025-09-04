import { createFileRoute } from '@tanstack/react-router'

import { InviteLinkInput } from './-components/invite-link-input'
import { Ranking } from './-components/ranking'
import { Stats } from './-components/stats'

export const Route = createFileRoute('/invite/')({
  component: InviteComponent,
  head: () => ({
    meta: [
      {
        title: 'Invite | Connect',
      },
    ],
  }),
})

function InviteComponent() {
  const href = window.location.href

  return (
    <div className="flex min-h-dvh flex-col items-center justify-between gap-16 md:flex-row">
      <div className="flex w-full max-w-[550px] flex-col gap-10">
        <img
          src="/assets/logo.svg"
          alt="devstage"
          width={108.5}
          fetchPriority="high"
          height={30}
        />
        <div className="space-y-2">
          <h1 className="font-heading text-4xl font-semibold text-gray-100">
            Inscrição confirmada
          </h1>
          <p className="text-gray-300">
            Para entrar no evento, acesso o link enviado para seu e-mail.
          </p>
        </div>
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-heading text-xl leading-none font-semibold text-gray-200">
              Indique e ganhe
            </h2>
            <p className="text-gray-300">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>
          <InviteLinkInput inviteLink={href} />
          <Stats />
        </div>
      </div>
      <Ranking />
    </div>
  )
}
