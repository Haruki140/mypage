import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import Router from './Routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Router />
  </StrictMode>,
)
