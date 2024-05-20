import Image from "next/image"
import Button from "../utils/Button"

const Hero = () => {
	return (
		<section className="max-container padding-container flex flex-col gap-20 py-40 md:gap-28 lg:py-60 lg:flex-row">
			<div className="hero-map" />

			{/* {LEFT} */}
			<div className="relative z-20 flex flex-1 flex-col lg:w-1/2">
				<Image
					src="/camp.svg"
					alt="camp"
					width={50}
					height={50}
					className="absolute left-[3px] top-[-40px] lg:top-[-50px] w-16 lg:w-[50px]"
				/>
				<div className="flex flex-col gap-6">
					<h1 className="section-title">Woodland Park</h1>
					<p className="mt-2 text-teal-900 lg:max-w-[520px]">
						We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of
						nature. We can help you on an adventure around the world in just one app.
					</p>
				</div>

				<div className="flex gap-10 flex-col ">
					<div className="my-6 flex flex-wrap gap-5">
						<div className="rating items-center">
							<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
							<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
							<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
							<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
							<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
						</div>
						<p className="text-blue-800">
							198K
							<span className="ml-1">Excellent Reviews</span>
						</p>
					</div>

					<div className="flex flex-col w-full gap-3 sm:flex-row">
						<Button type="button" title="Download App" variant="btn_blue" />
						<Button type="button" icon="/play.svg" title="How We Work?" variant="btn_blue_outline" />
					</div>
				</div>
			</div>

			{/* {RIGHT} */}
			<div className="relative flex flex-1 items-start">
				<div className="flex relative left-24 lg:left-3 z-20 w-[268px] flex-col gap-8 rounded-3xl bg-blue-100 px-7 py-8">
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
				<Image src="/map.png" height={350} width={350} alt="map" className="hidden lg:flex" />
			</div>
		</section>
	)
}

export default Hero
