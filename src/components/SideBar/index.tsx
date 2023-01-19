import { ValueProviderProps } from "context/types";
import { ValuesContext } from "context/valuesContext";
import React from "react";
import { stepInfo, StepInfoProps } from "./info";
import * as S from "./style";

type StepProps = {
	info: StepInfoProps;
};
const Step = ({ info }: StepProps) => {
	const { step, title, description } = info;
	const { handleStep, step: currentStep } = React.useContext(
		ValuesContext
	) as ValueProviderProps;

	return (
		<S.StepWrapper onClick={() => handleStep(step)}>
			<S.StepSimbol isActive={currentStep === step}>{step}</S.StepSimbol>
			<S.StepContent>
				<S.StepTitle>{title}</S.StepTitle>
				<S.StepDescription>{description}</S.StepDescription>
			</S.StepContent>
		</S.StepWrapper>
	);
};

const SideBar = () => (
	<S.SideBarWrapper>
		{stepInfo.map((info) => (
			<Step key={info.step} info={info} />
		))}
	</S.SideBarWrapper>
);

export default SideBar;
