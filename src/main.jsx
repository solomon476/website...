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
import Amillia from './pages/team/Amillia.jsx'
import Portal from './pages/Portal.jsx'
import Insights from './pages/Insights.jsx'
import Careers from './pages/Careers.jsx'
import About from './pages/About.jsx'
import ClientDashboard from './pages/ClientDashboard.jsx'
import Methodology from './pages/Methodology.jsx'
import Industries from './pages/Industries.jsx'
import Labs from './pages/Labs.jsx'

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
  { path: '/team/amillia', element: <Amillia /> },
  { path: '/portal', element: <Portal /> },
  { path: '/insights', element: <Insights /> },
  { path: '/careers', element: <Careers /> },
  { path: '/about', element: <About /> },
  { path: '/dashboard', element: <ClientDashboard /> },
  { path: '/methodology', element: <Methodology /> },
  { path: '/industries', element: <Industries /> },
  { path: '/labs', element: <Labs /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
