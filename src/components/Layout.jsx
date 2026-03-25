import Nav from './Nav'
import Footer from './Footer'
import ScrollHandler from './ScrollHandler'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollHandler />
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
