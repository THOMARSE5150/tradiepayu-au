import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'

// Lazy-load all non-home pages so the initial bundle only ships Home + Layout
const ZellerPage        = lazy(() => import('./pages/providers/ZellerPage'))
const SquarePage        = lazy(() => import('./pages/providers/SquarePage'))
const StripePage        = lazy(() => import('./pages/providers/StripePage'))
const TyroPage          = lazy(() => import('./pages/providers/TyroPage'))
const Shift4Page        = lazy(() => import('./pages/providers/Shift4Page'))
const GlaziersPage      = lazy(() => import('./pages/trades/GlaziersPage'))
const ElectriciansPage  = lazy(() => import('./pages/trades/ElectriciansPage'))
const PlumbersPage      = lazy(() => import('./pages/trades/PlumbersPage'))
const BuildersPage      = lazy(() => import('./pages/trades/BuildersPage'))
const CleanersPage      = lazy(() => import('./pages/trades/CleanersPage'))
const LandscapersPage   = lazy(() => import('./pages/trades/LandscapersPage'))
const RoofersPage       = lazy(() => import('./pages/trades/RoofersPage'))
const PaintersPage      = lazy(() => import('./pages/trades/PaintersPage'))
const TilersPage        = lazy(() => import('./pages/trades/TilersPage'))
const ConcretersPage    = lazy(() => import('./pages/trades/ConcretersPage'))
const CarpentersPage    = lazy(() => import('./pages/trades/CarpentersPage'))
const HVACPage          = lazy(() => import('./pages/trades/HVACPage'))
const GasFittersPage    = lazy(() => import('./pages/trades/GasFittersPage'))
const FencersPage       = lazy(() => import('./pages/trades/FencersPage'))
const PlasterersPage    = lazy(() => import('./pages/trades/PlasterersPage'))
const PoolBuildersPage  = lazy(() => import('./pages/trades/PoolBuildersPage'))
const PestControllersPage = lazy(() => import('./pages/trades/PestControllersPage'))
const WeldersPage       = lazy(() => import('./pages/trades/WeldersPage'))
const ProvidersIndexPage = lazy(() => import('./pages/ProvidersIndexPage'))
const TradesIndexPage    = lazy(() => import('./pages/TradesIndexPage'))
const ComparePage        = lazy(() => import('./pages/ComparePage'))
const CompareIndexPage   = lazy(() => import('./pages/CompareIndexPage'))
const AboutPage         = lazy(() => import('./pages/AboutPage'))
const CalculatorPage    = lazy(() => import('./pages/CalculatorPage'))
const ContactPage       = lazy(() => import('./pages/ContactPage'))
const PrivacyPage       = lazy(() => import('./pages/PrivacyPage'))
const DisclaimerPage    = lazy(() => import('./pages/DisclaimerPage'))
const StateTradePage    = lazy(() => import('./pages/StateTradePage'))
const StateIndexPage    = lazy(() => import('./pages/StateIndexPage'))
const StatesIndexPage   = lazy(() => import('./pages/StatesIndexPage'))
const BlogIndexPage          = lazy(() => import('./pages/blog/BlogIndexPage'))
const EftposFeesPost         = lazy(() => import('./pages/blog/EftposFeesPost'))
const ZellerVsSquarePost     = lazy(() => import('./pages/blog/ZellerVsSquarePost'))
const SoleTraderPost         = lazy(() => import('./pages/blog/SoleTraderCardPaymentsPost'))
const ZellerTerminalPost     = lazy(() => import('./pages/blog/ZellerTerminalReviewPost'))
const SquareTerminalPost     = lazy(() => import('./pages/blog/SquareTerminalReviewPost'))
const BestEftposSoleTradersPost = lazy(() => import('./pages/blog/BestEftposSoleTradersPost'))
const StripeTerminalPost = lazy(() => import('./pages/blog/StripeTerminalReviewPost'))
const TyroReviewPost    = lazy(() => import('./pages/blog/TyroReviewPost'))
const Shift4ReviewPost  = lazy(() => import('./pages/blog/Shift4ReviewPost'))
const ZellerVsTyroPost  = lazy(() => import('./pages/blog/ZellerVsTyroPost'))
const SurchargingPost   = lazy(() => import('./pages/blog/SurchargingTradiesPost'))
const BuildersPost           = lazy(() => import('./pages/blog/BestEftposBuildersPost'))
const ZellerSquareStripePost = lazy(() => import('./pages/blog/ZellerSquareStripePost'))
const BestEftposPlumbersPost = lazy(() => import('./pages/blog/BestEftposPlumbersPost'))
const StripeVsSquarePost     = lazy(() => import('./pages/blog/StripeVsSquarePost'))
const GetPaidFasterPost      = lazy(() => import('./pages/blog/GetPaidFasterPost'))
const NotFoundPage      = lazy(() => import('./pages/NotFoundPage'))

