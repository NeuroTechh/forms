import { Outfit } from "next/font/google";
import DotPattern from "./grid";
import "./globals.css";
const outfit = Outfit({ subsets: ["latin"] });

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export const metadata = {
	title: "NeuroTechh Registrations",
	description:
		"We are a community of student developers who build projects and comeup with innovative solutions! Come join us and be the change!",
	metadataBase: new URL("https://forms.neurotechh.live/"),
	alternates: {
		canonical: "/",
	},
	creator: "NeuroTechh",
	publisher: "NeuroTechh",
	keywords: ["Technology", "Hiring", "Community"],
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`relative ${outfit.className}`}>
				{children}

				<DotPattern
					width={20}
					height={20}
					cx={1}
					cy={1}
					cr={1}
					className={cn(
						"[mask-image:linear-gradient(to_bottom_right,black,transparent)]",
					)}
				/>
			</body>
		</html>
	);
}
