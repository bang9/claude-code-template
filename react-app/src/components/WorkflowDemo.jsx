import React, { useState, useEffect } from 'react'
import './WorkflowDemo.css'

const WorkflowDemo = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const steps = [
    {
      id: 1,
      command: '/work start "로그인 기능 개선"',
      description: '새 작업 시작',
      output: [
        '🚀 새 작업 시작: WORK-001',
        '🌿 브랜치 생성: feat/WORK-001-login-improvement',
        '📋 작업 문서 생성 완료',
        '✅ 개발 환경 준비 완료'
      ]
    },
    {
      id: 2,
      command: '# 개발 작업 수행...',
      description: '코드 개발 및 구현',
      output: [
        '📝 로그인 폼 컴포넌트 수정',
        '🔒 보안 검증 로직 추가',
        '🎨 UI/UX 개선사항 적용',
        '📱 반응형 디자인 최적화'
      ]
    },
    {
      id: 3,
      command: '/work',
      description: '현재 작업 상태 확인',
      output: [
        '📊 현재 작업: WORK-001 - 로그인 기능 개선',
        '🔄 상태: 진행 중',
        '📁 수정된 파일: 5개',
        '✅ 작업 완료 준비됨 - /work done 실행 가능'
      ]
    },
    {
      id: 4,
      command: '/work done',
      description: '작업 완료 및 자동화',
      output: [
        '🔍 코드 품질 검사 실행...',
        '✅ 린팅 통과',
        '✅ 타입 검사 통과',
        '✅ 테스트 실행 완료',
        '📝 커밋 생성: feat(auth): improve login functionality',
        '🚀 PR 생성: #123 - 로그인 기능 개선',
        '📋 작업 문서 업데이트 완료'
      ]
    }
  ]

  useEffect(() => {
    let interval
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep(prev => (prev + 1) % steps.length)
      }, 3000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, steps.length])

  const handleStepClick = (index) => {
    setCurrentStep(index)
    setIsPlaying(false)
  }

  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section className="workflow-demo">
      <div className="container">
        <div className="demo-header">
          <h2>워크플로우 데모</h2>
          <p>실제 개발 과정을 통해 템플릿의 동작을 확인해보세요</p>
          <button className="play-button" onClick={togglePlayback}>
            {isPlaying ? '⏸️ 일시정지' : '▶️ 자동 재생'}
          </button>
        </div>
        
        <div className="demo-content">
          <div className="steps-nav">
            {steps.map((step, index) => (
              <button
                key={step.id}
                className={`step-button ${index === currentStep ? 'active' : ''}`}
                onClick={() => handleStepClick(index)}
              >
                <span className="step-number">{step.id}</span>
                <span className="step-title">{step.description}</span>
              </button>
            ))}
          </div>
          
          <div className="demo-terminal">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="terminal-button red"></span>
                <span className="terminal-button yellow"></span>
                <span className="terminal-button green"></span>
              </div>
              <span className="terminal-title">
                단계 {currentStep + 1}: {steps[currentStep].description}
              </span>
            </div>
            <div className="terminal-body">
              <div className="terminal-line command-line">
                <span className="prompt">$</span>
                <span className="command">{steps[currentStep].command}</span>
              </div>
              {steps[currentStep].output.map((line, index) => (
                <div key={index} className="terminal-line output-line">
                  <span className="output">{line}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkflowDemo