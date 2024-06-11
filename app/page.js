"use client";
import { useForm } from "react-hook-form";
import { db } from "./lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { PhoneNumberUtil } from "google-libphonenumber";

export default function Home() {
	const phoneUtil = PhoneNumberUtil.getInstance();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [isSubmitting, setIsSubmitting] = useState(false);

	async function onSubmit(data) {
		setIsSubmitting(true);
		console.log(data);
		const { name, email, domains, phone, message } = data;
		const user = {
			name,
			email,
			domains,
			phone,
			message,
		};
		const userRef = doc(db, "users", email);
		console.log(userRef);
		await setDoc(userRef, user)
			.then(() => {
				console.log("User created successfully");
				setIsSubmitting(false);
			})
			.catch((error) => {
				console.log("Error creating user:", error);
			});

		console.log(data);
	}
	if (!errors) {
		console.log(errors);
	}
	const techDomains = [
		"ML",
		"Cyber Security",
		"Web Dev",
		"DSA",
		"App Dev",
		"Blockchain",
		"Cloud Computing",
		"Data Science",
	];

	return (
		<>
			<div className="min-h-screen w-fit md:w-full flex flex-col md:flex-row justify-center md:justify-around items-center bg-zinc-950 md:bg-[url('/grainny.png')] bg-no-repeat bg-cover overflow-hidden text-white px-10 py-10 md:py-0">
				<div className=" max-w-prose space-y-5 mb-8">
					<h1 className="scroll-m-20 text-4xl font-normal md:font-light tracking-tight lg:text-6xl animate-fade-right animate-duration-700">
						We are{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">
							Team NeuroTechh
						</span>{" "}
						and we would love to hear from you!
					</h1>
					<p className="hidden md:block font-thin tracking-tight lg:text-2xl animate-fade-up animate-delay-200 animate-duration-700">
						We are a team of enthusiatic students and developers who
						make technical projects way beyond what colleges will
						teach.
					</p>
				</div>
				<div className="w-full md:w-1/3 animate-fade animate-delay-200 md:animate-delay-500 animate-duration-700">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="mb-4">
							<label className="block mb-1 font-semibold">
								Name:
							</label>
							<input
								{...register("name", {
									required: "Name is required",
								})}
								className="border-b border-gray-500 rounded px-2 py-2 w-full bg-white bg-opacity-5 backdrop-filter backdrop-blur-2xl focus:border-pink-500 focus:ring-0"
							/>
							{errors.name && (
								<p className="text-red-400">
									{errors.name.message}
								</p>
							)}
						</div>

						<div className="mb-4">
							<label className="block mb-1 font-semibold">
								Email:
							</label>
							<input
								type="email"
								{...register("email", {
									required: "Email is required",
									pattern: {
										value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
										message: "Enter a valid email address",
									},
								})}
								className="border-b border-gray-500 rounded px-2 py-2 w-full bg-white bg-opacity-5 backdrop-filter backdrop-blur-2xl focus:border-pink-500 focus:ring-0"
							/>
							{errors.email && (
								<p className="text-red-400">
									{errors.email.message}
								</p>
							)}
						</div>

						<div className="mb-4">
							<label className="block mb-1 font-semibold">
								Preferred Domain:
							</label>
							<div className="pt-2 grid grid-cols-2 gap-2">
								{techDomains.map((domain, index) => (
									<div
										className="flex items-center"
										key={index}
									>
										<input
											type="checkbox"
											value={domain}
											{...register("domains", {
												required:
													"At least one domain is required",
											})}
											className="bg-slate-100 border-0 ring-0 text-brandpink focus:ring-0 focus:outline-none rounded shadow"
										/>
										<label className="ml-2 text-sm font-medium text-white/80">
											{domain}
										</label>
									</div>
								))}
							</div>
							{errors.domains && (
								<p className="text-red-400">
									{errors.domains.message}
								</p>
							)}
						</div>

						<div className="mb-4">
							<labe className="block mb-1 font-semibold">
								Phone Number:
							</labe>
							<input
								type="tel"
								{...register("phone", {
									required: "Phone number is required",
									pattern: {
										value: /^[0-9]{10}$/,
										message:
											"Enter a valid 10-digit phone number",
									},
								})}
								className="border-b border-gray-500 rounded px-2 py-2 w-full bg-white bg-opacity-5 backdrop-filter backdrop-blur-2xl focus:border-pink-500 focus:ring-0"
							/>
							{errors.phone && <p>{errors.phone.message}</p>}
						</div>
						<div className="mb-4">
							<label className="block mb-1 font-semibold">
								How can you contribute to the growth of
								NeuroTechh?
							</label>
							<textarea
								{...register("message", {
									required: "Message is required",
								})}
								className="border-b border-gray-500 rounded px-2 py-2 w-full bg-white bg-opacity-5 backdrop-filter backdrop-blur-2xl focus:border-pink-500 focus:ring-0"
							/>
							{errors.message && (
								<p className="text-red-400">
									{errors.message.message}
								</p>
							)}
						</div>
						{isSubmitting ? (
							<button
								className="bg-brandpink/50 text-white px-4 md:px-6 py-2 md:py-4 rounded"
								disabled
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="animate-spin -ml-1 mr-3 h-5 w-5 text-white lucide lucide-loader-circle"
								>
									<path d="M21 12a9 9 0 1 1-6.219-8.56" />
								</svg>
							</button>
						) : (
							<button
								type="submit"
								className="bg-brandpink text-white px-4 md:px-6 py-2 md:py-4 rounded hover:opacity-80 transition-all font-bold"
							>
								Submit
							</button>
						)}
					</form>
				</div>
			</div>
		</>
	);
}
