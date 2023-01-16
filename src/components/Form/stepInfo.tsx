import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Step5 from "./Steps/Step5";

type formInfoProps = {
	step: number;
	title: string;
	description: string;
	children: JSX.Element;
};

const StepInfos: formInfoProps[] = [
	{
		step: 1,
		title: "Personal info",
		description: "Please provide your name, email address, and phone number.",
		children: <Step1 />,
	},
	{
		step: 2,
		title: "Select your plan",
		description: "You have the option of monthly or yearly billing.",
		children: <Step2 />,
	},
	{
		step: 3,
		title: "Pick add-ons",
		description: "Add-ons help enhance your gaming experience.",
		children: <Step3 />,
	},
	{
		step: 4,
		title: "Finishing up",
		description: "Double-check everything looks OK before confirming.",
		children: <Step4 />,
	},
	{
		step: 5,
		title: "",
		description: "",
		children: <Step5 />,
	},
];

export default StepInfos;
