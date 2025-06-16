# Work Management: $ARGUMENTS

<!--
SYSTEM INSTRUCTION: This template handles the unified work management system.
LANGUAGE DETECTION: Detect user language from input and generate appropriate responses.
USER CONTENT LOCALIZATION: All user prompts, work descriptions, and status messages in user's language.
TECHNICAL ELEMENTS: Keep git commands, file paths, branch names, and technical references in English.
TONE: Professional and helpful tone suitable for the detected language.
-->

Unified work management system for claude-code-template project.

## 사용법
- `/work start "작업 설명"` - 새 작업 시작
- `/work` - 스마트 컨텍스트 인식 액션 (상태 확인/제안)
- `/work done` - 현재 작업 완료
- `/work list` - 모든 작업 항목 및 상태 표시
- `/work help [하위명령어]` - 상세 도움말 표시

## 작업 관리 프로세스

### 1. 작업 시작 (`/work start`)

#### 대화형 작업 생성
```
🚀 claude-code-template - 새 작업 시작

작업 설명: [사용자 입력]
우선순위 (high/medium/low): [사용자 입력]
예상 시간: [사용자 입력]
```

#### 자동 작업 ID 생성
```bash
# 기존 작업 파일 확인 및 다음 번호 할당
ls .claude/work/WORK-*.md | wc -l
# 결과 + 1로 새 작업 번호 생성 (예: WORK-003)
```

#### 복잡도 평가 및 작업 문서 생성
자동으로 작업 복잡도를 판단하고 적절한 문서 생성:

**간단한 작업 기준:**
- 단일 파일 수정
- UI/스타일링 변경
- 버그 수정
- 문서 업데이트

**복잡한 작업 기준:**
- 여러 파일 수정
- 새 기능 구현
- 아키텍처 변경
- API 통합

#### Git 브랜치 생성
```bash
# 작업 ID와 설명을 기반으로 브랜치 이름 생성
BRANCH_NAME="feat/WORK-XXX-brief-description"

# 새 브랜치 생성 및 전환
git checkout main
git pull origin main
git checkout -b $BRANCH_NAME

echo "🌿 새 브랜치 생성됨: $BRANCH_NAME"
```

#### 작업 문서 템플릿
다음 템플릿 구조를 사용하여 `.claude/work/WORK-XXX.md` 파일 생성:

##### 간단한 작업 템플릿:
```markdown
# WORK-{{WORK_ID}}: {{TITLE}}

## 기본 정보
- 상태: {{STATUS}}
- 우선순위: {{PRIORITY}}
- 예상 시간: {{ESTIMATED_TIME}}
- 브랜치: {{BRANCH_NAME}}
- 생성일: {{CURRENT_DATE}}

## 작업 설명
{{DESCRIPTION}}

## 관련 파일
{{RELATED_FILES}}

## 완료 기준
- [ ] {{COMPLETION_CRITERIA_1}}
- [ ] {{COMPLETION_CRITERIA_2}}
```

##### 복잡한 작업 템플릿:
```markdown
# WORK-{{WORK_ID}}: {{TITLE}}

## 1. 기본 정보
- 상태: {{STATUS}}
- 우선순위: {{PRIORITY}}
- 예상 시간: {{ESTIMATED_TIME}}
- 브랜치: {{BRANCH_NAME}}
- 생성일: {{CURRENT_DATE}}

## 2. 배경 및 목적
### 현재 상황
{{CURRENT_SITUATION}}

### 해결할 문제
{{PROBLEM_DESCRIPTION}}

### 기대 효과
{{EXPECTED_BENEFITS}}

## 3. 기능 요구사항
### 3.1 핵심 기능
{{CORE_FEATURES}}

### 3.2 추가 기능
{{ADDITIONAL_FEATURES}}

## 4. 기술 요구사항
### 4.1 etc 스택
- **플랫폼**: etc

### 4.2 성능 요구사항
{{PERFORMANCE_REQUIREMENTS}}

### 4.3 호환성 요구사항
{{COMPATIBILITY_REQUIREMENTS}}

## 5. UI/UX 요구사항
{{UI_UX_REQUIREMENTS}}

## 6. 테스트 계획
### 6.1 단위 테스트

### 6.2 통합 테스트
{{INTEGRATION_TEST_PLAN}}

### 6.3 E2E 테스트 시나리오
{{E2E_TEST_SCENARIOS}}

## 7. 보안 고려사항
{{SECURITY_CONSIDERATIONS}}

## 8. 데이터 모델
{{DATA_MODELS}}

## 9. 완료 정의
- [ ] 모든 기능 요구사항 구현 완료
- [ ] 코드 리뷰 승인
- [ ] 문서 업데이트

## 10. 위험 요소 및 완화
### 10.1 기술적 위험
{{TECHNICAL_RISKS}}

### 10.2 일정 위험
{{SCHEDULE_RISKS}}

## 11. 변경 이력
- **v1.0**: {{CURRENT_DATE}} - 초기 작업 계획 생성
```

