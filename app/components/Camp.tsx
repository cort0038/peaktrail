"use client"

import {useRef} from "react"
import Image from "next/image"
import {FaArrowCircleRight, FaArrowCircleLeft} from "react-icons/fa"
import {CAMPS} from "../constants"

type CampProps = {
	backgroundImage: string
	title: string
	subtitle: string
	peopleJoined: string
	peopleUrls: string[]
}

const CampSite = ({backgroundImage, title, subtitle, peopleJoined, peopleUrls}: CampProps) => {
	const shuffledPeopleUrls = shuffleArray(peopleUrls)

	return (
		<div
			className={`flex h-full w-full min-w-[385px] md:min-w-[600px] ${backgroundImage} bg-no-repeat bg-cover rounded-5xl 2xl:rounded-5xl border border-white`}>
			<div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
				<div className="flexCenter gap-4">
					<div className="rounded-full">
						<Image src="/location.svg" alt="map" width={28} height={28} />
					</div>
					<div className="flex flex-col text-white text-[1.2rem] bg-black/60 rounded p-1 w-fit">
						<p className="font-bold ">{title}</p>
						<p className="font-normal text-[1rem]">{subtitle}</p>
					</div>
				</div>
				<div className="flexCenter gap-2">
					<span className="flex -space-x-4 overflow-hidden">
						{shuffledPeopleUrls.map(url => (
							<Image
								src={url}
								key={url}
								alt="Person"
								width={14}
								height={14}
								className="inline-block h-14 w-14 rounded-full border border-white object-cover"
							/>
						))}
					</span>
					<p className="font-semibold md:font-extrabold text-[1rem] md:text-[1.2rem] bg-black/60 rounded px-1 w-fit text-white">
						{peopleJoined}
					</p>
				</div>
			</div>
		</div>
	)
}

const shuffleArray = (array: any[]) => {
	const shuffledArray = [...array]
	for (let i = shuffledArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
	}
	return shuffledArray
}

const Camp = () => {
	const scrollContainerRef = useRef<HTMLDivElement>(null)

	const scroll = (direction: "left" | "right") => {
		if (scrollContainerRef.current) {
			const {scrollLeft, clientWidth} = scrollContainerRef.current
			const scrollAmount = clientWidth - 20
			scrollContainerRef.current.scrollTo({
				left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
				behavior: "smooth"
			})
		}
	}

	return (
		<section className="max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
			<div
				className="hide-scrollbar flex h-[340px] w-full items-start justify-start overflow-x-auto lg:h-[400px] xl:h-[640px] md:-space-x-20"
				ref={scrollContainerRef}>
				{CAMPS.map((camp, index) => (
					<CampSite
						key={index}
						backgroundImage={camp.backgroundImage}
						title={camp.title}
						subtitle={camp.subtitle}
						peopleJoined={camp.peopleJoined}
						peopleUrls={camp.peopleUrls}
					/>
				))}
			</div>
			<div className="flex justify-between mt-4">
				<button onClick={() => scroll("left")} className=" text-md mx-8">
					<FaArrowCircleLeft />
				</button>
				<button onClick={() => scroll("right")} className="  text-md mx-8">
					<FaArrowCircleRight />
				</button>
			</div>
		</section>
	)
}

export default Camp
