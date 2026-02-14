import Navbar from './components/Navbar'
import Home from './pages/home'
import Clark from './pages/Clark'
import Fortress from './pages/Fortress'

export default function App() {
  return (
    <main className="bg-navy-950 min-h-screen text-white selection:bg-crimson-500 selection:text-white">
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
    </main>
  )
}
