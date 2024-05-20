import Image from "next/image"

const Guide = () => {
	return (
		<section className="flexCenter flex-col py-40 lg:py-60" id="about">
			<div className="padding-container max-container w-full pb-24">
				<Image src="/camp.svg" alt="Camp" width={50} height={50} />
				<p className="font-bold text-sm italic">We are here for you!</p>
				<div className="flex flex-wrap justify-between gap-5 lg:gap-10">
					<h2 className="section-title xl:max-w-[390px]">Guide you to easy path</h2>
					<p className=" text-teal-900 xl:max-w-[520px]">
						Only with the PeakTrail application you will no longer get lost and get lost again, because we already
						support offline maps when there is no internet connection in the field. Invite your friends, relatives
						and friends to have fun in the wilderness through the valley and reach the top of the mountain
					</p>
				</div>
			</div>

			<div className="flexCenter max-container padding-container w-full relative">
				<Image
					src="/boat.png"
					alt="boat"
					width={1440}
					height={580}
					className="w-full object-cover object-center rounded-5xl h-[400px] 2xl:h-[600px]"
				/>
				<div className="absolute flex bg-blue-100 py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
					<Image src="/meter.svg" alt="meter" width={16} height={158} className="h-full w-auto" />
					<div className="flexBetween flex-col">
						<div className="flex w-full flex-col leading-tight">
							<div className="flexBetween w-full">
								<p className="font-semibold">Destination</p>
							</div>
							<p className="font-bold text-[1.2rem] md:text-sm mt-2">Aguas Calientes</p>
						</div>
						<p className="font-bold text-[--brand] w-full italic">~48 mins</p>
						<div className="flex w-full flex-col leading-tight">
							<p className="font-semibold">Start Track</p>
							<h4 className="font-bold mt-2 whitespace-nowrap text-[1.2rem] md:text-sm">Woronejo Pasuruan</h4>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Guide
