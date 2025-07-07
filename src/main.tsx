import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@styles/global.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1 className='text-center'>Vite + React + Tailwind</h1>
  </StrictMode>
)
