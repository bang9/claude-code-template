# CLAUDE.md - claude-code-template AI Agent Work Guide

<!--
SYSTEM INSTRUCTION: This template generates user-facing content in the user's detected language.
LANGUAGE DETECTION: Analyze user input patterns to detect preferred language (Korean, English, Japanese, Chinese).
USER CONTENT LOCALIZATION: All user-facing text (descriptions, messages, prompts) should be generated in user's language.
TECHNICAL ELEMENTS: Keep technical commands, file paths, and code elements in English for consistency.
TONE: Use professional, business-appropriate tone suitable for the detected language.
-->

## 프로젝트 정보
- **프로젝트 이름**: claude-code-template
- **언어/플랫폼**: etc
- **개발 명령어**: `none`

## AI 에이전트 워크플로우

### 1. 통합 작업 관리
- 모든 작업 관리를 위한 단일 `/work` 명령어
- 자동 복잡도 평가 및 문서 생성
- 현재 상태에 기반한 스마트 컨텍스트 인식 액션
- 간소화된 워크플로우: 시작 → 개발 → 완성

### 2. 지능형 작업 문서화
- 간단한 작업: 완료 기준이 포함된 기본 작업 정보
- 복잡한 작업: 포괄적인 명세서 (PRD 수준의 세부사항)
- 작업 복잡도에 기반한 자동 템플릿 선택
- 실시간 작업 상태 추적

### 3. 품질 우선 개발
- 자동화된 코드 포매팅, 린팅, 테스팅
- 컨벤셔널 커밋 메시지 생성
- 병렬 개발을 위한 브랜치 기반 작업 격리
- 품질 검사가 통합된 PR 생성

### 4. 원활한 완료
- 전체 검증이 포함된 원-커맨드 작업 완료
- 자동 작업 상태 업데이트 및 문서화
- 변경사항에 기반한 스마트 커밋 메시지 생성
- 포괄적인 요약이 포함된 선택적 PR 생성

## 커스텀 슬래시 명령어

### 작업 관리 명령어

#### `/work start "작업 설명"`
**목적**: 새 작업 시작
- 작업 문서 생성 (평가에 기반한 간단 또는 복잡)
- 작업 브랜치 자동 생성
- 개발 환경 설정
- 작업 진행 추적 시작

#### `/work`
**목적**: 스마트 컨텍스트 인식 액션
- 작업이 활성화된 경우 현재 작업 상태 확인
- 다음 액션 제안 제공
- 작업 진행 및 완료 준비도 표시
- 워크플로우를 통한 사용자 가이드

#### `/work done`
**목적**: 현재 작업 완료
- 현재 브랜치에서 자동 작업 감지
- 품질 검사 실행 (포매팅, 린팅, 테스팅, 빌드)
- 컨벤셔널 커밋 메시지 생성
- 작업 상태 업데이트 및 PR 생성

#### `/work list`
**목적**: 모든 작업 항목 표시
- 작업 상태 요약 표시 (대기, 진행 중, 완료)
- 우선순위별 작업 항목 나열
- 현재 활성 작업 강조
- 완료율 및 통계 표시

#### `/work help [하위명령어]`
**목적**: 포괄적인 도움말 표시
- 사용 가능한 모든 명령어 및 사용법 표시
- 명령어별 상세 도움말 제공
- 빠른 시작 가이드 및 팁 표시
- 워크플로우 및 모범 사례 설명

### 작업 자동화 규칙

#### 커밋 메시지 형식
컨벤셔널 커밋 표준을 따르는 간단하고 깔끔한 메시지:
```
<타입>(<범위>): <설명>

# 예시:
feat(dashboard): improve loading performance
fix(auth): resolve login redirect issue
style(ui): update button colors to match brand
refactor(api): simplify user data handling
```

#### 자동화된 체크리스트
작업 완료 시 자동 검증:
- [ ] 기능 요구사항 구현 완료
- [ ] 코드 리뷰 준비 완료

## 사용 가능한 도구

### CLI 도구
```bash
# 개발 및 실행
none           # 개발/실행

# Git 작업
git status           # 상태 확인
git diff             # 변경사항 확인
```

### MCP 서버
현재 설치된 MCP 서버 확인: `claude mcp list`

MCP 서버 관리 명령어:
- **목록 확인**: `claude mcp list`
- **서버 추가**: `claude mcp add <이름> <명령어>`
- **서버 제거**: `claude mcp remove <이름>`
- **상태 확인**: Claude 내 `/mcp` 명령어

## 프로젝트 구조

### 통합 작업 관리
```
.claude/
├── commands/          # 커스텀 슬래시 명령어
├── config/           # 프로젝트 설정
│   └── project.json
├── templates/        # 문서 템플릿
│   ├── claude.md.template
│   └── commands/
│       └── work.md.template
└── work/             # 작업 문서 (issues/ 및 prd/ 대체)
    ├── WORK-001.md   # 간단 또는 복잡한 작업 문서
    ├── WORK-002.md   # 복잡도에 기반하여 자동 생성
    └── WORK-003.md   # 작업 정보 및 명세서 포함
```

## 작업 원칙

### 코드 개발 규칙
1. **기존 파일 우선**: 새 파일 생성보다는 기존 파일 수정
2. **최소 변경**: 요청된 작업만 정확하게 수행
3. **품질 보증**: 모든 변경사항에 대한 테스트 및 검증 실행
4. **보안 준수**: 민감한 정보나 키를 절대 커밋하지 않음

### 커뮤니케이션 원칙
1. **명확한 소통**: 불분명한 요구사항에 대해 즉시 질문
2. **단계별 진행**: 복잡한 작업을 단계별로 확인
3. **결과 보고**: 완료 시 결과 및 변경사항 요약

### 스마트 언어 응답 가이드라인

**자동 언어 감지 및 응답:**
- **사용자 언어 자동 감지**: 첫 입력 패턴에서 감지 (한국어, 영어, 일본어, 중국어)
- **사용자 대상 콘텐츠**: 감지된 언어로 생성 (이슈 설명, 상태 보고, 대화)
- **기술적 요소**: 영어로 유지 (명령어, 파일 경로, 브랜치 이름, 커밋 메시지)
- **전문적 어조**: 감지된 언어에 적합한 비즈니스 어조 사용
- **폴백**: 감지가 불확실한 경우 영어 기본값
- **팀 협업**: 국제적 호환성을 위해 기술적 식별자는 영어 유지

**하이브리드 로컬라이제이션 전략:**
- **영어 시스템 프롬프트**: 최적의 AI 성능을 위해
- **로컬라이즈된 사용자 콘텐츠**: 더 나은 사용자 경험을 위해
- **안전한 기술적 명명**: 브랜치 이름, 파일 이름을 영어로
- **문화적 적응**: 언어별 적절한 격식 수준

## 추가 메모
claude-code template