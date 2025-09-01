import { createFileRoute } from '@tanstack/react-router'

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
    <main className="mx-auto max-w-310 px-5 py-8 md:py-0">
      <div className="flex min-h-dvh flex-col justify-center gap-16">
        <div className="flex flex-col items-center gap-10 md:items-start">
          <img
            src="/assets/logo.svg"
            alt="devstage"
            width={108.5}
            fetchPriority="high"
            height={30}
          />
          <h1 className="font-heading flex flex-col text-center text-4xl leading-none font-medium md:text-left md:text-7xl">
            <span className="text-blue">CodeCraft</span> Summit{' '}
            {new Date().getFullYear()}
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-stretch gap-5 md:flex-row"></div>
    </main>
  )
}
