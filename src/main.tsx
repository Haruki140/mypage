import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Page from './App'
import Header from './Header'
import Footer from './Footer'
import './style.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Page />
    <Footer />
  </StrictMode>,
)
