import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet, ScrollRestoration } from 'react-router-dom'
import { ThemeProvider } from './components/ThemeProvider.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
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
import Portal from './pages/Portal.jsx'
import Insights from './pages/Insights.jsx'
import Careers from './pages/Careers.jsx'
import About from './pages/About.jsx'
import ClientDashboard from './pages/ClientDashboard.jsx'
import Methodology from './pages/Methodology.jsx'
import Industries from './pages/Industries.jsx'
import Labs from './pages/Labs.jsx'

const RootLayout = () => {
  return (
    <ThemeProvider>
      <ScrollRestoration />
      <Outlet />
    </ThemeProvider>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
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
      { path: '/portal', element: <Portal /> },
      { path: '/insights', element: <Insights /> },
      { path: '/careers', element: <Careers /> },
      { path: '/about', element: <About /> },
      { path: '/dashboard', element: <ClientDashboard /> },
      { path: '/methodology', element: <Methodology /> },
      { path: '/industries', element: <Industries /> },
      { path: '/labs', element: <Labs /> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <WhatsAppButton phone="254714729996" />
  </StrictMode>,
)
