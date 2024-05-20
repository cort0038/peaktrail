import Image from "next/image"
import Link from "next/link"

type ButtonProps = {
	type: "button" | "submit"
	title: string
	icon?: string
	variant: string
	full?: boolean
	linkhref?: string
}

const Button = ({type, title, icon, variant, full, linkhref = "#"}: ButtonProps) => {
	return (
		<Link
			href={linkhref}
			type={type}
			className={`flexCenter gap-2 items-center justify-center rounded-full border ${variant} ${
				full && "w-full"
			}`}>
			{icon && <Image src={icon} alt={title} width={30} height={30} />}
			<label className=" font-medium whitespace-nowrap cursor-pointer">{title}</label>
		</Link>
	)
}

export default Button
