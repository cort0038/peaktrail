import Image from "next/image"
import Link from "next/link"
import {NAV_LINKS} from "@/app/constants"
import Button from "../utils/Button"

const Navbar = () => {
	return (
		<nav className="flexBetween max-container padding-container relative z-30 py-5">
			<Link href="/">
				<Image src="/logo.svg" alt="logo" width={140} height={75} />
			</Link>

			<ul className="hidden h-full gap-12 lg:flex">
				{NAV_LINKS.map(link => (
					<Link
						href={link.href}
						key={link.key}
						className="flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
						{link.label}
					</Link>
				))}
			</ul>

			<div className="lg:flexCenter hidden">
				<Button type="button" title="Join Us" icon="/user.svg" variant="btn_blue" linkhref="#download" />
			</div>

			<Image src="menu.svg" alt="menu" width={32} height={32} className="inline-block cursor-pointer lg:hidden" />
		</nav>
	)
}

export default Navbar
