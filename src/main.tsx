import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import Router from './Routes'
import Header from './Header'
import Footer from './Footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Router />
  </StrictMode>,
)
