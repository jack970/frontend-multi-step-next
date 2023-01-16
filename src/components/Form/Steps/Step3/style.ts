import styled from "styled-components";

export const WrapperAddOnCard = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid var(--Light-gray);
	border-radius: var(--border-radius);
	padding: 1rem;
	margin-bottom: 1rem;
	cursor: pointer;
`;
export const ContentAddOnCard = styled.div`
	margin: auto 1rem;
	margin-right: 6rem;
	flex: 1;

	@media screen and (max-width: 600px) {
		margin-right: 0;
	}
`;
export const TitleAddOnCard = styled.h1`
	font-size: medium;
	margin-bottom: 0.4rem;
`;
export const DescriptionAddOnCard = styled.p`
	font-size: small;
	color: var(--Cool-gray);

	@media screen and (max-width: 600px) {
		font-size: 0.9rem;
	}
`;
export const PriceAddOnCard = styled.p`
	font-size: small;
	color: var(--Purplish-blue);
	@media screen and (max-width: 600px) {
		font-size: 0.9rem;
	}
`;