### 2. 스마트 컨텍스트 액션 (`/work`)

#### 현재 작업 감지
```bash
# 현재 브랜치 감지 및 작업 ID 추출
CURRENT_BRANCH=$(git branch --show-current)

if [[ $CURRENT_BRANCH =~ WORK-([0-9]+) ]]; then
    WORK_ID="${BASH_REMATCH[1]}"
    echo "📋 현재 작업: WORK-$WORK_ID"
else
    echo "💡 활성 작업이 감지되지 않음. /work start로 시작하세요."
fi
```

#### 컨텍스트 인식 액션
현재 상태에 따라 적절한 제안 제공:

**활성 작업이 없을 때:**
```
💡 새 작업 시작: /work start "설명"
📋 모든 작업 보기: /work list
🔍 도움말: /work help
```

**작업이 진행 중일 때:**
```
📊 현재 작업 상태:
- 작업: WORK-XXX - [제목]
- 브랜치: [브랜치 이름]
- 상태: [상태]

🛠️ 다음 액션:
- 개발 계속: none
- 작업 완료: /work done
```

**작업 완료 준비가 되었을 때:**
```
✅ 작업 완료 준비가 된 것 같습니다
- 수정된 파일: X
- 커밋되지 않은 변경사항: Y

🚀 완료하시겠습니까? /work done
```

### 3. 작업 완료 (`/work done`)

#### 현재 작업 감지
```bash
# 현재 브랜치에서 작업 ID 추출
CURRENT_BRANCH=$(git branch --show-current)
WORK_ID=$(echo $CURRENT_BRANCH | grep -o 'WORK-[0-9]\+')

if [ -z "$WORK_ID" ]; then
    echo "❌ 현재 브랜치에서 활성 작업이 감지되지 않음"
    exit 1
fi
```

#### 품질 검사
프로젝트 설정에 따라 실행:

#### 커밋 생성
```bash
# 변경사항 스테이징
git add .

# 컨벤셔널 커밋 메시지 생성 (기술적: 팀 협업을 위해 영어 유지)
COMMIT_TYPE=$(determine_commit_type)  # feat, fix, refactor, style, docs
SCOPE=$(extract_scope_from_work)      # dashboard, auth, ui, etc.
DESCRIPTION=$(extract_description_from_work)

git commit -m "${COMMIT_TYPE}(${SCOPE}): ${DESCRIPTION}"
```

#### 작업 문서 업데이트
```bash
# 작업 상태를 완료로 업데이트
sed -i 's/상태: in_progress/상태: completed/' ".claude/work/$WORK_ID.md"
echo "- **완료**: $(date) - 작업 완료 및 커밋" >> ".claude/work/$WORK_ID.md"
```

#### PR 생성 (선택사항)
```bash
# 원격 브랜치로 푸시
git push -u origin $(git branch --show-current)

# 컨벤셔널 제목으로 PR 생성
gh pr create --title "$(git log -1 --format=%s)" --body "$(cat <<'EOF'
## 요약
$WORK_ID 작업 완료.

## 품질 검사

## 테스트 계획
- [x] 기본 기능 검증 완료

🤖 Generated with [Claude Code](https://claude.ai/code)
EOF
)"
```

### 4. 작업 목록 (`/work list`)

#### 작업 상태 요약
```bash
echo "📋 claude-code-template - 작업 상태"

# 상태별 작업 항목 수 계산
TOTAL=$(ls .claude/work/WORK-*.md 2>/dev/null | wc -l)
PENDING=$(grep -l "상태: pending" .claude/work/WORK-*.md 2>/dev/null | wc -l)
IN_PROGRESS=$(grep -l "상태: in_progress" .claude/work/WORK-*.md 2>/dev/null | wc -l)
COMPLETED=$(grep -l "상태: completed" .claude/work/WORK-*.md 2>/dev/null | wc -l)

echo "전체 작업 항목: $TOTAL"
echo "├── 🔄 진행 중: $IN_PROGRESS"
echo "├── ⏸️ 대기 중: $PENDING"
echo "└── ✅ 완료: $COMPLETED"
```

#### 상세 작업 목록
```bash
echo ""
echo "📋 작업 목록:"

# 우선순위별 작업 항목 나열
for priority in high medium low; do
    echo "🔴 높은 우선순위:"
    grep -l "우선순위: $priority" .claude/work/WORK-*.md 2>/dev/null | while read file; do
        WORK_ID=$(basename "$file" .md)
        TITLE=$(grep "^# " "$file" | head -1 | sed 's/^# [^:]*: //')
        STATUS=$(grep "상태: " "$file" | head -1 | sed 's/.*상태: //')
        echo "- $WORK_ID [$STATUS] $TITLE"
    done
done
```

