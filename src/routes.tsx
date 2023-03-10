import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Partners } from './pages/Partners'
import { Contact } from './pages/Contact'
import { Support } from './pages/Support'
import { Mission } from './pages/Mission'
import { Portal } from './pages/Portal'
import { Projects } from './pages/Projects'
import { International } from './pages/International'
import { Awards } from './pages/Awards'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<About />} />
        <Route path="/parceiros" element={<Partners />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/apoie" element={<Support />} />
        <Route path="/missao" element={<Mission />} />
        <Route path="/portal-da-transparencia" element={<Portal />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/internacionalmente" element={<International />} />
        <Route path="/premiacoes" element={<Awards />} />
      </Routes>
    </Router>
  )
}
