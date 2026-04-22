import SectionContainer from '@/components/common/section/SectionContainer/SectionContainer';
import Link from 'next/link';
import { GitHubIcon, ShareIcon } from '@/components/common/icons/react-icons';
import Image from 'next/image';
import MainProject from '../MainProject/MainProject';
import { Project } from '@/types';
import { SectionID } from '@/constant/sectionId';

const PROJECT_DATA: Project[] = [
	{
		title: '알맹이',
		date: '2026.02 ~ 2026.03',
		serviceMaintain: '',
		description: `소상공인을 위한 근태, 급여, 계약, 세무 준비를 통합 관리하는 올인원 인사·급여 플랫폼입니다.
		프론트엔드 개발을 담당하며 API 기반 데이터 흐름을 설계했고, React Query를 도입해 서버 상태와 캐싱 구조를 정리했습니다.
		이를 통해 중복된 비동기 처리 로직을 줄이고 성능과 유지보수성을 개선했습니다.
    `,
		skillList: [
			'React-Query',
			'ReactJS',
			'Zustand',
			'TailwindCSS',
			'Typescript',
		],
		linkList: (
			<>
				<Link href={'https://github.com/wotj1419/almaengi'} target="_blank">
					<GitHubIcon size={20} />
				</Link>
				<Link href={'https://haalnam.site'} target="_blank">
					<ShareIcon size={20} />
				</Link>
			</>
		),

		ImgComponent: (
			<Link href={'https://haalnam.site'} target="_blank" className="relative">
				<Image
					src="/assets/project-images/almaengi_icon.png"
					fill
					alt="이미지"
				/>
			</Link>
		),
		detailSrc: '/notion/1035be869c5280f59691d6f57840658d',
	},
	{
		title: 'ITDA',
		date: '2026.01 ~ 2026.02',
		serviceMaintain: '',
		description: `AI 이미지와 영상을 연결해 하나의 결과물로 제작할 수 있는 노드 기반 영상 제작 플랫폼입니다.
    Vue Flow를 도입해 대표 이미지부터 씬·영상 생성까지의 과정을 한 화면에서 제어할 수 있는 캔버스를 구현했습니다.
    분산된 제작 과정을 통합 워크플로우로 개선해 작업 흐름 이해도와 제작 효율을 높였습니다.
    `,
		skillList: [
			'VueJS',
			'Typescript',
			'JavaScript',
			'Pinia',
			'Vue Flow',
		],
		linkList: (
			<>
				<Link
					href={'https://github.com/wotj1419/ITDA/tree/develop'}
					target="_blank"
				>
					<GitHubIcon size={20} />
				</Link>
			</>
		),

		ImgComponent: (
			<Link href={'/'} target="_blank" className="relative">
				<Image
					src="/assets/project-images/itda.png"
					fill
					alt="이미지"
				/>
			</Link>
		),
		detailSrc: '/notion/c82099c04f4540f0817285a224841055',
	},
];

export default function MainProjects() {
	return (
		<SectionContainer
			title="Main Projects"
			count="03."
			id={SectionID.mainProjects}
		>
			{PROJECT_DATA.map((pro, i) => (
				<MainProject key={i} {...pro} />
			))}
		</SectionContainer>
	);
}
