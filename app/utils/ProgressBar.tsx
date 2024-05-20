"use client"

import {motion, useScroll} from "framer-motion"

const ProgressBar = () => {
	const {scrollYProgress} = useScroll()
	return (
		<motion.div
			style={{scaleX: scrollYProgress}}
			className=" fixed bottom-0 left-0 right-0 h-1.5  origin-bottom-left z-50 bg-black"
		/>
	)
}

export default ProgressBar
