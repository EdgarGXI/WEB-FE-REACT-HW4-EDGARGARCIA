import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

import Header from './components/header'
import Footer from './components/footer'
import Diagnostico from './components/diagnostico'
import Introduccion from './components/introduccion'
import Identidad from './components/identidad'
import Objetivos from './components/objetivos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Introduccion />
        <Diagnostico />
        <Identidad />
        <Objetivos />
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
