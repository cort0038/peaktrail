import Image from "next/image"
import Button from "../utils/Button"

const GetApp = () => {
	return (
		<section className="flexCenter max-container w-full flex-col py-40 md:pt-12" id="download">
			<div className="flex w-full flex-col justify-between gap-16  px-6 py-12 sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl z-20 bg-blue-200/85">
				<div className="z-20 flex w-full flex-1 flex-col items-start justify-center">
					<h2 className="section-title xl:max-w-[320px]">Get It For Free Now</h2>
					<p className="text-sm">Available on both iOS and Android</p>
					<div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row mt-20">
						<Button type="button" title="App Store" icon="/apple.svg" variant="btn_blue" full />
						<Button type="button" title="Play Store" icon="/android.svg" variant="btn_blue_outline" full />
					</div>
				</div>
				<div className="flex flex-1 items-center justify-end">
					<Image src="/phones-1.png" alt="phones" width={550} height={870} />
				</div>
			</div>
		</section>
	)
}

export default GetApp
