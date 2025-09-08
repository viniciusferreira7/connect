import { useParams } from '@tanstack/react-router'
import { Copy, Link } from 'lucide-react'

import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'

export function InviteLinkInput() {
  const { inviteId } = useParams({ strict: false })
  const apiUrl = import.meta.env.VITE_API_URL

  const inviteUrl = new URL(`/invites/${inviteId}`, apiUrl)

  const inviteLink = inviteUrl.toString()

  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink)
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField readOnly defaultValue={inviteLink} />

      <IconButton className="-mr-2 w-auto" onClick={copyInviteLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}
