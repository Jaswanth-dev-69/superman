import Navbar from './components/Navbar'
import Home from './pages/Home'
import Clark from './pages/Clark'
import Fortress from './pages/Fortress'
import LastPage from './pages/LastPage'

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
      <section id="lastpage">
        <LastPage />
      </section>
    </main>
  )
}