#### 현재 작업 강조
```bash
CURRENT_BRANCH=$(git branch --show-current)
if [[ $CURRENT_BRANCH =~ WORK-([0-9]+) ]]; then
    echo ""
    echo "🔄 현재 활성 작업:"
    echo "- 브랜치: $CURRENT_BRANCH"
    echo "- 작업: WORK-${BASH_REMATCH[1]}"
fi
```

### 5. 도움말 시스템 (`/work help`)

#### 일반 도움말
인수 없이 호출될 때 포괄적인 사용법 표시:

```
🛠️ claude-code-template 작업 관리 시스템

📋 사용 가능한 명령어:
/work start "설명" - 새 작업 시작
/work                     - 스마트 컨텍스트 액션
/work done               - 현재 작업 완료
/work list               - 모든 작업 항목 표시
/work help [명령어]     - 상세 도움말 표시

🚀 빠른 시작:
1. /work start "작업 설명"
2. [개발 작업 수행]
3. /work done

💡 팁:
- 설명적인 작업 제목 사용
- /work list로 모든 작업 항목 확인
- /work는 컨텍스트 인식 제안 제공
```

#### 명령어별 도움말
하위명령어와 함께 호출될 때 상세 사용법 표시:

```bash
case "$1" in
    "start")
        echo "📝 /work start - 새 작업 생성"
        echo "사용법: /work start \"작업 설명\""
        echo "예시:"
        echo "  /work start \"로그인 버튼 스타일링 수정\""
        echo "  /work start \"사용자 대시보드 성능 개선 구현\""
        ;;
    "done")
        echo "✅ /work done - 현재 작업 완료"
        echo "git 브랜치에서 현재 작업 자동 감지"
        echo "품질 검사 실행 및 커밋 생성"
        ;;
    # ... 기타 명령어
esac
```

## 자동 복잡도 감지 로직

```javascript
function determineComplexity(description) {
    const complexKeywords = [
        'system', 'architecture', 'integration', 'api', 'database',
        'authentication', 'performance', 'optimization', 'refactor',
        'implement', 'create new', 'build', 'develop'
    ];

    const simpleKeywords = [
        'fix', 'update', 'change', 'modify', 'adjust', 'correct',
        'style', 'color', 'text', 'button', 'link', 'typo'
    ];

    const words = description.toLowerCase().split(' ');

    const complexScore = words.filter(word =>
        complexKeywords.some(keyword => word.includes(keyword))
    ).length;

    const simpleScore = words.filter(word =>
        simpleKeywords.some(keyword => word.includes(keyword))
    ).length;

    // 점수와 설명 길이를 기반으로 복잡도 결정
    if (complexScore > simpleScore || words.length > 10) {
        return 'complex';
    }
    return 'simple';
}
```

## 커밋 타입 감지 로직

```javascript
function determineCommitType(workDescription, changedFiles) {
    // 작업 설명과 변경된 파일 분석
    const description = workDescription.toLowerCase();

    if (description.includes('fix') || description.includes('bug')) {
        return 'fix';
    }

    if (description.includes('refactor') || description.includes('restructure')) {
        return 'refactor';
    }

    if (description.includes('style') || description.includes('css') ||
        changedFiles.some(file => file.includes('.css') || file.includes('style'))) {
        return 'style';
    }

    if (description.includes('doc') ||
        changedFiles.some(file => file.includes('.md') || file.includes('readme'))) {
        return 'docs';
    }

    // 새 기능/개선사항의 경우 기본적으로 feat
    return 'feat';
}
```

## 오류 처리

### Git 관련 오류
- 브랜치 이름 충돌: 자동으로 번호 추가 (-1, -2)
- 커밋되지 않은 변경사항: 진행 전 stash 권장
- 네트워크 오류: 로컬 브랜치만 생성, 나중에 푸시

### 작업 관리 오류
- 작업 번호 중복: 자동으로 다음 번호 할당
- 파일 생성 실패: 권한 확인 가이드
- 잘못된 작업 상태: 명확한 다음 단계 제공

## etc 프로젝트와의 통합

### 프로젝트별 기능
- **명령어 통합**: project.json의 실제 프로젝트 명령어 사용
- **품질 자동화**: 사용 가능한 도구를 기반으로 자동 포매팅, 린팅, 테스팅
- **빌드 검증**: none를 사용할 수 있을 때 빌드 검증 포함
- **타입 검사**: 사용 가능할 때 TypeScript 검증 포함

### 성능 최적화
- **빠른 작업**: 파일 I/O 및 git 작업 최소화
- **스마트 캐싱**: 작업 상태 및 브랜치 정보 캐시
- **배치 작업**: 관련 git 작업들을 함께 그룹화

## 관련 명령어 통합
이 통합 작업 시스템은 다음 기능을 대체하고 통합합니다:
- 이전 `/project:work` 명령어
- 이전 `/project:prd` 명령어
- 이전 `/project:complete` 명령어
- 이전 `/project:status` 명령어
- 이전 `/project:test` 명령어 (/work done에 통합)