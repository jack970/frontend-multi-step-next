import Image from "next/image";
import styled from "styled-components";

export const WrapperCardPlans = styled.div`
	display: flex;
	margin-bottom: 2rem;
	justify-content: space-between;

	@media screen and (max-width: 600px) {
		flex-direction: column;
	}
`;

export const CardPlan = styled.div<{ isActive: boolean }>`
	cursor: pointer;
	margin: auto 0.5rem;
	border-radius: var(--border-radius);
	border: 1px solid
		var(--${(props) => (props.isActive ? "Purplish-blue" : "Light-gray")});
	background-color: ${(props) =>
		props.isActive ? "var(--Magnolia)" : "transparent"};
	min-width: 8rem;
	padding: 1rem;

	@media screen and (max-width: 600px) {
		display: flex;
		align-items: center;
		margin: 0.5rem 0;
	}
`;
export const CardContent = styled.div`
	margin-top: 2rem;

	@media screen and (max-width: 600px) {
		margin: auto 1rem;
	}
`;
export const CardIcon = styled(Image)``;
export const TitleCardPlan = styled.h1`
	font-size: medium;
`;
export const PriceCardPlan = styled.p`
	color: var(--Cool-gray);
	font-size: 0.9rem;
	margin: 0.3rem auto;
`;
export const DescriptionCardPlan = styled.p`
	font-size: 0.8rem;
	color: var(--Marine-blue);
`;
