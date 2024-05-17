import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "NeuroTechh Registrations",
	description:
		"We are a community of student developers who build projects and comeup with innovative solutions! Come join us and be the change!",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
		
			<body className={inter.className}>{children}</body>
		</html>
	);
}
