import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

import Home from './pages/Home'
import ZellerPage from './pages/providers/ZellerPage'
import SquarePage from './pages/providers/SquarePage'
import StripePage from './pages/providers/StripePage'
import TyroPage from './pages/providers/TyroPage'
import GlaziersPage from './pages/trades/GlaziersPage'
import ElectriciansPage from './pages/trades/ElectriciansPage'
import PlumbersPage from './pages/trades/PlumbersPage'
import BuildersPage from './pages/trades/BuildersPage'
import CleanersPage from './pages/trades/CleanersPage'
import LandscapersPage from './pages/trades/LandscapersPage'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/providers/zeller" element={<ZellerPage />} />
        <Route path="/providers/square" element={<SquarePage />} />
        <Route path="/providers/stripe" element={<StripePage />} />
        <Route path="/providers/tyro" element={<TyroPage />} />
        <Route path="/trades/glaziers" element={<GlaziersPage />} />
        <Route path="/trades/electricians" element={<ElectriciansPage />} />
        <Route path="/trades/plumbers" element={<PlumbersPage />} />
        <Route path="/trades/builders" element={<BuildersPage />} />
        <Route path="/trades/cleaners" element={<CleanersPage />} />
        <Route path="/trades/landscapers" element={<LandscapersPage />} />
      </Routes>
    </Layout>
  )
}
