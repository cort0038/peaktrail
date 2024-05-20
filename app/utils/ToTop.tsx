"use client"

import {useEffect, useState} from "react"
import {BsArrowUpCircleFill} from "react-icons/bs"

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const toggleVisibility = () => {
			window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false)
		}
		window.addEventListener("scroll", toggleVisibility)

		return () => {
			window.removeEventListener("scroll", toggleVisibility)
		}
	}, [])

	const scrollToTop = () => {
		isVisible &&
			window.scrollTo({
				top: 0,
				behavior: "auto"
			})
	}

	return (
		<button
			className={`fixed bottom-10 right-8 md:bottom-12 text-[2.5rem] md:right-12 rounded-full md:text-lg  text-[--brand] lg:hover:-translate-y-2 lg:transition-all lg:duration-200 z-50 ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}
			onClick={scrollToTop}
			id="toTop">
			<BsArrowUpCircleFill />
		</button>
	)
}

export default ScrollToTopButton
