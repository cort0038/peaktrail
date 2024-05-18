import Image from "next/image"
import Button from "./Button"

const Hero = () => {
	return (
		<section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 lg:flex-row">
			<div className="hero-map" />

			{/* {LEFT} */}
			<div className="relative z-20 flex flex-1 flex-col lg:w-1/2">
				<Image
					src="/camp.svg"
					alt="camp"
					width={50}
					height={50}
					className="absolute left-[3px] top-[-50px] w-10 lg:w-[50px]"
				/>
				<div className="flex flex-col gap-6">
					<h1 className="font-[900] leading-[1.1] md:text-lg text-sm">Woodland Park</h1>
					<p className="mt-2 text-teal-900 lg:max-w-[520px]">
						We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of
						nature. We can help you on an adventure around the world in just one app
					</p>
				</div>

				<div className="flex gap-10 flex-col">
					<div className="my-6 flex flex-wrap gap-5">
						<div className="flex items-center">
							{Array(5)
								.fill(1)
								.map((_, index) => (
									<Image src="/star.svg" key={index} width={24} alt="star" height={24} />
								))}
						</div>
						<p className="bold-16 lg:bold-20 text-blue-700">
							198K
							<span className="ml-1">Excellent Reviews</span>
						</p>
					</div>

					<div className="flex flex-col w-full gap-3 sm:flex-row">
						<Button type="button" title="Download App" variant="btn_green" />
						<Button type="button" icon="/play.svg" title="How We Work?" variant="btn_white_text" />
					</div>
				</div>
			</div>

			{/* {RIGHT} */}
			<div className="relative flex flex-1 items-start">
				<div className="flex relative z-20 w-[268px] flex-col gap-8 rounded-3xl bg-blue-100 px-7 py-8">
					<div className="flex flex-col ">
						<div className="flexBetween">
							<p className="font-bold text-black">Location</p>
							<Image src="/close.svg" alt="close" width={24} height={24} />
						</div>
						<p className="text-teal-900 font-medium">Aguas Calientes</p>
					</div>

					<div className="flexBetween">
						<div className="flex flex-col">
							<p className="font-bold text-black">Distance</p>
							<p className="font-medium text-teal-900">173.28 km</p>
						</div>

						<div className="flex flex-col">
							<p className="font-bold text-black">Elevation</p>
							<p className="font-medium text-teal-900">2.040 km</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
