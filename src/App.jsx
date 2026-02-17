import Navbar from './components/Navbar'
import Home from './pages/Home'
import Clark from './pages/Clark'
import Fortress from './pages/Fortress'
import LastPage from './pages/LastPage'

export default function App() {
  return (
    <main className="bg-hero-black min-h-screen text-hero-text selection:bg-hero-red selection:text-hero-text">
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="clark">
        <Clark />
      </section>
      <section id="fortress">
        <Fortress />
      </section>
      <section id="lastpage">
        <LastPage />
      </section>
    </main>
  )
}
