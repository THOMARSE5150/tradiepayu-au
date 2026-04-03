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
const GlossaryPage      = lazy(() => import('./pages/GlossaryPage'))
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
const BestEftposPlumbersPost      = lazy(() => import('./pages/blog/BestEftposPlumbersPost'))
const StripeVsSquarePost          = lazy(() => import('./pages/blog/StripeVsSquarePost'))
const GetPaidFasterPost           = lazy(() => import('./pages/blog/GetPaidFasterPost'))
const BestEftposElectriciansPost  = lazy(() => import('./pages/blog/BestEftposElectriciansPost'))
const BestEftposGlaziersPost      = lazy(() => import('./pages/blog/BestEftposGlaziersPost'))
const BestEftposRoofersPost       = lazy(() => import('./pages/blog/BestEftposRoofersPost'))
const BestEftposHVACPost          = lazy(() => import('./pages/blog/BestEftposHVACPost'))
const BestEftposPaintersPost      = lazy(() => import('./pages/blog/BestEftposPaintersPost'))
const BestEftposTilersPost        = lazy(() => import('./pages/blog/BestEftposTilersPost'))
const BestEftposConcretersPost    = lazy(() => import('./pages/blog/BestEftposConcretersPost'))
const BestEftposCarpentersPost    = lazy(() => import('./pages/blog/BestEftposCarpentersPost'))
const BestEftposGasFittersPost    = lazy(() => import('./pages/blog/BestEftposGasFittersPost'))
const BestEftposFencersPost       = lazy(() => import('./pages/blog/BestEftposFencersPost'))
const BestEftposPlasterersPost    = lazy(() => import('./pages/blog/BestEftposPlasterersPost'))
const BestEftposPoolBuildersPost  = lazy(() => import('./pages/blog/BestEftposPoolBuildersPost'))
const BestEftposPestControllersPost = lazy(() => import('./pages/blog/BestEftposPestControllersPost'))
const BestEftposWeldersPost       = lazy(() => import('./pages/blog/BestEftposWeldersPost'))
const BestEftposCleanersPost      = lazy(() => import('./pages/blog/BestEftposCleanersPost'))
const BestEftposLandscapersPost   = lazy(() => import('./pages/blog/BestEftposLandscapersPost'))
const BestEftposElectriciansNSWPost = lazy(() => import('./pages/blog/BestEftposElectriciansNSWPost'))
const BestEftposElectriciansVICPost = lazy(() => import('./pages/blog/BestEftposElectriciansVICPost'))
const BestEftposElectriciansQLDPost = lazy(() => import('./pages/blog/BestEftposElectriciansQLDPost'))
const BestEftposPlumbersNSWPost   = lazy(() => import('./pages/blog/BestEftposPlumbersNSWPost'))
const BestEftposPlumbersVICPost   = lazy(() => import('./pages/blog/BestEftposPlumbersVICPost'))
const BestEftposPlumbersQLDPost   = lazy(() => import('./pages/blog/BestEftposPlumbersQLDPost'))
const BestEftposBuildersNSWPost   = lazy(() => import('./pages/blog/BestEftposBuildersNSWPost'))
const BestEftposBuildersVICPost   = lazy(() => import('./pages/blog/BestEftposBuildersVICPost'))
const BestEftposBuildersQLDPost   = lazy(() => import('./pages/blog/BestEftposBuildersQLDPost'))
// City posts
const BestEftposElectriciansSydneyPost  = lazy(() => import('./pages/blog/BestEftposElectricianssydney'))
const BestEftposElectriciansMelbournePost = lazy(() => import('./pages/blog/BestEftposElectriciansMelbourne'))
const BestEftposElectriciansBrisbanePost  = lazy(() => import('./pages/blog/BestEftposElectriciansBrisbane'))
const BestEftposPlumbersSydneyPost      = lazy(() => import('./pages/blog/BestEftposPlumbersSydney'))
const BestEftposPlumbersMelbournePost   = lazy(() => import('./pages/blog/BestEftposPlumbersMelbourne'))
const BestEftposPlumbersBrisbanePost    = lazy(() => import('./pages/blog/BestEftposPlumbersBrisbane'))
const BestEftposBuildersSydneyPost      = lazy(() => import('./pages/blog/BestEftposBuildersSydney'))
const BestEftposBuildersMelbournePost   = lazy(() => import('./pages/blog/BestEftposBuildersMelbourne'))
const BestEftposBuildersBrisbanePost    = lazy(() => import('./pages/blog/BestEftposBuildersBrisbane'))
// WA / SA state posts
const BestEftposElectriciansWAPost  = lazy(() => import('./pages/blog/BestEftposElectriciansWAPost'))
const BestEftposPlumbersWAPost      = lazy(() => import('./pages/blog/BestEftposPlumbersWAPost'))
const BestEftposBuildersWAPost      = lazy(() => import('./pages/blog/BestEftposBuildersWAPost'))
const BestEftposElectriciansSAPost  = lazy(() => import('./pages/blog/BestEftposElectriciansSAPost'))
const BestEftposPlumbersSAPost      = lazy(() => import('./pages/blog/BestEftposPlumbersSAPost'))
const BestEftposBuildersSAPost      = lazy(() => import('./pages/blog/BestEftposBuildersSAPost'))
// Painters & Concreters × NSW/VIC/QLD
const BestEftposPaintersNSWPost     = lazy(() => import('./pages/blog/BestEftposPaintersNSWPost'))
const BestEftposPaintersVICPost     = lazy(() => import('./pages/blog/BestEftposPaintersVICPost'))
const BestEftposPaintersQLDPost     = lazy(() => import('./pages/blog/BestEftposPaintersQLDPost'))
const BestEftposConcretersNSWPost   = lazy(() => import('./pages/blog/BestEftposConcretersNSWPost'))
const BestEftposConcretersVICPost   = lazy(() => import('./pages/blog/BestEftposConcretersVICPost'))
const BestEftposConcretersQLDPost   = lazy(() => import('./pages/blog/BestEftposConcretersQLDPost'))
// Painters city guides
const BestEftposPaintersSydney      = lazy(() => import('./pages/blog/BestEftposPaintersSydney'))
const BestEftposPaintersMelbourne   = lazy(() => import('./pages/blog/BestEftposPaintersMelbourne'))
const BestEftposPaintersBrisbane    = lazy(() => import('./pages/blog/BestEftposPaintersBrisbane'))
// Concreters city guides
const BestEftposConcreterssSydney   = lazy(() => import('./pages/blog/BestEftposConcreterssSydney'))
const BestEftposConcretersMelbourne = lazy(() => import('./pages/blog/BestEftposConcretersMelbourne'))
const BestEftposConcreterssBrisbane = lazy(() => import('./pages/blog/BestEftposConcreterssBrisbane'))
// Perth city guides
const BestEftposElectriciansPerth   = lazy(() => import('./pages/blog/BestEftposElectriciansPerth'))
const BestEftposPlumbersPerth       = lazy(() => import('./pages/blog/BestEftposPlumbersPerth'))
const BestEftposBuildersPerth       = lazy(() => import('./pages/blog/BestEftposBuildersPerth'))
// Adelaide city guides
const BestEftposElectriciansAdelaide = lazy(() => import('./pages/blog/BestEftposElectriciansAdelaide'))
const BestEftposPlumbersAdelaide    = lazy(() => import('./pages/blog/BestEftposPlumbersAdelaide'))
const BestEftposBuildersAdelaide    = lazy(() => import('./pages/blog/BestEftposBuildersAdelaide'))
// Roofers state guides
const BestEftposRoofersNSWPost      = lazy(() => import('./pages/blog/BestEftposRoofersNSWPost'))
const BestEftposRoofersVICPost      = lazy(() => import('./pages/blog/BestEftposRoofersVICPost'))
const BestEftposRoofersQLDPost      = lazy(() => import('./pages/blog/BestEftposRoofersQLDPost'))
// Roofers city guides
const BestEftposRoofersSydney       = lazy(() => import('./pages/blog/BestEftposRoofersSydney'))
const BestEftposRoofersMelbourne    = lazy(() => import('./pages/blog/BestEftposRoofersMelbourne'))
const BestEftposRoofersBrisbane     = lazy(() => import('./pages/blog/BestEftposRoofersBrisbane'))
// Painters & Concreters × WA/SA state guides
const BestEftposPaintersWAPost      = lazy(() => import('./pages/blog/BestEftposPaintersWAPost'))
const BestEftposPaintersSAPost      = lazy(() => import('./pages/blog/BestEftposPaintersSAPost'))
const BestEftposConcretersWAPost    = lazy(() => import('./pages/blog/BestEftposConcretersWAPost'))
const BestEftposConcretersSAPost    = lazy(() => import('./pages/blog/BestEftposConcretersSAPost'))
// Painters & Concreters × Perth/Adelaide city guides
const BestEftposPaintersPerth       = lazy(() => import('./pages/blog/BestEftposPaintersPerth'))
const BestEftposPaintersAdelaide    = lazy(() => import('./pages/blog/BestEftposPaintersAdelaide'))
const BestEftposConcretersPerth     = lazy(() => import('./pages/blog/BestEftposConcretersPerth'))
const BestEftposConcretersAdelaide  = lazy(() => import('./pages/blog/BestEftposConcretersAdelaide'))
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
          <Route path="/blog/best-eftpos-electricians-australia-2026" element={<BestEftposElectriciansPost />} />
          <Route path="/blog/best-eftpos-glaziers-australia-2026" element={<BestEftposGlaziersPost />} />
          <Route path="/blog/best-eftpos-roofers-australia-2026" element={<BestEftposRoofersPost />} />
          <Route path="/blog/best-eftpos-hvac-australia-2026" element={<BestEftposHVACPost />} />
          <Route path="/blog/best-eftpos-painters-australia-2026" element={<BestEftposPaintersPost />} />
          <Route path="/blog/best-eftpos-tilers-australia-2026" element={<BestEftposTilersPost />} />
          <Route path="/blog/best-eftpos-concreters-australia-2026" element={<BestEftposConcretersPost />} />
          <Route path="/blog/best-eftpos-carpenters-australia-2026" element={<BestEftposCarpentersPost />} />
          <Route path="/blog/best-eftpos-gas-fitters-australia-2026" element={<BestEftposGasFittersPost />} />
          <Route path="/blog/best-eftpos-fencers-australia-2026" element={<BestEftposFencersPost />} />
          <Route path="/blog/best-eftpos-plasterers-australia-2026" element={<BestEftposPlasterersPost />} />
          <Route path="/blog/best-eftpos-pool-builders-australia-2026" element={<BestEftposPoolBuildersPost />} />
          <Route path="/blog/best-eftpos-pest-controllers-australia-2026" element={<BestEftposPestControllersPost />} />
          <Route path="/blog/best-eftpos-welders-australia-2026" element={<BestEftposWeldersPost />} />
          <Route path="/blog/best-eftpos-cleaners-australia-2026" element={<BestEftposCleanersPost />} />
          <Route path="/blog/best-eftpos-landscapers-australia-2026" element={<BestEftposLandscapersPost />} />
          <Route path="/blog/best-eftpos-electricians-nsw-2026" element={<BestEftposElectriciansNSWPost />} />
          <Route path="/blog/best-eftpos-electricians-vic-2026" element={<BestEftposElectriciansVICPost />} />
          <Route path="/blog/best-eftpos-electricians-qld-2026" element={<BestEftposElectriciansQLDPost />} />
          <Route path="/blog/best-eftpos-plumbers-nsw-2026" element={<BestEftposPlumbersNSWPost />} />
          <Route path="/blog/best-eftpos-plumbers-vic-2026" element={<BestEftposPlumbersVICPost />} />
          <Route path="/blog/best-eftpos-plumbers-qld-2026" element={<BestEftposPlumbersQLDPost />} />
          <Route path="/blog/best-eftpos-builders-nsw-2026" element={<BestEftposBuildersNSWPost />} />
          <Route path="/blog/best-eftpos-builders-vic-2026" element={<BestEftposBuildersVICPost />} />
          <Route path="/blog/best-eftpos-builders-qld-2026" element={<BestEftposBuildersQLDPost />} />
          <Route path="/blog/best-eftpos-electricians-sydney-2026" element={<BestEftposElectriciansSydneyPost />} />
          <Route path="/blog/best-eftpos-electricians-melbourne-2026" element={<BestEftposElectriciansMelbournePost />} />
          <Route path="/blog/best-eftpos-electricians-brisbane-2026" element={<BestEftposElectriciansBrisbanePost />} />
          <Route path="/blog/best-eftpos-plumbers-sydney-2026" element={<BestEftposPlumbersSydneyPost />} />
          <Route path="/blog/best-eftpos-plumbers-melbourne-2026" element={<BestEftposPlumbersMelbournePost />} />
          <Route path="/blog/best-eftpos-plumbers-brisbane-2026" element={<BestEftposPlumbersBrisbanePost />} />
          <Route path="/blog/best-eftpos-builders-sydney-2026" element={<BestEftposBuildersSydneyPost />} />
          <Route path="/blog/best-eftpos-builders-melbourne-2026" element={<BestEftposBuildersMelbournePost />} />
          <Route path="/blog/best-eftpos-builders-brisbane-2026" element={<BestEftposBuildersBrisbanePost />} />
          <Route path="/blog/best-eftpos-electricians-wa-2026" element={<BestEftposElectriciansWAPost />} />
          <Route path="/blog/best-eftpos-plumbers-wa-2026" element={<BestEftposPlumbersWAPost />} />
          <Route path="/blog/best-eftpos-builders-wa-2026" element={<BestEftposBuildersWAPost />} />
          <Route path="/blog/best-eftpos-electricians-sa-2026" element={<BestEftposElectriciansSAPost />} />
          <Route path="/blog/best-eftpos-plumbers-sa-2026" element={<BestEftposPlumbersSAPost />} />
          <Route path="/blog/best-eftpos-builders-sa-2026" element={<BestEftposBuildersSAPost />} />
          <Route path="/blog/best-eftpos-painters-nsw-2026" element={<BestEftposPaintersNSWPost />} />
          <Route path="/blog/best-eftpos-painters-vic-2026" element={<BestEftposPaintersVICPost />} />
          <Route path="/blog/best-eftpos-painters-qld-2026" element={<BestEftposPaintersQLDPost />} />
          <Route path="/blog/best-eftpos-concreters-nsw-2026" element={<BestEftposConcretersNSWPost />} />
          <Route path="/blog/best-eftpos-concreters-vic-2026" element={<BestEftposConcretersVICPost />} />
          <Route path="/blog/best-eftpos-concreters-qld-2026" element={<BestEftposConcretersQLDPost />} />
                    <Route path="/blog/best-eftpos-painters-sydney-2026" element={<BestEftposPaintersSydney />} />
          <Route path="/blog/best-eftpos-painters-melbourne-2026" element={<BestEftposPaintersMelbourne />} />
          <Route path="/blog/best-eftpos-painters-brisbane-2026" element={<BestEftposPaintersBrisbane />} />
          <Route path="/blog/best-eftpos-concreters-sydney-2026" element={<BestEftposConcreterssSydney />} />
          <Route path="/blog/best-eftpos-concreters-melbourne-2026" element={<BestEftposConcretersMelbourne />} />
          <Route path="/blog/best-eftpos-concreters-brisbane-2026" element={<BestEftposConcreterssBrisbane />} />
          <Route path="/blog/best-eftpos-electricians-perth-2026" element={<BestEftposElectriciansPerth />} />
          <Route path="/blog/best-eftpos-plumbers-perth-2026" element={<BestEftposPlumbersPerth />} />
          <Route path="/blog/best-eftpos-builders-perth-2026" element={<BestEftposBuildersPerth />} />
          <Route path="/blog/best-eftpos-electricians-adelaide-2026" element={<BestEftposElectriciansAdelaide />} />
          <Route path="/blog/best-eftpos-plumbers-adelaide-2026" element={<BestEftposPlumbersAdelaide />} />
          <Route path="/blog/best-eftpos-builders-adelaide-2026" element={<BestEftposBuildersAdelaide />} />
          <Route path="/blog/best-eftpos-roofers-nsw-2026" element={<BestEftposRoofersNSWPost />} />
          <Route path="/blog/best-eftpos-roofers-vic-2026" element={<BestEftposRoofersVICPost />} />
          <Route path="/blog/best-eftpos-roofers-qld-2026" element={<BestEftposRoofersQLDPost />} />
          <Route path="/blog/best-eftpos-roofers-sydney-2026" element={<BestEftposRoofersSydney />} />
          <Route path="/blog/best-eftpos-roofers-melbourne-2026" element={<BestEftposRoofersMelbourne />} />
          <Route path="/blog/best-eftpos-roofers-brisbane-2026" element={<BestEftposRoofersBrisbane />} />
          <Route path="/blog/best-eftpos-painters-wa-2026" element={<BestEftposPaintersWAPost />} />
          <Route path="/blog/best-eftpos-painters-sa-2026" element={<BestEftposPaintersSAPost />} />
          <Route path="/blog/best-eftpos-concreters-wa-2026" element={<BestEftposConcretersWAPost />} />
          <Route path="/blog/best-eftpos-concreters-sa-2026" element={<BestEftposConcretersSAPost />} />
          <Route path="/blog/best-eftpos-painters-perth-2026" element={<BestEftposPaintersPerth />} />
          <Route path="/blog/best-eftpos-painters-adelaide-2026" element={<BestEftposPaintersAdelaide />} />
          <Route path="/blog/best-eftpos-concreters-perth-2026" element={<BestEftposConcretersPerth />} />
          <Route path="/blog/best-eftpos-concreters-adelaide-2026" element={<BestEftposConcretersAdelaide />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/glossary" element={<GlossaryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      </ErrorBoundary>
    </Layout>
  )
}
