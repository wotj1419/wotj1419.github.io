import { SkillCategoryList } from '../Skills/Skills';
import styles from './SkillContext.module.css';
import IconBackground from '@/components/common/icons/IconBackground/IconBackground';
import Image from 'next/image';

//language svg
import CSSIcon from '/public/assets/skills/icons/language/css-3.svg';
import HTMLIcon from '/public/assets/skills/icons/language/html-5.svg';
import JavscriptIcon from '/public/assets/skills/icons/language/javascript.svg';
import PythonIcon from '/public/assets/skills/icons/language/python.svg';
import TypescriptIcon from '/public/assets/skills/icons/language/typescript-icon.svg';

//front svg
import AxiosIcon from '/public/assets/skills/icons/front/axios.svg';
import ReactIcon from '/public/assets/skills/icons/front/react.svg';
import PlaywrightIcon from '/public/assets/skills/icons/front/playwright.svg';
import ReactQueryIcon from '/public/assets/skills/icons/front/react-query-icon.svg';
import TestingLibraryIcon from '/public/assets/skills/icons/front/testing-library.svg';
import TailWindIcon from '/public/assets/skills/icons/front/tailwindcss-icon.svg';

//back svg
import GitIcon from '/public/assets/skills/icons/etc/git-icon.svg';
import GithubIcon from '/public/assets/skills/icons/etc/github-octocat.svg';
import Gitlab from '/public/assets/skills/icons/etc/gitlab.svg';

