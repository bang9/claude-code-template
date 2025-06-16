import React from 'react'
import './Features.css'

const Features = () => {
  const features = [
    {
      id: 1,
      icon: '🎯',
      title: '통합 작업 관리',
      description: '단일 /work 명령어로 작업 시작부터 완료까지 모든 프로세스를 관리합니다.',
      items: ['작업 생성 및 추적', '자동 브랜치 생성', '스마트 문서화']
    },
    {
      id: 2,
      icon: '🤖',
      title: '지능형 자동화',
      description: 'AI가 작업 복잡도를 판단하여 적절한 문서 템플릿을 자동 선택합니다.',
      items: ['복잡도 자동 평가', '템플릿 자동 선택', '컨벤셔널 커밋 생성']
    },
    {
      id: 3,
      icon: '🔧',
      title: '품질 보증',
      description: '코드 포매팅, 린팅, 테스팅을 자동으로 실행하여 일관된 품질을 유지합니다.',
      items: ['자동 코드 검사', '테스트 실행', '빌드 검증']
    },
    {
      id: 4,
      icon: '🚀',
      title: '원활한 배포',
      description: '작업 완료 시 자동으로 PR을 생성하고 팀 협업을 위한 문서를 제공합니다.',
      items: ['자동 PR 생성', '변경사항 요약', '팀 협업 지원']
    }
  ]

  return (
    <section className="features">
      <div className="container">
        <div className="features-header">
          <h2>핵심 기능</h2>
          <p>개발 워크플로우를 혁신하는 스마트한 기능들</p>
        </div>
        <div className="features-grid">
          {features.map(feature => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <ul className="feature-items">
                {feature.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features