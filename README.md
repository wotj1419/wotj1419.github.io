# 박재서 포트폴리오

React와 TypeScript로 만든 개인 포트폴리오 웹사이트입니다. GitHub Pages로 배포됩니다.

## 개발 환경

- Node.js 22 (프로젝트 루트의 `.nvmrc` 기준)
- npm

Node Version Manager(nvm)를 사용한다면 프로젝트 폴더에서 `nvm use`로 Node 22를 선택할 수 있습니다.

## 시작하기

처음 실행할 때는 잠금 파일 기준으로 의존성을 설치합니다.

```bash
npm ci
```

개발 서버를 실행합니다.

```bash
npm run dev
```

## 검증

변경 사항을 배포하기 전에 아래 명령을 실행합니다.

```bash
npm run lint
npm test
npm run build
```

## 배포

`main` 브랜치에 변경 사항을 푸시하면 GitHub Actions가 Node.js 22 환경에서 의존성을 설치하고 lint, test, build를 실행한 뒤 GitHub Pages에 배포합니다.
