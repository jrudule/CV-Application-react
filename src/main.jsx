import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import General from './General.jsx'
import Educations from './Educations.jsx'
import Experience from './Experience.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <General />
    <Educations />
    <Experience />
  </StrictMode>,
)
