import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import Home from './pages/Home'
import Map from './pages/Map'
import Jobs from './pages/Jobs'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/' element={<Jobs />} />
        <Route path='/Map' element={<Map />} />
      </Routes>
      <Analytics/>
    </div>
  )
}

export default App