import * as React from "react";
import {
	Body,
	Button,
	Container,
	Column,
	Head,
	Heading,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Row,
	Section,
	Text,
	Tailwind,
} from "@react-email/components";
export const EmailTemplate = ({ firstName }) => (
	<Html>
		<Head />
		<Tailwind>
			<Body className="bg-white my-auto mx-auto font-sans px-2">
				<Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
					<Section className="mt-[32px]">
						<Img
							src={`https://forms.neurotechh.live/logo.png`}
							width="40"
							height="37"
							alt="NeuroTechh Logo"
							className="my-0 mx-auto"
						/>
					</Section>
					<Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
						<strong>
							Thank You for your interest in NeuroTechh
						</strong>
					</Heading>
					<Text className="text-black text-[14px] leading-[24px]">
						Hello {firstName},
					</Text>
					<Text className="text-black text-[14px] leading-[24px]">
						Thank you for applying to NeuroTechh ✨ We appreciate
						your enthusiasm in becoming a part of our student club.
						We are pleased to invite you to the next step, the
						interview.
					</Text>{" "}
					<Text className="text-black text-[14px] leading-[24px]">
						Below is a link to a choose a time that works best for
						you. These interviews provide us with an opportunity to
						learn more about you and ensure a good fit within our
						club. Best of luck! Looking forward to meeting you soon.
					</Text>
					<Section className="text-center mt-[32px] mb-[32px]">
						<Button
							className="bg-[#fe0167] rounded-xl text-[#ffeadb] text-[12px] font-semibold no-underline text-center px-5 py-3"
							href="https://cal.com/neurotechh/interview"
						>
							Schedule an Interview
						</Button>
					</Section>
				</Container>
			</Body>
		</Tailwind>
	</Html>
);
