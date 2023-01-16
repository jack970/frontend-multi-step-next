import Image from "next/image";
import styled from "styled-components";

type Props = {};

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	text-align: center;
	justify-content: center;
	flex-direction: column;
	gap: 1rem;
	height: 70%;
	flex: 1;
`;
const Description = styled.p`
	color: var(--Cool-gray);
`;
const Step5 = (props: Props) => {
	return (
		<Wrapper>
			<Image src="icon-thank-you.svg" alt="Thank-you" width={70} height={70} />
			<h1>Thank you!</h1>
			<Description>
				Thanks for confirming your subscription! We hope you have fun using our
				platform. If you ever need support, please feel free to email us at
				support@loremgaming.com.
			</Description>
		</Wrapper>
	);
};

export default Step5;
