import SectionContainer from '@/components/common/section/SectionContainer/SectionContainer';
import Image from 'next/image';
import styles from './AboutMe.module.css';

import WithFadeUpTranslate from '@/components/container/WithFadeUpTranslate';
import { getBase64 } from '@/util/blurData';
import { SectionID } from '@/constant/sectionId';

export default async function AboutMe() {
	const base64Img = await getBase64('public/assets/basic_profile_image.png');

	return (
		<SectionContainer title="About Me" count="01." id={SectionID.aboutMe}>
			<WithFadeUpTranslate>
				<div className="flex flex-col gap-8 md:flex-row">
					<div className="basis-[70%]">
						<div className="mb-16 text-xl">
							<h3 className="mb-3 text-2xl text-lightest-slate">
								[문제를 구조로 해결하는 프론트엔드]
							</h3>
							<p>
								단순히 기능을 구현하는 것에 그치지 않고,
문제를 더 나은 구조로 해결하는 프론트엔드 개발자를 지향합니다.

개발을 진행할 때 화면 단위의 구현보다
데이터 흐름과 상태 관리 구조를 먼저 고민하며,
서비스가 커지더라도 유지보수가 가능한 구조를 만드는 것을 중요하게 생각합니다.
							</p>
						</div>
						<div className="mb-16 text-xl">
							<h3 className="mb-3 text-2xl text-lightest-slate">
								[사용자 경험을 설계하는 개발자]
							</h3>
							<p>
								프론트엔드는 단순히 화면을 만드는 것이 아니라
사용자의 경험을 설계하는 영역이라고 생각합니다.

프로젝트를 진행하며 CTA 흐름, 화면 전환, 상태 변화까지 고려해
사용자가 자연스럽게 서비스를 이용할 수 있도록 구조를 설계했습니다.
							</p>
						</div>
						<div className="mb-16 text-xl">
							<h3 className="mb-3 text-2xl text-lightest-slate">
								[끝까지 해결하는 실행력]
							</h3>
							<p>
								개발 과정에서 발생하는 문제를 끝까지 해결하는 과정에서
가장 큰 성장을 경험했습니다.

프론트엔드 개발을 주도적으로 진행하며
기술 선택부터 구현, 문제 해결까지 스스로 책임지고 수행해왔습니다.
							</p>
						</div>
					</div>
					<div
						className={`relative mx-auto aspect-square h-[300px] w-[300px] max-w-[300px]  md:!w-[70%]  ${styles.imgBorder}`}
					>
						<Image
							src="/assets/basic_profile_image.png"
							fill
							alt="프로필 이미지"
							sizes="300px"
							blurDataURL={base64Img}
							placeholder="blur"
							className="z-10 -translate-x-2 -translate-y-2 rounded-lg"
						/>
					</div>
				</div>
			</WithFadeUpTranslate>
		</SectionContainer>
	);
}
