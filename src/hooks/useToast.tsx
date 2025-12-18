import { toast as sonnerToast } from 'sonner'

type ToastType = 'success' | 'error' | 'warning' | 'info'
type ToastPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center'

interface ToastOptions {
  type?: ToastType
  title?: string
  description?: string
  duration?: number
  position?: ToastPosition
  action?: {
    label: string
    onClick: () => void
  }
}

export function useToast() {
  const toast = ({
    type = 'success',
    title,
    description,
    duration = 4000,
    position = 'top-right',
    action,
  }: ToastOptions) => {
    const options = {
      duration,
      position: position as any,
      action: action ? {
        label: action.label,
        onClick: action.onClick,
      } : undefined,
    }

    switch (type) {
      case 'success':
        return sonnerToast.success(title, {
          description,
          ...options,
        })
      case 'error':
        return sonnerToast.error(title, {
          description,
          ...options,
        })
      case 'warning':
        return sonnerToast.warning(title, {
          description,
          ...options,
        })
      case 'info':
        return sonnerToast.info(title, {
          description,
          ...options,
        })
      default:
        return sonnerToast(title, {
          description,
          ...options,
        })
    }
  }

  toast.success = (title: string, description?: string, options?: Omit<ToastOptions, 'type' | 'title' | 'description'>) => 
    sonnerToast.success(title, { description, ...options })
  
  toast.error = (title: string, description?: string, options?: Omit<ToastOptions, 'type' | 'title' | 'description'>) => 
    sonnerToast.error(title, { description, ...options })
  
  toast.warning = (title: string, description?: string, options?: Omit<ToastOptions, 'type' | 'title' | 'description'>) => 
    sonnerToast.warning(title, { description, ...options })
  
  toast.info = (title: string, description?: string, options?: Omit<ToastOptions, 'type' | 'title' | 'description'>) => 
    sonnerToast.info(title, { description, ...options })
  
  toast.loading = (title: string, description?: string, options?: Omit<ToastOptions, 'type' | 'title' | 'description'>) => 
    sonnerToast.loading(title, { description, ...options })
  
  toast.promise = <T,>(
  promise: Promise<T>,
  messages: {
    loading: string
    success: string | ((data: T) => string)
    error: string | ((error: any) => string)
  },
  options?: Omit<ToastOptions, 'type' | 'title' | 'description'>
) => {
  return sonnerToast.promise(promise, {
    ...messages,
    ...options
  })
}

  toast.dismiss = sonnerToast.dismiss
  toast.custom = sonnerToast.custom

  return { toast }
}

export { sonnerToast as toast }