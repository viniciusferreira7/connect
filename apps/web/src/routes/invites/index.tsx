import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/invites/')({
  loader: () => {
    throw redirect({ to: '/' })
  },
})
