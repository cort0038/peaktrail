import {FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS} from "@/app/constants"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
	return (
		<footer className="flexCenter pb-24" id="footer">
			<div className="padding-container flex w-full max-container flex-col gap-14">
				<div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
					<Link href="/" className="mb-10">
						<Image src="/logo.svg" alt="logo" width={140} height={29} />
					</Link>
					<div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
						{FOOTER_LINKS.map(columns => (
							<FooterColumn title={columns.title} key={columns.title}>
								<ul className=" flex flex-col gap-4 text-gray-30">
									{columns.links.map(link => (
										<Link href="/" key={link}>
											{link}
										</Link>
									))}
								</ul>
							</FooterColumn>
						))}
						<div className="flex flex-col gap-5">
							<FooterColumn title={FOOTER_CONTACT_INFO.title}>
								{FOOTER_CONTACT_INFO.links.map(link => (
									<Link href="/" key={link.label} className="flex gap-4 md:flex-col lg:flex-row">
										<p className="whitespace-nowrap">{link.label}:</p>
										<p className="medium-14 whitespace-nowrap text-blue-70">{link.value}</p>
									</Link>
								))}
							</FooterColumn>
						</div>

						<div className="flex flex-col gap-5">
							<FooterColumn title={SOCIALS.title}>
								<ul className="flex gap-4 text-gray-30">
									{SOCIALS.links.map(link => (
										<Link href="/" key={link}>
											<Image src={link} alt="logo" width={24} height={24} />
										</Link>
									))}
								</ul>
							</FooterColumn>
						</div>
					</div>
				</div>
				<div className="border bg-gray-20" />
				<p className="w-full text-center text-gray-30">
					&copy;
					{new Date().getFullYear()} PeakTrail. All rights reserved.
				</p>
			</div>
		</footer>
	)
}

type FooterColumnProps = {
	title: string
	children: React.ReactNode
}

const FooterColumn = ({title, children}: FooterColumnProps) => {
	return (
		<div className="flex flex-col gap-5">
			<h4 className="font-bold whitespace-nowrap">{title}</h4>
			{children}
		</div>
	)
}

export default Footer
