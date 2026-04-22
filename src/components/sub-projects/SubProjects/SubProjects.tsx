import {
	FolderIcon,
	GitHubIcon,
	ShareIcon,
} from '@/components/common/icons/react-icons';
import WithFadeUpTranslate from '@/components/container/WithFadeUpTranslate';
import { SectionID } from '@/constant/sectionId';
import { Fragment, ReactNode } from 'react';

type SubProject = {
	title: ReactNode;
	links: { git?: string; page?: string };
	description: string;
	skills: string[];
};
const SUB_PROJECTS: SubProject[] = [
	{
		title: <>진행 예정중</>,
		links: {},
		description: `준비 중인 프로젝트입니다.`,
		skills: [],
	},
];

export default function SubProjects() {
	const projectInner = (project: SubProject) => {
		const { title, links, description, skills } = project;
		const { git, page } = links;
		return (
			<li className="relative h-full rounded-md bg-light-navy px-7 py-8 transition-all hover:-translate-y-4">
				<header className="z-10 mb-4 flex items-center justify-between [&_a]:z-10">
					<FolderIcon className="text-4xl" />
					<div className="flex items-center justify-between gap-4">
						{git && (
							<a href={git} target="_blank">
								<GitHubIcon size={24} />
							</a>
						)}
						{page && (
							<a href={page} target="_blank">
								<ShareIcon size={24} />
							</a>
						)}
					</div>
				</header>
				<h3 className="mb-4 text-xl text-lightest-slate">{title}</h3>
				<div
					className="z-10 mb-4"
					dangerouslySetInnerHTML={{
						__html: description,
					}}
				/>
				<footer>
					<ul className="flex flex-wrap text-sm [&>li]:mr-4">
						{skills.map((i) => (
							<li key={i}>{i}</li>
						))}
					</ul>
				</footer>
			</li>
		);
	};

	return (
		<section
			className="flex flex-col items-center gap-16 py-20"
			id={SectionID.subProjects}
		>
			<WithFadeUpTranslate>
				<h2 className="text-3xl font-semibold text-lightest-slate">
					Sub Projects
				</h2>
			</WithFadeUpTranslate>
			<ul className="grid w-full grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-4">
				{SUB_PROJECTS.map((pro, i) => (
					<WithFadeUpTranslate key={i} delay={i}>
						<Fragment>{projectInner(pro)}</Fragment>
					</WithFadeUpTranslate>
				))}
			</ul>
		</section>
	);
}
