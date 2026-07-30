# 완전 로컬 자산화 계획

## 목적

포트폴리오가 글꼴과 기술 아이콘을 외부 CDN에 요청하지 않도록 바꾼다. GitHub Pages는 정적 파일만 제공하므로, 필요한 자산을 저장소에서 함께 관리하면 배포 결과를 더 예측 가능하게 유지할 수 있다.

## 변경 근거

| 변경 항목 | 현재 상태 | 변경 이유 | 기대 효과 |
| --- | --- | --- | --- |
| 웹폰트 | Google Fonts 요청 | 외부 서비스 상태나 네트워크 환경에 따라 글꼴 로딩이 실패하거나 지연될 수 있다. | 동일한 글꼴 표시와 외부 요청 제거 |
| 기술 아이콘 | jsDelivr, GitHub, Pinia, Wikimedia 요청 | 여러 도메인 중 한 곳만 변경되거나 실패해도 아이콘이 깨질 수 있다. | 표시 안정성과 자산 관리 일원화 |
| 아이콘 경로 로직 | 컴포넌트마다 URL 생성 로직 중복 | 아이콘 경로를 여러 곳에서 관리하면 수정 누락 위험이 생긴다. | 공용 매핑 한 곳에서 관리 |
| 자산 출처 | 코드에만 외부 URL 존재 | 사용하는 자산의 출처와 라이선스를 확인하기 어렵다. | 유지보수와 라이선스 확인 용이 |

## 자산 구조

- `public/assets/fonts/inter-variable.woff2`: Inter 가변 글꼴
- `public/assets/fonts/pretendard-variable.woff2`: Pretendard 가변 글꼴
- `public/assets/icons/`: 기술 스택과 프로젝트 카드에서 사용하는 아이콘 20개
- `src/data/assets.ts`: 기술명과 로컬 아이콘 경로의 공용 매핑

## 변경 범위

- CSS의 Google Fonts `@import`를 로컬 `@font-face` 선언으로 대체한다.
- 기술 스택 데이터와 프로젝트 카드/상세 화면이 `/assets/icons` 아래의 경로만 사용하도록 한다.
- GitHub 및 이메일처럼 사용자가 클릭해 이동하는 외부 링크는 자산 요청이 아니므로 유지한다.
- 프로젝트 이미지와 이력서 PDF는 이미 로컬 자산이므로 변경하지 않는다.

## 출처와 라이선스

재배포하는 라이선스 전문은 `public/assets/licenses`에 함께 저장한다.

| 자산 | 정확한 원본 | 재배포 조건 |
| --- | --- | --- |
| Inter | `github.com/rsms/inter`의 `InterVariable.woff2` | SIL Open Font License 1.1 전문(`Inter-OFL.txt`)을 포함한다. |
| Pretendard | `pretendard@1.3.9`의 `PretendardVariable.woff2` | SIL Open Font License 1.1 전문(`Pretendard-OFL.txt`)을 포함한다. |
| Devicon 아이콘 및 Notion 아이콘 | `github.com/devicons/devicon`의 각 SVG | MIT License 전문(`Devicon-MIT.txt`)을 포함한다. |
| Zustand 아이콘 | `github.com/pmndrs/zustand`의 `docs/favicon.ico` | MIT License 전문(`Zustand-MIT.txt`)을 포함한다. |
| Pinia 아이콘 | `pinia.vuejs.org/logo.svg` | MIT License 전문(`Pinia-MIT.txt`)을 포함한다. |

## 검증 방법

```bash
npm run lint
npm test
npm run build
```

빌드 후 아래 도메인이 `dist`에 남아 있지 않은지 검사한다.

```text
fonts.googleapis.com
cdn.jsdelivr.net
raw.githubusercontent.com
pinia.vuejs.org
upload.wikimedia.org
```