const SkillList = [
	[
		{
			SkillIcon: (
				<IconBackground>
					<HTMLIcon className={styles.svg} width="0" height="0" />
				</IconBackground>
			),
			title: 'HTML5',
			description: '• 기본적인 HTML 태그를 사용할 수 있습니다.',
		},
		{
			SkillIcon: (
				<IconBackground>
					<CSSIcon className={styles.svg} width="0" height="0" />
				</IconBackground>
			),
			title: 'CSS',
			description: '• 순수 CSS만을 이용하여 레이아웃을 할 수 있습니다.',
		},
		{
			SkillIcon: (
				<IconBackground>
					<JavscriptIcon className={styles.svg} width="0" height="0" />
				</IconBackground>
			),
			title: 'Javacript',
			description: '• ES6+ 문법을 활용하여 코드를 작성 할 수 있습니다. ',
		},
		{
			SkillIcon: (
				<IconBackground>
					<TypescriptIcon className={styles.svg} width="0" height="0" />
				</IconBackground>
			),
			title: 'Typescript',
			description:
				'• 타입을 활용하여 명확한 코드를 작성할 수 있으며, 제네릭, 인덱싱, 유틸리티 타입을 사용할 수 있습니다.',
		},
		{
			SkillIcon: (
				<IconBackground>
					<PythonIcon className={styles.svg} width="0" height="0" />
				</IconBackground>
			),
			title: 'Python',
			description:
				'• 스크립트 작성, 자동화, 기본적인 문제 해결 용도로 활용할 수 있습니다.',
		},
	],
	[
		{
			SkillIcon: (
				<IconBackground>
					<ReactIcon className={styles.svg} width="0" height="0" />
				</IconBackground>
			),
			title: 'React',
			description:
				'• 리액트로 여러 프로젝트를 해봤으며, ContextAPI, useReducer, useState, useCallBack, useMemo, Suspense를 활용 할 수 있습니다.',
		},
		{
			SkillIcon: (
				<IconBackground>
					<div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#42b883] text-base font-bold text-white max-md:h-10 max-md:w-10 max-md:text-[10px]">
						Vue
					</div>
				</IconBackground>
			),
			title: 'Vue.js 3',
			description: `• Vue 3 기반 컴포넌트 구조와 Composition API 흐름을 이해하고 활용할 수 있습니다.
			• 상태와 화면 로직을 분리해 유지보수하기 쉬운 구조로 작성할 수 있습니다.
			`,
		},
		{
			SkillIcon: (
				<IconBackground>
					<div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ffd54f] text-sm font-bold text-[#8b5e00] max-md:h-10 max-md:w-10 max-md:text-[9px]">
						Pinia
					</div>
				</IconBackground>
			),
			title: 'Pinia',
			description: `• Vue 프로젝트에서 스토어를 단순하고 명확하게 구성하며 상태를 관리할 수 있습니다.
			• 상태 분리, 액션 구성, 컴포넌트 연동 패턴을 적용할 수 있습니다.`,
		},
		{
			SkillIcon: (
				<IconBackground>
					<AxiosIcon className={styles.svg} width="0" height="0" />
				</IconBackground>
			),
			title: 'Axios',
			description: `• interceptors를 이용하여 에러와, 요청 전처리를 할 수 있습니다.
			• 재요청 로직을 프로젝트에 적용한 경험이 있습니다.
			`,
		},
		{
			SkillIcon: (
				<IconBackground>
					<TailWindIcon className={styles.svg} width="0" height="0" />
				</IconBackground>
			),
			title: 'TailwindCSS',
			description: `• 최근 즐겨 사용하고 있습니다. 프로젝트에 적용한 경험이 있습니다.`,
		},
		{
			SkillIcon: (
				<IconBackground>
					<div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#7c3aed] text-sm font-bold text-white max-md:h-10 max-md:w-10 max-md:text-[9px]">
						Vite
					</div>
				</IconBackground>
			),
			title: 'Vite',
			description: `• 빠른 개발 서버와 번들링 환경을 기반으로 프론트엔드 프로젝트를 구성할 수 있습니다.
			• React, Vue 환경에서 경량 개발 환경을 세팅하고 활용할 수 있습니다.`,
		},
		{
			SkillIcon: (
				<IconBackground>
					<div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0f766e] text-sm font-bold text-white max-md:h-10 max-md:w-10 max-md:text-[9px]">
						Flow
					</div>
				</IconBackground>
			),
			title: 'Vue Flow',
			description: `• 노드와 엣지 기반 화면을 구현하며 인터랙션 중심 UI를 구성할 수 있습니다.
			• 흐름도, 단계 구조, 시각적 연결 관계를 다루는 화면에 적용할 수 있습니다.`,
		},
		{
			SkillIcon: (
				<IconBackground>
					<div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0f172a] text-center text-[11px] font-bold leading-tight text-white max-md:h-10 max-md:w-10 max-md:text-[7px]">
						RHF
					</div>
				</IconBackground>
			),
			title: 'React Hook Form',
			description: `• 폼 상태와 유효성 검사를 효율적으로 관리하며 사용자 입력 흐름을 구성할 수 있습니다.
			• 제출 처리, 에러 메시지, 재사용 가능한 입력 컴포넌트 패턴을 적용할 수 있습니다.`,
		},
		{
			SkillIcon: (
				<IconBackground>
					<ReactQueryIcon className={styles.svg} width="0" height="0" />
				</IconBackground>
			),
			title: 'React-Query',
			description: `• 서버 상태를 캐싱하고 비동기 데이터 흐름을 관리하며 UI와 자연스럽게 연결할 수 있습니다.
			• 로딩, 에러, 재요청 처리와 쿼리 키 설계를 프로젝트에 적용할 수 있습니다.`,
		},
		{
			SkillIcon: (
				<IconBackground>
					<div className="relative h-16 w-16 max-md:h-10 max-md:w-10">
						<Image
							src="/assets/skills/icons/front/zustand-icon.png"
							fill
							alt="zustand image"
						/>
					</div>
				</IconBackground>
			),
			title: 'Zustand',
			description: `• 최근 프로젝트에 전역 상태 관리를 위해 사용한 경험이 있습니다.
				• localStorage와 연동, reducer형태로 적용한 경험이 있습니다.
				`,
		},
		{
			SkillIcon: (
				<IconBackground>
					<div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f97316] text-center text-[10px] font-bold leading-tight text-white max-md:h-10 max-md:w-10 max-md:text-[7px]">
						QR
					</div>
				</IconBackground>
			),
			title: 'HTML5-Qrcode',
			description: `• 카메라 기반 QR/바코드 스캔 기능을 웹에서 구현하고 연동할 수 있습니다.
			• 권한 요청, 스캔 결과 처리, 모바일 환경 대응까지 고려해 적용할 수 있습니다.`,
		},
		{
			SkillIcon: (
				<IconBackground>
					<TestingLibraryIcon className={styles.svg} width="0" height="0" />
				</IconBackground>
			),
			title: 'React-Testing-Libary',
			description: `• React-Testing-Libary를 사용하여 프로젝트에 적용한 경험이 있습니다.
			• 전체를 테스트 하지 않았지만, 어떻게 사용하는지를 알게되었습니다.
			`,
		},
		{
			SkillIcon: (
				<IconBackground>
					<PlaywrightIcon className={styles.svg} width="0" height="0" />
				</IconBackground>
			),
			title: 'PlayWright',
			description: `• 최근 프로젝트의 테스트를 눈으로 확인하며 하려고 사용해봤습니다.
			• 조금씩 적용하고 있습니다.
			`,
		},
	],
	[
		{
			SkillIcon: (
				<IconBackground>
					<div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0c4b33] text-sm font-bold text-white max-md:h-10 max-md:w-10 max-md:text-[9px]">
						Django
					</div>
				</IconBackground>
			),
			title: 'Django',
			description: `• Python 기반 웹 프레임워크로 API 및 백엔드 로직을 구성하고 관리할 수 있습니다.`,
		},
	],
	[],
	[
		{
			SkillIcon: (
				<IconBackground>
					<GitIcon className={styles.svg} width="0" height="0" />
				</IconBackground>
			),
			title: 'Git',
			description: `• 코드 저장과 버전 기록을 위해 사용했습니다.
			`,
		},
		{
			SkillIcon: (
				<IconBackground>
					<GithubIcon className={styles.svg} width="0" height="0" />
				</IconBackground>
			),
			title: 'Github',
			description: `• 외부 저장과 협업을 위해 사용하였습니다.
			`,
		},
		{
			SkillIcon: (
				<IconBackground>
					<Gitlab className={styles.svg} width="0" height="0" />
				</IconBackground>
			),
			title: 'Gitlab',
			description: `• 외부 저장과 협업을 위해 사용하였습니다.
			`,
		},
		{
			SkillIcon: (
				<IconBackground>
					<div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0c66e4] text-sm font-bold text-white max-md:h-10 max-md:w-10 max-md:text-[9px]">
						Jira
					</div>
				</IconBackground>
			),
			title: 'Jira',
			description: `• 이슈 추적과 일정 관리, 작업 흐름 공유를 위해 협업 도구로 활용할 수 있습니다.`,
		},
	],
];

