import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TemplateOverview from './components/TemplateOverview'
import WorkflowDemo from './components/WorkflowDemo'
import Features from './components/Features'

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <TemplateOverview />
        <Features />
        <WorkflowDemo />
      </main>
    </div>
  )
}

export default App
