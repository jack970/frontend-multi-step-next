import styled from "styled-components";

export const SummaryContent = styled.div`
	background-color: var(--Magnolia);
	border-radius: var(--border-radius);
	padding: 1rem;
`;

export const SummaryTitle = styled.h1`
	font-size: 1rem;
`;

export const Line = styled.div`
	height: 1px;
	background-color: var(--Light-gray);
	width: 100%;
`;

type SummaryTypeProps = {
	type?: "header";
};
export const SummaryType = styled.div<SummaryTypeProps>`
	display: flex;
	justify-content: space-between;
	${(props) =>
		props.type === "header" ? "margin-bottom: 1rem;" : "margin-top: 1rem"};
`;

type SummaryDescriptionProps = {
	type: "title" | "price";
};

export const SummaryDescription = styled.p<SummaryDescriptionProps>`
	font-size: small;
	font-weight: ${(props) => (props.type === "title" ? "400" : "500")};
	color: ${(props) =>
		props.type === "title" ? "var(--Cool-gray)" : "var(--Marine-blue)"};

	@media screen and (max-width: 600px) {
		font-size: 1rem;
	}
`;

export const SummaryTotalPrice = styled.p`
	font-size: large;
	color: var(--Purplish-blue);
	font-weight: 700;
`;

export const ButtonChange = styled.p`
	color: var(--Cool-gray);
	text-decoration: underline;
	font-weight: 400;
	cursor: pointer;
`;
