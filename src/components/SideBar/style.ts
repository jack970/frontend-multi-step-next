import styled from "styled-components";

export const StepWrapper = styled.div`
	display: flex;
	column-gap: 1rem;
	margin-bottom: 2rem;
	align-items: center;
	color: var(--White);
	cursor: pointer;

	@media screen and (max-width: 600px) {
		margin: 0;
		align-items: initial;
	}
`;

export const StepSimbol = styled.div<{ isActive: boolean }>`
	width: 1rem;
	height: 1rem;
	font-size: small;
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 700;
	border-radius: 50%;
	border: 1px solid var(--White);
	background-color: ${(props) =>
		props.isActive ? "var(--Light-blue)" : "transparent"};
	color: ${(props) => (props.isActive ? "var(--Marine-blue)" : "var(--White)")};
`;
export const StepContent = styled.div`
	@media screen and (max-width: 600px) {
		display: none;
	}
`;
export const StepTitle = styled.h1`
	font-size: 0.7rem;
	font-weight: 400;
	color: var(--Cool-gray);
`;
export const StepDescription = styled.p`
	font-size: small;
	font-weight: 700;
`;

export const SideBarWrapper = styled.div`
	background: url("bg-sidebar-desktop.svg");
	background-size: cover;
	padding: 2rem 4rem 0 1.5rem;
	border-radius: var(--border-radius);
	margin: 1rem;

	@media screen and (max-width: 600px) {
		display: flex;
		background: url("bg-sidebar-mobile.svg");
		background-size: cover;
		background-repeat: no-repeat;
		justify-content: center;
		gap: 1rem;
		position: absolute;
		top: 0;
		left: 0;
		margin: auto;
		border-radius: initial;
		z-index: -1;
		height: 10rem;
		width: 100%;
	}
`;
