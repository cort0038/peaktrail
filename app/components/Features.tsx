import {FEATURES} from "@/app/constants"
import Image from "next/image"

const Features = () => {
	return (
		<section className=" flex-col flexCenter" id="services">
			<div className="flex max-container padding-container relative w-full justify-end z-20">
				<div className="feature-map" />
				<div className="flex flex-1 lg:min-h-[900px]">
					<Image src="/phone-1.png" alt="phone" width={440} height={1000} className="feature-phone" />
				</div>
				<div className="z-20 flex w-full flex-col xl:w-[60%]">
					<div className="relative">
						<Image
							width={50}
							height={50}
							alt="camp"
							src="/camp.svg"
							className="absolute left-[3px] top-[-40px] lg:top-[-50px] w-16 lg:w-[50px]"
						/>
						<h2 className="section-title">Our Features</h2>
					</div>
					<ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
						{FEATURES.map(feature => (
							<FeatureItem
								title={feature.title}
								key={feature.title}
								icon={feature.icon}
								description={feature.description}
							/>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}

type FeatureItem = {
	title: string
	icon: string
	description: string
}

const FeatureItem = ({title, icon, description}: FeatureItem) => {
	return (
		<li className="flex w-full flex-1 flex-col items-start">
			<div className="rounded-full p-3 lg:pd-7 bg-blue-200">
				<Image src={icon} alt="map" width={28} height={28} />
			</div>
			<h2 className="font-extrabold text-xs md:text-sm mt-2 capitalize">{title}</h2>
			<p className="mt-2 lg:bg-none">{description}</p>
		</li>
	)
}

export default Features
