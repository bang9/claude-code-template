import React from 'react'
import './TemplateOverview.css'

const TemplateOverview = () => {
  return (
    <section className="template-overview">
      <div className="container">
        <div className="overview-content">
          <div className="overview-text">
            <h2>프로젝트 개발을 위한 완전한 AI 워크플로우</h2>
            <p className="overview-description">
              Claude Code 템플릿은 AI 에이전트와 함께하는 현대적인 소프트웨어 개발 워크플로우를 제공합니다. 
              단일 명령어로 작업을 시작하고, 자동화된 품질 검사와 함께 완료할 수 있습니다.
            </p>
            <div className="overview-stats">
              <div className="stat">
                <span className="stat-number">1</span>
                <span className="stat-label">통합 명령어</span>
              </div>
              <div className="stat">
                <span className="stat-number">자동</span>
                <span className="stat-label">품질 검사</span>
              </div>
              <div className="stat">
                <span className="stat-number">스마트</span>
                <span className="stat-label">문서화</span>
              </div>
            </div>
          </div>
          <div className="overview-visual">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span className="terminal-button red"></span>
                  <span className="terminal-button yellow"></span>
                  <span className="terminal-button green"></span>
                </div>
                <span className="terminal-title">claude-code-template</span>
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="prompt">$</span>
                  <span className="command">/work start "새 기능 구현"</span>
                </div>
                <div className="terminal-line">
                  <span className="output">🚀 새 작업 시작: WORK-001</span>
                </div>
                <div className="terminal-line">
                  <span className="output">🌿 브랜치 생성: feat/WORK-001-new-feature</span>
                </div>
                <div className="terminal-line">
                  <span className="output">📋 작업 문서 생성 완료</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TemplateOverview