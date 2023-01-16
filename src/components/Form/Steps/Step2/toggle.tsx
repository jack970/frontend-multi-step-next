import { PlanTypeProps } from "context/types";
import React from "react";
import styled from "styled-components";

const WrapperToggleType = styled.div`
	width: 100%;
	padding: 1rem 0;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: var(--border-radius);
	background-color: var(--Magnolia);
`;

type isActiveProp = {
	isActive: boolean;
};
const ToggleTitle = styled.h1<isActiveProp>`
	font-size: small;
	color: var(--${(props) => (props.isActive ? "Marine-blue" : "Cool-gray")});
`;
const ToggleButton = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	background-color: var(--Marine-blue);
	width: 3rem;
	height: 1.5rem;
	padding: 0.5rem 0.3rem;
	border-radius: 1rem;
	margin: 0 1rem;
	cursor: pointer;
`;

const ToggleSlide = styled.div<isActiveProp>`
	position: absolute;
	transition: all 0.4s ease-out;
	transform: ${(props) => (props.isActive ? "" : "translateX(1.4rem)")};
	border-radius: 50%;
	height: 1rem;
	width: 1rem;
	background-color: var(--White);
`;

type Props = {
	planType: PlanTypeProps;
	onClickType: React.MouseEventHandler<HTMLElement>;
};
const ToggleSwitch = ({ planType, onClickType }: Props) => {
	const planTypeIsMonth = planType === "month";
	const planTypeIsYear = planType === "year";
	return (
		<WrapperToggleType>
			<ToggleTitle isActive={planTypeIsMonth}>Monthly</ToggleTitle>
			<ToggleButton onClick={onClickType}>
				<ToggleSlide isActive={planTypeIsMonth} />
			</ToggleButton>
			<ToggleTitle isActive={planTypeIsYear}>Yearly</ToggleTitle>
		</WrapperToggleType>
	);
};

export default ToggleSwitch;
