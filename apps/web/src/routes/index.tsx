import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Copy } from 'lucide-react'

import { Button } from '@/components/button'
import { IconButton } from '@/components/icon-button'
import { Input } from '@/components/input'

export const Route = createFileRoute('/')({
  component: App,
  head: () => ({
    meta: [
      {
        title: 'Connect',
      },
    ],
  }),
})

function App() {
  return (
    <div className="text-blue-450">
      <Button>
        Enviar
        <ArrowRight />
      </Button>
      <IconButton>
        <Copy />
      </IconButton>
      <Input />
    </div>
  )
}
