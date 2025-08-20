import { Button } from '@/components/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
  head: () => ({
    meta: [
      {
        title: 'Connect'
      }
    ]
  })
})

function App() {
  return (
    <div className='text-blue-450'>
    <Button />
    </div>
  )
}
