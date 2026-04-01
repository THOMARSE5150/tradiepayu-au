import Nav from './Nav'
import Footer from './Footer'
import BottomNav from './BottomNav'
import BackToTop from './BackToTop'
import ScrollHandler from './ScrollHandler'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full">
      <ScrollHandler />
      <Nav />
      <main className="flex-1 pb-16 sm:pb-0">{children}</main>
      <Footer />
      <BottomNav />
      <BackToTop />
    </div>
  )
}