type Props = {
	categoryIndex: number;
};

export default function SkillContent({ categoryIndex }: Props) {
	return SkillCategoryList.map((cate) => (
		<div
			key={cate.index}
			className={`${styles.content} ${
				categoryIndex === cate.index
					? styles.contentFadeIn
					: styles.contentFadeOut
			}`}
		>
			<h3 className="mb-6 text-xl font-semibold leading-10 text-lightest-slate">
				Skill Stack <span className="text-green">@ {cate.title}</span>
			</h3>
			{SkillList[cate.index].map(({ description, SkillIcon, title }, index) => (
				<ul key={cate.index + '' + index}>
					<li className="mb-4 flex gap-4">
						<IconBackground>{SkillIcon}</IconBackground>
						<div>
							<h3 className="mb-2 text-xl text-lightest-slate">{title}</h3>
							<p className="whitespace-pre-line text-lg">{description}</p>
						</div>
					</li>
				</ul>
			))}
		</div>
	));

	// <div>
	//   <h3 className='text-xl font-semibold text-lightest-slate leading-10'>
	//     Skill Stack <span className='text-green'>@ FrontEnd</span>
	//   </h3>
	//   <ul>
	//     <li className='flex'>
	//       <IconBackground>
	//         <AxiosIcon width={60} height={60} />
	//       </IconBackground>
	//       <p>
	//         아무 텍스트를 적는 중 이에용 어나날안녕상 가나다라도란ㅁ
	//         소ㅠㅈㄷ소ㅠㅑ
	//       </p>
	//     </li>
	//     <li>
	//       <ReactIcon width={60} height={60} />
	//     </li>
	//   </ul>
	// </div>
}
