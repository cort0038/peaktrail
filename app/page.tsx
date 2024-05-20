import Camp from "@/app/components/Camp"
import Features from "@/app/components/Features"
import GetApp from "@/app/components/GetApp"
import Guide from "@/app/components/Guide"
import Hero from "@/app/components/Hero"
import ToTop from "@/app/utils/ToTop"
import ProgressBar from "./utils/ProgressBar"

export default function Home() {
	return (
		<>
			<Hero />
			<Camp />
			<Guide />
			<Features />
			<GetApp />
			<ToTop />
			<ProgressBar />
		</>
	)
}
