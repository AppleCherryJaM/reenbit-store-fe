import { RouterProvider } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToasterProvider } from '@/providers/ToasterProvider'
import { router } from './router'
import { queryClient } from './lib/query-client'
import { ThemeProvider } from './providers/ThemeProvider'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="reenbit-store-theme">
        <ToasterProvider>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </ToasterProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App