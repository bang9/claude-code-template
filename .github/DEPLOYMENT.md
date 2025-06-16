# GitHub Pages 배포 가이드

## 자동 배포 설정

이 프로젝트는 GitHub Actions를 통해 자동으로 GitHub Pages에 배포됩니다.

### 배포 트리거
- `main` 브랜치에 push 시 자동 배포
- `main` 브랜치로의 Pull Request 시 빌드 테스트

### 배포 브랜치 전략
- **소스 브랜치**: `main` - React 소스 코드 및 프로젝트 파일
- **배포 브랜치**: GitHub Pages에서 자동 생성되는 배포 아티팩트 사용
- **빌드 산출물**: `react-app/dist` 디렉토리의 정적 파일들

### GitHub Pages 설정 방법

1. **저장소 Settings 이동**
   - GitHub 저장소 → Settings 탭

2. **Pages 설정**
   - 왼쪽 메뉴에서 "Pages" 선택
   - Source: "GitHub Actions" 선택

3. **자동 배포 확인**
   - `main` 브랜치에 코드 push
   - Actions 탭에서 워크플로우 실행 확인
   - 배포 완료 후 GitHub Pages URL 접근

### 배포 URL
- 배포 완료 후 다음 URL에서 접근 가능:
  ```
  https://[사용자명].github.io/claude-code-template/
  ```

### 로컬 빌드 테스트
```bash
cd react-app
pnpm install
pnpm run build
pnpm run preview
```

### 트러블슈팅

#### 배포 실패 시
1. GitHub Actions 로그 확인
2. 빌드 에러 해결
3. 다시 push하여 재배포

#### 경로 문제 시
- `vite.config.js`의 `base` 설정 확인
- GitHub Pages URL 경로와 일치하는지 검증

#### 권한 문제 시
- Repository Settings → Actions → General
- Workflow permissions에서 "Read and write permissions" 확인