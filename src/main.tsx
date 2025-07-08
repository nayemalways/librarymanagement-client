import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './theme/theme.tsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
       <RouterProvider router={router} />
    </ThemeProvider>
    
  </StrictMode>,
)
