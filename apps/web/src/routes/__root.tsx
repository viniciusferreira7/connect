import { createRootRoute, HeadContent, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <HeadContent />
      <main className="mx-auto max-w-310 px-5 py-8 md:py-0">
        <Outlet />
        <TanStackRouterDevtools />
      </main>
    </>
  ),
})
