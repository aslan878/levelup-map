import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Generator from './pages/Generator'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  
  // Lifted state for roadmap persistence across page navigation
  const [roadmapData, setRoadmapData] = useState(null)
  const [roadmapInput, setRoadmapInput] = useState('')
  const [completedNodes, setCompletedNodes] = useState(new Set())
  const [selectedNode, setSelectedNode] = useState(null)

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />
      case 'generator':
        return (
          <Generator
            // Pass state down as props
            savedData={roadmapData}
            setSavedData={setRoadmapData}
            savedInput={roadmapInput}
            setSavedInput={setRoadmapInput}
            savedCompletedNodes={completedNodes}
            setSavedCompletedNodes={setCompletedNodes}
            savedSelectedNode={selectedNode}
            setSavedSelectedNode={setSelectedNode}
          />
        )
      case 'about':
        return <About onNavigate={setCurrentPage} />
      case 'contact':
        return <Contact onNavigate={setCurrentPage} />
      default:
        return <Home onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
    </div>
  )
}

export default App