function PageLoader() {
  return (
    <div className="animate-pulse">
      <div className="bg-brand-dark h-52 sm:h-64 w-full" />
      <div className="container-page py-10 space-y-3">
        <div className="h-3 bg-slate-200 rounded-full w-24" />
        <div className="h-6 bg-slate-200 rounded-full w-2/3" />
        <div className="h-4 bg-slate-100 rounded-full w-1/2 mt-1" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-6">
          {[0,1,2].map(i => (
            <div key={i} className="h-64 bg-slate-100 rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Layout>
      <ErrorBoundary>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/providers" element={<ProvidersIndexPage />} />
          <Route path="/trades" element={<TradesIndexPage />} />
          <Route path="/compare" element={<CompareIndexPage />} />
          <Route path="/compare/:slug" element={<ComparePage />} />
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
          <Route path="/trades/gas-fitters" element={<GasFittersPage />} />
          <Route path="/trades/fencers" element={<FencersPage />} />
          <Route path="/trades/plasterers" element={<PlasterersPage />} />
          <Route path="/trades/pool-builders" element={<PoolBuildersPage />} />
          <Route path="/trades/pest-controllers" element={<PestControllersPage />} />
          <Route path="/trades/welders" element={<WeldersPage />} />
          <Route path="/trades/:tradeSlug/:stateSlug" element={<StateTradePage />} />
          <Route path="/states" element={<StatesIndexPage />} />
          <Route path="/states/:stateSlug" element={<StateIndexPage />} />
          <Route path="/states/:stateSlug/:tradeSlug" element={<StateTradePage />} />
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/eftpos-fees-tradies-australia-2026" element={<EftposFeesPost />} />
          <Route path="/blog/zeller-vs-square-eftpos-tradies" element={<ZellerVsSquarePost />} />
          <Route path="/blog/accept-card-payments-sole-trader-australia" element={<SoleTraderPost />} />
          <Route path="/blog/zeller-terminal-1-review-2026" element={<ZellerTerminalPost />} />
          <Route path="/blog/square-terminal-review-2026" element={<SquareTerminalPost />} />
          <Route path="/blog/best-eftpos-sole-traders-australia-2026" element={<BestEftposSoleTradersPost />} />
          <Route path="/blog/stripe-terminal-review-2026" element={<StripeTerminalPost />} />
          <Route path="/blog/tyro-eftpos-review-2026" element={<TyroReviewPost />} />
          <Route path="/blog/shift4-eftpos-review-2026" element={<Shift4ReviewPost />} />
          <Route path="/blog/zeller-vs-tyro-eftpos-tradies" element={<ZellerVsTyroPost />} />
          <Route path="/blog/surcharging-eftpos-tradies-australia-2026" element={<SurchargingPost />} />
          <Route path="/blog/best-eftpos-builders-australia-2026" element={<BuildersPost />} />
          <Route path="/blog/zeller-vs-square-vs-stripe-eftpos-tradies-2026" element={<ZellerSquareStripePost />} />
          <Route path="/blog/best-eftpos-plumbers-australia-2026" element={<BestEftposPlumbersPost />} />
          <Route path="/blog/stripe-vs-square-eftpos-australia-2026" element={<StripeVsSquarePost />} />
          <Route path="/blog/how-to-get-paid-faster-sole-trader-australia" element={<GetPaidFasterPost />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      </ErrorBoundary>
    </Layout>
  )
}
