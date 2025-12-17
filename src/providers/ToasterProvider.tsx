import React from 'react'
import { Toaster } from '@/components/ui/toaster'

interface ToasterProviderProps {
  children: React.ReactNode
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center'
  theme?: 'light' | 'dark' | 'system'
  richColors?: boolean
  closeButton?: boolean
  duration?: number
}

export function ToasterProvider({ 
  children,
  position = 'top-right',
  theme = 'light',
  richColors = true,
  closeButton = true,
  duration = 4000
}: ToasterProviderProps) {
  return (
    <>
      {children}
      <Toaster
        position={position}
        theme={theme}
        richColors={richColors}
        closeButton={closeButton}
        duration={duration}
        expand={false}
        visibleToasts={3}
        offset={16}
        gap={8}
        toastOptions={{
          className: 'font-sans',
          style: {
            borderRadius: '8px',
            border: '1px solid hsl(var(--border))',
            background: 'hsl(var(--background))',
            color: 'hsl(var(--foreground))',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          },
        }}
      />
    </>
  )
}