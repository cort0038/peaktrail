"use client"

import Image from "next/image"
import {FaArrowCircleRight, FaArrowCircleLeft} from "react-icons/fa"
import {CAMPS} from "../constants"
import {useRef} from "react"
import {shuffleArray, scroll} from "../utils/functions"

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
			className={`flex h-full w-full min-w-[385px] md:min-w-[600px] ${backgroundImage} bg-no-repeat bg-cover rounded-5xl 2xl:rounded-5xl border border-[--brand]`}>
			<div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
				<div className="flexCenter gap-4">
					<div className="flex text-white bg-black rounded-xl px-3 py-3 items-center gap-2 opacity-80">
						<div>
							<Image src="/location-1.svg" alt="map" width={30} height={30} />
						</div>
						<div className="flex flex-col leading-7">
							<p className="font-bold text-xs lg:text-sm">{title},</p>
							<p className="font-normal text-[1.3rem] lg:text-[1.4rem] italic">{subtitle}</p>
						</div>
					</div>
				</div>
				<div className="flexCenter gap-2">
					<span className="flex -space-x-4 overflow-hidden">
						{shuffledPeopleUrls.map(url => (
							<Image
								src={url}
								key={url}
								alt="Person"
								width={18}
								height={18}
								className="inline-block h-12 w-12 md:h-20 md:w-20 rounded-full border border-[--brand] object-cover"
							/>
						))}
					</span>
					<p className="font-semibold md:font-extrabold text-xs bg-black px-4 rounded-full w-fit text-white">
						{peopleJoined}
					</p>
				</div>
			</div>
		</div>
	)
}

const Camp = () => {
	const scrollContainerRef = useRef<HTMLDivElement>(null)

	return (
		<section className="max-container padding-container relative flex flex-col" id="camps">
			<div
				className="hide-scrollbar flex h-[340px] w-full items-start justify-start overflow-x-auto lg:h-[400px] xl:h-[640px] md:-space-x-20 "
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
				<button onClick={() => scroll("left", scrollContainerRef)} className=" text-lg text-[--brand] mx-8">
					<FaArrowCircleLeft />
				</button>
				<button onClick={() => scroll("right", scrollContainerRef)} className="  text-lg text-[--brand] mx-8">
					<FaArrowCircleRight />
				</button>
			</div>
		</section>
	)
}

export default Camp
