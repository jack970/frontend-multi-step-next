import { stepInfo, StepInfoProps } from "./info";
import * as S from "./style";

type SideBarProps = {
	currentStep: number;
	handleStep: Function;
};

type StepProps = {
	info: StepInfoProps;
	sideBarProps: SideBarProps;
};
const Step = ({ info, sideBarProps }: StepProps) => {
	const { step, title, description } = info;
	const { handleStep, currentStep } = sideBarProps;
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

const SideBar = (props: SideBarProps) => (
	<S.SideBarWrapper>
		{stepInfo.map((info) => (
			<Step key={info.step} info={info} sideBarProps={props} />
		))}
	</S.SideBarWrapper>
);

export default SideBar;
