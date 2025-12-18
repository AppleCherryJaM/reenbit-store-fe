import { RouterProvider } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToasterProvider } from '@/providers/ToasterProvider'
import { router } from './router'
import { queryClient } from './lib/query-client'

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <ToasterProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </ToasterProvider>
    </QueryClientProvider>
  )
}

export default App