import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

import Home from './pages/Home'
import ZellerPage from './pages/providers/ZellerPage'
import SquarePage from './pages/providers/SquarePage'
import StripePage from './pages/providers/StripePage'
import TyroPage from './pages/providers/TyroPage'
import Shift4Page from './pages/providers/Shift4Page'
import GlaziersPage from './pages/trades/GlaziersPage'
import ElectriciansPage from './pages/trades/ElectriciansPage'
import PlumbersPage from './pages/trades/PlumbersPage'
import BuildersPage from './pages/trades/BuildersPage'
import CleanersPage from './pages/trades/CleanersPage'
import LandscapersPage from './pages/trades/LandscapersPage'
import RoofersPage from './pages/trades/RoofersPage'
import PaintersPage from './pages/trades/PaintersPage'
import TilersPage from './pages/trades/TilersPage'
import ConcretersPage from './pages/trades/ConcretersPage'
import CarpentersPage from './pages/trades/CarpentersPage'
import HVACPage from './pages/trades/HVACPage'
import GasFittersPage from './pages/trades/GasFittersPage'
import FencersPage from './pages/trades/FencersPage'
import PlasterersPage from './pages/trades/PlasterersPage'
import PoolBuildersPage from './pages/trades/PoolBuildersPage'
import PestControllersPage from './pages/trades/PestControllersPage'
import WeldersPage from './pages/trades/WeldersPage'
import NotFoundPage from './pages/NotFoundPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage'
import DisclaimerPage from './pages/DisclaimerPage'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/providers/zeller" element={<ZellerPage />} />
        <Route path="/providers/square" element={<SquarePage />} />
        <Route path="/providers/stripe" element={<StripePage />} />
        <Route path="/providers/tyro" element={<TyroPage />} />
        <Route path="/providers/shift4" element={<Shift4Page />} />
        <Route path="/trades/glaziers" element={<GlaziersPage />} />
        <Route path="/trades/electricians" element={<ElectriciansPage />} />
        <Route path="/trades/plumbers" element={<PlumbersPage />} />
        <Route path="/trades/builders" element={<BuildersPage />} />
        <Route path="/trades/cleaners" element={<CleanersPage />} />
        <Route path="/trades/landscapers" element={<LandscapersPage />} />
        <Route path="/trades/roofers" element={<RoofersPage />} />
        <Route path="/trades/painters" element={<PaintersPage />} />
        <Route path="/trades/tilers" element={<TilersPage />} />
        <Route path="/trades/concreters" element={<ConcretersPage />} />
        <Route path="/trades/carpenters" element={<CarpentersPage />} />
        <Route path="/trades/hvac" element={<HVACPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/trades/gas-fitters" element={<GasFittersPage />} />
        <Route path="/trades/fencers" element={<FencersPage />} />
        <Route path="/trades/plasterers" element={<PlasterersPage />} />
        <Route path="/trades/pool-builders" element={<PoolBuildersPage />} />
        <Route path="/trades/pest-controllers" element={<PestControllersPage />} />
        <Route path="/trades/welders" element={<WeldersPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  )
}
