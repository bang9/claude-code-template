import React from 'react'
import './Header.css'

const Header = ({ theme, onToggleTheme }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="header-title">Claude Code 템플릿</h1>
          <p className="header-subtitle">AI 기반 통합 개발 워크플로우</p>
        </div>
        <div className="header-right">
          <button 
            className="theme-toggle" 
            onClick={onToggleTheme}
            aria-label="테마 전환"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header