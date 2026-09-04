import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import FullCycleDevelopment from './pages/FullCycleDevelopment.jsx'
import SurgicalAudit from './pages/SurgicalAudit.jsx'
import ArchitecturalScaling from './pages/ArchitecturalScaling.jsx'
import WhiteCollarPartner from './pages/WhiteCollarPartner.jsx'
import Contact from './pages/Contact.jsx'
import Ian from './pages/team/Ian.jsx'
import Hillary from './pages/team/Hillary.jsx'
import Alice from './pages/team/Alice.jsx'
import Noella from './pages/team/Noella.jsx'
import Solomon from './pages/team/Solomon.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/services/full-cycle-development', element: <FullCycleDevelopment /> },
  { path: '/services/surgical-audit', element: <SurgicalAudit /> },
  { path: '/services/architectural-scaling', element: <ArchitecturalScaling /> },
  { path: '/services/white-collar-partner', element: <WhiteCollarPartner /> },
  { path: '/contact', element: <Contact /> },
  { path: '/team/ian', element: <Ian /> },
  { path: '/team/hillary', element: <Hillary /> },
  { path: '/team/alice', element: <Alice /> },
  { path: '/team/noella', element: <Noella /> },
  { path: '/team/solomon', element: <Solomon /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
