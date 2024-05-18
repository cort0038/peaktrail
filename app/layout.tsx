import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "./globals.css"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
	title: "PeakTrail - Get Lost In The Wilderness",
	description: "We help you to get lost in nature so you can see the incorruptible beauty of the world."
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				<main className="relative overflow-hidden">{children}</main>
				<Footer />
			</body>
		</html>
	)
}
