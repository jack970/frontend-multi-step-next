import styled from "styled-components";

export const WrapperStepForm = styled.form`
	padding: 2.5rem 5rem;
	display: flex;
	justify-content: space-between;
	flex-direction: column;

	@media screen and (max-width: 600px) {
		padding: 2rem 1.5rem;
	}
`;
export const Title = styled.h1`
	margin-bottom: 0.7rem;
`;
export const Description = styled.p`
	color: var(--Cool-gray);
	margin-bottom: 3rem;

	@media screen and (max-width: 600px) {
		font-size: 1.2rem;
		margin-bottom: 2rem;
	}
`;

type ButtonStyleProps = {
	typeButton: "next" | "back";
};
export const Button = styled.button<ButtonStyleProps>`
	${(props) =>
		props.typeButton === "next"
			? `
			background-color:	var(--Marine-blue);
			color: var(--White);
			padding: 0.9rem 1.2rem;
			font-size: 1rem;
			`
			: `
			padding: 0.9rem 1.2rem;
			padding-left: 0;
			
			color: var(--Cool-gray);
			background-color:	transparent;
			`}
	font-weight: 700;
	border-radius: 7px;
`;

export const ButtonConfirm = styled(Button)`
	background-color: var(--Purplish-blue);
`;

export const ButtonWrapper = styled.div`
	button:last-child {
		float: right;
	}

	@media screen and (max-width: 600px) {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 1rem;
		background-color: var(--White);
	}
`;
