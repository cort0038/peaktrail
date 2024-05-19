export const shuffleArray = (array: any[]) => {
	const shuffledArray = [...array]
	for (let i = shuffledArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
	}
	return shuffledArray
}

export const scroll = (direction: "left" | "right", scrollContainerRef: React.RefObject<HTMLDivElement>) => {
	if (scrollContainerRef.current) {
		const {scrollLeft, clientWidth} = scrollContainerRef.current
		const scrollAmount = clientWidth + 1
		scrollContainerRef.current.scrollTo({
			left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
			behavior: "smooth"
		})
	}
}
