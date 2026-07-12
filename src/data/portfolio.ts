export type Technology = { name: string; category: 'Languages' | 'Frontend' | 'Backend / Tools'; icon: string }
export type Project = {
  id: string; title: string; badge: string; period: string; subtitle: string; award?: string; description: string; heroImage: string; team: string
  contribution: string[]; intro: string; tech: string[]; features: string[]
  techReasons: { name: string; reason: string }[]; troubleshootings: { problem: string; solution: string }[]; retrospective: string
}

export const profile = { name: '박재서', englishName: 'PARK JAESEO', role: 'Frontend Developer', email: 'swotjoo@gmail.com', github: 'https://github.com/wotj1419', resume: '/assets/portfolio-jaeseo.pdf' }

export const technologies: Technology[] = [
  ['HTML5', 'Languages', 'html5/html5-original.svg'], ['CSS', 'Languages', 'css3/css3-original.svg'], ['JavaScript', 'Languages', 'javascript/javascript-original.svg'], ['TypeScript', 'Languages', 'typescript/typescript-original.svg'], ['Python', 'Languages', 'python/python-original.svg'], ['Kotlin', 'Languages', 'kotlin/kotlin-original.svg'], ['React', 'Frontend', 'react/react-original.svg'], ['Vue 3', 'Frontend', 'vuejs/vuejs-original.svg'], ['Android', 'Frontend', 'android/android-original.svg'], ['TailwindCSS', 'Frontend', 'tailwindcss/tailwindcss-original.svg'], ['Vite', 'Frontend', 'vitejs/vitejs-original.svg'], ['Django', 'Backend / Tools', 'django/django-plain.svg'], ['Git', 'Backend / Tools', 'git/git-original.svg'], ['GitHub', 'Backend / Tools', 'github/github-original.svg'], ['GitLab', 'Backend / Tools', 'gitlab/gitlab-original.svg'], ['Jira', 'Backend / Tools', 'jira/jira-original.svg'], ['Figma', 'Backend / Tools', 'figma/figma-original.svg'],
].map(([name, category, icon]) => ({ name, category: category as Technology['category'], icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}` }))
technologies.push({ name: 'Notion', category: 'Backend / Tools', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' })
export const techCategories = ['전체', 'Languages', 'Frontend', 'Backend / Tools'] as const
export type TechCategory = (typeof techCategories)[number]

export const experiences = [
  { period: '2025.07 - 2026.06', title: '삼성청년SW·AI아카데미 수료', label: 'SSAFY 14기', details: ['React, Vue, Android 기반 프로젝트 진행', 'Git, GitLab, Jira 기반 협업 경험', '서비스 기획, 와이어프레임, UI 구현, API 연동 참여'] },
  { period: '2025.12', title: '정보처리기사', label: '한국산업인력공단', details: [] },
  { period: '2024.02 - 2025.03', title: '조선대학교 전자공학과', label: 'Education', details: [] },
]
export const awards = [{ title: 'SSAFY 공통 프로젝트 최우수상', date: '2026.02', description: 'ITDA — 노드 기반 AI 영상 제작 협업 플랫폼' }]

export const projects: Project[] = [
  {
    id: 'anvi', title: 'Anvi', badge: 'FrontEnd / Android', period: '2026.04.09 - 2026.05.21 (약 6주)', subtitle: '온라인 시험 감독 서비스', heroImage: '/assets/project-anvi.png', team: 'Frontend & Android 2명 / Backend 2명 / AI 2명',
    description: '비대면 시험 환경에서 응시자의 스마트폰을 보조 카메라로 활용해 부정행위를 감지하고, 감독관은 웹 대시보드에서 응시 상태와 감지 로그를 실시간으로 확인할 수 있도록 설계한 온디바이스 AI 시험 감독 서비스입니다.',
    contribution: ['Android 앱 UI/UX', 'Web 페이지 UI/UX', '실시간 상태 연동', '와이어프레임 설계'],
    intro: '비대면 시험 환경에서 응시자의 스마트폰을 보조 카메라로 활용해 부정행위를 감지하고, 감독관은 웹 콘솔에서 응시 상태와 감지 로그를 실시간으로 확인할 수 있도록 설계한 온디바이스 AI 시험 감독 서비스입니다. 저는 응시자 앱의 사전점검·시험 입장 흐름과 감독관 웹 콘솔의 시험 생성, 진행 관리, 감지 이력, 개별 리포트 화면을 구현했습니다.', tech: ['Android', 'ReactJS', 'TypeScript', 'Vite', 'TailwindCSS', 'Kotlin'],
    features: ['QR/PIN 기반 시험 입장과 사전점검, 대기, 시험 시작, 종료까지의 응시자 플로우 구성', '배터리·네트워크·저장공간·무음모드·블루투스 5개 기기 상태 자동 점검', '감독관 웹 콘솔에서 시험 생성, 진행 중 시험 관리, 감지 이력, 개별 리포트 확인', 'SSE 이벤트로 진행 중 시험 관리와 응시자별 리포트를 실시간 갱신'],
    techReasons: [{ name: 'React + Vite', reason: 'React Router 기반 13개 route와 8개 page domain으로 시험 운영 화면을 구성하고, 화면과 공통 모듈을 분리했습니다.' }, { name: 'TypeScript', reason: '시험, 응시자, 기기 상태, 감지 로그 데이터와 화면 전환 상태를 안정적으로 관리했습니다.' }, { name: 'Jetpack Compose', reason: '사전점검부터 종료까지 상태 변화에 따라 자연스럽게 다시 그려지는 선언형 UI로 플로우 중심 화면을 구현했습니다.' }],
    troubleshootings: [{ problem: '여러 화면에서 인증·에러 처리·token refresh가 중복되고, 동시 401 응답이 refresh 요청을 반복할 수 있었습니다.', solution: 'Fetch 기반 공통 API client로 38개 API wrapper의 인증·에러 처리·token refresh를 표준화하고, 동시 401 응답에서는 refresh Promise를 공유해 중복 재발급을 막았습니다.' }, { problem: '시험 중 상태 변화와 감지 이벤트가 늦게 반영되거나 연결 단절 뒤 복구되지 않으면 감독 대응이 지연될 수 있었습니다.', solution: 'SSE client를 직접 구현해 연결 실패 시 2.5초 후 재연결하고, token refresh 후 재구독과 연속 이벤트의 갱신 요청 묶음 처리를 적용했습니다.' }, { problem: '사전점검 완료 버튼 연타와 AI 자세 검증 완료 뒤의 추가 조작이 입장 흐름을 불안정하게 만들 수 있었습니다.', solution: '저장 상태 guard로 중복 API 요청을 막고, AI 자세 검증이 완료되면 1초 뒤 다음 단계로 자동 전환해 추가 탭을 1회에서 0회로 줄였습니다.' }],
    retrospective: '실시간 서비스의 프론트엔드 품질은 시각적 완성도뿐 아니라 상태 일관성과 흐름 제어에서 결정된다는 점을 배웠습니다. 사용자가 다음 행동을 이해할 수 있도록 상태 변화와 예외 상황을 자연스럽게 정리하는 데 집중했습니다.',
  },
  {
    id: 'almang', title: '알맹이', badge: 'FrontEnd', period: '2026.02.19 - 2026.03.30', subtitle: '인사·급여 관리 플랫폼', heroImage: '/assets/project-almang.png', team: 'FE 2명, AI/FE 1명, BE 2명, BE/Infra 1명', description: '카페·식당 등 소규모 자영업자가 직원 근태, 스케줄, 전자 근로계약, 급여 문서, 사내 커뮤니케이션을 모바일에서 통합 관리할 수 있도록 만든 서비스입니다.',
    contribution: ['PWA 기반 앱/웹', '인증/세션 처리', '운영 화면 API 연동'], intro: '알맹이는 소규모 자영업자가 직원 근태, 스케줄, 전자 근로계약, 급여 문서, 사내 커뮤니케이션을 모바일에서 통합 관리하는 서비스입니다. 저는 로그인/세션 처리, 매장 합류, 직원·스케줄 관리, 전자 근로계약·문서함과 실시간 경매·채팅 기능의 화면 및 API 연동을 담당했습니다.',
    tech: ['ReactJS', 'Zustand', 'TailwindCSS', 'TypeScript'],
    features: ['점주/직원 역할에 따라 홈과 매장 합류 화면으로 분기되는 진입 흐름 구현', '직원 목록, 스케줄 조회·수정, QR 출퇴근 등 역할별 운영 화면 구현', 'FCM 알림 수신, 읽음 처리와 알림 유형별 화면 이동', 'STOMP WebSocket 기반 경매 상태와 채팅 메시지 실시간 반영', '전자 근로계약 작성·서명·PDF 조회와 권한 제어 적용'],
    techReasons: [{ name: 'React + TypeScript', reason: '역할에 따라 달라지는 복잡한 화면 흐름과 API 응답 구조를 컴포넌트 기반·타입 안정성으로 관리했습니다.' }, { name: 'Zustand', reason: '인증 정보, 역할, 활성 매장, 초대 코드 등 여러 화면의 공통 상태를 새로고침 이후에도 자연스럽게 복원했습니다.' }, { name: 'TanStack Query', reason: '서버 상태의 조회, 캐시, 무효화 흐름을 일관되게 관리했습니다.' }, { name: 'Axios Interceptor', reason: '인증 헤더, 토큰 재발급과 재요청을 공통 로직으로 통제했습니다.' }, { name: 'Tailwind CSS', reason: '모바일 중심의 다양한 화면에서 상태별 스타일을 빠르고 일관되게 반영했습니다.' }],
    troubleshootings: [{ problem: '로그인 직후·새로고침·다중 탭에서 FCM token 발급이 중복되면 Push registration race와 알림 수신 불안정이 발생할 수 있었습니다.', solution: 'in-flight lock, cross-tab lock, cooldown, AbortError retry를 적용해 동시 10회 token sync 상황의 getToken 실행을 10회에서 1회로 제한했습니다.' }, { problem: 'REST 응답과 WebSocket 수신이 겹치면 채팅 메시지가 중복 렌더링되고, 경매 상태를 polling으로 갱신하면 불필요한 요청이 발생했습니다.', solution: 'STOMP WebSocket 이벤트로 경매 cache를 invalidation하고, messageId 기준 deduplication으로 동일 채팅 메시지 렌더링을 2회에서 1회로 줄였습니다.' }, { problem: '여러 API가 동시에 401을 받으면 token 재발급 요청이 중복되거나 불필요한 로그아웃으로 이어질 수 있었습니다.', solution: 'API layer를 14개 module과 79개 endpoint로 분리하고 Axios refresh queue를 적용해 동시 10개 API가 401을 받아도 /auth/reissue 요청을 1회로 제한했습니다.' }],
    retrospective: '역할과 상태에 따라 사용 흐름이 끊기지 않도록 설계하는 일이 중요하다는 것을 배웠습니다. 여러 도메인이 엮일 때는 로컬 상태와 서버 상태의 책임을 분리하고 예외 흐름을 초기 설계부터 명확히 해야 합니다.',
  },
  {
    id: 'itda', title: 'ITDA', badge: 'FrontEnd', period: '2026.01 - 2026.02 (약 6주)', subtitle: '노드 기반 AI 영상 제작 플랫폼', award: 'SSAFY 공통 프로젝트 최우수상', heroImage: '/assets/project-itda.png', team: '프론트엔드 2명, 백엔드 3명, AI 1명', description: '시나리오 작성부터 씬 구성, AI 이미지·영상 생성, 타임라인 확인까지 하나의 흐름으로 연결한 협업 플랫폼입니다.',
    contribution: ['노드 에디터 UI/UX', '타임라인·프리뷰 연동', '실시간 협업 UI', '랜딩 페이지 성능 최적화'], intro: '비개발자도 AI 영상을 제작할 수 있도록 시나리오 작성부터 씬 구성, AI 이미지·영상 생성, 타임라인 편집, 팀 협업까지 하나의 흐름으로 연결한 노드 기반 영상 제작 플랫폼입니다. 복잡한 생성형 AI 워크플로우를 이해하기 쉬운 화면 구조로 바꾸고 씬 에디터·타임라인·프리뷰·협업 상태 흐름을 설계했습니다.', tech: ['VueJS', 'TypeScript', 'JavaScript', 'Pinia'],
    features: ['노드 기반 씬 에디터 편집 및 생성 상태 시각화', '타임라인 클립 선택과 영상 프리뷰 실시간 동기화', '참여자 위치·커서·노드 잠금 기반 공동 편집', '프로젝트 생성, 대시보드와 팀 단위 협업 관리'], techReasons: [{ name: 'Vue 3', reason: '대시보드와 에디터처럼 성격이 다른 화면을 컴포넌트 단위로 분리했습니다.' }, { name: 'TypeScript', reason: '노드·씬·타임라인의 복잡한 데이터 구조에 타입 안정성을 확보했습니다.' }, { name: 'Pinia', reason: '씬 에디터와 타임라인 간 상태 일관성을 유지하는 전역 상태로 활용했습니다.' }],
    troubleshootings: [{ problem: '랜딩 초기 전송량 약 8.5MiB 중 Hero video가 약 7.8MiB를 차지해 첫 화면의 네트워크 병목이 컸습니다.', solution: 'IntersectionObserver로 video src 연결을 지연해 초기 video 요청을 제거하고, Mobile 초기 전송량을 8.48MiB에서 0.70MiB로 약 91.8% 줄였습니다.' }, { problem: '랜딩에서 사용하지 않는 협업/WebSocket/WebRTC 코드가 초기 entry JavaScript에 포함됐습니다.', solution: '협업 레이어를 프로젝트 경로에서만 동적 import하도록 분리해 초기 entry JS resourceSize를 318,604 bytes에서 122,444 bytes로 줄이고 unused JS를 제거했습니다.' }, { problem: '공통 아이콘이 실제 표시 크기보다 커 정적 이미지 payload가 불필요하게 컸습니다.', solution: 'icon.png를 표시 크기에 맞춰 리사이즈해 파일 크기를 34,190 bytes에서 4,637 bytes로 약 86.4% 줄였습니다. Lighthouse 점수 향상보다 초기 전송량과 요청 감소를 성과로 해석했습니다.' }], retrospective: '프론트엔드는 비동기 처리와 상태 흐름을 설계해 사용자 경험을 완성하는 역할임을 체감했습니다. UI를 구현할 때 화면 단위보다 사용자 행동과 상태 변화의 흐름을 먼저 구조화하게 되었습니다.',
  },
]
